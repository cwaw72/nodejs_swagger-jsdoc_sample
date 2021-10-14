const express = require('express');
const { swaggerUi, specs } = require('./util/swagger/swagger');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const http = require('http');

const server = http.createServer(app);

server.listen(8080, function(){
  console.log("server start");
});