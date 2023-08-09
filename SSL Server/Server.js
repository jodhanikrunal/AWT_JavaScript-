const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(helmet());
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World");
});

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
}, app)

sslServer.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});