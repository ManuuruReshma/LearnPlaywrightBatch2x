function logged(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log("Called");
        return original.apply(this, args);
    };
}

class Greeter {
    @logged
    hello(): string {
        return "HI";
    }
}

let r = new Greeter().hello();
console.log(r);