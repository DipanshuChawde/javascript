//to call function of one object for other object


let dipanshu={
    firstName:"dipanshu",
    lastName:"chawde",
    display:function(){
        console.log(this.firstName+ " "+this.lastName)
    }
}

let aditya={
    firstName:"aditya",
    lastName:"masalkar"
}

//assigning display finction to other object
////borrowing method
aditya.display=dipanshu.display
aditya.display()



//call

//prog1

// function display(){
//     console.log(this.firstName+ " "+this.lastName)
// }

// let rucha={
//     firstName:"rucha",
//     lastName:"gaware",
    
// }

// let shivani={
//     firstName:"shivani",
//     lastName:"ukhalkar"
// }

// display.call(rucha)
// display.call(shivani)

//prog2

// function display(greet){
//     console.log(this.firstName+ " "+this.lastName)
//     console.log(`${greet}`)
// }

// let rucha={
//     firstName:"rucha",
//     lastName:"gaware",
    
// }

// let shivani={
//     firstName:"shivani",
//     lastName:"ukhalkar"
// }

// display.call(rucha,"hello")
// display.call(shivani,"how are you")

//prog3
function display(arr){
    console.log(this.firstName+ " "+this.lastName)
    //console.log(`${arr[0]}, ${arr[1]},${arr[2]}`)
    console.log(arr)
}

let rucha={
    firstName:"rucha",
    lastName:"gaware",
    
}

let shivani={
    firstName:"shivani",
    lastName:"ukhalkar"
}

display.call(rucha,["hi","hello","how are you"])
//display.call(shivani,"how are you")
display.apply(shivani,["123"])


