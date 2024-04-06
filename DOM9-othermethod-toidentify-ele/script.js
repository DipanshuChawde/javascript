
//find h1 element by queryselector and by getElementById
//<h1 id="one">hello</h1>
let htmlOne=document.querySelector('#one')
console.log(htmlOne)

let htmlOneById=document.getElementById('one')
console.log(htmlOneById)


//find element by class

let htmltwo=document.querySelector('.two')
console.log(htmltwo)

let htmltwoByClass=document.getElementsByClassName('two')
console.log(htmltwoByClass)


{/* <li class = "fruits" name="fr">Apple</li>
<li class = "fruits" name="fr">Mango</li>
<li class = "fruits" name="fr">Banan</li>
<li class = "fruits" name="fr">Chikoo</li> */}


let singleEleFr=document.querySelector('.fruits')
console.log(singleEleFr) //this will return only single first li element


//find multiple element using class

let multEleFr=document.querySelectorAll('.fruits')
console.log(multEleFr) //rturns nodelist ..node list is static .. run timen change will not reflect
// query selectorAll will return node list of li element of class fruits


let button=document.querySelector('button')
console.log(button)

button.addEventListener('click', function(){
    for(i=0;i<multEleFr.length;i++){
        console.log(multEleFr[i])
        multEleFr[i].style.color="red"
    }
})



 let multEleFrByClass=document.getElementsByClassName('fruits')
 console.log(multEleFrByClass)   //returns HTMLCollection ...dynamic ...run time change will reflect
 //getElementsByClassName will return HTMLCollection



let multEleFrByAttrVg=document.getElementsByName('vg')
console.log(multEleFrByAttrVg) 

 button.addEventListener('click',function(){


for(i=0;i<multEleFrByAttrVg.length;i++){
    if(i%2==0){
        multEleFrByAttrVg[i].style.color='orange'
    }
}

})




let multEleFrByAttrFr=document.getElementsByName('fr')
console.log(multEleFrByAttrFr)
//getElementsByName will return nodeList 


let liEle=document.querySelectorAll('li')
console.log(liEle)

let liByTagHtml=document.getElementsByTagName('li')
console.log(liByTagHtml)








