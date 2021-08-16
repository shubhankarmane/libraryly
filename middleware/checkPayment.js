const checkPaymentStatus = (req, res, next) => {
    checkSubscription(req.body.customerId)
        .then(next)
        .catch((err) => res.status(401).send({message: err}));
};

async function checkSubscription(customerId) {
    // const daysSincePayment = await db.sequelize.query('CALL get_days_since_last_payment(:customerId)', {
    //     replacements: {customerId: customerId}
    // })

    const daysSincePayment = await prisma.$queryRaw`select (datediff(current_date, lastPaymentDate)) as difference_in_days from customers where id = ${customerId};`;

    if (daysSincePayment[0].difference_in_days === null) {
        throw "Customer not subscribed";
    }

    if (daysSincePayment[0].difference_in_days > 30) {
        throw "Subscription not renewed";
    }
}

module.exports = checkPaymentStatus;
