//object literals
let mayuri = {
    firstName: "Mayuri",
    lastName: "Katwe",
    rollNo: 34,
    skills: ["java", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(mayuri.displayName)//function
mayuri.displayName()

let sham = {
    firstName: "sham",
    lastName: "Kumar",
    rollNo: 12,
    skills: ["py", "js"],
    displayName: function () {
        console.log(this.firstName + this.lastName)
    }
}

//100 ==> 100 object

//template

//ES6(4 types) 
    //without constructor
    //with constructor
    //with function
    //set and get keyword

//1. without function
class Person{
    firstName
    lastName
    rollNo
    skills
    display(){
        console.log(this.firstName+ " " +this.lastName)
    }
}

let dip=new Person()
dip.firstName="dipanshu"
dip.lastName="chawde"
dip.rollNo=34
dip.skills="SQL"
console.log(dip)

dip.display()
console.log(dip.firstName)


console.log('====================')
//2. with constructor

class PersonA{
    constructor(fn, ln, rn, sk){
        this.firstName=fn
        this.lastName=ln
        this.rollNo=rn
        this.skills=sk
    }
       display(){
        console.log(this.firstName+ " " +this.lastName)
    }
}

ruch=new PersonA('rucha','gaware', 21, 'powerBi')
console.log(ruch)
ruch.display()
console.log(ruch.skills)

console.log('====================')
//3 with function

class PersonB{
    setFirstName(fn){
        this.firstName=fn
    }
    setlastName(ln){
        this.lastName=ln
    }
    setrollNo(rn){
        this.rollNo=rn
    }
    setskills(sk){
        this.skills=sk
    }
    display(){
        console.log(this.firstName+ " " +this.lastName)
    }    
}
adi=new PersonB
adi.setFirstName('aditya')
console.log(adi)

adi.setlastName('masalkar')
adi.setrollNo(1)
adi.setskills('proe')
console.log(adi)
adi.display()



console.log('====================')
//set and get keyword
//here set and get are keyword and firstName is property it is not function


class PersonC{
    set firstName(fn){
        this.first_Name=fn
    }
    get firstName(){
        return this.first_Name
    }

    set lastName(ln){
        this.last_Name=ln
    }
    get lastName(){
        return this.last_Name
    }

    set rollNo(rn){
        this.roll_No=rn
    }
    get rollNo(){
        return this.roll_No
    }

    set skills(sk){
        this.skillss=sk
    }
    get skills(){
        return this.skillss
    }
    display(){
        console.log(this.first_Name+ " " +this.last_Name)
    } 

}

shiv=new PersonC()
console.log(shiv)
shiv.firstName='shivani'
shiv.lastName='masalkar'
shiv.rollNo=55
shiv.skills='testing'
console.log(shiv)

shiv.display()
console.log(shiv.firstName)