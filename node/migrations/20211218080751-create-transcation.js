'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transcations', {
      TransactionId: {
        type: Sequelize.UUID,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Payment_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ProductTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transcations');
  }
};