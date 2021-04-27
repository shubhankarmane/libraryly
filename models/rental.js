module.exports = (sequelize, DataTypes) => {
  const attributes = {
    DateRented: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DateReturned: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  const Rental = sequelize.define("Rental", attributes);

  Rental.associate = (models) => {
    // A customer can have many rentals
    // One rental can have only one customer
    Rental.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    // One book can be in many rentals
    // One rental can have only one book
    Rental.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    // A rental has a status
    Rental.belongsTo(models.Status, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Rental;
};
