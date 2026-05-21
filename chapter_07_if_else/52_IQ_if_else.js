if ("hello") console.log("string is true");
if (43) console.log("number is true");
if ({}) console.log("empty object also true");
if ([]) console.log("empty array is true");


if ("") console.log("wont print");
if (null) console.log("wont print");
if (undefined) console.log("wont print");
if (NaN) console.log("wont print");
if (0) console.log("wont print");


let name = undefined;
if (name) {
    console.log("hi");
}
else {
    console.log("bye");
}
