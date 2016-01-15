class APIClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getBaseUrl() {
        return this.baseUrl;
    }
}

module.exports = APIClient;