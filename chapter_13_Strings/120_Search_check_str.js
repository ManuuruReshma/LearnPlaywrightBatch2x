//Searching & checking
let url = "https://courses.thetestingacademy.com/courses/playwright-automation-mastery-2x/dashboard";

// incudes
console.log(url.includes("testing"));
console.log(url.includes("produvtion"));

//startswith / endswith
url.startsWith("https");
url.startsWith("http://");
url.startsWith("true");


console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/course/));