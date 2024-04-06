//object => key:value pair(property)




//arr information ek student
//rollNumber
//age
//firstName
//lastName
// let info = ["kumari", "kumar", 45, 89]
//index 

let names=["dipanshu","nitin","tanish","neel","chawde"]
console.log(names)
 names.push("usha")
 names.unshift("sureshrao")
 console.log(names)

 console.log()
 names.pop()
 names.shift()
 console.log(names)


 console.log()
 console.log(names[0])


 console.log()
 for(let i=0;i<names.length;i++){
    console.log(names[i])
 }


 console.log()
 let i=0
 while(i<names.length){
    console.log(names[i])
    i++
 }





 //Objects key:value pair(property)

 //CRUD operation

//Creaate
 let info={
    fname:"dipanshu",
    lname:"chawde",
    age:39,
    class:"javascript"
 }



//Retrive
 console.log()
 console.log(info)
 console.log()

 //dot notation
console.log(info.fname)
console.log(info['fname'])
//bracket notation
console.log(info.lname)
console.log(info['lname'])


//Update 
// let info={
//     fname:"dipanshu",
//     lname:"chawde",
//     age:39,
//     class:"javascript"
//  }


//dot notation
info.fname="nitin"
console.log(info)

//bracket notation
console.log()
info['fname']="tanish"
console.log(info)


//Delete
// let info={
//     fname:"dipanshu",
//     lname:"chawde",
//     age:39,
//     class:"javascript"
//  }
console.log()
delete info.age
console.log(info)


console.log()
delete info["class"]
console.log(info)




//for loop

console.log()
let vehicle={
    color:"red" ,
    model:"sedan" ,
    number:1234
}
for(let prop in vehicle){
    console.log(vehicle[prop])
} 