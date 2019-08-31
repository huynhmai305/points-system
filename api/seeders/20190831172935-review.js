'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [{
      title: 'Demo',
      content: "Demo content review",
      id_user: 2,
      id_store: 1,
      picture:'',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', null, {});
  }
};
