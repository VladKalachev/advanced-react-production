const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");
const cors = require("cors");
const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(cors());

// Нужно для большой задержки, что бы запрос проходил не мгновенно, имитация реального api
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// проверяем, авторизован ли пользователь
// server.use(async (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ message: "AUTH ERROR" });
//   }

//   next();
// });

server.use(jsonServer.defaults());
server.use(router);

// Эндпоинт для логина
server.post("./login", (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
  );
  const { users } = db;
  const userFromBd = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: "AUTH ERROR" });
});

// запуск сервера
server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
