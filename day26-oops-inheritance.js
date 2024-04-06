// Oops 


// Encapsulation 
// Inheritance 
// Polymorphism

// program 1 // incorrect way
// class Student {
//     constructor(fn,ln,adharNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//     }

// }

// let amol = new Student("amol","rao",34)
// console.log(amol)

// class Teacher {

//     constructor(fn,ln,adharNo,salary){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//         this.salary = salary
//     }
// }

// let amolT = new Teacher("amolt","raoT",124,100000)
// console.log(amolT)
// //if same student is teacher then above is not good practice


// //inheritance
// class student{
//     constructor(fn,ln,adharNo){
//         this.firstName=fn
//         this.lastName=ln
//         this.adharNo=adharNo
//     }
//     dipalay(){
//         console.log(this.firstName+ " " +this.lastName)
//     }
// }
// class teacher extends student{
//     salary=10000
// }

// let dip=new teacher("dipanshu","chawde","abc")
// console.log(dip.salary)
// console.log(dip.firstName)
// console.log(dip.lastName)
// console.log(dip.adharNo)
// dip.dipalay()



// program 3

class student{
    constructor(fn,ln,adharNo){
        this.firstName=fn
        this.lastName=ln
        this.adharNo=adharNo
    }
    dipalay(){
        console.log(this.firstName+ " " +this.lastName)
    }
}
class teacher extends student{
    constructor(fn,ln,adharNo,sal){
        super(fn,ln,adharNo)
        this.salary=sal
    }
    dipalayT(){
        console.log(this.salary)
    }
   
}

let ram=new teacher("ram","rao","abc",10000)
console.log(ram)
console.log(ram.firstName)
console.log(ram.lastName)
console.log(ram.adharNo)
console.log(ram.salary)
ram.dipalay()
ram.dipalayT()

// program 4
// single  interitance

class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather {

    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fnam + this.lastName)
    }

}

let shirish = new Father("Manohar", "Deshpande", "Shirish")

console.log(shirish.firstName)
console.log(shirish.lastName)
console.log(shirish.fname)

shirish.displayFName()
shirish.displayGName()

console.log('------------------')
// program 5
// Multi-level inheritance
class GrandFatherB {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayGName() {
        console.log(this.firstName + " " +this.lastName)
    }

}

class FatherB extends GrandFatherB {

    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }

    displayFName() {
        console.log(this.fname +" " +this.lastName)
    }

}

class sonB extends GrandFatherB{
    constructor(fn, ln, ssn){
        super(fn,ln)
        this.sname=ssn
    }
    displaySName() {
        console.log(this.sname + " " +this.lastName)
    }
}

let adi=new sonB('niranjan','masalkar','aditya')
console.log(adi)
adi.displaySName()
adi.displayGName()

let chotu=new FatherB("gopalrao","masalkar","niranjan")
console.log(chotu)
chotu.displayFName()
chotu.displayGName()

// herarchial inheritance 
console.log('------------------')


class Mothetr{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayMname(){
        console.log(this.firstName +" "+ this.lastName )
    }    
}

class SonM extends Mothetr{
    constructor(fn,ln,snm){
        super(fn,ln)
        this.sonName=snm
    }
    displaySname(){
        console.log(this.sonName +" "+ this.lastName )
    }  
}

class DoughterM extends Mothetr{
    constructor(fn,ln,dnm){
        super(fn,ln)
        this.doughterName=dnm
    }
    displayDname(){
        console.log(this.doughterName +" "+ this.lastName )
    }  
}

let ad=new SonM('dipti','masalkar','aditya')
ad.displayMname()
ad.displaySname()


let ru=new DoughterM('dipti','masalkar','rucha')
ru.displayMname()
ru.displayDname()




