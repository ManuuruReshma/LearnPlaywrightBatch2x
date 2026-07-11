class TestDataStroge<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0]!;
    }
    getAll(): T[] {
        return this.items;
    }
    count(): number {
        return this.items.length;
    }
}

let statuscodeStore = new TestDataStroge<number>();
let testNameStore = new TestDataStroge<string>();
statuscodeStore.add(200);
statuscodeStore.add(400);

testNameStore.add("Login Test");
testNameStore.add("Checkout Test")

console.log("CODES:", statuscodeStore.getAll());
console.log("First code:", statuscodeStore.getFirst());
console.log("Tests:", testNameStore.getAll());
console.log("TEST count", testNameStore.count());