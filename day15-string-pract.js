//mayuri day 14 sir day 15(do it on new file)
let names1 = ["mayuri", "ram", "sham", "krishna"]
//            0        1      2      3


for (let i = 0; i < names1.length; i++) {
    // console.log(i)
    console.log(names1[i])
}

console.log()
for(let i=names1.length-1;i>=0;i--){
    console.log(names1[i])
}


console.log()
let strr="shree Ganeesh"
for(let i=0;i<strr.length;i++){
    console.log(strr[i])
}


console.log()
for(i=strr.length-1;i>=0;i--){
    console.log(strr[i])
}


// //join -> array ==> string
// //split=> string => array

console.log()
console.log("to print string in reverse order")
let a="apple"
str11=""
for(i=0;i<a.length;i++){
    str11=a[i]+str11
}
console.log(str11)


        //   a+"" => a
        //   p+a=> pa
        //  p+pa=> ppa
        //  l+ppa=> lppa
        //  e+lppa=>elppa


let str1="shree ganeesh"
let rev=""
for(let i=0;i<str1.length;i++){
    rev=str1[i]+rev
}
console.log(rev)
        
console.log()
let rev1=""
for(let i=str1.length-1;i>=0;i--){
    rev1=rev1+str1[i]
}
console.log(rev1)



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
let str4="dIpanshu chAwde"
vowelscount=0
vowels=["a", "e", "i", "o", "u"]
for(i=0; i<str4.length; i++){
        if(vowels.includes(str4[i].toLowerCase())){
                vowelscount++
        }
}
console.log(vowelscount)










