let score = "hello" //try "33" - //"33abc" - //null - //undefined - //true - //"hello"
console.log(typeof score); //string - //string - //object - //undefined - //boolean - //string
console.log(typeof(score)); //string - //string - //object - //undefined- //boolean - //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number - //number //number //number //number //number
console.log(valueInNumber); //33 - //NaN - //0 - //NaN - //1 - //NaN

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

console.log("*******")
let isLoggedIn = 1 //1 //"" //"hello Boss"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true



