const express = require("express");
const router = express.Router();
const db = require("../models");
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/subscriptionValidator");

module.exports = router;

router.post("/update", authorize, wrapperFactory(async (req, res) => {
        const validationResult = validate(req.body);
        if(validationResult.error) {
            let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
            return res.status(400).send(errorMessage);
        }
        const customer = await db.customer.findByPk(req.body.customerId);
        if (!customer) {
            return res.status(404).send("Customer not found");
        }
        customer.lastPaymentDate = new Date();
        await customer.save();
        return res.send(customer);
    }
));
