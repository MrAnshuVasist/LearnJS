console.log("Hello Anshu")

const accountID = 1125 //never change
let accountEmail ="account@gmail.com"
var accountPassword = "root" //var ko ab use nahi karte q ki ye scope ko nahi manta na function scope ko 
accountCity = "Jaipur"

// accountID = 1122
// console.log(accountID)

accountEmail ="account1@gmail.com"
console.log(accountEmail)

{
    let accountEmail = "hello"
    console.log(accountEmail)

}

{
    var accountPassword ="root1"
}

console.table([accountID,accountEmail,accountPassword,accountCity])

