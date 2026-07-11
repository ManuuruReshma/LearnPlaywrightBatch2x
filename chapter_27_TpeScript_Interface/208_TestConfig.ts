interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;
}

let ciConfig: TestConfig = {
    browser: "CHROME",
    headless: true,
    baseURL: "HHTPS://w3schools"
}
let logConfig: TestConfig = {
    browser: "CHROME",
    headless: true,
    baseURL: "HHTPS://w3schools",
    timeout: 23,
    retries: 234
}

console.log(ciConfig.browser);
console.log(logConfig.timeout);