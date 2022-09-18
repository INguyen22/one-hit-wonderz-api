const knex = require('knex')
const config = require('./knexfile')
require("dotenv").config()

const environment = process.env.NODE_ENV || 'development'
const knexConfig = config[environment];

module.exports = knex(knexConfig);