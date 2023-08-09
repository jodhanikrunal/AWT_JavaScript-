const express = require('express');
const http = require('http');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});