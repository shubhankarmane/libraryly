module.exports = (sequelize, DataTypes) => {
  const attributes = {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const Customer = sequelize.define("Customer", attributes);

  Customer.associate = (models) => {
    // A customer has many rentals
    Customer.hasMany(models.Rental, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Customer;
};
