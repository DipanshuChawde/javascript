//by default java script is synchronous
//to make it async use time out function


// //sync example
// function addA(){
//     console.log("i m in addA")
// }

// function addB(){
//     console.log("i m in addB")
// }

// addA()
// addB()
// //-----------------------------------------------


//make it async using set time out function

// function addA(){
//     setTimeout(function(){
//         console.log('i am in set time out addA')
//     },2000)
// }

// function addB(){
//     setTimeout(function(){
//         console.log("i m in set time out addB")
//     },3000)
// }

// addB()
// addA()

// //-------------------------------------------------------------

//above will execute asyncronulys but ligically user should be created first then get id then get info 

// function getID(){
//     setTimeout(function(){
//         console.log("ID created")            
//     },5000)
//     setTimeout(function(){
//         console.log("get ID ")
//     },2000)
//     setTimeout(function(){
//         console.log("get info by ID")
//     },1000)

// }

// getID() 

//-----------------------------------------------------------------------------------------------------
//one solution is hell function 
//hell function is tightely coupled and can not use sub functions seperately
//first outer function executed 

// function getID(){
//     setTimeout(function(){
//         console.log("create ID")
//         setTimeout(function(){
//             console.log("get user ID")
//             setTimeout(function(){
//                 console.log("get user info by ID")
//             },3000)
//         },2000)    
// },1000)
// }

// getID()
//--------------------------------------------------------------------------------------------------------


// in callback hell is tightly coupled inner function is not used 

// another solution for this is promises

// let pro1=new Promise(function(reject,resolve){
//     let a=100
//     let b=20
//     if(a>b){
//         resolve('resolved')
//     }
//     else{
//         reject('rejected')
//     }
// })

// pro1.then(function(res){
//     console.log(res)
// },
// function(rej){
//     console.log(rej)
// }
// )

// //syntax---- pro.then(function(str-resolve){ }, function(str-rej){ })
// //-------------------------------------------------------------------------------------

// with catch block

// let pro3=new Promise(function(resolve,reject){
//     let str="adipanshu"
//     if(str.startsWith('d')){
//         //resolve('resolve start with d')
//         resolve(str)
//     }
//     else{
//         reject('reject')
//     }
// })

// pro3.then(function(str){
//     console.log(str)
//     return str+"  hello"
// }).then(function(str){
//     console.log(str)
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log("i will definately execute")
// })

//-------------------------------------------------------------------------------------

//with async await
