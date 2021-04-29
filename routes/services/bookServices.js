const db = require("../../models");

module.exports = {
  create,
  getById,
  updateBook,
};

async function create({
  title,
  stock,
  isbn,
  imageurl,
  pages,
  authorid,
  genreid,
}) {
  const book = await db.Book.create({
    Title: title,
    Stock: stock,
    ISBN: isbn,
    ImageURL: imageurl,
    Pages: pages,
    AuthorId: authorid,
    GenreId: genreid,
  });
  return book;
}

async function getById(id) {
  const book = await db.Book.findByPk(id);
  if (!book) throw "Book not found";

  return book;
}

async function updateBook(
  id,
  { title, stock, isbn, imageurl, pages, authorid, genreid }
) {
  const book = await db.Book.findByPk(id);
  if (!book) throw "Book not found";

  book.Title = title;
  book.Stock = stock;
  book.ISBN = isbn;
  book.ImageURL = imageurl;
  book.Pages = pages;
  book.AuthorId = authorid;
  book.GenreId = genreid;

  await book.save();

  const result = await book.reload();
  return result;
}
