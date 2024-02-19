// Datatypes summery 

    // two types :
        // primitive - 7 TYPES

                // String, Number , Boolean, null , undefined, Symbol, BinInt
                //  jin ka sida address nahi diya jata but copy kar ke reference diya jata hai
        
        // Non primitive -> reference type
        
                // Array, Objects, Functions
                // Jin ka sida reference diya jata hai or in sab ka data type bhi object hota h


let userEmail; //undefined
let userEmail1 = undefined; // also undefined


// use of symbol

const id = Symbol('123')
const id1 = Symbol('123')
console.log(id === id1) // false

const hero = ["Hanuman JI", "Ram JI"]
let obj = {
    name: "Anshu",
    age: 21,
}