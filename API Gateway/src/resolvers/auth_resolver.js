const { ApolloError } = require("apollo-server-errors");

const usersResolver = {
  Query: {
    getAllUser: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.authAPI.getAllUser();
      else
        throw new ApolloError("No se puede acceder", 401);
    },
    getUserById: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return await dataSources.authAPI.getUser(userId);
      else
        throw new ApolloError("No se puede acceder", 401);
    },
  },

  Mutation: {
    signUpUser: async (_, { userInput }, { dataSources }) => {
      const authInput = {
        username: userInput.username,
        password: userInput.password,
        name: userInput.name,
        email: userInput.email,
      };

      return await dataSources.authAPI.createUser(authInput);
    },

    logIn: (_, { credentials }, { dataSources }) =>
      dataSources.authAPI.authRequest(credentials),

    refreshToken: (_, { refresh }, { dataSources }) =>
      dataSources.authAPI.refreshToken(refresh),

    deleteUserById: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        dataSources.authAPI.deleteUser(userId);
      else
        throw new ApolloError("No puedes acceder", 401);
    },
  },
};

module.exports = usersResolver;