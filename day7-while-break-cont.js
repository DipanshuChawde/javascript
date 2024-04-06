// for(intialization ; conditionCheck ; increment/decrement){
    //statements
//}


// while  loop 
// intialization 
// while(condition){
    // statements 
    // increment / decrement

//}


//print 1 to 5
console.log("program1 print 1 to 5")
let i =1
while(i<=5){
    console.log(i)
    i++
}


console.log()
console.log("program2--- print hello 3 times")
let a=1
while(a<=3){
    console.log("hello")
    a++
}



console.log()
//print 5 to 1
console.log("program3 print 5 to 1")
i=5
while(i>=1){
    console.log(i)
    i--
}


console.log()
//table of 2
console.log("program4 table of 2")
i=2
while(i<=20){
    console.log(i)
    i=i+2
}

console.log()
//table of 5 in reverse
console.log("program5 table of 5 in reverse")
i=50
while(i>=5){
    console.log(i)
    i=i-5
}

console.log()
//while with break
console.log("program6 while with break")
i=0
while(i<=5){
    
    if(i==3)
    break
    console.log(i)
    i++
}


console.log()
//while with break
console.log("program6 while with break")

i=10
while(i>=0){
    if(i==6)
    break
console.log(i)
i--
}

console.log()
// continue with while loop
console.log("program7 while with continue")

i=0
while(i<=10){
    if(i==6){
    i++   
    continue
      }
    console.log(i)
    i++   
}

console.log()
//1-5 addition==> 
//for loop
//while loop
console.log("1-5 addition==>for loop, while loop")
sumfor=0
for(i=1;i<=5;i++){
    sumfor= i+sumfor
}
console.log(sumfor)


console.log()
sumwhile=0
i=1
while(i<=5){
    sumwhile=sumwhile+i
    i++
}
console.log(sumwhile)














