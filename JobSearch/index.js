const express = require("express");
const { port } = require("./config");
const { dbConnection } = require("./config/db");

// importando routes
const users = require("./routes/users");
const auth = require("./routes/auth");

dbConnection();

const app = express();
// Middleware JSON
app.use(express.json());

// Usando routes
users(app);
auth(app);

app.listen(port, () => {
  console.log("Listening: http://localhost:" + port);
});
