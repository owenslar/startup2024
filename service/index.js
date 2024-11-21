const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');

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
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// GetTeeTimes get a list of tee times
apiRouter.get('/teeTimes', (_req, res) => {
    res.send(teeTimeData);
})

const teeTimeData = { data: [
    {
        id: 1,
        course: 'Timpanogos Golf Club',
        link: 'https://www.timpanogosgolf.com',
        date: 'October 5',
        time: '9:30am',
        price: '$40',
        golfers: '2-4 golfers',
        weather: 'Loading...',
        img: 'https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg',
        status: 'Reserved',
        latitude: '40.20394',
        longitude: '-111.64808'
    },
    {
        id: 2,
        course: 'The Links at Sleepy Ridge',
        link: 'https://www.sleepyridgegolf.com',
        date: 'October 6',
        time: '10:35am',
        price: '$55',
        golfers: '1 golfer',
        weather: 'Loading...',
        img: 'https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg',
        status: 'Reserved',
        latitude: '40.284927',
        longitude: '-111.742004'
    },
    {
        id: 3,
        course: 'Riverside Country Club',
        link: 'https://www.riversidecountryclub.org',
        date: 'October 7',
        time: '12:45pm',
        price: '$65',
        golfers: '2-4 golfers',
        weather: 'Loading...',
        img: 'https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4',
        status: 'Reserved',
        latitude: '40.2689972',
        longitude: '-111.6570931'
    },
    {
        id: 4,
        course: 'Riverside Country Club',
        link: 'https://www.riversidecountryclub.org',
        date: 'October 8',
        time: '1:15pm',
        price: '$65',
        golfers: '2-4 golfers',
        weather: 'Loading...',
        img: 'https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4',
        status: 'Reserved',
        latitude: '40.2689972',
        longitude: '-111.6570931'
    },
    {
        id: 5,
        course: 'Timpanogos Golf Club',
        link: 'https://www.timpanogosgolf.com',
        date: 'October 9',
        time: '3:30pm',
        price: '$40',
        golfers: '1-2 golfers',
        weather: 'Loading...',
        img: 'https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg',
        status: 'Reserved',
        latitude: '40.20394',
        longitude: '-111.64808'
    },
    {
        id: 6,
        course: 'The Links at Sleepy Ridge',
        link: 'https://www.sleepyridgegolf.com',
        date: 'October 10',
        time: '4:45pm',
        price: '$55',
        golfers: '1 golfer',
        weather: 'Loading...',
        img: 'https://golfcoursegurus.com/photos/utah/sleepyridge/large/Sleepy-Ridge-clubhouse-mountain.jpg',
        status: 'Reserved',
        latitude: '40.284927',
        longitude: '-111.742004'
    },
    {
        id: 7,
        course: 'Riverside Country Club',
        link: 'https://www.riversidecountryclub.org',
        date: 'October 11',
        time: '6:00pm',
        price: '$65',
        golfers: '2-4 golfers',
        weather: 'Loading...',
        img: 'https://media.licdn.com/dms/image/v2/C4D1BAQFmAYoU9h3HFg/company-background_10000/company-background_10000/0/1625267164271/riverside_country_club_provo_cover?e=2147483647&v=beta&t=gdsiAv_j3bA-YADzbZG98aX5b8HJ4d0Fqs79fy__fw4',
        status: 'Reserved',
        latitude: '40.2689972',
        longitude: '-111.6570931'
    },
    {
        id: 8,
        course: 'Timpanogos Golf Club',
        link: 'https://www.timpanogosgolf.com',
        date: 'October 12',
        time: '7:15pm',
        price: '$40',
        golfers: '1-2 golfers',
        weather: 'Loading...',
        img: 'https://www.timpanogosgolf.com/wp-content/uploads/2022/01/Photo-Dec-05-8-30-41-PM-scaled.jpg',
        status: 'Reserved',
        latitude: '40.20394',
        longitude: '-111.64808'
    }
]};

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