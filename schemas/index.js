const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/task1")
    // localhost 변경
    // .connect("mongodb://localhost:27017/spa_mall")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("MongoDB Has Connecting Error", err);
});

module.exports = connect;