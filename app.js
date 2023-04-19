const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello Cosmos!');
});

const postsRouter = require('./routes/posts.js');
const connect = require('./schemas');
connect();

app.use(express.json());

app.use("/", [postsRouter]);

app.listen(port, () => {
  console.log(port, 'Port has opened!');
});


