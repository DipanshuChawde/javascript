let a1=document.querySelector('li')
console.log(a1)

let a2=document.querySelectorAll('li')
console.log(a2) //node list


//odd => yellow
//even=> red

// for(let i=0;i<=a2.length;i++){
//     if(i%2==0){
//         a2[i].style.color="red"
//     }
//     else
//         a2[i].style.color="yellow"
// }




//id
//name
//class
//tagnam

//<h1 id="one" class="two three four" name="nm">Fruit list</h1>

let byId=document.getElementById('one')
console.log(byId)////html ele

let byClass=document.getElementsByClassName('three')
console.log(byClass) ////html colle

let byTagName=document.getElementsByTagName('h1')
console.log(byTagName) //html colle

let byName=document.getElementsByName("nm")
console.log(byName)//nodelist

console.log(byId.className)

console.log(byId.classList)



//add()
byId.classList.add('five')
console.log(byId.classList)

//remove()
byId.classList.remove("two")
console.log(byId.classList)



//toggle()
//toggle will remove if present or add if not present vice-versa

//two ==> toggle ==> two remove
//toggle => two add

byId.classList.toggle('five')
console.log(byId.classList)//remove

byId.classList.toggle('five')
console.log(byId.classList)//add

byId.classList.toggle("ten") //add
console.log(byId.classList)

byId.classList.toggle("ten") //remove
console.log(byId.classList)







