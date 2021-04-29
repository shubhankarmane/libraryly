module.exports = (sequelize, DataTypes) => {
  const attributes = {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const User = sequelize.define("User", attributes);

  return User;
};
