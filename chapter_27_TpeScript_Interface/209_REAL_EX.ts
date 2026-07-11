interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
interface FreeTrail extends BasePage {
    usernameSelector: string;
    submitButtonSelect: string;
}

let loginPage1: LoginPage = {
    url: "URL",
    title: "NAME",
    usernameSelector: "RESH",
    passwordSelector: "PASS",
    loginButtonSelector: "QWE"
}

let freeTrailPage: FreeTrail = {
    url: "URL",
    title: "NAME",
    usernameSelector: "mann",
    submitButtonSelect: "SUBMIT"
}

console.log("URL:", loginPage1.url);
console.log("TITLE", loginPage1.title);
console.log(loginPage1.usernameSelector);