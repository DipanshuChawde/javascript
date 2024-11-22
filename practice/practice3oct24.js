let str="dipanshu nitin chawde"

let strA = str.split(' ')
let revA= []
strA.forEach((el,id)=>{
    let revel = ""
    for(let i=0; i<el.length; i++){
        revel=el[i] + revel
    }
    revA.push(revel)
})

console.log(revA)
console.log(revA.join(' '))


let num="123"
let numA=num.split("").reverse().join('')
console.log(numA)


for(let i=0;i<=999;i++){
    
    let Arr=i.toString().split('')
    let sum=Arr.reduce(function(acc,el,id,ar){
        return Number(el) +acc
    },0)
    if(sum==21){
        console.log(i)
    }
}

// for (let i = 100; i <= 999; i++) {
//     let arr = i.toString().split('')

//     let sum = arr.reduce((acc, el, ind, arr) => {
//         return Number(el) + acc
//     }, 0)
//     if (sum == 21) {
//         console.log(i)
//     }
// }