const express = require("express");
const router = express.Router();
const userServices = require("../services/userServices");

// Routes handled by controller
router.post("/authenticate", authenticate);
router.post("/register", register);

module.exports = router;

function authenticate(req, res, next) {
  userServices
    .authenticate(req.body)
    .then((token) => res.json({ message: "Sign in successful", token: token }))
    .catch(next);
}

function register(req, res, next) {
  userServices
    .create(req.body)
    .then(() => res.json({ message: "User created successfully" }))
    .catch(next);
}
