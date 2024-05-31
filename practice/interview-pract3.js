
// let pro3=new Promise(function(resolve,reject){
//     let a=10
//     let b=10
//     if(a==b){
//         resolve('hello')
//     }
//     else{
//         reject('bye')
//     }
// })

// pro3.then(function(str){
//     console.log(str+' dipanshu')
//     //return str+' dipanshu'
// // })
// }).catch(function(str){
//     console.log(str)
// }).finally(function(){
//     console.log('i will always execute')
// })
//----------------------------------

let str="dipanshu nitin chawde"
revStr=""
for(let i=0;i<str.length;i++){
     revStr=str[i]+revStr
}

console.log(revStr)

let arrStr=str.split(' ')
let wordRev=""
let revs=[]

for(let i=0;i<arrStr.length;i++){
     revs.unshift(arrStr[i])
}

console.log(revs.join(' '))




for(let i=5;i>=1;i--){
    let rowOp=" "
    for(let j=i;j>=1;j--){
        rowOp=j+" "+rowOp
    }
    console.log(rowOp)
}


let str1="dipanshu"
vovel="aeiouAEIOU"
count=0
for(let i=0;i<str1.length;i++){
if(vovel.includes(str1[i])){
count++
}
}
console.log(count)