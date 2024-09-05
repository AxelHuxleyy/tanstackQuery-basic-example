const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
app.use(morgan('combined'));
app.use(cors());
const mongoString = process.env.DATA_BASE;

app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

app.use('/api', routes);
