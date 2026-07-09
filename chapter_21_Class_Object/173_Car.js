class Car {
    //CAB

    //Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    //ATTRIBUTE  

    //BEHAVIOr 
    drive() {
        console.log("I am driving", this.name);
    }

}

const tesla = new Car("model S");
tesla.drive();

const ilp = new Car("grand 10");
ilp.drive();