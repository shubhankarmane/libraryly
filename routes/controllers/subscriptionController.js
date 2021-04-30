const express = require("express");
const router = express.Router();
const authorize = require("../../middleware/authorize");
const subscriptionServices = require("../services/subscriptionServices");

// Routes
router.put("/payment/subscription/:id", authorize, processPayment);

module.exports = router;

function processPayment(req, res, next) {
  subscriptionServices
    .processPayment(req.params.id)
    .then((customer) =>
      res.json({ message: "Subscription renewed", customer: customer })
    )
    .catch(next);
}
