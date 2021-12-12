const { gql } = require('apollo-server');

const requestTypeDefs = gql `
    type RequestDetail {
        id: Int!
        userId: Int!
        applicationdate: String!
        responsedate: String!
    }
    
    input Request {
        userId: Int!
        applicationdate: String!
        responsedate: String!
      }

      type Mutation {
        createRequest(requestInput :Request): RequestDetail!
        updateRequest(requestInput :Request): RequestDetail!
        deleteRequest(requestId: Int!): String!
      }

      extend type Query {
        getAllRequests: [RequestDetail]!
        getRequestByUser(userId: Int!): [RequestDetail]!
        getArrayWithRequestTime: [RequestDetail]!
        getRequestById(requestId: Int!): RequestDetail!
        getLastId: Int!
      }
`;

module.exports = requestTypeDefs;