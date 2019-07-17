const Sequelize = require('sequelize');
const db = require('../config/database');
const Exchange_Gift = db.define('Exchange_Gift',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_gift: {
        type: Sequelize.STRING(256)
      },
    id_user:{
        type: Sequelize.INTEGER
    }
 });
 
 module.exports = Exchange_Gift;