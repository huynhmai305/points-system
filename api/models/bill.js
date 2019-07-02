const Sequelize = require('sequelize');
const db = require('../config/database');
const Bill = db.define('Bill',{
    id: {
        type: Sequelize.STRING(256),
        allowNull: false,
        primaryKey: true,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    id_store: {
        type: Sequelize.INTEGER
    }
    
 });
//  Bill.associate = models => {
//     Bill.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'id_store',
//         onDelete: 'CASCADE',
//       });
//   };
 
 module.exports = Bill;