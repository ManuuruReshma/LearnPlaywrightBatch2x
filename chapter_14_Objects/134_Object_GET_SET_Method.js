const user = {
    firstname: "Reshma",
    lastName: "Mannuru",
    get fullName() {
        return this.firstname + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

//Objects -js {}
//this. it means current value in the Object.

console.log(user.fullName);
user.fullName = "Amit Shrma";
console.log(user.fullName);


