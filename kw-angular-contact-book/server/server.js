const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 4000;

const cors = require("cors");

const people = require(path.join(__dirname, "./data/people.json"));

app.use(cors());

app.get("/api/people", function (req, res) {
  const jsonData = JSON.parse(people);
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
