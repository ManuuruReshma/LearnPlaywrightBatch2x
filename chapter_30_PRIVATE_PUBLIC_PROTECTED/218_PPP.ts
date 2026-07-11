class APIClient {
    public baseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }

    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("get" + this.baseURL + path);
        console.log("Auth:" + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }

}
class UserAPIClient extends APIClient {
    getUser(): void {
        console.log("Fetching users(timeout:" + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https", "key", 500);
console.log("Base URL:", client.baseURL);
client.sendRequest("/health");