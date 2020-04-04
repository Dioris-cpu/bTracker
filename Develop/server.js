const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
// event listener for "fetch"
// cache the data being passed around
// put cached data in the database when connection is restored (back online)

const PORT = 3300;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});