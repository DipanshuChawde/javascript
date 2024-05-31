// { let variable4 = [6, 55, -1, 2]; } console.log(variable4);
// console.log('hello')

//{ var variable3 = [1, 2, 3, 4]; } console.log(variable3);

// let arr=[3,5,2,8,4,1,0,7,6]
// arr.sort()

// console.log(arr[arr.length - 2])

// //arr.sort()


let str = "dipanshuchawde"
let arr1 = []
let repCh = ""
for (let i = 0; i < str.length; i++) {
    let count = 0
    for (let j = i; j < str.length; j++) {
        if (str[i] == str[j] && i != j) {
            //console.log(str[i],str[j])
            count=count+1
           // console.log(count)
        }
    }
    if (count >= 1) {
        repCh = repCh + str[i]
    }
}
console.log(repCh)