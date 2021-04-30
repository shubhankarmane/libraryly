const db = require("../../models");

module.exports = { processPayment };

async function processPayment(customerid) {
  const customer = await db.Customer.findByPk(customerid);
  if (!customer) throw "Customer not found";
  customer.LastPaymentDate = new Date();
  await customer.save();
  const result = await customer.reload();
  return customer;
}
