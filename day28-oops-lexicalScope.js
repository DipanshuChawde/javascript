// Program 1

// Encapsulation 
// lexical scope

function Addition(){
    let a=10
    let b=20
    console.log(a+b)

    function addA(){
        let c=30
        let d=40
        console.log(a+b+c+d)

        function addC(){
            let e=50
            let f=60
            console.log(a+b+c+d+e+f)
        }
        addC()
    }
    
    addA()
    
}
Addition()


//program2
function additionD(x,y){
    console.log(x+y)
    return x+y
    console.log('hello')  
    //this will never get executed coz return is the last stsmt of function
}
let x=additionD(2,3)
console.log(x)


//program 3
// number as parameter and number as a return type 
function Add1(x,y){
    return x+y
}
let a1=Add1(2,2)
console.log(a1)

//program4
// string as a parameter and string as a return 
function Add2(str){
    return 'hello '+str
}

let a2=Add2('dipanshu')
console.log(a2)

// boolean as a parameter and boolean as return type
function cabDrive(age, haveVehicle){
    if(age >=18 && haveVehicle){
        return true
    }
}
let q5 = cabDrive(21,true)
console.log(q5)


// array as parameter and array as a return type
cities=['pune','karanja','amravati','akola']
function addCity(arr,city){
    arr.push(city)
    return arr
}
ncty=new addCity(cities,'amravati')
console.log(ncty)
console.log(cities)

//object as parameter and object as return type 

let info={
    first_Name:'dipanshu',
    last_Name:'chawde',
    age:40
}
function addCty(obj){
    obj.city='pune'
    obj['skill']='SQL'
    return obj
}

let obj1=addCty(info)
console.log(obj1)
console.log(info)

// function as a return
function fun(){
    return function fun1(){
        console.log('hello')
    }
}

let f2=fun()
console.log(f2)//this will print function

f2() //this will execute function returened bu fun()




//function as parameter and function as return type
let f1= function myFun(){
    console.log('dipanhu')
}

function myFun(fun){
        //return fun
    return function fun1(){
        console.log('hello')
          fun()
    }
}

let f3=myFun(f1)
console.log(f3)
f3()


