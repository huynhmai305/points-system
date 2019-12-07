const Sequelize = require('sequelize');
const db = require('../config/database');
const Point = db.define('Point', {
  point_change: {
    type: Sequelize.FLOAT,
    defaulValue: 0.05
  },
  id_store: {
    type: Sequelize.INTEGER
  }
});

module.exports = Point;
