const Sequelize = require('sequelize');
const db = require('../config/database');
const Comment = db.define('Comment',{
    commentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    userId: {
        type: Sequelize.INTEGER
    },
    postId:{
        type: Sequelize.INTEGER
    }

 });
 
 module.exports = Comment;