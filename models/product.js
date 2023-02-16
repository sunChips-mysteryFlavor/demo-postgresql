'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slogan: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.INTEGER,
    default_price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};