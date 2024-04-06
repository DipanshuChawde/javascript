// object

let student={ 
    fname : "dipanshu",
    lname : "Chawde",
    rollno : 11,
    age : 39,
    skills : ["java","python", "SQL"]
}


//CRUD
// two notation bracket notation and dot notation
//retrive python

//1
console.log(student.skills[1])

//2
for(i=0;i<student.skills.length;i++){
    if(student.skills[i]=="python"){
        console.log(student.skills[i])
    }
}


//add trpescript in skills

student.skills.unshift("typescript")
console.log(student)



// add city = pune

student.city="pune"
console.log(student)
student["city"]="nagpur"
console.log(student)

//delet city

delete student.city
console.log(student)


student["city"]="nagpur"
console.log(student)


delete student["city"]

console.log(student)


let car={
    color : "white",
    model : "sedan",
    number : 12345,
    color : "red"

}

console.log(car)  // if two keys in property then it gets updated by old value see following output
//{ color: 'red', model: 'sedan', number: 12345 }





//assignment



console.log()
console.log("assignment")
let students = [
    {
        firstName: "Mayuri",
        lastName: "katwe",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks:50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks:100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks:35
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks:45
    }
]


// students.filter(function(el){
//     return el.marks<50
// }).forEach(function(el,index,arr){
//      el.marks=el.marks+10
// }).forEach(function(el){
//     if(el.marks>50){
//         console.log(el.firstname)
//     }
// })



// let q1= students.map(function(el,index,arr){
//         return el.marks=el.marks+10
//      })
// console.log(q1)


// students.filter(function(el){
//     return el.marks<50
// }).students.forEach(function(el){
//     if(el.marks>50){
//         console.log(el.firstname)
//     }
// })

console.log("----------------------")

let qq=students.filter(function(el){
    return el.marks<50
})
console.log(qq)

console.log("----------------------")
qq.forEach(function(el){
    el.marks=el.marks+10
})

console.log(qq)
console.log("----------------------")
qq.forEach(function(el){
    if(el.marks>50)
    console.log(el)
})


// console.log("************************************----------------------")

// students.filter(function(el){
//     return el.marks<50
// }).forEach(function(el){
//     el.marks=el.marks+10
// }).forEach(function(el){
//     if(el.marks>50)
//     console.log(el)
// })