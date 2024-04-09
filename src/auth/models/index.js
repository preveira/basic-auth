'use strict';

const UserSchema = require('./users-model');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL);

const User = UserSchema(sequelize, DataTypes);

module.exports = {
  User,
  sequelize,
};
