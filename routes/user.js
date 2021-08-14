const express = require("express");
const router = express.Router();
const lodash = require("lodash");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const wrapperFactory = require('../middleware/wrapperFactoryFunction');

module.exports = router;

router.post("/authenticate", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);
    const user = await getUserFromDBByUsername(input.userName);
    if (!user || !(await bcrypt.compare(input.password, user.password))) {
        return res.status(401).send("Incorrect username or password");
    }
    // adding id to the data of the token
    const token = jwt.sign({data: user.dataValues.id}, process.env.JWT_SECRET);
    res.send(token);

}));

router.post("/register", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);
    if (await getUserFromDBByUsername(input.userName)) {
        return res.status(400).send("Username already taken");
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