// MongoDB connection
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/courseproject';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(cors());
app.use(express.json());


app.use(routes);

app.get('/', (req, res) => res.send('API Running'));

module.exports = app;
