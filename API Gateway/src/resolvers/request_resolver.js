const { ApolloError } = require("apollo-server-errors");

const requestResolver = {
  Query: {
    getAllRequests: async (_, { request }, { dataSources, userIdToken }) => {
      if (true)
        return await dataSources.requestAPI.getAllRequests();
      else
        throw new ApolloError("No puedes acceder", 401);
    },
    
    getRequestByUser: async (_, { userId }, { dataSources, userIdToken }) => {
      if (true)
        return await dataSources.requestAPI.getRequestByUser(userId);
      else
        throw new ApolloError("No puedes acceder", 401);
    },
    
    getArrayWithRequestTime: async (_, { request }, { dataSources, userIdToken }) => {
      if (true)
        return await dataSources.requestAPI.getArrayWithRequestTime();
      else
        throw new ApolloError("No puedes acceder", 401);
    },

    getRequestById: async (_, { requestId }, { dataSources, userIdToken }) => {
      if (true)
        return await dataSources.requestAPI.getRequestById(requestId);
      else
        throw new ApolloError("No puedes acceder", 401);
    },

    getLastId: async (_, { reserve }, { dataSources, userIdToken }) => {
        if (true)
          return await dataSources.requestAPI.getLastId();
        else
          throw new ApolloError("No puedes acceder", 401);
      },
  },

  Mutation: {
    createRequest: async (_, { requestInput }, { dataSources, userIdToken }) => {
      if (true) {
        const getNextId = await (dataSources.requestAPI.getLastId());
        let allRequests = await (dataSources.requestAPI.getAllRequests());
        let saveIds = [];
        allRequests.forEach((element) => {
          saveIds.push(element.id);
        });
        let myNextId = Math.max(...saveIds) + 1;

        const authInput = {
          id: myNextId,
          userId: requestInput.userId,
          applicationdate: requestInput.applicationdate,
          responsedate: requestInput.responsedate,
        };

        return await dataSources.requestAPI.createRequest(authInput);
      } else {
        throw new ApolloError("No puedes acceder", 401);
      }
    },

    updateRequest: async (_, { requestInput }, { dataSources, userIdToken }) => {
      if (true) {
        const authInput = {
          id: requestInput.id,
          userId: requestInput.userId,
          applicationdate: requestInput.applicationdate,
          responsedate: requestInput.responsedate,
        };

        return await dataSources.requestAPI.updateRequest(authInput);
      } else {
        throw new ApolloError("No puedes acceder", 401);
      }
    },

    deleteRequest: async (_, { requestId }, { dataSources, userIdToken }) => {
      if (true)
        return await dataSources.requestAPI.deleteRequest(requestId);
      else
        throw new ApolloError("No puedes acceder", 401);
    },
  },
};

module.exports = requestResolver;