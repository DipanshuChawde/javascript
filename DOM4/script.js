// selection of element
let headOne=document.querySelector('h1')
let buttonChange=document.querySelector('button')

buttonChange.addEventListener('click', function(){
    headOne.textContent="red"
    headOne.style.color="red"
})

//<button id="bid" > name</button>
let headTwo=document.querySelector('h2')
let buttonTwo=document.querySelector('button[name="nm"]')

buttonTwo.addEventListener('click',function(){
    headTwo.textContent="Dipanshu"
    headTwo.style.color="pink"
})


//  <h2 id="h2id"> where you like to visit for trip</h2>
//     <button class="b3class">place</button> 


let headThree=document.querySelector('#h2id')
let buttonThree=document.querySelector('.b3class')

buttonThree.addEventListener('click',function(){
    headThree.textContent="Rajasthan"
    headThree.style.color="blue"
})