//MAP

//Object
//Array
//String
//Number
//Undefined
//Null
//NaN
//Boolean
//Class



let a = 20
console.log(typeof a)

let b = [12, 34, "mayuri"]
console.log(typeof b)//object

let c = {
    a: 20,
    b: 30,
    d: "tea"
}

console.log(typeof c)

let student = {
    firstName: "mayuri",
    30: "katwe",
    true: 35,
    null: ["java", "python"],
    family: {
        mother: "jaya",
        father: "mahendra"
    },
    isMarried: true
}

//object => values => datatype
//object stores key value as string 

for (let key in student) {
    console.log(typeof (key))
}

//Map 
// map can store key value of any data type

let a1 = []
let myMap = new Map()
console.log(myMap)

//set() => add property
myMap.set({1:a,b:2},"rollNumber")
myMap.set([1,2,3],"isMarried")
myMap.set(100,90)
console.log(myMap)
console.log("================")
//get() => retrive values

console.log(myMap.get(123)) //undefined
console.log(myMap.get(100))
console.log("================")
//has() => boolean
console.log(myMap.has(true))
console.log(myMap.has('firstName'))

console.log("================")
//delete() ==> boolean
console.log(myMap.delete(123))
console.log(myMap)

console.log("================")
//clear()
myMap.clear()
console.log(myMap)

console.log("================")
//size => property
console.log(myMap.size)

console.log("================")
let m2=new Map([[[1,2,3],"marks"],[{a:20,b:30},"mayuri"],[true,"isStuding"]])
console.log(m2)

