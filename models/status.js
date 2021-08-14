module.exports = (sequelize, DataTypes) => {
    const attributes = {
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };

    const status = sequelize.define("status", attributes);

    status.associate = (models) => {
        // A status applies to many rentals
        status.hasMany(models.rental);
    };

    return status;
};
