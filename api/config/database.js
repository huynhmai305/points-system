// const Sequelize = require('sequelize');

// module.exports = new Sequelize ('database', 'postgres', '30051997',{
//     host: 'localhost',
//     dialect: 'postgres',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// })
const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'database',
  password: '30051997',
  port: 5432,
})
