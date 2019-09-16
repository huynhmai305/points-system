const Sequelize = require('sequelize');
const db = require('../config/database');
const District = db.define('District', {
    districtid: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(256),
    },
    provinceid: {
        type: Sequelize.STRING(256)
    },
});

module.exports = District;