'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transcation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transcation.init({
    TransactionId: DataTypes.UUID,
    ProductId: DataTypes.INTEGER,
    Payment_Id: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    ProductTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transcation',
  });
  return Transcation;
};