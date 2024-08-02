'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
  }
  Event.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      date: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};