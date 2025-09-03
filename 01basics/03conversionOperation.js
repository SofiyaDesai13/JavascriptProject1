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

let someNumber = 45;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//************************************Operations *************************************** */
console.log("************************************");
let value = 3
let negValue = - value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //2 raise to 3 = 8
console.log(2/2) //quotient
console.log(7%3) //remainder

let str1 = "Sofiya"
let str2 = " desai"
console.log(str1+str2)
console.log(1 + "2") //12
console.log("1" + 2) //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
// console.log(+true); //1
// console.log(+""); //0
let gameCounter = 100
gameCounter++ //101     //++gameCounter =101   
console.log(gameCounter);











