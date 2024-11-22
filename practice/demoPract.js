
//       0 1 2 3 4 5   
let arr=[1,2,3,4,5,6]  //length =6



//arr.length will give length of array 
console.log(arr)
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]+5
}

console.log(arr)

///

let arr2=arr.map((el,ind)=>{
    return  el+5
})

console.log(arr2)

arr2.push('a')
console.log(arr2)
arr2.unshift('dip')
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2.shift()
console.log(arr2)