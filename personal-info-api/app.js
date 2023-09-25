const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personalInfoRoutes = require('./routes/personalInfoRoutes');
const app = express();
const port = 3000;
 
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/CHARUSAT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 
// Middleware for parsing JSON
app.use(bodyParser.json());
 
// Routes
app.use('/personal-info', personalInfoRoutes);
 
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
module.exports = app;