const http = require('http'); // http is built into Node.js, but must be imported to access
const port = 3000;
const handlers = require('./handlers');

http.createServer((req, res) => {
  for (let handler of handlers) {
    if(!handler(req, res)) {
      break;
    }
  }
}).listen(port);


console.log('cat shelter test commit 010921 add me text more changes');
