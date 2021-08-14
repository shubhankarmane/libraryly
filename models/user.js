module.exports = (sequelize, DataTypes) => {
    const attributes = {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };

    const user = sequelize.define("user", attributes);

    return user;
};
