//Faz a conexão com o Banco de Dados Sqlite3

const knex = require("knex");
const configuration = require("../../knexfile");

const connection = knex(configuration.development);

module.exports = connection;