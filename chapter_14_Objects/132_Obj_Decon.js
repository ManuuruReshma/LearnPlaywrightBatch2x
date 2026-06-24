const user = { name1: "reshma", age: 43, city: "KYC" };

//Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename Variable
const { name1: username, age: userage } = user;
console.log(username);
console.log(userage);


//Default values
const { country = "USA" } = user;
console.log(country);

const date = {
    user:
    {
        name1: "reshma", address:
        {
            city: "KYC"
        }
    }
};

const { user: { address: { city } } } = date;
console.log(date.user.address.city);