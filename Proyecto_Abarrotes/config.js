const env= process.env.NODE_ENV || 'development';

// env = 'development'

const knexfile = require('./knexfile');
const knex = require ('knex');

// Mandar llamar la configuración correcta de knexfile.js

module.exports = knex(knexfile[env]);