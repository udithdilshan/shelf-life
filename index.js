const express = require("express");
const path = require("path");
const { getBooks, addBook, deleteBook } = require("./books");
const app = express();
const port = process.argv[3] || 3000;

app.use(express.urlencoded({ extended: true }));

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  let books = getBooks();
  res.render("index", { books });
});

app.post("/add-book", (req, res) => {
  addBook(req.body.title, req.body.author, req.body.year);
  res.redirect("/");
});

app.post("/delete-book", (req, res) => {
  deleteBook(req.body.bookId);
  res.redirect("/");
});

app.get("/title", (req, res) => {
  res.json({ title: "SHELF-LIFE" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
