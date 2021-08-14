const express = require("express");
const router = express.Router();
const db = require("../models");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const checkPayment = require("../middleware/checkPayment");
const authorize = require("../middleware/authorize");
const validate = require("../validation/rentalValidator");

module.exports = router;

router.post("/create", authorize, checkPayment, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    const existingRentals = await db.rental.count({
        where: {
            customerId: req.body.customerId,
            statusId: 1,
        },
    });
    if (existingRentals > 0) {
        return res.status(403).send("The customer already has an active rental");
    }
    const rental = await db.sequelize.query('call create_rental_for_customer(:book_id, :customer_id)', {
        replacements: {book_id: req.body.bookId, customer_id: req.body.customerId}
    })
    return res.send(rental);
}));

router.post("/return", authorize, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    const rental = await db.rental.findOne({
        where: {
            customerId: req.body.customerId,
            statusId: 1,
        },
    });

    if (!rental) {
        return res.status(404).send("Rental not found");
    }

    const updatedRental = await db.sequelize.query("CALL return_rental_for_customer(:customer_id)", {
        replacements: {customer_id: req.body.customerId}
    });

    return res.send(updatedRental);
}));

router.get("/view/:id", authorize, wrapperFactory(async (req, res) => {
    const rental = await db.rental.findByPk(req.params.id);
    if (!rental) throw "No rental found";
    return res.send(rental);
}));

router.get("/view/all/open", authorize, wrapperFactory(async (req, res) => {
    const rentals = await db.rental.findAll({where: {statusId: 1}});
    if (rentals.length === 0) {
        return res.status(404).send("No active rentals found");
    }
    return res.send(rentals);
}));

router.get("/view/all/closed", authorize, async (req, res) => {
    const rentals = await db.rental.findAll({where: {statusId: 2}});
    if (rentals.length === 0) {
        return res.status(404).send("No closed rentals found");
    }
    return res.send(rentals);
});