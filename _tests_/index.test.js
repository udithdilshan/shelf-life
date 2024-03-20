// __tests__/index.test.js
const { getBooks, addBook, deleteBook } = require("../books");

describe("addBook", () => {
  it("should add a book to the books array", () => {
    addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
    expect(getBooks()).toHaveLength(4);
  });
});

describe("deleteBook", () => {
  it("should delete a book from the books array", () => {
    deleteBook(1);
    expect(books).toHaveLength(0);
  });
});

// describe("getBooks", () => {
//   it("should return the books array", () => {
//     const books = [
//       {
//         id: 1,
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925,
//       },
//     ];
//     const result = getBooks();
//     expect(result).toEqual(books);
//   });
// });


