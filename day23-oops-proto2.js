//object literal 

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNO:45,
    display:function(){
        console.log(this.firstName + this.lastName)
    }

}
chinmay.display()


//program 2 function constructor with prototype

function Person(fn, ln, ag)
{
    this.firstName=fn
    this.lastName=ln
    this.age=ag
}

dipa=new Person('dipanshu', 'chawde', 40)
console.log(dipa)

ru=new Person('rucha', 'gaware', 38)

Person.prototype.display=function(){
    console.log("i am "+this.firstName+"  and my age is "+this.age)
}
dipa.display()
ru.display()


//object is instance of function
//dipa is instance of Person

console.log(dipa instanceof Person)   //true
console.log(ru instanceof Person)   //true

//dipa is of type Person
//every object has one __proto__==parent.prototype
//dipa.__proto__==Person.prototype
console.log(dipa.__proto__==Person.prototype)




let family=['dipanshu', 'nitin', 'tanish','neel']
family.push('chawde')
console.log(family)


//as family is of type array
//object.__proto__==parent.prototype
console.log(family.__proto__==Array.prototype)

Array.prototype.hello = function(){
    console.log("hi dipanshu")
}

family.hello()
console.log(family instanceof Array)



//program3

function vechile(cl,ty){
    this.color=cl
    this.type=ty
    // this.country='india'
    // this.displayColor=function(){
    //     console.log(this.color)
    // }
}

maruti=new vechile('silver', 'ritz')
audi=new vechile('blue', 'SUV')
console.log(maruti)
console.log('------------------')
vechile.prototype.country='India'
vechile.prototype.displayColor=function(){
    console.log(this.color)
}

console.log(maruti)
console.log(maruti.country)
maruti.displayColor()
audi.displayColor()


//Proto in ES6 class 

class PersonA{
    constructor(fn, ln, age){
        this.firstName=fn
        this.lastName=ln
        this.age=age
        this.display=function(){
            console.log(this.firstName+ " " +this.lastName)
        }
    }

}

adi=new PersonA('aditya', 'masalkar', 31)
console.log(adi)

//PersonA {firstName: 'aditya', lastName: 'masalkar', age: 31, display: ƒ}


//with proto
console.log('---------------------')
class PersonB{
    constructor(fn, ln, age){
        this.firstName=fn
        this.lastName=ln
        this.age=age
    }
    display(){          //need to write finction declaration not experssion
        console.log(this.firstName+ " " +this.lastName)
    }
}
shiv=new PersonB('shivani', 'masalkar', 27)
console.log(shiv)
shivad=new PersonB('aditya', 'masalkar', 31)
console.log(shivad)
console.log('---------------------')


//objec.create() proto

let obj={
    init:function(fn, ln, ag, rn){
        this.firstName=fn
        this.lastName=ln
        this.age=ag
        this.rollNO=rn
    },
    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}

let amol4 = Object.create(obj)
console.log(amol4)
amol4.init("amol4","rao4",35,66)
console.log(amol4)
amol4.display()




