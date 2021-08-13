const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const UnauthorizedError = require("../../error/UnauthorizedError");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const wrapperFactory = require('../../middleware/wrapperFactory');

module.exports = router;

router.post("/authenticate", wrapperFactory(async (req, res) => {
    // TODO: Input data validation
    const input = getUserDetailsFromRequest(req);
    const user = await getUserFromDBByUsername(input.username);
    if (!user || !(await bcrypt.compare(input.password, user.Password))) {
        throw new UnauthorizedError("Username or password is incorrect");
    }
    // adding id to the data of the token
    const token = jwt.sign({data: user.dataValues.id}, process.env.JWT_SECRET);
    res.json({message: "Sign in successful", token: token});

}));

router.post("/register", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);
    if (await getUserFromDBByUsername(input.username)) {
        throw new Error("Username already taken!");
    }
    const hashedPassword = await bcrypt.hash(input.password, 5);
    await db.User.create({UserName: input.username, Password: hashedPassword});
}));

function getUserDetailsFromRequest(req) {
    return lodash.pick(req.body, ["username", "password"]);
}

async function getUserFromDBByUsername(username) {
    return await db.User.findOne({
        where: {
            UserName: username,
        },
    });
}