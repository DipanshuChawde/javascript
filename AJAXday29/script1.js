// program 1
// function additionA() {
//     console.log("Hello world ...")
// }

// function additionB() {
//     console.log("Hello world B....")
// }

// additionB()
// additionA()


// program 2
// function additionD(){
//     setTimeout(function(){
//         console.log("D is called")
//     },3000)
// }

// function additionC(){
//     console.log("C called ")
// }

// additionD()
// additionC()


//program3 
//sync (Java script is syncronus)
//to make java script code asyncronous use setTimeout function

// function getInfo(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('get id')
//     },2000)
//     setTimeout(function(){
//         console.log('get info by id')
//     },1000)
// }

// getInfo()

//above will execute asyncronulys but ligically user should be created first then get id then get info 
//one solution is hell function 
//hell function is tightely coupled and can not use sub functions seperately

// program 4

// call back hell
// async ----- sync ----- help

// function getInfo(){
//     setTimeout(function(){   
//         console.log('user created')
//         setTimeout(function(){
//             console.log('get id')
//             setTimeout(function(){
//                 console.log('get info by id')
//             },3000)
//         },2000)
//     },1000)
// }
// //getInfo()

// //solution is promise
// //promise has three states 1..pending, 2...resolved, 3..rejected

// //program 5
// let pro=new Promise(function(resolve,reject){
//     let a=10
//     let b=10
//     if(a==b){
//         resolve('hello')
//     }
//     else{
//         reject('bye')
//     }
// })


// //pro.then(fnfor resolve(para){resolve block} , fn_for_reject(para){reject block})

// //consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

//control flow----- pro.will execute promise first then code in return block 
//in promise if condition satisfy resolve block esecuted and then control comes to first function of .then block
//if condition false reject and second function of .then block

//program6
//then and catch
//catch is used when we need to write generic reject 

// let pro1=new Promise(function(resolve,reject){
//     let a=10
//     let b=20
//     if(a==b){
//         resolve([11,22,33,44])
//     } 
//     else{
//         reject([1,2,3,4])
//     }
// })
// // consuming the promise
// pro1.then(function(arr){
//     console.log(arr[0])
// }).catch(function(arr){
//     console.log(arr[1])
// })

// program 7
// let pro2=new Promise(function(resolve,reject){
//     let fn='dipanshu'
//     if(fn.startsWith('d')){
//         resolve('starts with d')
//     }
//     else{
//         reject('does not start with d')
//     }
// })

// pro2.then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log('i will always execute')
// })

//program 8

let pro3=new Promise(function(resolve,reject){
    let a=10
    let b=10
    if(a==b){
        resolve('hello')
    }
    else{
        reject('bye')
    }
})

pro3.then(function(str){
    console.log(str)
    return str+' dipanshu'
}).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
}).finally(function(){
    console.log('i will always execute')
})


