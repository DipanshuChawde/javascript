// // 1. Reverse each word of a String:
// let str2='dipanshu nitin chawde'
// arrstr=str2.split(" ")
// let finalstr=""
// let revstr2=""
// for(let j=0;j<arrstr.length;j++){
//     let revstr2=""
// for(i=0;i<arrstr[j].length;i++){
//  revstr2=arrstr[j][i]+revstr2
// }
// //finalstr=finalstr + " " +revstr2
// finalstr=finalstr +revstr2+ " "
// }
// console.log(finalstr)

// // 6. Check for Prime Number:
// console.log('6. Check for Prime Number:')
// let prno=[1,2,3,4,5,6,7,8,9,0]
// let flag=false
// function primeNo(prno){
// for(i=2;i<prno;i++){
//     if(prno==0 || prno==1){
//         return false
//     }
//     else if(i!=prno && prno%i==0){
//         return true
//     }
// }
// }
// prno.forEach((prno)=>{
// let retf=primeNo(prno)
// if(retf==true){
//     console.log(`${prno} is not prime no`)
// }
// else{
//     console.log(`${prno} is prime no`)
// }
// })

async function PromiseAny(){
    let users=await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('hello'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(users)
}
//PromiseAny()

function addTime1(){
    
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('hello1')
    },3000)
})
}


function addTime2(){
return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('hello2')
    },2000)
})

}

async function PromiseRace(){
let c= await Promise.race([
    addTime1(),
    addTime2()
])
console.log(c)
}

//console.log(PromiseRace())
//PromiseRace()
async function promiseAny(){
    let proAny=await Promise.any([
            Promise.reject('rej1'),
            Promise.reject('rej2'),
            Promise.resolve('res1'),
            Promise.reject('rej3')
    ])
      console.log(proAny)  
 }

// promiseAny()








// async function promiseAll(){
//     try {
//         let proAll = await Promise.all([
//             Promise.resolve('resolve1'),
//             Promise.resolve('resolve2'),
//             Promise.reject('reject1'), // This promise will still reject
//             Promise.resolve('resolve4')
//         ]);
//         console.log(proAll); // This won't be reached because of the rejection
//     } catch (error) {
//         console.error('Error:', error); // This will log 'Error: reject1'
//     }
// }

// promiseAll();

// let year=[1983, 1976, 2008,2017]
// console.log()
// console.log("map() program to create new array of age after giving  array of birth year")

// q1=year.map(function(el,index,arr){
//     if(el>2000){
//     return 2023-el }
// })
// console.log(q1)
//slice
//              0        1         2        3          4         5
let citiess = ["pune","mumbai","banglore","chennai","kolkata","mysore"]
//              -6        -5      -4        -3         -2         -1
console.log()
console.log("slice")
//slice(startIndex,EndIndex(not included))
let sl1=citiess.slice(2)
console.log(sl1)                     //[ 'banglore', 'chennai', 'kolkata', 'mysore' ]
console.log()
let sl2=citiess.slice(1,5) 
console.log(sl2)                       //[ 'mumbai', 'banglore', 'chennai', 'kolkata' ]
console.log()
let sl3=citiess.slice(0,-1)
console.log(sl3)                        //[ 'pune', 'mumbai', 'banglore', 'chennai', 'kolkata' ]
console.log()
let sl4=citiess.slice(-5,-2)
console.log(sl4)                        // [ 'mumbai', 'banglore', 'chennai' ]
console.log(citiess.slice(-5,4))
console.log()
console.log(citiess.slice(-5,-1))
console.log()
console.log(citiess.slice(-1,-5))
console.log()
console.log(citiess.slice(-2))