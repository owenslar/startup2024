const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.get('*', (_req, res) => {
  res.send({ msg: 'BookATeeTime service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const uuid = require('uuid');

app.use(express.json());