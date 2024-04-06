//solution to call back hell

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


//solution to above using promise

function userCreate(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user createrd')
            //console.log('1')  //to check when this function is executing
        },3000)
    })
    return pro
}

function userId(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Id created')
            //console.log('2')
        },2000)
    })
    return pro
}

function getInfo(){
    let pro=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get Info')
           // console.log('3')
        },1000)
    })
    return pro
}

// userCreate()
// userId()
// getInfo()
//as all function  is async so getinfo executed then userid and then usercreate


//solution to call async function syncronise way is .then block

// userCreate().then(function(str){
//     console.log(str)
//     return userId()
// }).then(function(str){
//     console.log(str)
//     return getInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log('error occoured')
// }).finally(function(){
//     console.log('i will execute last')
// })


//one more solution is async await

async function getUserInformation(){
    let one =await userCreate()
    console.log(one)
    let two=await userId()
    console.log(two)
    let three=await getInfo()
    console.log(three)

}
getUserInformation()



