const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});