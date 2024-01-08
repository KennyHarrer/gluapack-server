const fs = require('fs');
const https = require('https');
const express = require('express')

require('dotenv').config()

const app = express()

const options = {
    key: fs.readFileSync(certPath),
    cert: fs.readFileSync(keyPath)
};
  
https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on port 443');
});

app.listen()

module.exports = app