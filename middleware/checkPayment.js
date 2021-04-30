// this middleware function checks if a user has paid the monthly fees or not
const db = require("../models");

const checkPaymentStatus = (req, res, next) => {
  checkSubscription(req.body.customerid)
    .then(next)
    .catch((err) => res.status(401).json({ message: err }));
};

async function checkSubscription(customerid) {
  const customer = await db.Customer.findByPk(customerid);
  const firstDate = new Date();
  const secondDate = customer.dataValues.LastPaymentDate;
  if (secondDate === null) {
    throw "Customer not subscribed";
  }
  // calculate the difference between the two dates in days
  const timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
  const differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
  // if the difference is above 30, reject
  if (differentDays > 30) {
    throw "Subscription not renewed";
  }
}

module.exports = checkPaymentStatus;
