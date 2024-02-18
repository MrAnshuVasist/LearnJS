// OPERATIONS 

let value = 3
let negValue = -value
console.log(negValue) // -3

// string op string = string  and num op num = num

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

//tricky conversions

console.log(+true) // 1

let num1, num2, num3
num1 = num2 = num3 = 4

let gameCounter = 100
gameCounter++;
console.log(gameCounter++)//101
console.log(gameCounter) //102
console.log(++gameCounter) //103

// new things

console.log("2">1)//true
console.log("02">1)//true

console.log(null>0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

console.table([undefined>0],[undefined == 0],[undefined>=0]) // always false


//strict check => check the value and datatype as well

