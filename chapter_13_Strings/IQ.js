// give a string. reverse it and print true
//if they are same.

let name = "reshma";
let rev = name.split("").reverse().join("");
console.log(rev);

console.log(rev === name);

// anagram 2 string legth and alphabets are same

function anagram(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
    let name1 = str1.split("").sort().join("");
    let name2 = str2.split("").sort().join("");
    console.log(name1 === name2);
}

anagram("eat", "ate");