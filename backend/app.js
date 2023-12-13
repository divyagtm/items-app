const express = require('express');

const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();

const { connectToDB } = require('./db/DBUtils');

const Items = require('./models/ItemModel');

const itemsRoute = require('./routes/itemsRoute');

const mongoose = require('mongoose');

var cors = require('cors');

const app = express();

const PORT = process.env.SERVER_PORT || 4000;

connectToDB();

app.use(bodyParser.json());

app.use(cors());

app.use('/items/', itemsRoute);

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
