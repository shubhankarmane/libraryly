const express = require("express");
const router = express.Router();
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");

module.exports = router;

router.post("/update", authorize, wrapperFactory(async (req, res) => {
        const customer = await db.customer.findByPk(req.body.customerId);
        if (!customer) {
            return res.status(404).send("Customer not found");
        }
        customer.lastPaymentDate = new Date();
        await customer.save();
        return res.send(customer);
    }
));
