const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const UnauthorizedError = require("../error/UnauthorizedError");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const wrapperFactory = require('../middleware/wrapperfactoryfunction');

module.exports = router;

router.post("/authenticate", wrapperFactory(async (req, res) => {
    // TODO: Input data validation
    const input = getUserDetailsFromRequest(req);
    const user = await getUserFromDBByUsername(input.userName);
    if (!user || !(await bcrypt.compare(input.password, user.password))) {
        throw new UnauthorizedError("Username or password is incorrect");
    }
    // adding id to the data of the token
    const token = jwt.sign({data: user.dataValues.id}, process.env.JWT_SECRET);
    res.json({message: "Sign in successful", token: token});

}));

router.post("/register", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);
    if (await getUserFromDBByUsername(input.userName)) {
        throw new Error("Username already taken!");
    }
    const hashedPassword = await bcrypt.hash(input.password, 5);
    await db.user.create({userName: input.userName, password: hashedPassword});
    return res.send('User created!');
}));

function getUserDetailsFromRequest(req) {
    return lodash.pick(req.body, ["userName", "password"]);
}

async function getUserFromDBByUsername(userName) {
    return await db.user.findOne({
        where: {
            userName: userName,
        },
    });
}