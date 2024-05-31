//data type of array is object

// push(arg), unshift(arg),pop(), shift(), includes(arg), indexOf(arg),at(arg), reverse(),join(arg),concat(arg), flat()


//1. push() 
        //action => add the ele at last
        //return  => new lenegth


//2. unshift()
        //action => add ele at first
        //return => new length


//3. pop()
        //action => remove ele from last
        //return => removed el

//4. shift()
        //action => remove ele from first
        //return => removed ele

//5.includes()
        //action => check given ele present in array or not is present true else false
        //return => boolean



//6. indexOf()
    //action => gives the index of given element if found else -1
    //return => numebr  

//7.at()
        //action => finds element at given index 
        //return => return element if present otherwise undefined

//8. reverse()
        //action => reverse the array 
        //return => new array of reverse element     

//9. join()
         //action => joins array element on given charector
        //return => string 

//10. concat()
        //action => concatinate array (make one new array from 2)
        //return => new combined array

//11. flat()
//action => gives the singl array from multidimentioanl array
//return=> array









// Object 

// Properties and method
// Human --- amol
// Properties  --- weight , color , height , gender
// Methods ----- walk(), talk(),sleep()

// Gym - method
// action - Excercise 
// return - health 


// program 
//              0       1         2        3
let cities = ["pune","nagpur","mumbai","banglore"]
let q1 = cities.length
console.log(q1)




console.log()
console.log("push method add element at last and returns new length")
let arr1=["apple","banana","mango"]
console.log(arr1.length) //3
q1=arr1.push("grapes")
console.log(q1) //4
console.log(arr1) // [ 'apple', 'banana', 'mango', 'grapes' ]



console.log()
console.log("unshift method add element at first and returns new length")
let arr2=["nagpur","amravati","akola"]
console.log(arr2.length) // 3
q2=arr2.unshift("pune")
console.log(q2) // 4
console.log(arr2) //[ 'pune', 'nagpur', 'amravati', 'akola' ]


console.log()
console.log("pop will remove element from last and return removed element")
let arr3=["ram","seeta","geeta","sham"]
console.log(arr3) //[ 'ram', 'seeta', 'geeta', 'sham' ]
console.log(arr3.length) //4
let q3=arr3.pop() 
console.log(q3) //sham
console.log(arr3) //[ 'ram', 'seeta', 'geeta' ]

console.log()
console.log("shift will remove first element from array and return removed element")
let arr4=["MP","UP","KA","MH","RJ"]
console.log(arr4.length)
console.log(arr4)
let q4=arr4.shift()
console.log(q4)
console.log(arr4)

console.log()
console.log("includes will check given ele present in array or not is present true else false")
let arr5 = ["pune","nagpur","mumbai","banglore"]
let q5 = arr5.includes("Pune")
console.log(q5)

 
console.log()
console.log("indexOf() gives index of element if present therwise -1")
let arr6=[11, 22, 33, 44, 55, 66, 77]
let q6=arr6.indexOf(66)
console.log(q6)



console.log()
console.log("at() gives element at given index otherwise undefined")
let arr7=[10, 20, 30, 40, 50]
let q7=arr7.at(7)
console.log(q7)


console.log()
console.log("reverse() reverse the array ")
let arr8= ["mango", "chikoo", "orange"]
let q8= arr8.reverse()
console.log(q8) //[ 'orange', 'chikoo', 'mango' ]
console.log(q8[1]) // chikoo


console.log()
console.log("join()")
let arr9= ["dipanshu" , "nitin", "chawde", 9922447802]
q9= arr9.join("-")
console.log(q9)
console.log(typeof(q9))

console.log()
q99= arr9.join("@")
console.log(q99)
console.log(typeof(q99))

console.log()
console.log("concat() concatinates the array make one new array")
a1= ["dipanshu", "nitin"]
a2=["chawde"]
a3=a1.concat(a2)
console.log(a3)
console.log(typeof(a3))

//array of 2 dimension

let arr = [[11, 22, 55], [99, 77, 102, 334], [9, 6, 7, 2, 1]]
//             0                 1                 2

//[[],[],[]]
//  0  1  2

//7 print

console.log(arr[2][2])//7

console.log(arr[1][2])//102

console.log(arr[0][0])//11

//7. flat()
//action => gives the singl array from multidimentioanl array
//return=> array
//[11,22,55,99,77,102,334,9,6,7,2,1]

let y9=arr.flat()
console.log(y9)














//assignment

console.log()
console.log("program to find vowels in given string")
let count=0
let str="dIpanshu chAwdE"
for(let i=0; i<str.length;i++){
   
switch(str[i]){
    case "a" :
    case "A" :   
        count++
        break
    case "e" :
    case "E" :
        count++
         break
     case "i" :
     case "I" :   
        count++
        break
    case "o" :
    case "O" :    
        count++
        break
     case "u" :
     case "U" :   
        count++
        break            

}
}
console.log(count)



console.log()
console.log("another try")
let count2=0
str="dipanshu chawde"
for(i=0;i<=str.length;i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] =="o"|| str[i] =="u"){
                count2++
        } 

}
console.log(count2)

console.log()
console.log("one more try")
let str11="dIpanshu chAwde"
vowelscount=0
vowels=["a", "e", "i", "o", "u"]
for(i=0; i<str11.length; i++){
        if(vowels.includes(str11[i].toLowerCase())){
                vowelscount++
        }
}
console.log(vowelscount)
