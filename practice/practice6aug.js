// let str='dipanshu chawde'
// let arr=str.split(' ')
// let finalarr=[]
// let finalstr=""

// arr.forEach((el,inx)=>{
//     let rev=el.split('').reverse().join('')
//     //console.log(rev)
//     finalarr.push(rev)
// })
// console.log(finalarr.join(' '))

// let str2='dipanshu'
// console.log(str2.split('').reverse().join(''))

// for(i=0;i<str2.length;i++){
//     finalstr=str[i]+finalstr
// }
// console.log(finalstr)
//-----------------------------------------------------------

// function fabono(num){
//     let fabono=0
//     let f1=0
//     let f2=1
//     let f3=0

//     console.log(f1)
//     console.log(f2)
//     for(let i=0;i<num;i++){
//         f3=f1+f2
//         f1=f2
//         f2=f3
//         console.log(f3)
//     }
// }
// fabono(5)
// //console.log(`fabono ${fabono(5)}`)

// for(let i=100;i<=999;i++){

// 	let a=i%10
//     console.log(a)
// 	let b=i%100 - a
// 	let c=i-(i%100)
// 	if((a+b+c)==21){
// 	console.log(i)
// }

// }
for (let i = 100; i <= 999; i++) {
    let arr = i.toString().split('')

    let sum = arr.reduce((acc, el, ind, arr) => {
        return Number(el) + acc
    }, 0)
    if (sum == 21) {
        console.log(i)
    }
}

