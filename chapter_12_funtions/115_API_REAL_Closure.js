function makeretrytracker(max) {
    let attempts = 0;
    function tryagain(testname) {
        attempts++;
        if (attempts > max) {
            return `${testname} exceeded max retries(${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testname}`;
    }
    return tryagain

}

let retry = makeretrytracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));