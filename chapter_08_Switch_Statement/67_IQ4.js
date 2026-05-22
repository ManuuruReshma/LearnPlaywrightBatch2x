let value = "5";

switch (value) {
    case 5:
        console.log("number 5 matched");
        break;
    case "5":
        console.log("string '5' matched");
        break;

}


let status = 0;
console.log(typeof status);

switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}