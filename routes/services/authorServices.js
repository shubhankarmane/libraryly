const db = require("../../models");

module.exports = { createAuthor };

async function createAuthor({ name }) {
  const author = db.Author.findOrCreate({
    where: {
      Name: name,
    },
  });
  return author;
}
