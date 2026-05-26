let results = ["A", "b", "c", "d", "A"];

let nums = results.indexOf("A");
console.log(nums);
nums = results.indexOf("B");
console.log(nums);
nums = results.lastIndexOf("A");
console.log(nums);


nums = results.includes("A");
console.log(nums);
nums = results.includes("B");
console.log(nums);


let num = [10, 20, 30, 40, 50];
nums = num.find(x => x > 20);
console.log(nums);
nums = num.findIndex(x => x > 20);
console.log(nums);
nums = num.findLast(x => x > 20);
console.log(nums);
nums = num.findLastIndex(x => x > 20);
console.log(nums);