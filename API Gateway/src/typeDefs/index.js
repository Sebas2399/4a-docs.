//Se llama al typedef (esquema) de cada submodulo
const requestTypeDefs = require('./Request_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, requestTypeDefs];

//Se exportan
module.exports = schemasArrays;