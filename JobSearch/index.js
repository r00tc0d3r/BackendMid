const express = require("express");
const { port } = require("./config");
const { dbConnection } = require("./config/db");

// importando routes
const users = require("./routes/users");

dbConnection();
const app = express();
users(app);
app.use(express.json());

app.listen(port, () => {
  console.log("Listening: http://localhost:" + port);
});
