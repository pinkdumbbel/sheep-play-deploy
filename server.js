const jsonServer = require('json-server');
//뭐지

const server = jsonServer.create();
const router = jsonServer.router('./movie.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const port = process.env.PORT || 8000;
console.log('port-deploy:', process.env.PORT);

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});
