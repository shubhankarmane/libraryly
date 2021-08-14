module.exports = (sequelize, DataTypes) => {
    const attributes = {
        dateRented: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        dateReturned: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    };

    const rental = sequelize.define("rental", attributes);

    rental.associate = (models) => {
        // A customer can have many rentals
        // One rental can have only one customer
        rental.belongsTo(models.customer);
        // One book can be in many rentals
        // One rental can have only one book
        rental.belongsTo(models.book);
        // A rental has a status
        rental.belongsTo(models.status);
    };

    return rental;
};
