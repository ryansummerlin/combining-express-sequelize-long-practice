'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name:
    { type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isTitleCased: function(value) {
          let strArr = value.split(' ');
          for (let i = 0; i < strArr.length; i++) {
            let word = strArr[i];
            if (word[0] !== word[0].toUpperCase()) {
              throw new Error('Each word must be capitalized');
            }
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING
    },
    territory: {
      type: DataTypes.STRING
    },
    fact: {
      type: DataTypes.STRING(240),
      validate: {
        maxLength: function(value) {
          if (value.length > 240) {
            throw new Error('Maximum character length is 240');
          }
        }
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
    modelName: 'Insect',
  });
  return Insect;
};
