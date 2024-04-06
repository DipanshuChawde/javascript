//Set => datatype  => array => unique value collection

let mySet = new Set()
console.log(mySet)


//add
mySet.add(1)
mySet.add('dipanshu')
let a={a:1, b:'dip'}
mySet.add(a)
console.log(mySet)


//has()
console.log(mySet.has(1))
console.log(mySet.has(a))
console.log(mySet.has(2))

console.log("=========================")
//delete()
// console.log(mySet.delete("dipanshu"))
// console.log(mySet)

// console.log(mySet.delete(a))
// console.log(mySet)

// console.log(mySet.delete(false))
// console.log(mySet)



//clear()
// mySet.clear()
// console.log(mySet)


console.log('=============')
//forEach()

mySet.forEach(function(val){
    console.log(val)
})

let mySet2 = new Set([1, 2, 3, 4, 5, 'true', false, null])
console.log(mySet2)

mySet2.forEach(function(val){
    console.log(val) 
})

//key()
console.log('=============')
console.log(mySet2.keys())  //[Set Iterator] { 1, 2, 3, 4, 5, 'true', false, null }

console.log('=============')
for(s1 of mySet2.keys()){
    console.log(s1)
}
//output of above code
// 1
// 2
// 3
// 4
// 5
// true
// false
// null



//values()
console.log('=============')
for(let v1 of mySet2.values()){
    console.log(v1)
}
//output of above code
// 1
// 2
// 3
// 4
// 5
// true
// false
// null


//entries

console.log('=============')
for(let e1 of mySet2.entries()){
    console.log(e1)
}
//output of above code
// [ 1, 1 ]
// [ 2, 2 ]
// [ 3, 3 ]
// [ 4, 4 ]
// [ 5, 5 ]
// [ 'true', 'true' ]
// [ false, false ]
// [ null, null ]


//usually asked in interview about entries function of set ...  it will create alias value of set element



//size property
console.log(mySet2.size)


//asked in interview "to remove duplicate element of array"

let arr=[1, 2, 3, 3, 4, 12, 2, 1, 6, 7, 8, 4, ]
let mySet3 = new Set(arr)
console.log(mySet3)

arr2=Array.from(mySet3)
console.log(arr2)

console.log(Array.from(mySet3))
