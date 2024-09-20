// 1. Reverse a String:
// let str1='dipanshu chawde'
// let revstr=""
// for(i=0;i<str1.length;i++){
//  revstr=str1[i]+revstr
// }
// console.log(revstr)
//--------------------------------------------------
// 1. Reverse each word of a String:
// let str2='dipanshu chawde'
// arrstr=str2.split(" ")
// let finalstr=""
// let revstr2=""
// for(let j=0;j<arrstr.length;j++){
//     let revstr2=""
// for(i=0;i<arrstr[j].length;i++){
//  revstr2=arrstr[j][i]+revstr2
// }
// finalstr=finalstr +revstr2+ " "
// }
// console.log(finalstr)
////////////////simplw way----------------------------------------------
// let str2='dipanshu chawde'
// let arrstr=str2.split(' ')
// let revstr3=[]
// arrstr.forEach((el)=>{
//     let temp=el.split("").reverse().join("")
//     revstr3.push(temp)
// })
// console.log(revstr3.join(' '))
////////////////////////////----------------------------------------------

// 2. Find the Largest Element in an Array
//  Find and print the largest element in an array.
// let arr1=[2,4,5,6,2,8,9,10,3,5,7,10]
// let arr2=[2,6,1,20,56,83,28,1,0,34]
// let max=0
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i]>max){
// max=arr2[i]
//     }
// }
// console.log(max)
// //----------------------------------

// 3. Check for Palindrome:
//  Determine if a given string is a palindrome (reads the same backward as forward).
let pal = 'nitin'
function palandrome(pal) {
    for (let i = 0; i < pal.length; i++) {
        if (pal[i] == pal[pal.length - 1 - i]) {
            return true
        }
    }
}
let res = palandrome(pal)
if (res == true) {
    console.log('is palandrome')
}
else {
    console.log('not palandrome')
}
// 4. Factorial Calculation:
//  Write a function to calculate the factorial of a number.
function factorial(num) {
    let fac =1
    for (let i = num; i > 0; i--) {
        fac = fac * i
        //console.log(fac)
    }
    return fac
}
console.log(factorial(3)) //3*2*1

// 5. Fibonacci Series:
//  Generate the first n numbers in the Fibonacci sequence.
console.log('--------------')
function fabonicci(num){
    let fabno=0
    let f1=1
    let f2=1
    console.log(f1)
    for(i=1;i<num;i++){
        let f3= f1+f2
        f1=f2
        f2=f3
        console.log(f3)
    }
    return fabno
}
console.log(`fabno = ${fabonicci(5)}`)

// 6. Check for Prime Number:
console.log('6. Check for Prime Number:')
let prno=[1,2,3,4,5,6,7,8,9,0]
let flag=false
function primeNo(prno){
for(i=2;i<prno;i++){
    if(prno==0 || prno==1){
        return false
    }
    else if(i!=prno && prno%i==0){
        return true
    }
}
}
prno.forEach((prno)=>{
let retf=primeNo(prno)
if(retf==true){
    console.log(`${prno} is not prime no`)
}
else{
    console.log(`${prno} is prime no`)
}
})

//--------------------------------------
console.log('7. String Anagrams:')
//  Determine if two strings are anagrams of each other.

let agrms1='silent'
let agrms2='listen'


// 8. Array Sorting:
//  Implement sorting algorithms like bubble sort, merge sort, or quicksort.

// 9. Binary Search:
//  Implement a binary search algorithm to find an element in a sorted array.

// 10. Duplicate Elements in an Array:
//  Find and print duplicate elements in an array.

// 11. Linked List Reversal:
//  Reverse a singly-linked list.

// 12. Matrix Operations:
//  Perform matrix operations like addition, multiplication, or transpose.

// 13. Implement a Stack:
//  Create a stack data structure and implement basic operations (push, pop).

// 14. Implement a Queue:
//  Create a queue data structure and implement basic operations (enqueue, dequeue).

// 15. Inheritance and Polymorphism:
//  Implement a class hierarchy with inheritance and demonstrate polymorphism.

// 16. Exception Handling:
//  Write code that demonstrates the use of try-catch blocks to handle exceptions.
// 17. File I/O:
//  Read from and write to a file using Java's file I/O capabilities.
// 18. Multithreading:
//  Create a simple multithreaded program and demonstrate thread synchronization.
// 19. Lambda Expressions:
//  Use lambda expressions to implement functional interfaces.
// 20. Recursive Algorithms:
//  Solve a problem using recursion, such as computing the factorial or Fibonacci sequence.



