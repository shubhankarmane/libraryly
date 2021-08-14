const express = require("express");
const authorize = require("../../middleware/authorize");
const router = express.Router();
const checkPayment = require("../../middleware/checkPayment");
const db = require("../../models");
const wrapperFactory = require("../../middleware/wrapperFactory");

module.exports = router;

router.post("/new", authorize, checkPayment, wrapperFactory(async (req, res) => {
    const existingRentals = await db.rental.count({
        where: {
            customerId: req.body.customerId,
            statusId: 1,
        },
    });
    if (existingRentals > 0) {
        throw "Customer already has an active rental.";
    }
    const rental = await db.sequelize.query('call create_rental_for_customer(:book_id, :customer_id)', {
        replacements: {book_id: req.body.bookId, customer_id: req.body.customerId}
    })
    return res.json({message: "Rental created successfully", rental: rental});
}));

router.put("/return", authorize, wrapperFactory(async (req, res) => {
    const rental = await db.rental.findOne({
        where: {
            customerId: req.body.customerId,
            statusId: 1,
        },
    });

    if (!rental) throw "Rental not found";

    const updatedRental = await db.sequelize.query("CALL return_rental_for_customer(:customer_id)", {
        replacements: {customer_id: req.body.customerId}
    });

    return res.json({message: "Rental returned successfully", rental: rental});
}));

router.get("/view/:id", authorize, wrapperFactory(async (req, res) => {
    const rental = await db.rental.findByPk(req.params.id);
    if (!rental) throw "No rental found";
    return res.json({message: "Rental found", rental: rental});
}));

router.get("/view/all/open", authorize, wrapperFactory(async (req, res) => {
    const rentals = await db.rental.findAll({where: {statusId: 1}});
    if (rentals.length === 0) throw "No active rentals found";
    return res.json({message: "Rentals found", rentals: rentals});
}));

router.get("/view/all/closed", authorize, async (req, res) => {
    const rentals = await db.rental.findAll({where: {statusId: 2}});
    if (rentals.length === 0) throw "No closed rentals found";
    return res.json({message: "Rentals found", rentals: rentals});
});