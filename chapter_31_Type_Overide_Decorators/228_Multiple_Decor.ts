function first(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("EAT");
        return original.call(this);
    };
}

function second(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
        console.log("SLEEP");
        return original.call(this);
    };
}

class Dog {
    @first
    @second
    bark() {
        return "woof";
    }
}
new Dog().bark();
let r = new Dog().bark();
console.log(r);