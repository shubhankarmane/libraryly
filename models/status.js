module.exports = (sequelize, DataTypes) => {
  const attributes = {
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const Status = sequelize.define("Status", attributes);

  Status.associate = (models) => {
    // A status applies to many rentals
    Status.hasMany(models.Rental, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Status;
};
