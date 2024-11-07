const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 4000;

const cors = require("cors");

const people = require(path.join(__dirname, "./data/people.json"));

app.use(cors());

app.get("/api/people", function (req, res) {
  res.json({ message: "Hello from Express!" });

  res.end(JSON.stringify(people, null, "    "));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
