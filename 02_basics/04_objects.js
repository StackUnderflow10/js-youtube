const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "sammiee"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "new@yahoo.com",
    fullmame:{
        userfullname: {
            firstname: "jeet",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = {
    id:1,
    email:"obj@gmail.com"


    
}

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));