// let arr1=[23,45,67,89,76,54]

// //  function addArrEle(arr){
// //     total=0
// //     for(i=0;i<arr1.length;i++){
// //         total=total+arr1[i]

// //     }
// //     return total
// //  }



// // console.log(addArrEle(arr1))

// // //=========
// // total=0
// // arr1.forEach(function(el){
// // total=total+el
// // })

// // console.log(total)

// // //==========
// // arr1.forEach(function(el){
// // if(el%2==0){
// //     console.log(el + " is even")
// // }
// // else 
// // console.log(el + " is odd")
// // })


// // let str1="dipanshu"
// // let str2=""
// // function revString(str){

// //     for(let i=0;i<str.length;i++){
// //      str2=str[i]+str2
// //     }
// //     return str2
// // }


// // console.log(revString(str1))


// // console.log(s)


// // let arrno=[23,45,65,32,5,78,90,46,0,102,56,78]
// // max=0
// // arrno.forEach(element=>{
// // if(element>max){
// //     max=element
// // }
// // })

// // console.log(max)


// // str1="dipanshu nitin chawde"
// // vow="aeiouAEIOU"
// // count=0
// // for(i=0;i<str1.length;i++){

// // if(vow.includes(str1[i])){
// //     count++
// // }
// // }
// // console.log(count)


// let str1="nitin"

// let revStr=str1.split("").reverse().join("")
// if(str1==revStr){
//     console.log("palendrome")
// }

// let str="aabbcbba"
// let str2=str.split('').reverse().join('')
// if(str===str2){
//     console.log(str+" is palandrome ")
// }
// else {
//     console.log(str+"is not palendrome")
// }



// let sentence = "dipanshu nitin chawde"
// let arrset= sentence.split(" ").reverse().join(" ")
// console.log(arrset)


// arrset = sentence.split(" ")
// let arr2=arrset.map(function(el){
//     return el.split("").reverse().join('')
// })

// console.log(arr2)

var student = {
    college: 'abc'
}

var stud1 = Object.create(student)
delete stud1.college
console.log(stud1.company)



let arr = [1, 2, 3, 2, 1, 4, 5, 4, 3, 2]
let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
        continue
    }
    else {
        arr2.push(arr[i])
    }
}
console.log(arr2)
arr = arr2
console.log(arr)


let str = "dipanshu nitin chawde"
let revStr = str.split('').reverse().join('')
console.log(revStr)

let revWord = str.split(' ').reverse().join(' ')

//revWord.reverse().join(' ')

console.log(revWord)
//----------------------------------------

let arrStr = str.split(' ')
let revStrAplha = arrStr.map(function (el, index) {
    return el.split('').reverse().join('')
})
console.log(revStrAplha)
//-----------------------------------------------
let palStr = "nitina"
let revPalStr = palStr.split('').reverse().join('')
if (revPalStr == palStr) {
    console.log('palandrome')
}
else {
    console.log('not palandrome')
}


let arr4 = [90, 70, 10, 20, 30, 40, 50, 60]

let q1 = arr4.find(function (el, index) {
    return el > 30
})
console.log(q1)



// let up=str.split(' ')
// let up1=up.map(function(el,index){
//     let newStr=""
//     for(let i=0;i<el.length;i++){
//         if(i==0){
//             el[i].toUpperCase
//         }
//         else { el[i].toLowerCase }
//         }
//         return str+el[index]
// })
// console.log(up1)

let count = 0
vovel = "aeiouAEIOU"
for (let i = 0; i < str.length; i++) {
    if (vovel.includes(str[i])) {
        count++
    }
}
console.log(count)

console.log('----------------')
let k = 1

for (let i = 1; i <= 5; i++) {
    //let rowoutput= " "
    let rowop = " "
    for (let j = 1; j <= i; j++) {
        //rowoutput+= " "+ j
        rowop += " " + j
        //console.log(j)
    }
    console.log(rowop)
}

console.log('---------------------')

for (let i = 1; i <= 5; i++) {
    let rowop1 = " "
    for (let j = 1; j <= i; j++) {
        rowop1 = rowop1 + " *"
    }
    console.log(rowop1)
}

console.log('-------------....--------')
let row=" "
let ro1=""
let ro2=""
for (let x = 1; x <= 5; x++) {
    row = " "
    ro1 = " "
    ro2=" "
    for (let k = 1; k <= x; k++) {
        row = " "
        
        for (let y = 5; y > k; y--) {
            row = row + " "
        }
        ro2=ro1+" *"
        ro1 = row + ro2 
    }
    console.log(ro1)
}


let strQ = '25'
let m = strQ.padStart(4,'0')
console.log(m)


let strQM = '25'
let n = strQ.padEnd(8,"a")
console.log(n)

//---------------
console.log('-----------------------------------------------------------------')
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


students.forEach(function(el) {
    console.log(el)
    
});



console.log('////////////////////////////')

let info={
    firstName: "Mayuri",
    lastName: "katwe",
    age: 25,
    city: "nashik",
    skills: ["java", "python"],
    marks:50
}
console.log(info.firstName)
for(keys in info){

    console.log(keys +" : " +info[keys])
}