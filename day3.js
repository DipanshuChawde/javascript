// conditional statements 
// numT > 0 && numT <= 5   -----> 5 % discount 
// numT > 5 && numT <= 10  -----> 10 % discount 
// numT > 10               -----> 20 % discount

// if(condition){
//     // statements
// }

let numT =7 

if(numT>0 && numT<=5){
    console.log("5% descount")

}
if(numT>5 && numT<=10)
console.log("10% descount")

if(numT>10)

console.log("20% descount")


console.log()

// if(numT>0 && numT<=5)
// console.log("5% descount")
//  elseif(numT>5 && numT<=10)
//  console.log("10% descount")
// else
// console.log("20% descount")




// every()
 let score = [34, 78, 90, 23, 56, 89]
let y2=score.every(function(el,index,arr){
    return el<20
})
console.log(y2)