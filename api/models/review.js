'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    id_user: DataTypes.INTEGER,
    id_store: DataTypes.INTEGER,
    picture: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};