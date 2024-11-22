const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const reservationCollection = db.collection('reservation');
const teeTimeCollection = db.collection('teeTime');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// Tee-Time Related Functions

async function getReservedTeeTimes() {
    try {
        console.log('Fetching reserved tee times...');
        const reservedTeeTimes = await reservationCollection.find({}).toArray();
        console.log('Reserved tee times:', reservedTeeTimes);
        return reservedTeeTimes;
    } catch (err) {
        console.error('Error in getReservedTeeTimes:', err);
        throw err; // Ensure the error is logged and propagated
    }
}

async function getAvailableTeeTimes(reservedIds) {
    try {
        console.log('Fetching available tee times, excluding:', reservedIds);
        const availableTeeTimes = await teeTimeCollection.find({ id: { $nin: reservedIds } }).toArray();
        console.log('Available tee times:', availableTeeTimes);
        return availableTeeTimes;
    } catch (err) {
        console.error('Error in getAvailableTeeTimes:', err);
        throw err;
    }
}

async function bookTeeTime(userId, teeTimeId) {
    const reservation = { userId, teeTimeId };
    await reservationCollection.insertOne(reservation);
    return reservation;
}

async function getReservationsByUser(userId) {
    return reservationCollection
      .aggregate([
        { $match: { userId } },
        { 
          $lookup: {
            from: 'teeTime',
            localField: 'teeTimeId',
            foreignField: 'id',
            as: 'teeTime',
          },
        },
        { $unwind: '$teeTime' },
      ])
      .toArray();
}

async function cancelReservation(userId, teeTimeId) {
    return reservationCollection.deleteOne({ userId, teeTimeId });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  getReservedTeeTimes,
  getAvailableTeeTimes,
  bookTeeTime,
  getReservationsByUser,
  cancelReservation,
};
