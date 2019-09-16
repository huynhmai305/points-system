const Sequelize = require('sequelize');
const db = require('../config/database');
const Ward = db.define('Ward', {
    wardid: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(256),
    },
    districtid: {
        type: Sequelize.STRING(256)
    },
});

module.exports = Ward;