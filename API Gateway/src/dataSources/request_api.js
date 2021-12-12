const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class RequestAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.request_api_url;
    }

    async createRequest(request) {
        request = new Object(JSON.parse(JSON.stringify(request)));
        return await this.post('/request/add_request', request);
    }

    async getRequestByUser(userId) {
        return await this.get(`/request/get_request_By_userId/${userId}`);
      }

    async deleteRequest(requestId) {
        return await this.delete(`/request/delete_Request_By_Id/${requestId}`);
      }
    
    
    async updateRequest(request) {
        reserve = new Object(JSON.parse(JSON.stringify(request)));
        return await this.put(`/request/updateRequest`, request);
      }
    
    async getAllRequests() {
        return await this.get(`/request/get_All_Request`);
      }

    async getLastId() {
        return await this.get(`/request/getID`);
      }
    
    async getArrayWithRequestTime() {
        return await this.get(`/request/getTimeByService`);
      }
    
    async getRequestById(requestId) {
        return await this.delete(`/request/getReservationById/${requestId}`);
      }


}

module.exports = RequestAPI;