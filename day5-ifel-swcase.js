
a=10
b=20
if(a>10)
    console.log("a is greater")
else
    console.log("b is greater")

    console.log("using turnery operator")

a>b ? console.log("a is greater") : console.log("b is greater")



console.log()
// switchCase

// program 1
// switch case without break

console.log("switch case without break")

let city="pune"

switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "bangaluru":
        console.log("KA")
}

console.log()
// switchCase

// program 1
// switch case with break

console.log("switch case with break")
let city2="indore"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "bangaluru":
        console.log("KA")
        break
    default :
        console.log("invalid input")    
}



console.log()
// switchCase

// program 1
// switch case with break and multiple case

console.log("switch case with break and multiple case")
let city3="Pune"
switch(city3){
    case "pune":
    case "Pune":   
        console.log("MH")
        break
    case "indore":
    case "Indore":    
        console.log("MP")
        break
    case "bangaluru":
    case "Bangaluru":    
        console.log("KA")
        break
    default :
        console.log("invalid input")    
}

console.log()
// program 4
// greatest of three number using switch 
console.log("program 4--greatest of three number using switch ")

a1=1000
b1=200
c1=30
gratest = true

switch(gratest){
    case a1>b1 && a1>c1:
        console.log("a1 is greater")
        break
    case b1>a1 && b1>c1:
        console.log("b1 greater")  
        break
    default:
        console.log("c1 is greater")      
}




console.log()
//switch case with defalut
console.log("program 5--switch case with defalut")

let day =2
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log('Thrusday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Please enter correct day number')
}
    
console.log()
console.log()
console.log("program 6")
let country ="France"
switch (country) {
    case "France":
    case "Spain":
    case "Netherland":
        console.log("This coutry is in Europe")
        break
    case "UK":
    default:
        console.log('This county is not in Europe')
}



