const Sequelize = require('sequelize');
const db = require('../config/database');
const Village = db.define('Village', {
    villageid: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(256),
    },
    wardid: {
        type: Sequelize.STRING(256)
    },
});

module.exports = Village;