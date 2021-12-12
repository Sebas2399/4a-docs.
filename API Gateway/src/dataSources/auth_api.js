const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/create`, user);
    }

    async getUser(userId) {
        return await this.get(`/user/getSelected/${userId}`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }

    async getAllUser() {
        return await this.get(`/user/getAll`);
      }

    async deleteUser(userId) {
        return await this.delete(`/user/deleteSelected/,${userId}`);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

}

module.exports = AuthAPI;