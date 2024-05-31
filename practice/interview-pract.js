// // Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// let arr1=[23,45,65,32,5,78,90,46,0,102,56,78]
// let sum=0
// function addOfEvenNo(arr){
// for(let i=0;i<=arr.length;i=i+1){
//    //console.log(arr[i])
//    if(arr[i]%2==0){
//     sum=sum+arr[i]
//    }
   
// }
// return sum 
// }

// let total=addOfEvenNo(arr1)
// console.log(sum)

// console.log('-------------------------------------------------')
// //---------------------------------------------------------------------------------------------------------------

// // Write a function to check if a given number is even or odd.
// // Write a function that takes a string as input and returns the reverse of that string.

// str="my name is dipanshu"
// str1=""
// function reverseStr(str){
//     for(let i=str.length-1;i>=0;i=i-1){
//         str1=str1+str[i]
//     }
//     return str1
// }
// let reverseString=reverseStr(str)
// console.log(reverseString)

// console.log('-------------------------------------------------')
// //--------------------------------------------------------------------------------------------------------------
// // Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.

// arrStr=["dipanshu","nitin","chawde","masalkar","hi","how","are","you"]
// newArr=[]
// function refinedArr(arr){
//     for(i=0;i<arr.length;i=i+1){
        
//         if(arr[i].length>5){
//             console.log(arr[i].length)
//            newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// finalStr=refinedArr(arrStr)
// console.log(finalStr)

// //---------- solution2
// newArr2=[]
// arrStr.forEach(element=> {
//     if(element.length>5){
//         newArr2.push(element)
//     }
// });

// console.log(newArr2)

// console.log('-------------------------------------------------')
// //---------------------------------------------------------------------------------------------------------------------
// // Write a function to find the maximum number in an array of numbers.
// let arrno=[23,45,65,32,5,78,90,46,0,102,56,78]
// let maxN=0
// function maxNo(arr){
//     for(i=0;i<arr.length;i=i+1){
//         if(maxN<arr[i]){
//             maxN=arr[i]
//         }
//     }
//     return maxN
// }

// let max=maxNo(arrno)
// console.log(max)


// console.log('-------------------------------------------------')
// //-----------------------------------------------------------------------------------------------------------------------


// // Write a function to count the number of vowels (a, e, i, o, u) in a given string.

// str="dipanshu nitin chawde"
// count=0
// function vovelcount(str){
//     for(i=0;i<str.length;i=i+1){
//     if(str[i]=='a'||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//         count=count+1
//     }
// }
// }
// vovelcount(str)
// console.log(count)
// //------------

// vovel="aeiouAEIOU"
// count2=0
// function vovelcount2(str){
//     for(i=0;i<str.length;i=i+1){
//     if(vovel.includes(str[i])){
//         count2=count2+1
//     }
// }
// }
// vovelcount2(str)
// console.log(count2)

// console.log('-------------------------------------------------')
// //----------------------------------------------------------------------------------------------------------
// // Write a function to check if a given string is a palindrome (reads the same backward as forward).
// console.log('----------------------')
// let strp="nitin"
// let j=strp.length-1
// let flag=false

// for(let i=0;i<strp.length;i=i+1){
//     if(strp[i]==strp[j]){
//         flag=true
//     }
//     else{
//         flag=false
//         break
//     }
//     j=j-1
// }

// console.log(flag)

// console.log('-------------------------------------------------')
// //-------------------------anoyjer way
// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
  
//   // Example usage:
//   console.log(isPalindrome('racecar')); // Output: true
//   console.log(isPalindrome('hello')); // Output: false
// //-------------------------------------------------------------------------
// // Write a function to capitalize the first letter of each word in a given sentence.
// console.log('----------------------')

// function capitalizeWords(sentence) {
//     return sentence.replace(/\b\w/g, char => char.toUpperCase());
//   }
//   // Example usage:
// console.log(capitalizeWords('hello world')); // Output: 'Hello World'

// console.log('-----------other way capatilise each word-----------')
// function capitalizeWords(sentence) {
//     const words = sentence.split(' ');
//     const capitalizedWords = [];
  
//     words.forEach(word => {
//       const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       capitalizedWords.push(capitalizedWord);
//     });
  
//     return capitalizedWords.join(' ');
//   }
  
//   // Example usage:
//   console.log(capitalizeWords('hello world')); // Output: 'Hello World'


// //--------------------------------------

// console.log('--------------------------------------')

// console.log('-------------------------------------------------')
// // Write a function to reversethe string in a given sentence.

// let str4="dipanshu nitin chawde"
// let str5=""
// for(let i=str4.length-1;i>=0;i=i-1){
//     str5=str5.concat(str4[i])
// }
// console.log(str5)
// // Write a function to reverse words in a given sentence.
// console.log('--------------------------------------')
// let str6="my name is dipanshu chawde"
// str5=str6.split(' ').reverse().join(" ")
// console.log(str5)


// console.log('-------------------------------------------------')
// //-----------------------------------------------

// // program to delete duplicate charactor from string

// let strr = "my name is dipanshu chawde"
// let set1 = new Set(strr)
// //set1 = str
// console.log(set1)
// console.log(Array.from(set1).join())

// console.log('-------------------------------------------------')
// // Write a function to reverse words in a given sentence.
// let sentance = "my name is dipanshu"
// let sentance2 = sentance.split(' ')
// sentance = sentance2.reverse().join(' ')
// console.log(sentance)

// console.log('-------------------------------------------------')
// // Write a function to reversethe string in a given sentence
// sentance = "my name is dipanshu"
// let rSentance=""
// for(let i=0;i<sentance.length;i++){
//     rSentance=sentance[i] + rSentance
// }
// console.log(rSentance)




// console.log('-------------------------------------------------')
// // Write a function to capitalize the first letter of each word in a given sentence.
// sentance = "my name is dipanshu"

// sentance2 = sentance.split('')
// let sentance3 = new Array()
// sentance2.forEach(function(el,i,arr){
//     let word = el[0].toUpperCase() + el.slice(1)
//     sentance3.push(word)
// })
// console.log(sentance3.join(''))
// console.log('-------------////------------------------------------')

let k=1

for(let i=1;i<=5;i++){
    //let rowoutput= " "
    for(let j=1;j<=i;j++){
         //rowoutput+= " "+ j
        console.write(j)
   }
    console.log("rowoutput")
}


// console.log('-------------------------------------------------')
// // Write a function to check if a given string is a palindrome (reads the same backward as forward).
// console.log('-------------------------------------------------')
// // Write a function to find the maximum number in an array of numbers.
// console.log('-------------------------------------------------')
// // Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.
// console.log('-------------------------------------------------')
// // Write a function to count the number of vowels (a, e, i, o, u) in a given string.
// console.log('-------------------------------------------------')
// // Write a function to find the maximum number in an array of numbers.
// console.log('-------------------------------------------------')
// // Write a function to check if a given number is even or odd.
// console.log('-------------------------------------------------')
// // Write a function that takes a string as input and returns the reverse of that string.
// console.log('-------------------------------------------------')
// // Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// console.log('-------------------------------------------------')

// //find max no using for each
// arr1=[23,45,65,32,5,78,90,46,0,102,56,78]
// console.log('solution 2')
// maxN=0
// arrno.forEach(function(el,i,arr){
//         if (el>maxN){
//             maxN=el
//         }
// })
// console.log(maxN)


// //give answer
// const arr=[1,2,3,4,5]
// arr.length=0
// console.log(arr)