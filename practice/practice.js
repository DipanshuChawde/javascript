//console.log("test")

let userData={
    "userOne":
    {
    "first_name":"aditya",
    "last_name":"masalkar",
    "email":"adityamasalkar@gmail.com",
    "message":"i m learning Power PMP"
    },
    "userTwo":
    {
        "first_name":"rucha",
        "last_name":"gaware",
        "email":"ruchagaware@gmail.com",
        "message":"i m learning Power bi"
        
    }
    
}
// for(let keys in userData){
//     for(let key2 in userData[keys]){
//     console.log(userData[keys][key2])
// }
// }

// for(let keys in userData){
    
//     console.log(userData[keys].first_name)
// }
// ---------------------------------demo study---------------------
// let a=10
// let b=new Array()
// b.push(1)
// b.push(2)
// console.log(b)
// console.log(typeof(b))

// let c=[]
// console.log(typeof(c))

// let r=c.push('a')
// console.log(c)
// console.log(r)
// r=c.push('dipanshu')
// console.log(c)
// console.log(r)
// r=c.push(10)
// console.log(c)
// console.log(r)

// d=[]
// d=10
// console.log(d)
// console.log(typeof(d))
// d=20
// console.log(d)
// console.log(typeof(d))


// e=[10,20,30,40,50]
// let x= e.length-1
// console.log(x)

// e.splice(2,0,100)
// console.log(e)


//-------------------------------------

//Array

// want to store more than one value of any data type

//Array data collection of diffrerent date  type

//     0    1       2       3 
//let a=[10, 20, 'dipanshu', true]
//length 4
//elements of array
//indexing => starts 0
 //           end  3=> length-1

 //java script 
 // Array => object
 //           properties 
 //           methods  
 
 
 //objet => person
 //properties => height , weight , age , color
 //methods => talk(), walk(), gym(), eat() 


 //talk() => 
 //action => conversation 
 // return => motivation , solution , decision 

 //takeway
// Array  object
//properties 
//methods 
//  action 
//  return 

//     0    1   2  3
let a=[10, 20 ,30,40]
let alen=a.length
console.log(alen)

console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

//loop

//for while
//     0    1   2   3
let x=['a','b','c','d']  //4
// let xlen= x.length
// // initialization ; condition  ; incr/dec
// for(let i=0; i < x.length; i=i+1){
//     //console.log(i)
//     console.log(x[i])
// }

//----------------
// while
let j=0
while(j < x.length){
    console.log(x[j])
    j=j+1
}
//----------othervex while----------
console.log('---------othervex while----------')
let aa=['a',12,45,"dipanshu",'tanish',2.5,false,true,23,45]
let k=0
while(aa[k]!=true){
    console.log(aa[k])
    k=k+1
}

console.log('---------othervex while----------')

//--------------------


//object CRUD
let a1=[]
let a2=new Array()

let names=['dipanshu', 'nitin', 'tanish']

// push()   unshift(), 
//pop(), shift()

// push() 
// action=> add element at last 
// return => new length

console.log(names)
let x1= names.push('neel')
console.log(names)
console.log(x1)

// unshift() 
// action=> add element at first
// return => new length

x1=names.unshift('chawde')
console.log(names)
console.log(x1)

console.log('---------------------------------')
// pop() 
// action=> remove last element 
// return => removed element
//[ 'chawde', 'dipanshu', 'nitin', 'tanish', 'neel' ]
x1 = names.pop()
console.log(names)
console.log(x1)


// shift() 
// action=> remove first element  
// return => removed element


x1=names.shift()
console.log(names)
console.log(x1)

console.log('---------------------------------')

//indexOf() ,  at(),  reverse(), flat(), concat(), join()
let arr=[1,2,3,4,5]

console.log(arr.indexOf(3))


console.log(arr.at(0))

let rev=arr.reverse()
console.log(rev)
//        0 1   2   3   4
let arr1=[1,2,[3,4],5,[7,8]]

let arrf=arr1.flat()
console.log(arrf)

let y1=['java', 'python','js']
let y2=['cypress', 'playwright']

let y3=y1.concat(y2)
console.log(y3)

let y4=y2.concat(y1)
console.log(y4)


console.log('---------------------------------')

let stmt=['my','name','is','dipanshu']
let str=stmt.join(' ')
console.log(str)

//-----------------------------------

console.log()
console.log("some() returns true if condition satisfy for at least one element otherwise false")    
let arrr=[10,20,30,40,50]
let q=arrr.some(function(el,index,arr){
    //return el > 40 //true
    console.log(arr)
    return el>60 //false
})
console.log(q) 