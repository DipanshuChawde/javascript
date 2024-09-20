// some() , every() , find() , findindex()
// // flat() slice() splice() fill() sort()


//some()
    //some(function(el,index,arr)
    //action=> returns true if condition satisfy for at least one element otherwise false
    //return=> true if at least one match otherwise false

//every()
    //every(function(el,index,arr)
    //action=> returns true if condition satisfy for every element otherwise false
    //return=>true if every element match otherwise false

//some()
    //some(function(el,index,arr)
    //action=> returns true if condition satisfy for any of element otherwise false
    //return=>true if any element match otherwise false


//find()
    //find(function(el,index,arr)
    //action=>finds first element which match condition
    //return=>element return     

//findIndex()
    //findIndex(function(el,index,arr)
    //action=>finds first index which match condition
    //return=>index return

//flat()
    //let qf=state.flat()
    //action=>create one dimentional array of multidimentional array
    //return=>object(new array)


//slice
    //slice(startIndex,EndIndex(not included))
    //action=> slice array from given index befor given end index end index not included 
    //return=>new array (only sliced array)



//splice()
    //splice(index,numberOfElmentstoBeDeleted,rep1,rep2)  
    //action=>delet element from array from given index   and number to be deleted from index, 
    //and  give replace deleted element with any no of element
    //return=> updated same array


//fill()
    //fill(value: number, start?: number | undefined, end?: number | undefined): 
    //action=>filles the element of any type from start index to end index
    //return=> update existing array 




//sort()
    //action=>sort: alphabetically/ assending
    //return=>update existing array    



console.log()
console.log("some() returns true if condition satisfy for at least one element otherwise false")    
let arr=[10,20,30,40,50]
let q=arr.some(function(el,index,arr){
    //return el > 40 //true
    return el>60 //false
})
console.log(q)         //false


//every()
console.log()
console.log("every() returns true if condition satisfy for every element otherwise false")
let q2=arr.every(function(el, index,arr){
    return el>40
})
console.log(q2)               //false

//find()
//arr=[10,20,30,40,50]
console.log()
console.log("find()")
let q3=arr.find(function(el,index,arr){
    return el>30
})
console.log(q3)  //40
console.log(typeof(q3))  //number


//findIndex
console.log()
console.log("findIndex")
//let arr=[10,20,30,40,50] already defined above
let q4=arr.findIndex(function(el,index,arr){
    return el > 40
})
console.log(q4)      //4

// flat() slice() splice() fill() sort()


//flat()
console.log()
console.log("flat")
//                    0                        1                 2
//                0        1          0         1          0          1
let state = [  ["wardha","nagpur"],["chennai","mysore"],["bhopal","indore"]]
console.log(state[0][1])
console.log(state[1][0])
console.log(state[2][1])
let qf=state.flat()
console.log(qf)                      //[ 'wardha', 'nagpur', 'chennai', 'mysore', 'bhopal', 'indore' ]
console.log(typeof(qf))

//slice
//              0        1         2        3          4         5
let citiess = ["pune","mumbai","banglore","chennai","kolkata","mysore"]
//              -6        -5      -4        -3         -2         -1
console.log()
console.log("slice")
//slice(startIndex,EndIndex(not included))
let sl1=citiess.slice(2)
console.log(sl1)                     //[ 'banglore', 'chennai', 'kolkata', 'mysore' ]
console.log()
let sl2=citiess.slice(1,5) 
console.log(sl2)                       //[ 'mumbai', 'banglore', 'chennai', 'kolkata' ]
console.log()
let sl3=citiess.slice(0,-1)
console.log(sl3)                        //[ 'pune', 'mumbai', 'banglore', 'chennai', 'kolkata' ]
console.log()
let sl4=citiess.slice(-5,-2)
console.log(sl4)                        // [ 'mumbai', 'banglore', 'chennai' ]
console.log(citiess.slice(-5,4))
console.log()
console.log(citiess.slice(-5,-1))      //[ 'mumbai', 'banglore', 'chennai' ]
console.log()
console.log(citiess.slice(-1,-5))      //[]
console.log()
console.log(citiess.slice(-2))          //[ 'kolkata', 'mysore' ]


console.log()
console.log("splice delets array element")
// splice()
//               from where   how many              replace by 1,2,3....
//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)
//               0        1      2        3       4        5
let animals = ["tiger","lion","bullock",'camel',"rabbit","snake"]
//animals.shift()
//animals.pop()
//console.log(animals)
//animals.splice(2,3)

animals.splice(2,2,"bear","frog","cat")      //['tiger', 'lion','bear',  'frog','cat','rabbit','snake']
console.log(animals)

let animalss = ["tiger","lion","bullock",'camel',"rabbit","snake"]
animalss.splice(1,1,"a","b","c","d","e")       //[ 'tiger','a','b','c','d','e','bullock', 'camel','rabbit','snake']
console.log(animalss)


//fill()
console.log()
console.log("fill()  filles the element of any type from start index to end index")
let number=[11,12,13,14,15,16,17]
//fill(value: number, start?: number | undefined, end?: number | undefined): 
number.fill("undefined",2,3)      //[ 11, 12, 'undefined', 14, 15, 16, 17 ]
console.log(number)
console.log()

let alpha=["a","b","c","d"]
//alpha.fill("abc",2,3)                      //[ 'a', 'b', 'abc', 'd' ]   
//alpha.fill([1, 2, 3], 2,4)               //[ 'a', 'b', [ 1, 2, 3 ], [ 1, 2, 3 ] ]
let newarr=alpha.fill({"name" : "dipanshu" , "class" : "javascript"},2,3)     //[ 'a', 'b', { name: 'dipanshu', class: 'javascript' }, 'd' ]
console.log(alpha)
console.log(newarr)



// sort()
console.log()
console.log("sort: alphabetically/ assending")
let country = ["india","srilanka","bangladesh","japan"]
country.sort()
console.log(country)                   //[ 'bangladesh', 'india', 'japan', 'srilanka' ]

let numeric=[45,56,23,78,12,36,0]
console.log(numeric.sort())

console.log()
let numericc=[45,56,23,78,12,36,0]
let ex=numericc.sort()
console.log(numericc)
console.log(ex)


//slice()
console.log()
console.log("slice()")
let city="Nashik"

//-6  -5  -4   -3  -2  -1
//N    a   s   h   i   k
//0    1   2   3   4   5

//left to right
//right to left ==> blank string

// stringName.slice(startPostion, endPosition)

// //endPosition optional
// //endposition -1

console.log(city.slice(3))


// console.log(city.slice(3)) //hik

// console.log(city.slice(-3,-1)) //hi

// console.log(city.slice(-3,-6)) //""

// console.log(city.slice(-3,3)) //""




