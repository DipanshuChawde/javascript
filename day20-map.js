//Map==> datatype
//need

//obj => key value => key => string
//map => key value => key any datatype

let mymap= new Map()
console.log(mymap)

mymap.set("firstname", "dipanshu")
mymap.set("lastname", "chawde")
mymap.set('rollNo', 100)
mymap.set( true, 'isMarried')
mymap.set(100, "rollNo")

console.log(mymap)

//size()
console.log(mymap.size)

//has
console.log(mymap.has(100))
console.log(mymap.has(200))

//get
console.log(mymap.get("firstname"))
console.log(mymap.get("dipanshu"))

console.log(mymap.get("true"))
console.log(mymap.get(true))


//delete
// mymap.delete("firstname")
// console.log(mymap)


//clear
// mymap.clear()
// console.log(mymap)

//forEach()
console.log('==================')
mymap.forEach(function(key){
    console.log(key)
})

console.log('==================')
mymap.forEach(function(key, val){
    console.log(key, val)
})

//keys(),values(), entries()
console.log('==================')
console.log(mymap.keys())

console.log('==================')
console.log(mymap.values())

console.log('==================')
console.log(mymap.entries())


//keys()
console.log('==================')
for(let key of mymap.keys()) {
    console.log(key)
}


//values()
console.log('==================')
for(let val of mymap.values()){
    console.log(val)
}


//entries()
console.log('==================')
for(let ent  of mymap.entries()){
    console.log(ent)
}

console.log('==================')
for(let [key, val] of mymap.entries()){
    console.log(key, val)
}





