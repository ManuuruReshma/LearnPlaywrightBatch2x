abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log("SET");
    }
    execute(): void {
        console.log("EXE");
    }
    teardown(): void {
        console.log("Tear");
    }
}