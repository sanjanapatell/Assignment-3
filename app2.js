const express = require("express");
const app = express();
const port = 3000;

// Assuming your 'data.json' file is located in the './data' directory
const booksData = require("./data/data.json");

app.get("/books", (req, res) => {
  res.json(booksData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/books`);
});
