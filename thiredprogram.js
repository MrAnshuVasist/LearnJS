let score = 33
console.log(typeof score)// number

score = "a"
console.log(typeof score)// string

let newScore = Number(score)
console.log(newScore)
console.log(typeof(newScore)) //number

/*agar ham kisi esi string ko change kare ge 
jis me number nahi h ya number ke sath kuch or 
bhi h to TYPE CONVERSON me NaN (Not a Number)aayega*/ 

/* but in case score = null it will convert it to 
*/

// and in case of score = undefined it will be NaN

// TRUE HOGA  1 ME AND FALSE HOGA 0 ME

// also empty string is false and non empty string is true also in functions

score = 33
console.log(typeof score) // number
a = String(score)

console.log(a) // 33 
console.log(typeof(a)) // string
