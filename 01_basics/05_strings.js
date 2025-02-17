 const gameName= new String('jeet-js')

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('s'));

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  jeet  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url  = "https://js.com//-jeffy"


console.log(url.replace('20%','-'));
console.log(url.includes('atisundar'));
console.log(url.split('-'));
