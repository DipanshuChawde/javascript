// Strings
 
//trim(), trimStart(), trimEnd(), slice(), split()


// trim()
    //action=> remove the space from start and end
    //return => new string


// trimStart()
    //action => remove the space from start
    //return => new string

//trimEnd()
    //action => remove the space from last/end
    //return => new string

//slice()
    //stringName.slice(startPostion, endPosition(not included))
    //action=>slice string
    //return => sliced string


//split()
    //action=>splits string in to array on given parameter
    //return=>array



//concat()
    //action=>concatinate strings
    //return=>new concatinated string



let str="    Dipanshu Nitin Chawde     "
let str1="       pune        "
console.log(str)
let q1=str.trim()
console.log(q1)
console.log(str.length)
console.log()
console.log(str1)
let q2=str1.trim()
console.log(q2)


console.log()
console.log("trimStart()")
// let str="    Dipanshu Nitin Chawde     "
//  let str1="       pune        "

let q3=str.trimStart()

let q4=str1.trimStart()
console.log(q3)
console.log(q4)
console.log(str.length)
console.log(q3.length)
console.log(q4.length)


let q5=str.trimEnd()
let q6=str1.trimEnd()
console.log(q5)
console.log(q6)


//slice()
console.log()
console.log("slice()")


//-6  -5  -4   -3  -2  -1
//N    a   s   h   i   k
//0    1   2   3   4   5

//left to right
//right to left ==> blank string

// stringName.slice(startPostion, endPosition(not included))

// //endPosition optional
// //endposition -1
let city="Nashik"
console.log(city.slice(3))  //hik

console.log(city.slice(2,5)) //shi
console.log(city.slice(-4,-3)) //s

console.log(city.slice(-4,-2)) //sh
console.log(city.slice(-4,-5)) //"" (no output)
console.log(city.slice(-4,5)) //shi
console.log(city.slice(-4,-4)) //""



//string => split() ==> array return
console.log()
console.log("split()")

let fn="dipanshu nitin chawde"
let a=fn.split(" ") 
console.log(a) // [ 'd', 'i', 'p', 'a', 'n', 's','h', 'u' ] ["dipanshu", "nitin" ,"chawde"]
let b=fn.split("a")
console.log(b)  //[ 'dip', 'nshu' ]


let fn1="dipanshu nitin chawde"
console.log(fn1.split(" ")) //[ 'dipanshu', 'nitin', 'chawde' ]


//concat()
str1="dipanshu"
let str2="chawde"
let fstr=str1.concat(" ").concat(str2)
console.log(fstr)   //dipanshu chawde

console.log()
let aa=20
let bb=30

console.log(aa+bb) //number
console.log(`${aa+bb}`)//string









