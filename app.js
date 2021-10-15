// module
const http = require('http');
const express = require('express');
const swaggerUi = require('swagger-ui-express'); 
const swagger = require('./util/swagger/swagger');

// route
const indexRoute = require('./routes/index');
const bookRoute = require('./routes/book');

const app = express();

app.use('/index', indexRoute);
app.use('/book', bookRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));

const server = http.createServer(app);

server.listen(8080, function(){
  console.log("server start");
});