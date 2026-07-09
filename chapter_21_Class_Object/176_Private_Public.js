//Private Field (#) - Hidden Data
//PUBLIC Fields

class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }
    //Custom made function by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);
//console.log(cred.apiKey); undefined
//console.log(cred.#apiKey); error

const token = cred.pramodgetAuthHeader();
console.log(token);