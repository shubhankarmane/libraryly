module.exports = (sequelize, DataTypes) => {
    const attributes = {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastPaymentDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    };
    const customer = sequelize.define("customer", attributes);

    customer.associate = (models) => {
        // A customer has many rentals
        customer.hasMany(models.rental);
    };

    return customer;
};
