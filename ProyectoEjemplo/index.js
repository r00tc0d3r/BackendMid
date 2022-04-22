const express = require("express");
const { port } = require("./config");

let users = [];

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  return res.json(users);
});

app.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  return res.status(201).json(users);
});

app.put("/:id", (req, res) => {
  // const id = req.params.id;
  // const body = req.body
  const {
    body,
    params: { id },
  } = req;
  // users.map((user) => {
  //   if (user.id === id) {
  //     return body
  //   }
  //   return user
  // });
  users = users.map((user) => (user.id == id ? body : user));
  return res.json(users);
});

app.patch("/:id", (req, res) => {
  // const id = req.params.id;
  // const body = req.body
  const {
    body,
    params: { id },
  } = req;
  // users.map((user) => {
  //   if (user.id === id) {
  //     return body
  //   }
  //   return user
  // });
  users = users.map((user) => (user.id == id ? body : user));
  return res.json(users);
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => id !== user.id);
  return res.json(users);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
