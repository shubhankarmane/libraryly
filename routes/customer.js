const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");

module.exports = router;

router.post("/register", authorize, wrapperFactory(async (req, res) => {
    const input = getCustomerFromRequest(req);
    const customer = await db.customer.create({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone,
    });
    return res.send(customer);
}));

router.get("/:id", authorize, wrapperFactory(async (req, res) => {
    const customer = await db.customer.findByPk(req.params.id);
    if (!customer) {
        return res.status(404).send("Customer not found");
    }
    return res.send(customer);
}));

router.put("/update/:id", authorize, wrapperFactory(async (req, res) => {
    const customer = await db.customer.findByPk(req.params.id);
    if (!customer) {
        return res.status(404).send("Customer not found");
    }

    const input = getCustomerFromRequest(req);
    customer.firstName = input.firstName;
    customer.lastName = input.lastName;
    customer.email = input.email;
    customer.phone = input.phone;

    await customer.save();
    return res.send(customer);
}));

function getCustomerFromRequest(req) {
    return lodash.pick(req.body, ["firstName, lastName, email, phone"]);
}