function wrapResponce<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponce<string>(200, "admin");
console.log(userResp);

let flagResp = wrapResponce<boolean>(200, true);
console.log(flagResp);

