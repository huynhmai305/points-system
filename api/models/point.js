const Sequelize = require('sequelize');
const db = require('../config/database');
const Point = db.define('Point',{
    point_change: {
        type: Sequelize.INTEGER
      }
 });
 
 module.exports = Point;