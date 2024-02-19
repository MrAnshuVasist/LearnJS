// Stack Heap

// IN js two types of memory
    //stack -> ye primitive type me use hogi
    //heap -> ye non primitive type me use hogi

    let a = "anshu"
    let b = a

    b ="anshu2"
     console.table([a,b]); // anshu anshu2

// heap

let person = {
    name: "anshu",
    age: 21,
}

let user2 = person

user2.age=22

console.table([person, user2]) // anshu 22 anshu 22