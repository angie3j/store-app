// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use('/products', productsController);

// ROUTES
app.get('/', (_, response) => {
  console.log('GET request to /');
  response.status(200).send('Welcome to Happy Sparky Boutique');
});

app.get('*', (_, response) => {
  response.status(404).send('Page Not Found');
});


// EXPORT
module.exports = app;
