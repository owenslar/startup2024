// Seeding the database with initial tee-time data

const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const dbName = 'startup';

async function seedDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');
    const db = client.db(dbName);
    const teeTimeCollection = db.collection('teeTime');
    
    const teeTimes = [
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
    ];

    const result = await teeTimeCollection.insertMany(teeTimes);
    console.log(`${result.insertedCount} tee times inserted successfully!`);
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedDatabase();