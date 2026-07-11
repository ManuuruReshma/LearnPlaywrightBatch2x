class BasePage {
    protected baseURL: string;

    constructor(url: string) {
        this.baseURL = url;
    }

    protected navigate(path: string): void {
        console.log("Navigating to:" + this.baseURL + path);
    }
}
class LoginPage extends BasePage {
    constructor() {
        super("HTTP");
    }
    login(user: string): void {
        this.navigate("/login")
        console.log("typing " + user + "into username");
        console.log("Clicking #login-btn");
    }
}

let page = new LoginPage();
page.login("admin");