const swaggereJsdoc = require('swagger-jsdoc'); 

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger test",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/index.js", "./routes/book.js"],
};
    
const specs = swaggereJsdoc(options); 

module.exports = specs;
