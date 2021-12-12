const requestResolver = require('./request_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(requestResolver, authResolver);

module.exports = resolvers;