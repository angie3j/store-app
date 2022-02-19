// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } =
  process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: process.env.PG_HOST,
      port: process.env.NODE_ENVPG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      // password: PG_PASSWORD,
    };

const db = pgp(cn);

module.exports = db;
