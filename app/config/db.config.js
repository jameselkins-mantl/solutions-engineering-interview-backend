require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
  HOST: process.env.HOST,
  POSTGRESQL_CONNECTION_STRING: process.env.POSTGRESQL_CONNECTION_STRING,
  dialect: "postgres",
  port: 5432,
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
