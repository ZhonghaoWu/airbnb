module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      review: DataTypes.STRING,
      stars: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Review.associate = models => {
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
    };
  
    return Review;
  };
  