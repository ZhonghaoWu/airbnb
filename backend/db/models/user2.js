module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      hashedPassword: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    return User;
  };
  