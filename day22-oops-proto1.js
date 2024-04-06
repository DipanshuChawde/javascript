
//prototype concept

//function constructor

function PersonC(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    this.display = function(){
        console.log(this.firstName + " "+ this.lastName)
    }
}

let tank=new PersonC('tanish', "chawde")
let adik=new PersonC("aditya", "masalkar")
console.log(tank)
console.log(adik)

tank.display()
adik.display()
//shows on inspect console browser
//it should show only property which is unique but dipsplaying display : f also
//PersonC {firstName: 'tanish', lastName: 'chawde', display: ƒ}
//PersonC {firstName: 'aditya', lastName: 'masalkar', display: ƒ}

//solution for that to write it in prototype of PersonC function 
//object will inherite all property written in  of prototype of parent 
console.log("----------------")


//example is arrany here hello is newly written and includes is already writen in prototype of array
arra1=new Array(22, 33, 44)
console.log(arra1)

Array.prototype.hello = function(){
    console.log("Minskole")
}
let names = ["chinmay","ram","sham"]
console.log(names)
names.hello()
console.log(names._proto_ === Array.prototype)
let c=names.includes('ram')
console.log("-----"+ c)

console.log("----------------")

// prototype inheritance
// every object has one _proto_ == Parent.protype
//important concept
console.log(tank.__proto__==PersonC.prototype)
console.log(adik.__proto__ ==  PersonC.prototype)


//function under prototype of function constructor

function PersonD(fn, ln){
    this.firstName=fn
    this.lastName=ln
}

nitu=new PersonD('nitin', 'chawde')
console.log(nitu)
ruch=new PersonD('rucha', 'gaware')
console.log(ruch)

PersonD.prototype.display=function(){
    console.log(this.firstName+" "+this.lastName)
}

//below on inspect console browser index-day22-oops-proto1.html
//PersonD {firstName: 'nitin', lastName: 'chawde'}
//PersonD {firstName: 'rucha', lastName: 'gaware'}
// now only distant property are showing similer are in prototype

// PersonD {firstName: 'nitin', lastName: 'chawde'}
// firstName:"nitin"
// lastName:"chawde"
// [[Prototype]]: Object
// display:ƒ ()
// constructor:ƒ PersonD(fn, ln)
// [[Prototype]]:Object


//here line no 66, 9 are type of function experssion type

//there are 2 types of function function declaration, function experssion, arrow function

//function declaration
function abc(){
    console.log('i m in abc')
}
abc()

//function experssio
let funExpression=function(){
    console.log("i m in function experssion")
}
funExpression()

// arrow function
let arrowfun=()=>{
    console.log("i m in arrow function")
}

arrowfun()