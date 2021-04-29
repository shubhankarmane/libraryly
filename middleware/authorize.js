const UnauthorizedError = require("../error/UnauthorizedError");
const jwt = require("jsonwebtoken");
const db = require("../models");

const authorize = (req, res, next) => {
  checker(req.header("Token"))
    .then(next)
    .catch((err) =>
      res.status(401).json({ message: "Unauthorized. " + err.message })
    );
};

async function checker(token) {
  if (!token) throw new UnauthorizedError("Please log in first.");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // check if the user id exists
  const user = await db.User.findByPk(decoded.data);

  if (!user) {
    throw new UnauthorizedError();
  }
}

module.exports = authorize;
