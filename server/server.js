const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./encryption/client-key.pem'),
  cert: fs.readFileSync('./encryption/client-cert.pem'),
};

http.createServer(app).listen(4000);
// https.createServer(options, app).listen(8000); https

const appJS = require('./src/app.js');

appJS(app);
