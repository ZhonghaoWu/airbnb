module.exports = (sequelize, DataTypes) => {
    const Spot = sequelize.define('Spot', {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Spot.associate = models => {
      Spot.belongsTo(models.User, { foreignKey: 'ownerId' });
    };
  
    return Spot;
  };
  