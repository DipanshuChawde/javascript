console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log()
console.log("forloop")
console.log("program1")

// for(i=0;i<=100;i++){
//     console.log(i)
// }


// for loop and while loop
// for(intialization ; conditionCheck ; increment / decrement){
//     // statements
// }


for(i=0; i<=5; i++){
    console.log(i)
}


console.log()
console.log("program2--backword")

for(i=5;i>=0;i--){
    console.log(i)
}

// program 5 --- table of 2 
// 2,4,6,8,10,12,14,16,18,20

console.log()
console.log("program3--- table of 2")

for(i=2;i<=20;i=i+2){
    console.log(i)
}

//program5--- backword table of 5
console.log()
console.log("program5--- backword table of 5")
for(i=50;i>=5;i=i-5){
    console.log(i)
}


// break statement with for 
//it break (come out of loop) when if condition in forr loop is true
console.log()
console.log("program6--- break statement with for")

for(i=0;i<=5;i++){
    if(i>3){
        break
    }
    console.log(i)
}

console.log()
for(i=0;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i)
}


console.log()
for(i=0;i<=5;i++){
    console.log(i)
    if(i==3)
    break
}


//it will skip that one loop when condition is true and befor and after that will get printed
console.log()
console.log("for with continue")
for(i=0;i<=5;i++){
    if(i==3)
    continue
console.log(i)
} // 0 1 2  4 5


console.log()
console.log("for with continue")
for(i=0;i<=5;i++){
    if(i<=3)
    continue
console.log(i)
} //4 5 



console.log()
console.log("for with continue")
for(i=0;i<=5;i++){
    if(i>=3)
    continue
console.log(i)
} //0 1 2  



console.log()
for(i=5;i>=0;i--){
    if(i==3)
    continue
console.log(i)
}

