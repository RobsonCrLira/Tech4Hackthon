const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(3333, () => { console.log('Server is Running in Port 3333'); });
