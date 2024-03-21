const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Simulated database array
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  // Add more books as needed
];

// POST - Create a new book entry
app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.send(`Book with the title ${book.title} added to the database!`);
});

// GET - Read all books
app.get("/books", (req, res) => {
  res.json(books);
});

// PUT - Update a book
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const index = books.findIndex((book) => book.id == id);
  if (index >= 0) {
    books[index] = { id, title, author };
    res.send(`Book with id ${id} has been updated`);
  } else {
    res.status(404).send(`Book with id ${id} not found`);
  }
});

// DELETE - Remove a book
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter((book) => book.id != id);
  res.send(`Book with id ${id} has been deleted`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/books`);
});
