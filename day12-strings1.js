//Strings

//toUpperCase(), toLowerCase(), includes(), indexOf(), startsWith()

//toUpperCase()
    //action=>convert string in to upper case
    //return=> new srting


//toLowerCase()
    //action=>convert string in to lower case
    //return=> new srting

// includes()
    //action => check whether given char or subString presnt in string or not if present true else false
    //return  ==> boolean 


//indexOf()
       //action=>finds index of char in string 
       //retuen=> index, if not present return -1  


// StartsWith()
    //action => check whether string starts with given char or subString
    //return => boolean

//EndSWith()
    //action => check whether string ends with given char or subString
    //return => boolean

let a="dipanshu"
console.log(a)
console.log(typeof(a))            //string

console.log()
b=[]
console.log(b)
console.log(typeof(b))            //object


console.log()
c=""
console.log(c)
console.log(typeof(c))             //string


//string interpolation
console.log()
fname="dipanshu"
mname="nitin"
lname="chawde"
console.log("My fiest name is " +fname+" my middle name is "+mname+" my last name is "+lname)
console.log()
console.log(`my first name is ${fname} my last name is ${lname}`)


console.log()


//String => Object
//property methods
//method
//action
//return

let city = "Karanja"

//  N   a   s   h   i   k
//  0   1   2   3   4   5
//  1   2   3   4   5   6

console.log(city[5]) //j

console.log(city[2])//r

//Length => property
console.log(city.length)   //7

//last element
console.log(city[city.length - 1])  //a



console.log()

// program 3 

// string + string =======> string 
// number + string =======> string 
// string + number =======> string 
// number + number =======> number


let a1=10
let a2=20
let a3="dip"
console.log(a1+a2)
console.log()
console.log(a1+a3)
console.log()
console.log(a2+a3)
console.log()
console.log(a1+a2+a3)
console.log()
console.log(a1+a3+a2)





console.log()
let namee="dipanshu"

console.log(namee[5])
console.log()
for(let i=0;i<namee.length;i++){
    console.log(namee[i])
}

// toUpperCase and toLowerCase
console.log()
let str="Dipanshu Nitin Chawde"
let stru=str.toUpperCase()
console.log(stru)
console.log()
let strl=str.toLowerCase()
console.log(strl)

//includes()
let inc1=str.includes("Dip")
console.log(inc1)   //true
console.log(str.includes("dip")) //false
console.log(str.includes('a'))    //true
console.log(str.includes("shu Ch"))  //false
console.log(str.includes("in Ch"))     //true


//indexOf()
console.log()

// let str="Dipanshu Nitin Chawde"
console.log(str.indexOf("D"))  //0
console.log(str.indexOf("d"))  //19
console.log(str.indexOf("a"))   //3
console.log(str.indexOf("z"))   // -1

let q1=str.indexOf("n")
console.log(q1)

console.log()
console.log("startsWith()")
// let str="Dipanshu Nitin Chawde"
console.log()
console.log(str.startsWith("Dip"))   //true
console.log(str.startsWith("dip"))   //false
console.log(str.startsWith("Nit"))   //false
console.log(str.startsWith("D"))     //true

console.log()
console.log("endsWith()")
// let str="Dipanshu Nitin Chawde"
console.log(str.endsWith("wde"))   //true
let q2= str.endsWith("abc")    //false
console.log(q2)

console.log(str.endsWith("n Chawde")) //true


