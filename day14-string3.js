// repeat(), charAt() , charCodeAt(), replace() , replaceAll(), // join()
// split() 
// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string



//replace() , replaceAll()
console.log()
str="i am learning javascript and javascript is nice."
let q1=str.replace("javascript", "python")
console.log(q1)
let q2=str.replaceAll("javascript","python")
console.log(q2)

console.log()

// join()
// split()


str1="dipanshu nitin"
str3=["dipanshu" ,"chawde"]
str2="chawde"
let sp1=str1.split(" ")
console.log(sp1) //[ 'dipanshu', 'nitin' ]
let sp2=str3.join("@")
console.log(sp2) //dipanshu@chawde

//padStart(), padEnd()
//(method) String.padEnd(maxLength: number, fillString?: string | undefined): string
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string


let strQ = '25'
let m = strQ.padStart(4,'0')
console.log(m)


let strQM = '25'
let n = strQ.padEnd(8,"a")
console.log(n)



//charAt(), charCodeAt()
console.log()
let namee="dipanshu chawde"
let ca=namee.charAt(4) //n
console.log(ca)

console.log()
let cca=namee.charCodeAt(4)
console.log(cca) //110 ASCII value of n




// //method chaining

// let fruits="banana"
// fruits.toUpperCase().toLowerCase().indexOf('n')
// //BANANA
// //banana
// //2 ==> number

console.log()
console.log("method chaining example")

let fn="diPAnshu ChawDE"
let op=fn.toUpperCase().toLowerCase().split(" ").some(function(el){
    return el == "dipanshu"
})
console.log(op)


