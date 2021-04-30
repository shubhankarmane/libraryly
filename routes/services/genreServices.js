const db = require("../../models");

module.exports = { addGenre };

async function addGenre({ name }) {
  const genre = await db.Genre.findOrCreate({
    where: {
      Name: name,
    },
  });
  return genre;
}
