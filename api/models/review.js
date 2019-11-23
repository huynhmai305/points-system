const Sequelize = require('sequelize');
const db = require('../config/database');
const Review = db.define('Review', {
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER
    },
    postId: {
        type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    }
});

module.exports = Review;
