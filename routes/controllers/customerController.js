const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/authorize");
const customerServices = require("../services/customerServices");

// Routes handled by controller
// Register a new customer
router.post("/register", authorize, register);
// View customer by id
router.get("/:id", authorize, getById);
// Update customer
router.put("/update/:id", authorize, update);
// TODO: Delete customer
// When deleting a customer, we also remove the records from the rentals table if the records in the rentals are having status CLOSED

module.exports = router;

function register(req, res, next) {
  customerServices
    .create(req.body)
    .then((customer) =>
      res.json({ message: "Customer created successfully", customer: customer })
    )
    .catch(next);
}

function getById(req, res, next) {
  customerServices
    .getCustomerById(req.params.id)
    .then((customer) =>
      res.json({ message: "Customer found", customer: customer })
    )
    .catch(next);
}

function update(req, res, next) {
  customerServices
    .updateCustomer(req.params.id, req.body)
    .then((customer) =>
      res.json({ message: "Updated successfully", customer: customer })
    )
    .catch(next);
}
