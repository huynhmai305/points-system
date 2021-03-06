const Sequelize = require('sequelize');
const db = require('../config/database');
const Province = db.define('Province', {
    provinceid: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(256),
    }
});

module.exports = Province;