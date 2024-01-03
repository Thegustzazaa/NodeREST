require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world! Pawarit check Nodemon!");
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
