interface APIResponce {
    body: string;
    headers?: object;
    responceTime?: number;
}

let response1: APIResponce = {
    body: "HI"
};
let response2: APIResponce = {
    body: "HI",
    headers: {},
    responceTime: 400
};