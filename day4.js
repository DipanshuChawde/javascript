//conditinal statemenet
//// single input ==> mutiple outcome

//10>2  >true (1 outcome)  false (1 outcome)

//if
//if - else
//if- else if -else
//switch case

//syntax==> if

// if(condition){
//     //statemenet
// }



if(10>11){
    console.log("hello")
}
else
console.log("bye")


//100 => if(false)

//ticket

//1-5 ==> 10 % discount
//6-10 ==> 20 % discount
//>10 ==> 30 % discount


ticketcount=40
if(ticketcount>0 && ticketcount<=5)
    console.log("discount=10%")
else if(ticketcount>5 && ticketcount<=10)
    console.log("discount=20%")
else if(ticketcount>10)
    console.log("discount=30%")
else 
    console.log("invalid input")





marks=90
if(marks>90)
    console.log("best student")
else if(marks>70)
    console.log("better student")   
else if(marks>40)
    console.log("good student")
else  
  console.log("better try next time")



// to find bigger number from a and b 
a=20
b=100

// case1

if(a>b )
    console.log("A is greater")
else
    console.log("B is greater")

// turnary operator
console.log()
console.log("turnary operator")
a > b ? console.log("A is greater ") : console.log("B is greater")




   // to find bigger number from a1, b1, c1   

a1=100
b1=200
c1=30   
if(a1>b1 && a1>c1)
    console.log("A1 is gerater")
else if(b1>a1 && b1>c1)
    console.log("B1 is greater")
else
    console.log("C1 is greater")


console.log()

if(a1>b1){
    if(a1>c1)
    console.log("A1 is greater")
    else
    console.log("C1 is greater")
}

