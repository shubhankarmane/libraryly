const express = require("express");
const router = express.Router();
const lodash = require("lodash");
// const db = require("../models");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const wrapperFactory = require('../middleware/wrapperFactoryFunction');
const validate = require("../validation/userValidator");
const generateToken = require("../utils/tokenGenerator");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = router;

router.post("/authenticate", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);

    const validationResult = validate(input);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    // const user = await getUserFromDBByUsername(input.userName);
    const user = await prisma.users.findFirst({where:{userName: input.userName}});
    console.log(user);
    if (!user || !(await bcrypt.compare(input.password, user.password))) {
        return res.status(401).send("Incorrect username or password");
    }
    // adding id to the data of the token
    const token = generateToken(user.id);
    return res.send(token);
}));

router.post("/register", wrapperFactory(async (req, res) => {
    const input = getUserDetailsFromRequest(req);
    const validationResult = validate(input);
    if(validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }
    // if (await getUserFromDBByUsername(input.userName)) {
    //     return res.status(400).send("Username already taken");
    // }
    if(await prisma.users.findFirst({where: { userName: input.userName } })) {
        return res.status(400).send("Username already taken");
    }

    const hashedPassword = await bcrypt.hash(input.password, 5);
    // await db.user.create({userName: input.userName, password: hashedPassword});
    await prisma.users.create({
        data: {
            userName: input.userName,
            password: hashedPassword
        }
    })
    return res.send('User created!');
}));

function getUserDetailsFromRequest(req) {
    return lodash.pick(req.body, ["userName", "password"]);
}

// async function getUserFromDBByUsername(userName) {
//     return await db.user.findOne({
//         where: {
//             userName: userName,
//         },
//     });
// }