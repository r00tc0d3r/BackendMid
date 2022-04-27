const express = require("express");
const { port } = require("./config");
const { dbConnection } = require("./config/db");

dbConnection();
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log("Listening: http://localhost:" + port);
});
