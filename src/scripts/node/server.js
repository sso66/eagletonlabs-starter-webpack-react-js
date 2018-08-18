// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/db.json'); // create new db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON server is running');
});
// eof