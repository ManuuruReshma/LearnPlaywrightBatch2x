class Student {
    static name = "Playwright2x";
    static mentor_name = "Pramod";

    constructor(name_student, age, phonenNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phonenNo;
    }
}

const s1 = new Student("Yas", 32, "987654321");
const s2 = new Student("sha", 22, "887654321");

console.log(s1.name_student);
console.log(s2.name_student);