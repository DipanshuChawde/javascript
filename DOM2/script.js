

//<h1 id="id1" class="c1" name="nm" > DIPANSHU </h1>

//CSS  selector

//by id 

let byid=document.querySelector("#id1")
console.log(byid)


//by class

let byclass=document.querySelector(".c1")
console.log(byclass)

//by attriubute
let byatt=document.querySelector('h1[name="nm"]') //ifinside double quote thenout side single quote or vice-versa
console.log(byatt)

//by tag name

let bytag=document.querySelector("h1")
console.log(bytag)