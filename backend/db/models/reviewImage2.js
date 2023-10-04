module.exports = (sequelize, DataTypes) => {
    const ReviewImage = sequelize.define('ReviewImage', {
      url: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    ReviewImage.associate = models => {
      ReviewImage.belongsTo(models.Review, { foreignKey: 'reviewId' });
    };
  
    return ReviewImage;
  };
  