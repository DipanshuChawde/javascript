//<h1 id="one" class="c1" name="minskole">Dipanshu</h1>


//html element selection 4 types

//by id identified by #
let byid=document.querySelector("#one")
console.log(byid)

// by classidentified by .
let byclass=document.querySelector(".c1")
console.log(byclass)

//by attribute 
let byatt=document.querySelector('h1[name="minskole"]')
console.log(byatt)

//by tag
let bytag=document.querySelector("h1")
console.log(bytag)

// <button>Click Me</button>
//element sellection by tag
let bytagbtn=document.querySelector("button")
console.log(bytagbtn)



bytagbtn.addEventListener('click',function(){
    byid.textContent="Shree Ganesh"
    byid.style.color="red"
    byid.textContent=byid.textContent.toUpperCase()
    byid.textContent=byid.textContent.toLowerCase()

})


