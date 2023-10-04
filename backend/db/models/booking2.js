module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Booking.associate = models => {
      Booking.belongsTo(models.User, { foreignKey: 'userId' });
      Booking.belongsTo(models.Spot, { foreignKey: 'spotId' });
    };
  
    return Booking;
  };
  