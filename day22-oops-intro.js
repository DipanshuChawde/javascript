// below is called as object literal
//need to write fn, ln, age for every object
//solutions are function constructor, ES6 class, object.create()

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    age:33
}
let ram = {
    firstName:"ram",
    lastName:"dani",
    rollNo:34
}


//function constructior

function Person(fn, ln, age){
    this.firstName=fn
    this.lastName=ln
    this.age=age
}

dipa=new Person('dipanshu', 'chawde', 40)
console.log(dipa)

tan=new Person('tanish', 'chawde',16)
console.log(tan)

// retrive , update , add , delete


console.log(dipa.firstName)
console.log(dipa['firstName'])

//update in perticular object
dipa.city='pune'
dipa['country']='india'
console.log(dipa)
delete dipa.age
console.log(dipa)




tan.class=10
console.log(tan)

//deleting and property
delete dipa.age
//delete dipa['age']
console.log(dipa)




// ES6 class

class PersonA {
    firstName
    lastName
    age
    rollNo
}

let dip=new PersonA()
console.log(dip)

dip.firstName='dipanshu'
dip.lastName='chawde'
dip.age=40
dip.rollNo=34
console.log(dip)

//above is not that useful as need to write more code 

//solution is ES6 class with function constructor

//ES6 class with constuructor

class PersonB{
    constructor(fn, ln, ag, rn){   //constructor is called by default with class object
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNo=rn
    }
}

neelobj=new PersonB('neel', 'chawde',6,21)
console.log(neelobj)

console.log(neelobj.firstName)

console.log(neelobj['firstName'])

console.log('-----------------')
//object.create()

let poorva=Object.create({})
console.log(poorva)

poorva.firstName='poorva'
poorva.skills='java'
poorva.experience=5
console.log(poorva)


//object literals
let dipa1={
    firstName:'dipanshu',
    lastName:'chawde',
    age:40,
    display:function(){
        console.log(this.firstName + " " +this.lastName)
    }

}

console.log(dipa1)
console.log(dipa1['firstName'])
dipa1.display()

let chinmay2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        // this ==> chinmay
        console.log(this.firstName + this.lastName)
    }
}
dipa1.display()
chinmay2.display()
console.log('--------------')


// //prototype concept

// //function constructor

// function PersonC(fn,ln){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.display = function(){
//         console.log(this.firstName + " "+ this.lastName)
//     }
// }

// let tank=new PersonC('tanish', "chawde")
// let adik=new PersonC("aditya", "masalkar")
// console.log(tank)
// console.log(adik)

// tank.display()
// adik.display()