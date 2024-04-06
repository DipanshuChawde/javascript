//data type of array is object

//map(), filter(), reduce(), forEach()
// some() , every() , find() , findindex()


//map(function(el,index,arr)
            //action => performs calculation specified in function function (runction is recursive finction call till element in array) 
            //return=> array


//filter(function(el,index,arr)
            //action =>  perform action like elements greater than (not calculation) on every element of array
            //return=> new array



//reduce()
//reduce(function(acc,el,index,arr)0) acc i.e. accumulator act as temporary variable
                              //define acc as 0
        //action=> perform action on every element of array
        //return=> number 

//forEach()
//forEach(function(el,index,arr)
        //action=>  perform given action
        //return=> no return type








//length function use
let student=["mayuri","ram","sham","rahul"]
//             0         1      2     3
//             1         2       3    4

//length ==> property ==> give the count of total number of ele in array
console.log(student.length)//4

//4-1 ==> 3

console.log(student[0]) //mayuri
console.log(student[3])//rahul

console.log(student.length-1 )//last index

console.log(student[student.length-1])//last element




console.log()
//program to create new array of age after giving  array of birth year
let year=[1983, 1976, 2008,2017]
let ages=[]
for(let i =0;i<year.length;i++){
    let q= 2023-year[i]
    ages.push(q)

}
console.log(ages)

//map()

//map(function(el,index,arr)
            //action => performs calculation specified in function function (runction is recursive finction call till element in array) 
            //return=> array


//program to create new array of age after giving  array of birth year
console.log()
console.log("map() program to create new array of age after giving  array of birth year")

q1=year.map(function(el,index,arr){
    return 2023-el 
})
console.log(q1)

//example2
console.log()
console.log("map() to add 5 in each element of array")
let arr1=[10, 20, 30, 40, 50]
let q2=arr1.map(function(el, index, arr){
    return el+5
})
console.log(q2)

//example3 map with string array
console.log()
console.log("map with string") 
arr5=["a", "b", "c"]
let str=arr5.map(function(el,index,arr){
    return "hello "+ el
})
console.log(str)            //[ 'hello a', 'hello b', 'hello c' ]
console.log(typeof(str))    //object


// filter()
//filter(function(el,index,arr)
            //action =>  perform action on every element of array
            //return=> new array



 //program to create new array fron given array above 40 without filter
 
 console.log()
 console.log("without filter")
 arr2=[11,78,0,22,56,33,44,55,666,777,88]
 above40=[]
 for(i=0;i<arr2.length;i++){
    if(arr2[i]>40){
        above40.push(arr2[i])
    }
 }
console.log(above40)


console.log()
 console.log("using filter")
 //arr2=[11,78,0,22,56,33,44,55,666,777,88]
 let q3=arr2.filter(function(el,index,arr){
    return el>40                               //[ 78,  56, 44, 55, 666, 777, 88]
    //return el>40 && el <100                  //[ 78, 56, 44, 55, 88 ]
   
 })
console.log(q3)


console.log()
console.log("filter to find withdrawals and deposits")
let transaction=[1000, -2000, 5000, -1500, 7000, -8000, -1000]
let withdrawls=transaction.filter(function(el, index, arr){
    return el<0
})
console.log("withdrawls =" +withdrawls)
console.log()
let deposits=transaction.filter(function(el,index,arr){
    return el >0
})
console.log("deposits =" +deposits)


//reduce()
//reduce(function(acc,el,index,arr) acc i.e. accumulator act as temporary variable
        //action=> perform action on every element of array
        //return=> number 

console.log()
console.log("addition of all element without using reduce")   
arr4=[10, 20, 30, 40, 50]     
let total=0
for(i=0;i<arr4.length;i++){
total=total+arr4[i]
}
console.log(total)


console.log()
console.log("using reduce addition of all element  ") 

let addition=arr4.reduce(function(acc,el,index,arr){
    return acc+el
},0) //defined acc as 0 by default it is always 0
console.log(addition)
console.log(typeof(addition))


console.log()
let addition2=arr4.reduce(function(acc,el,index,arr){
    return acc+el
},100) //defined acc as 100 by default it is always 0
console.log(addition2)
console.log(typeof(addition2))

//forEach(function(el,index,arr)
        //action=>  perform given action
        //return=> no return type


 console.log()
 console.log("forEach() example no return type return undefined if tried")
 cities=["pune", "banglore", "nagpur", "delhi"]

 cities.forEach(function(el, index, arr){
    console.log("welcome " + el)
 })    
  



