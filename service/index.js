const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});


// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
//   console.log('Cookies:', req.cookies);
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    // console.log('Authorized user:', user.email);
    req.user = user;
    next();
  } else {
    // console.log('Unauthorized access attempt');
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Get Available Tee Times
apiRouter.get('/teeTimes', async (_req, res) => {
    try {
      const reservedTeeTimes = await DB.getReservedTeeTimes();
      const reservedIds = reservedTeeTimes.map((r) => r.teeTimeId);
      const availableTeeTimes = await DB.getAvailableTeeTimes(reservedIds);
      res.send({ data: availableTeeTimes });
    } catch (err) {
      console.error('Error fetching tee times:', err);
      res.status(500).send({ msg: 'Failed to fetch tee times' });
    }
});

secureApiRouter.post('/teeTimes/book', async (req, res) => {
    const { teeTimeId } = req.body;
    const userId = req.user._id;
    try {
      const reservation = await DB.bookTeeTime(userId, teeTimeId);

      // Notify all clients of the new reservation
      const message = {
        type: 'teeTimeUpdate',
        action: 'booked',
        teeTimeId: teeTimeId,
      }
      wss.broadcast(message);
      res.status(200).send({ msg: 'Tee time booked!', reservation });
    } catch (err) {
      console.error('Error booking tee time:', err);
      res.status(500).send({ msg: 'Failed to book tee time' });
    }
});

secureApiRouter.get('/reservations', async (req, res) => {
    const userId = req.user._id;
    try {
      const reservations = await DB.getReservationsByUser(userId);
      res.send({ data: reservations });
    } catch (err) {
      console.error('Error fetching reservations:', err);
      res.status(500).send({ msg: 'Failed to fetch reservations' });
    }
});

secureApiRouter.post('/reservations/cancel', async (req, res) => {
    const { teeTimeId } = req.body;
    const userId = req.user._id;
    try {
      await DB.cancelReservation(userId, teeTimeId);

      // Notify all clients of the cancelled reservation
      const message = {
        type: 'teeTimeUpdate',
        action: 'cancelled',
        teeTimeId: teeTimeId,
      };
      wss.broadcast(message);
      res.status(200).send({ msg: 'Reservation cancelled!' });
    } catch (err) {
      console.error('Error cancelling reservation:', err);
      res.status(500).send({ msg: 'Failed to cancel reservation' });
    }
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);