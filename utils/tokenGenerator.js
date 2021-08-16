const jwt = require("jsonwebtoken");

function generateToken(id) {
    return jwt.sign({data: id}, process.env.JWT_SECRET);
}

module.exports = generateToken;