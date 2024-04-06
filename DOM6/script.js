// <h1>Black</h1>
//  <input type="text">
// <button> Change color</button> 

//change text and color by taking input from user

let bytagele=document.querySelector('h1')

let bytaginput=document.querySelector('input')

let bytagbtn=document.querySelector('button')

bytagbtn.addEventListener('click',function(){
    bytagele.textContent=bytaginput.value
    bytagele.style.color=bytaginput.value
    bytaginput.value=""
})