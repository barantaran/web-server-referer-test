const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.write('referrer: '); //write a response to the client
    if (req.headers.referer)
        res.write(req.headers.referer);
    res.end(); //end the response
});

const sslServerOptions = {
  pfx: fs.readFileSync(path.join(__dirname, 'server.pfx')),
  passphrase: 'your_password_here'
};

https.createServer(sslServerOptions, app).listen(3000, () => {
  console.log('HTTPS server running on port 3000');
});