//Objects
//Key and values

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 65, phone: 2345432 };

//Keys will not be in thr doubt quotes
//below key in double is actiualluy JSON

let JSON_student4 = { "name": "Pramode", "age": 65, "phone": 2345432 }

let a = { status: "Pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: "Pass" };
console.log(a1.status);


let a = { status: "Pass" };
let b = a;
console.log(b.status);
b.status = "Fail";
console.log(b.status);
console.log(a.status);

if (a == b) {
    console.log("true");
} else {
    console.log("Fail");
}