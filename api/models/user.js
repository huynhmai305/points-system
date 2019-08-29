const Sequelize = require('sequelize');
const db = require('../config/database');
const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(256),
    allowNull: false,
    unique: false
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING(256),
    allowNull: true,
    unique: false
  },
  phone: {
    type: Sequelize.STRING(10),
    allowNull: false,

  },
  email: {
    type: Sequelize.STRING(256),
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING.TEXT,
    allowNull: true
  },
  point: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaulValue: 0
  }

});

module.exports = User;