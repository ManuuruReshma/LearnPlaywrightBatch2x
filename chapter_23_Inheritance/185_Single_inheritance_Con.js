class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest {
    setup() {
        console.log("APITEST: open browser");
    }
}
let test = new APITest();
test.setup();