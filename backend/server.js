const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.use(middlewares);
server.use(router);
server.listen(5001, () => {
  console.log("JSON Server is running on http://localhost:5001");
});
