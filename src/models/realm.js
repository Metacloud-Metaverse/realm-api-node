'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Realm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Realm.init({
    title: DataTypes.STRING,
    zone: DataTypes.STRING,
    url: DataTypes.STRING,
    max_capacity: DataTypes.INTEGER,
    current_capacity: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn('now')
    },
  }, {
    sequelize,
    modelName: 'Realm',
    timestamps: false
  });
  return Realm;
};