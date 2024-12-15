const { Client } = require("pg");
require("dotenv").config();

const db = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL successfully!"))
  .catch((err) => console.error("Failed to connect to PostgreSQL", err.stack));

module.exports = db;

