'use strict';

const http = require('http');
const url = require('url');

const PORT = process.env['PORT'] || 1337;
const IP_ADRESSS = process.env['IP_ADDRESS'] || '0.0.0.0';
const PROTO_HOST = `http://${IP_ADRESSS}:${PORT}`;

const server = http.createServer((req, res) => {
  const myurl = new url.URL(`${PROTO_HOST}${req.url}`);
  console.log(`access: ${myurl.pathname}`);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(
    {
      pathname: myurl.pathname,
      request_headers: req.headers
    },
    '\n',
    2 
  ));
});

// Now that server is running
server.listen(PORT, IP_ADRESSS, function () {
  console.log(`Start to listen: ${IP_ADRESSS}:${PORT}`)
});
