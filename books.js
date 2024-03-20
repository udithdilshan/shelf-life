const books = [
  { id: 1, title: "Book 1", author: "Author 1", year: 2023 },
  { id: 2, title: "Book 2", author: "Author 2", year: 2022 },
  { id: 3, title: "Book 3", author: "Author 3", year: 2021 },
];
function getBooks() {
  return books;
}

// Add a new book
function addBook(title, author, year) {
  let newBook = {
    id: books.length + 1,
    title,
    author,
    year,
  };
  books.push(newBook);
  return newBook;
}

// Delete a book
function deleteBook(id) {
  // Find the index of the book with the given ID
  const bookIndex = books.findIndex((book, index) => index === parseInt(id));

  // If the book is not found, redirect to the homepage
  if (bookIndex === -1) {
    return;
  }

  // Remove the book from the books array
  books.splice(bookIndex, 1);
}

module.exports = { getBooks, addBook, deleteBook };
