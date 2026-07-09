interface APIResponce {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responTime?: number
}

let responce: APIResponce = {
    statusCode: 200,
    body: '{"user":"admin"}',
};

console.log("Status: ", responce.statusCode);
console.log("Body: ", responce.body);
console.log("Headers: ", responce.headers);

//responce.statusCode = 404; \\ error readonly
responce.body = "asdf"