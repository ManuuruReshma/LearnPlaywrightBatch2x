
//normal function
function validateStatusCode(Status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//experssion function
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

//arrow function
const ValidateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}
ValidateStatusCode_Arrow();