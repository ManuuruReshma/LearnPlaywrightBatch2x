class BaseTest {
    setup(): void {
        console.log("[Base] Open browser");
    }
    teardown(): void {
        console.log("[base] ClOSE Browser");
    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {
    override setup(): void {
        console.log("[APITest] No Browser!");

    }
}