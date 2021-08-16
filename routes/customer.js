const express = require("express");
const router = express.Router();
const lodash = require("lodash");
// const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/customerValidator");

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = router;

router.post("/", authorize, wrapperFactory(async (req, res) => {
    const input = getCustomerFromRequest(req);
    const validationResult = validate(input);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    // const customer = await db.customer.create({
    //     firstName: input.firstName,
    //     lastName: input.lastName,
    //     email: input.email,
    //     phone: input.phone,
    // });

    const customer = await prisma.customers.create({
        data: {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone
        }
    });

    return res.send(customer);
}));

router.get("/:id", authorize, wrapperFactory(async (req, res) => {
    // const customer = await db.customer.findByPk(req.params.id);
    const customer = await prisma.customers.findUnique({where: {id: parseInt(req.params.id)}});
    if (!customer) {
        return res.status(404).send("Customer not found");
    }
    return res.send(customer);
}));

router.put("/:id", authorize, wrapperFactory(async (req, res) => {
    // const customer = await db.customer.findByPk(req.params.id);
    const customer = await prisma.customers.findUnique({where: {id: parseInt(req.params.id)}});
    if (!customer) {
        return res.status(404).send("Customer not found");
    }

    const input = getCustomerFromRequest(req);
    const validationResult = validate(input);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    const updateCustomer = await prisma.customers.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phone: input.phone
        }
    });

    // customer.firstName = input.firstName;
    // customer.lastName = input.lastName;
    // customer.email = input.email;
    // customer.phone = input.phone;
    // await customer.save();

    return res.send(updateCustomer);
}));

function getCustomerFromRequest(req) {
    return lodash.pick(req.body, ["firstName", "lastName", "email", "phone"]);
}