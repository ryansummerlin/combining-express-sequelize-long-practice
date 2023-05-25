'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING
    },
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        minValueZero: function(value) {
          if (value < 0) {
            throw new Error('Value cannot be less than zero');
          }
        }
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        minValueZero: function(value) {
          if (value < 0) {
            throw new Error('Value cannot be less than zero');
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
