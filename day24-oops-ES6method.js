// program 1
class Person {

    firstName = "chinmay"
    lastName = "deshpande"
    age = 34
    rollNo = 7

}

let amol = new Person()
let chinmay = new Person()

console.log(amol)
console.log(chinmay)

amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo = 34
console.log(amol)
console.log(chinmay)

console.log('--------------------')

// program 2 
class PersonE {
    constructor(fn,ln,ag,rn){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rn
    }
}
let amol2 = new PersonE("amol","rao",34,66)
let chinmay2 = new PersonE("chinmay","deshpande",34,66)
let kajal2 = new PersonE("kajal","dule2",27,66)
console.log(amol2)
console.log(chinmay2)
console.log(kajal2)

//to print each object values one by one
console.log('--------------------')

let students=[amol2, chinmay2,kajal2]
students.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})

console.log('--------------------')
//program 3 function in ES6

class PersonF{
    setFirstname(fn){
        this.firstName=fn
    }

    getFirstName(){
        console.log(this.firstName)

    }
    setLastName(ln){
        this.lastName = ln
         }
        getLastName(){
            console.log(this.lastName)
         }
}

dip=new PersonF()
dip.setFirstname('dipanshu')
dip.getFirstName()
dip.setLastName('chawde')
dip.getLastName()
console.log(dip)


