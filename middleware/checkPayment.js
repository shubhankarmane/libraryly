// this middleware function checks if a user has paid the monthly fees or not
const db = require("../models");

const checkPaymentStatus = (req, res, next) => {
  checkSubscription(req.body.customerId)
    .then(next)
    .catch((err) => res.status(401).json({ message: err }));
};

async function checkSubscription(customerId) {
  const daysSincePayment = await db.sequelize.query('CALL get_days_since_last_payment(:customerId)', {
    replacements: {customerId: customerId}
  })

  if (daysSincePayment === null) {
    throw "Customer not subscribed";
  }

  if (daysSincePayment > 30) {
    throw "Subscription not renewed";
  }
}

module.exports = checkPaymentStatus;
