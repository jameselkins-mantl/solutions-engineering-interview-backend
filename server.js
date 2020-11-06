const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

function createServer() {
  const app = express();

  var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  const db = require("./app/models");
  db.sequelize.sync();
  // // drop the table if it already exists
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the solutions engineering interview backend api." });
  });

  require("./app/routes/turorial.routes")(app);

  return app
}

module.exports = {
  createServer
}