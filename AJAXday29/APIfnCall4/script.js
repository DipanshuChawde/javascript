// Promise.all()
// Promise.race()
// Promise.any()
// Promise.allSettled()

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

//promise.all()
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


//promise.race()

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


//promise.any()

async function PromiseAny(){
    let d=await Promise.any([
        Promise.reject('bye'),
        Promise.reject('bye'),
        Promise.resolve('hello1any'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(d)
}

//promise.allsettled()

async function PromiseAllSettle(){
    let d=await Promise.allSettled([
        Promise.reject('bye'),
        Promise.reject('bye'),
        Promise.resolve('hello1any'),
        Promise.reject('bye'),
        Promise.resolve('hello')
    ])
    console.log(d)
}

PromiseAllSettle()