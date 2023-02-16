'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answer_photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.answers, { foreignKey:'answer_id' })
    }
  }
  answer_photos.init({
    a_photo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    answer_id: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'answer_photos',
  });
  return answer_photos;
};