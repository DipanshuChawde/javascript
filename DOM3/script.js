
//<h1 id="id1"> red </h1>

let headOne=document.querySelector('h1')
console.log(headOne)

// console.log(headOne.textContent)
// headOne.textContent="green"

headOne.addEventListener('click',function(){
    headOne.textContent="green"
    headOne.style.color="green"
})

// rough
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// // (dot notation and bracket notation)
// // retrive 
// console.log(info.firstName)
// // update 
// info.firstName  = "tanmay"
// // add 
// info.city = "pune"
// // delete
// delete info.city