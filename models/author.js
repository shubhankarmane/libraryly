module.exports = (sequelize, DataTypes) => {
    const attributes = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    const author = sequelize.define("author", attributes);
    author.associate = (models) => {
        // An author has multiple books
        author.hasMany(models.book);
    };
    return author;
};
