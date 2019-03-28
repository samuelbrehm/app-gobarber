'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('appoitments', 'appointments')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('appointments');
  }
}
