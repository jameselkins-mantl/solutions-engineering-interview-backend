const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.POSTGRESQL_CONNECTION_STRING, {
  dialect: dbConfig.dialect,
  protocol: dbConfig.dialect,
  port: dbConfig.port,
  host: dbConfig.HOST,
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
