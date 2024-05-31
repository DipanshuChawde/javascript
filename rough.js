// let arr1=[23,45,65,32,5,78,90,46,0,102,56,78]

// function arrAddEven(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum=sum+arr[i]
//         }
//     }
//     console.log(sum)
// }

// arrAddEven(arr1)



// let str="dipanshu chawde"
// revStr=""
// arrStr=str.split(' ')
// // for(let i=0;i<str.length;i++){
// //     revStr=str[i]+revStr
// // }
// // console.log(revStr)

// let revwordAlpha=[]
// arrStr.forEach(element => {
//     let rv=element.split('').reverse().join('')
//     revwordAlpha.push(rv)
// });
// console.log(revwordAlpha.join(' '))
// // let revWord=str.split(' ').reverse().join(' ')
// // console.log(revWord)


// let arr1=[23,45,65,32,5,78,90,46,0,102,56,78]
// max=0
// arr1.forEach(function(el,index){
//     if(el>max){
//         max=el
//     }
// })
// console.log(max)


// let str="Dipanshu Chawde"
// let vow="AEIOUaeiou"

// count=0
// for(let i=0;i<str.length;i++){
//     if(vow.includes(str[i])){
//         count++
//     }
// }
//console.log(count)

// let str="nitisn"

// let revstr=str.split('').reverse().join('')

// if(str==revstr){
//     console.log('is palandrome')
// }
// else{
//     console.log('not pal')
// }


// let str="dipanshu chawde"
// let arrs=str.split(' ')
// let newStr=[]
// arrs.forEach(function(el,index){
//     let wor=el.charAt(0).toUpperCase() + el.slice(1)
//     newStr.push(wor)
//     console.log(wor)

// })

// console.log(newStr.join(' '))



let strr = "my name is dipanshu chawde"

let set1=new Set(strr)

console.log(Array.from(set1).join(''))
