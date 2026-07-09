class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}
class APIPage extends BaseTest {
    setup() {
        console.log("ApiTest: open browser");
    }
}
let test = new APIPage();
test.setup();