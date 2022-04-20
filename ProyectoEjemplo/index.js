const http = require("http");
const { env, port } = require("./config");

const server = http.createServer();
server.on("request", (request, response) => {
  if (request.method === "POST" && request.url === "/datos") {
    // TODO: Regresar al momento de ver streams
  }

  response.statusCode = "200";
  response.end("Hola Mundo");
});

server.listen(port);
console.log("Servidor funcionando en http://localhost:" + port);
console.log(env);
