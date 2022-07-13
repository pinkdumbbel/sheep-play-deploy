const jsonServer = require('json-server');
const path = require('path');

//뭐지

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + '/movies.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + '/'),
});

const port = process.env.PORT || 8000;
console.log('port-deploy:', process.env.PORT);

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
