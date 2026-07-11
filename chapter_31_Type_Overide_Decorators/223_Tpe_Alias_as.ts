let rawResponce: unknown = {
    status: 200,
    body: { user: "admin", role: "tester" }
};

interface UserResponse {
    status: number;
    body: {
        user: string;
        role: string
    };

}

let responce = rawResponce as UserResponse;

console.log("STATUS: ", responce.status);