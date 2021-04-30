const db = require("../../models");

module.exports = {
  create,
  getCustomerById,
  updateCustomer,
};

async function create({ firstname, lastname, email, phone }) {
  const customer = await db.Customer.create({
    FirstName: firstname,
    LastName: lastname,
    Email: email,
    Phone: phone,
  });
  return customer;
}

async function getCustomerById(id) {
  const customer = await db.Customer.findByPk(id);
  if (!customer) throw "Customer not found";

  return customer;
}

async function updateCustomer(id, { firstname, lastname, email, phone }) {
  const customer = await db.Customer.findByPk(id);
  if (!customer) throw "Customer not found";

  customer.FirstName = firstname;
  customer.LastName = lastname;
  customer.Email = email;
  customer.Phone = phone;

  await customer.save();

  const result = await customer.reload();
  return result;
}
