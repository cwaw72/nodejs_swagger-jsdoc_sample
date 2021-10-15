// module
const http = require('http');
const express = require('express');
const { swaggerUi, specs } = require('./util/swagger/swagger');

// route
const indexRoute = require('./routes/index');

const app = express();

app.use('/indexRoute', indexRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

const server = http.createServer(app);

server.listen(8080, function(){
  console.log("server start");
});