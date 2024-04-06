//<!--add new element to unordered list (input form user) at the button click-->

// {/* <h1>Student List</h1>
//     <ul>
//         <li>Dipanshu</li>
//         <li>Nitin</li>
//         <li>Tanish</li>
//         <li>Neel</li>

//     </ul>
//     <input type="text">
//     <button>AddMe</button> */}

let ullist=document.querySelector("ul")

let input=document.querySelector('input')

let btn=document.querySelector('button')


btn.addEventListener('click',function(){
    let newinput=input.value
    let newli=document.createElement('li')
    newli.textContent=newinput
    ullist.appendChild(newli)
    input.value=""

//if you want to inspect new list
    let updatedlist=document.querySelector('ul')
    console.log(updatedlist)
})


