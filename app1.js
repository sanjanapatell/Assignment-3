const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Group Name: Group 7</h1>");
});

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
