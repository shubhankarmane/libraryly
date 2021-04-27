module.exports = (sequelize, DataTypes) => {
  const attributes = {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const Genre = sequelize.define("Genre", attributes);

  Genre.associate = (models) => {
    Genre.hasMany(models.Book, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Genre;
};
