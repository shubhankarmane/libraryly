module.exports = (sequelize, DataTypes) => {
    const attributes = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };

    const book = sequelize.define("book", attributes);

    book.associate = (models) => {
        // A book has a genre
        book.belongsTo(models.genre);
        // A book has an author
        book.belongsTo(models.author);
        // A book has many rentals
        book.hasMany(models.rental);
    };

    return book;
};
