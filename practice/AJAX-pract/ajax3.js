// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()
//promise.all()
//will execute promises till it get first reject ... 
//after getting first reject it will through shortcircut

//promise.race()
//it will race betweenthe promises and returns first executed promise

//promise.any()
//it will exectue till it get first resolve 

//promise.allsettled()
//it eill execute all and return whatever is result in array..
//if resolve return output ..if reject return reason 
//-------------------------------------------------------------------------
// async function promiseAll(){
//     let proAll= await Promise.all([
//         Promise.resolve('resolve1'),
//         Promise.resolve('resolve2'),
//         Promise.reject('reject1'),
//         Promise.resolve('resolve4')
//     ])
//     console.log(proAll)
// }

// promiseAll() //will give error
//-----------------solution--------------------------
async function promiseAll(){
    try {
        let proAll = await Promise.all([
            Promise.resolve('resolve1'),
            Promise.resolve('resolve2'),
            Promise.reject('reject1'), // This promise will still reject
            Promise.resolve('resolve4')
        ]);
        console.log(proAll); // This won't be reached because of the rejection
    } catch (error) {
        console.error('Error:', error); // This will log 'Error: reject1'
    }
}

//promiseAll();

//-------------------------------------------------------------------------------

//promise.race()-------------


// function addTime1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('hello1')
//         },3000)
//     })
// }

// function addTime2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('hello2')
//         },5000)
//     })
// }

// async function promiseRace(){
//     let race=await Promise.race([
//         addTime1(),
//         addTime2()
//     ])

//     console.log(race)
// }

// promiseRace()

//---------------------------------------------------------

//promise.any()-------------------------


// async function promiseAny(){
//     let proAny=await Promise.any([
//             Promise.reject('rej1'),
//             Promise.reject('rej2'),
//             Promise.resolve('res1'),
//             Promise.reject('rej3')
//     ])
//       console.log(proAny)  
//  }

//  promiseAny()

//----------------------------------------------------------------


//promise.allsettle()----------------


async function promiseAllSettle(){
    let proAS= await Promise.allSettled([
        Promise.resolve('resolve1'),
        Promise.resolve('res2'),
        Promise.reject('rej1'),
        Promise.reject('rej2'),
        Promise.resolve('res3')
    ])

    console.log(proAS)
}

promiseAllSettle()