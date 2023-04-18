const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts");

const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [goodsRouter, cartsRouter]);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});