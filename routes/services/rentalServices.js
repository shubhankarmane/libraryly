const db = require("../../models");

module.exports = {
  createRental,
  returnRental,
  getARental,
  getAllClosedRentals,
  getAllOpenRentals,
};

// A customer should not be having an active rental before making other rentals
async function createRental({ bookid, customerid }) {
  // check count of open rentals
  const existingRentals = await db.Rental.count({
    where: {
      CustomerId: customerid,
      StatusId: 1,
    },
  });
  if (existingRentals > 0) {
    throw "Customer already has an active rental.";
  } else {
    try {
      return (t = await db.sequelize.transaction(async () => {
        await decreaseBookStock(bookid);
        return await db.Rental.create({
          BookId: bookid,
          CustomerId: customerid,
          StatusId: 1,
          DateRented: new Date(),
        });
      }));
    } catch (err) {
      throw err;
    }
  }
}

async function decreaseBookStock(bookid) {
  const book = await db.Book.findByPk(bookid);
  if (book.dataValues.Stock <= 0) throw "No stock";
  book.Stock = book.dataValues.Stock - 1;
  await book.save();
}

async function increaseBookStock(bookid) {
  const book = await db.Book.findByPk(bookid);
  book.Stock = book.dataValues.Stock + 1;
  await book.save();
}

// Process rental return
async function returnRental({ customerid }) {
  const rental = await db.Rental.findOne({
    where: {
      CustomerId: customerid,
      StatusId: 1,
    },
  });

  if (!rental) throw "Rental not found";
  try {
    const t = await db.sequelize.transaction(async () => {
      await increaseBookStock(rental.dataValues.BookId);
      rental.DateReturned = new Date();
      rental.StatusId = 2;
      await rental.save();
      const result = await rental.reload();
      return result;
    });
  } catch (err) {
    throw err;
  }
}

async function getAllOpenRentals() {
  const rentals = await db.Rental.findAll({ where: { StatusId: 1 } });
  if (rentals.length === 0) throw "No active rentals found";
  return rentals;
}

async function getAllClosedRentals() {
  const rentals = await db.Rental.findAll({ where: { StatusId: 2 } });
  if (rentals.length === 0) throw "No closed rentals found";
  return rentals;
}

async function getARental(rentalid) {
  const rental = await db.Rental.findByPk(rentalid);
  if (!rental) throw "No rental found";
  return rental;
}
