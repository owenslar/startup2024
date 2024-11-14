const express = require('express');
const app = express();
const uuid = require('uuid');

app.use(express.static('public'));
app.use(express.json());

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const users = {};

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
});
  
// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});
  
// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
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