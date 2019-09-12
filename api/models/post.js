const Sequelize = require('sequelize');
const db = require('../config/database');
const Post = db.define('Post', {
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER
    },
    storeId: {
        type: Sequelize.INTEGER
    },
    pictures: {
        type: Sequelize.JSON
    }

});

module.exports = Post;