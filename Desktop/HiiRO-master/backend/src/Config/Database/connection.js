const knex = require("knex");
const config = require("../../../knexfile");

const connection = knex(config.desenvolvimento);

module.exports = connection;