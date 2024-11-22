// program 1
let x = 10 
console.log(x)
x = 400
console.log(x)

// program 2
const h = 100
console.log(h)
//h = 900

// program 3
// Arithmetic operation ---> + , - , * , / , %

let c = 10
let d = 5

console.log(c+d)
console.log(c-d)
console.log(c*d)
console.log(c/d)
console.log(c%d)

let s = 9
let t = 3

console.log(s-t)
console.log(s+t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

//prog3 
// function 
function Calculator(){
    console.log(10+5)
    console.log(10-5)
    console.log(10*5)
    console.log(10/5)
    console.log(10%5)
}
Calculator()

// program 3
// function 
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(4,2)

// program 4
// function without parameter and without return type 
function add(){
    console.log(9+9)
}
add()
add()
add()
add()

// function with parameter and without return 
function addB(x,y){
    console.log(x+y)
}
addB(16,4)
addB(5,4)
addB(15,5)

// function with parameter and with return type
// 100 given  // 100 + 100 , 100 - 50 , 100 * 0.10 , 100 / 5
// 100 shown // no use
function addC(x,y){
    return x + y
}
let q2 = addC(4,2)
console.log(q2)
console.log(q2 + q2)
console.log(q2 * 0.10)
console.log(q2 + 2)
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
console.log('-----------------------------------------------------')

function Calculator2(x,y){
   
    return {
        a:x+y,
         b:x-y,
        c:x*y,
        d:x/y,
         e:x%y
    }
}

//let [ad,su,mul,dv]= Calculator2(20,10)
let res= Calculator2(20,10)
console.log(res.a)