const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const lodash = require("lodash");
const wrapperFactory = require("../middleware/wrapperfactoryfunction");
const db = require("../models");

module.exports = router;

router.post("/register", authorize, wrapperFactory(async (req, res) => {
    const input = getCustomerFromRequest(req);
    const customer = await db.customer.create({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
    });
    return res.json({message: "Customer created successfully", customer: customer});
}));

router.get("/:id", authorize, wrapperFactory(async (req, res) => {
    const customer = await db.customer.findByPk(req.params.id);
    if (!customer) throw "Customer not found";

    return res.json({message: "Customer found", customer: customer});
}));

router.put("/update/:id", authorize, wrapperFactory(async (req, res) => {
  const customer = await db.customer.findByPk(req.params.id);
  if (!customer) throw "Customer not found";

  const input = getCustomerFromRequest(req);
  customer.firstName = input.firstName;
  customer.lastName = input.lastName;
  customer.email = input.email;
  customer.phone = input.phone;

  await customer.save();
  return res.json({message: "Updated successfully", customer: customer});
}));

function getCustomerFromRequest(req) {
  return lodash.pick(req.body, ["firstName, lastName, email, phone"]);
}