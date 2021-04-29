const jwt = require("jsonwebtoken");
const db = require("../../models");
const bcrypt = require("bcrypt");

module.exports = {
  authenticate,
  create,
};

async function authenticate({ username, password }) {
  const user = await db.User.findOne({
    where: {
      UserName: username,
    },
  });

  // if user was not found or the password did not match, we throw error
  if (!user || !(await bcrypt.compare(password, user.Password))) {
    throw new Error("Username or password is incorrect");
  }

  // authentication was successful and we can give a token
  // adding id to the data of the token so that we can use it later for authorization
  const token = jwt.sign({ data: user.dataValues.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return token;
}

// function to create a user in the database
async function create({ username, password }) {
  // check if user name is already taken
  if (
    await db.User.findOne({
      where: {
        UserName: username,
      },
    })
  ) {
    throw new Error("Username already taken");
  }

  // make a hash of the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // save user to the database
  await db.User.create({ UserName: username, Password: hashedPassword });
}
