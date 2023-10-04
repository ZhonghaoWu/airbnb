module.exports = (sequelize, DataTypes) => {
    const SpotImage = sequelize.define('SpotImage', {
      url: DataTypes.STRING,
      preview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    SpotImage.associate = models => {
      SpotImage.belongsTo(models.Spot, { foreignKey: 'spotId' });
    };
  
    return SpotImage;
  };
  