const Sequelize = require('sequelize');
const db = require('../config/database');
const Bill = db.define('Bill', {
    id: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER
    },
    id_store: {
        type: Sequelize.INTEGER
    }

});

module.exports = Bill;
