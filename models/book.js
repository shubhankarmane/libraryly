module.exports = (sequelize, DataTypes) => {
  const attributes = {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImageURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Pages: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const Book = sequelize.define("Book", attributes);

  Book.associate = (models) => {
    // A book has a genre
    Book.belongsTo(models.Genre, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    // A book has an author
    Book.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    // A book has many rentals
    Book.hasMany(models.Rental, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Book;
};
