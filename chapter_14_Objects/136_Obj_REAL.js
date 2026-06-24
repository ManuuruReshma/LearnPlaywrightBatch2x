const ENV = {
    base_url: "w3schools.com",
    timeout: 5000,
    retries: 2,
    browser: "Chrome"
}

const EXPECTED_Response = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}