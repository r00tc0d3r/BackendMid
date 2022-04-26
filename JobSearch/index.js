const express = require("express");
const { port } = require("./config");

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log("Listening: http://localhost:" + port);
});
