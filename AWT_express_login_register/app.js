const express = require('express');
const mongoose = require('./Database/db');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRoute = require('./route/authRoute');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser());

app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
