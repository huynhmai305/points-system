const Sequelize = require('sequelize');
const db = require('../config/database');
const Gift = db.define('Gift',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_gift: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false
      },
       title: {
         type: Sequelize.STRING(256),
         allowNull: false
       },
      content: {
        type: Sequelize.STRING(256),
        allowNull: true,
      },
      id_store: {
        type: Sequelize.INTEGER,
        allowNull: false,       
      }
 });
 
 module.exports = Gift;