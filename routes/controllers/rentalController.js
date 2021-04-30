const express = require("express");
const authorize = require("../../middleware/authorize");
const router = express.Router();
const rentalServices = require("../services/rentalServices");
const checkPayment = require("../../middleware/checkPayment");

// Routes
router.post("/new", authorize, checkPayment, createRental);
router.put("/return", authorize, returnRental);
router.get("/view/:id", authorize, getSingleRental);
router.get("/view/all/open", authorize, getAllOpenRentals);
router.get("/view/all/closed", authorize, getAllClosedRentals);

module.exports = router;

function createRental(req, res, next) {
  rentalServices
    .createRental(req.body)
    .then((rental) => {
      res.json({ message: "Rental created successfully", rental: rental });
    })
    .catch(next);
}

function returnRental(req, res, next) {
  rentalServices
    .returnRental(req.body)
    .then((rental) =>
      res.json({ message: "Rental returned successfully", rental: rental })
    )
    .catch(next);
}

function getSingleRental(req, res, next) {
  rentalServices
    .getARental(req.params.id)
    .then((rental) => res.json({ message: "Rental found", rental: rental }))
    .catch(next);
}

function getAllOpenRentals(req, res, next) {
  rentalServices
    .getAllOpenRentals()
    .then((rentals) => res.json({ message: "Rentals found", rentals: rentals }))
    .catch(next);
}

function getAllClosedRentals(req, res, next) {
  rentalServices
    .getAllClosedRentals()
    .then((rentals) => res.json({ message: "Rentals found", rentals: rentals }))
    .catch(next);
}
