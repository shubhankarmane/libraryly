const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperfactoryfunction");
const db = require("../models");

router.put("/payment/subscription/:id", authorize, wrapperFactory(async (req, res) => {
        const customerId = req.params.id;
        const customer = await db.customer.findByPk(customerId);
        if (!customer) throw "Customer not found";
        customer.lastPaymentDate = new Date();
        await customer.save();
        return res.json({message: "Subscription renewed", customer: customer});
    }
));

module.exports = router;