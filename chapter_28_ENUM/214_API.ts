enum HTTPMethod {
    Geto = "get",
    posto = "post",
    puto = "put",
    deleto = "delete"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + ">200 ok");
}

sendRequest(HTTPMethod.Geto, "/api/users");
sendRequest(HTTPMethod.posto, "/api/users");
