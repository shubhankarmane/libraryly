const router = require("express").Router();
const wrapperFactory = require("../middleware/wrapperFactoryFunction");
const checkPayment = require("../middleware/checkPayment");
const authorize = require("../middleware/authorize");
const validate = require("../validation/rentalValidator");

module.exports = router;

router.post("/create", authorize, checkPayment, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    const existingRentals = await prisma.rentals.findFirst({
        where: {
            customerId: parseInt(req.body.customerId),
            statusId: 1
        }
    });
    if (existingRentals) {
        return res.status(403).send("The customer already has an active rental");
    }

    const [updatedRental, updatedBook] = await prisma.$transaction([
        prisma.rentals.create({
            data: {
                bookId: req.body.bookId,
                customerId: req.body.customerId,
                statusId: 1,
                dateRented: new Date(),
            }
        }),
        prisma.books.update({where: {id: parseInt(req.body.bookId)}, data: {stock: {decrement: 1}}})
    ]);

    return res.send(updatedRental);
}));

router.post("/return", authorize, wrapperFactory(async (req, res) => {
    const validationResult = validate(req.body);
    if (validationResult.error) {
        let errorMessage = validationResult.error.details.map(detail => detail.message).toString();
        return res.status(400).send(errorMessage);
    }

    const rental = await prisma.rentals.findFirst({where: {customerId: parseInt(req.body.customerId), statusId: 1}})
    if (!rental) {
        return res.status(404).send("Rental not found");
    }

    const [updatedRental, updatedBook] = await prisma.$transaction([
        prisma.rentals.update({where: {id: rental.id}, data: {dateReturned: new Date(), statusId: 2}}),
        prisma.books.update({where: {id: rental.bookId}, data: {stock: {increment: 1}}})
    ]);

    return res.send(updatedRental);
}));

router.get("/:id", authorize, wrapperFactory(async (req, res) => {
    const rental = await prisma.rentals.findUnique({where: {id: parseInt(req.params.id)}});
    if (!rental) {
        return res.status(404).send("No rental found");
    }
    return res.send(rental);
}));

router.get("/all/open", authorize, wrapperFactory(async (req, res) => {
    const rentals = await prisma.rentals.findMany({where: {statusId: 1}});
    if (rentals.length === 0) {
        return res.status(404).send("No active rentals found");
    }
    return res.send(rentals);
}));

router.get("/all/closed", authorize, async (req, res) => {
    const rentals = await prisma.rentals.findMany({where: {statusId: 2}});
    if (rentals.length === 0) {
        return res.status(404).send("No closed rentals found");
    }
    return res.send(rentals);
});