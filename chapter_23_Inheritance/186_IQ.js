class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
    teardown() {
        console.log("Base: closer browser");
    }
}
class UITest extends BaseTest {
    setup() {
        super.setup();
        console.log("UI:maximize window");
    }
    teardown() {
        console.log("UI: take screenshot");
        super.teardown();
    }
}
let test = new UITest();
test.setup();