// function createUser(){
//     setTimeout(function(){
//         console.log("newuser created")
//     },3000)
// }

// function getUserId(){
//     setTimeout(function(){
//         console.log("get user Id")
//     },2000)
// }

// function getUserInfo(){
//     setTimeout(function(){
//         console.log('get user info')
//     },1000)
// }


//--------------------------------------------------------------
//exectur async wise
// createUser()
// getUserId()
// getUserInfo()

//--------------------------------------------------------------------------------------------

// using promises

function createUser(){
let pro1=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },5000)
})
return pro1
}


function getUserId(){
    let pro2=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get user ID')
        },3000)
    })
    return pro2
}


function getUserInfo(){
    let pro3=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get user info')
        },1000)
    })
    return pro3
}

//with .then

// createUser().then(function(res){
//     console.log(res)
//     return getUserId()
// })
// .then(function(str){
//     console.log(str)
//     return getUserInfo()
// }).then(function(str){
//     console.log(str)
// }).catch(function(){
//     console.log('error')
// }).finally(function(){
//     console.log('i m last')
// })



//with async await

async function getUserInformation(){
    let one=await createUser()
    console.log(one)
    let two=await getUserId()
    console.log(two)
    let three=await getUserInfo()
    console.log(three)
}

getUserInformation()