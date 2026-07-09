class Person {
    constructor() {
        console.log("i will be created when obj is created");
    }


    //Attributes
    name;
    email;
    salary;

    //Behaviour
    sleep() { }
    eat() { }
    walk() {


    }
}
const obj_ref = new Person();

console.log(obj_ref);