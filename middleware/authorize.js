const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send("Access denied. Please log in.");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }
    catch (err) {
        return res.status(400).send("Invalid token");
    }
};

module.exports = authorize;
