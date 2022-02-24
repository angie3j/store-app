// DEPENDENCIES
const app = require('./app.js');

// CONFIGURATION
require("dotenv").config();
process.env;
const PORT = process.env.PORT  ||  4545

// LISTEN
app.listen(PORT, () => {
  console.log(` Checkout our products on ${PORT} `);
});
