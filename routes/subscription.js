const router = require("express").Router();
const authorize = require("../middleware/authorize");
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const validate = require("../validation/subscriptionValidator");

module.exports = router;

router.post("/", authorize, wrapperFactory(async (req, res) => {
        const validationResult = validate(req.body);
        if (validationResult.error) {
            let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
            return res.status(400).send(errorMessage);
        }

        const customer = await prisma.customers.findUnique({where: {id: parseInt(req.body.customerId)}});

        if (!customer) {
            return res.status(404).send("Customer not found");
        }

        const updateCustomer = await prisma.customers.update({
            where: {id: parseInt(req.body.customerId)},
            data: {lastPaymentDate: new Date()}
        });
        return res.send(updateCustomer);
    }
));
