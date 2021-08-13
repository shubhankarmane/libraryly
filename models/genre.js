module.exports = (sequelize, DataTypes) => {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const genre = sequelize.define("genre", attributes);

  genre.associate = (models) => {
    genre.hasMany(models.book);
  };

  return genre;
};
