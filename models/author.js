module.exports = (sequelize, DataTypes) => {
  const attributes = {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };
  const Author = sequelize.define("Author", attributes);
  Author.associate = (models) => {
    // An author has multiple books
    Author.hasMany(models.Book, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };
  return Author;
};
