const UnauthorizedError = require("../error/UnauthorizedError");
const jwt = require("jsonwebtoken");
const db = require("../models");

const authorize = async (req, res, next) => {
  const token = req.header("Token");

  if (!token) throw new UnauthorizedError("Please log in first.");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // check if the user id exists
  const user = await db.User.findByPk(decoded.data);

  if (!user) {
    throw new UnauthorizedError();
  }

  next();
};

module.exports = authorize;
