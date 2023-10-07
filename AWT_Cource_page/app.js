const express = require('express');
const mongoose = require('./database/db');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const courseRoute = require('./route/courseRoute');
const { validateAndSanitize, handleValidationErrors } = require('./middleware/validationMiddleware');
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

app.use('/course', courseRoute);

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Management Application');
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
