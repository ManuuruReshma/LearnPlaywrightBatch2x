let statuses = ["Pass", "b", "c", "d"];

console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[4]);

console.log(statuses.at(-1));

statuses[1] = "blocker";
console.log(statuses);