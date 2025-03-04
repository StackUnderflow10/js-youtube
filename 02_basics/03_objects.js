// singleton 

// object literals 
const mySym=Symbol("key1")
const JsUser = {
    name : "jeet",
    "full name" : "jeet sarkar",
    age : 19,
    location: "kolkata",
    email: "jeet@ping.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym] : "newkey1"



    


}
// console.log(JsUser["email"]);
// console.log(JsUser.email);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="jeet@yahoo.com"
// console.log(JsUser["email"])


JsUser.greeting = function()
{
    console.log("hello js user");
}
JsUser.greetingTwo = function()
{
    console.log('hello Js user,  ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


