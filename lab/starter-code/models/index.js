const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const userModel = require('../models/userModel')

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || `postgres://${process.env.USERNAME}:${process.env.PW}${process.env.HOST}:5432/${process.env.DB_NAME}`

const sequelize = new Sequelize(DATABASE_URL)

const User = userModel(sequelize, DataTypes)

module.exports = { sequelize, User }