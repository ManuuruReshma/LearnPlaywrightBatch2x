const url = 'https://courses.thetestingacademy.com';
//url = 'https://courses.thetestingacademy.com/learn';

// We will get an error because we cannot reassign a value to a constant variable.

const c = 30;
//c = 40; // This will throw an error because we cannot reassign a value to a constant variable.

// We can declare a constant variable without initializing it, but we cannot reassign a value to it later.

if (true) {
    const c = 50;
    console.log(c); // Output: 50
}

console.log(c);