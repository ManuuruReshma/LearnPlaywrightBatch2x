class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;

    }

    add() {
        console.log(this.a + this.b);
    }
    sub() {
        console.log(this.a - this.b);
    }
    div() {
        console.log(this.a / this.b);
    }
}
const addition = new Calculator(30, 3);
addition.add();
addition.sub();
addition.div();

//===============================

class Student {
    static name = "Playwright2x";
    static mentor_name = "Pramod";

    constructor(name_student, age, phonenNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phonenNo;
    }
    student() {
        console.log(this.name_student + "," + this.age + "," + this.phoneNo);
    }
}

const s1 = new Student("Yas", 32, "987654321");
const s2 = new Student("sha", 22, "887654321");

s1.student();