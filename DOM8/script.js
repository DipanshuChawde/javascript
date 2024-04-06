// {/* <input type="text">
// <button class="add">Add</button> */}

let ulEle=document.querySelector('ul')  //identify ul element
let inputBox=document.querySelector("input[type='text']") //identify element input
// console.log(inputEle)
let addBtn=document.querySelector(".add") //identify element add button 
console.log(addBtn)

addBtn.addEventListener("click",function(){ 
    //step 1
    //function on add input button
    let inputText=inputBox.value //save inputbox value in variable
    //console.log(inputText)

    let newLiEle=document.createElement('li')   //create new list
    newLiEle.textContent=inputText   //add text in li element
    inputBox.value="" //empty input box

    //step2
    createButton(newLiEle)

    ulEle.appendChild(newLiEle) //append child li to ul parent


})





 // step 2 
function createButton(newLiEle)
{
    //<button class="remove">Remove</button>
    //<button class="up">Up</button>
    //<button class="down">Down</button>

    // 1. cerate elementbutton
    //2. create nameof button
    //3. create class
    //4. append button child with li element

    //remove button
    let removeBtn=document.createElement('button')
    removeBtn.textContent="Remove"
    removeBtn.className="remove"
    newLiEle.appendChild(removeBtn)

    //up button

    let upBtn=document.createElement('button')
    upBtn.textContent='Up'
    upBtn.className='up'
    newLiEle.appendChild(upBtn)

    //down button
    let downBtn=document.createElement('button')
    downBtn.textContent="Down"
    downBtn.className="down"
    newLiEle.appendChild(downBtn)


}


//step3 adding functionality of remove , up, down button

//1. add eventlistner on ul tag
//2. find event target if it is button
//3. find if it is remove up or down 
//4. find target's parent element i.e. li
//5. find again parent element i.e ul
//6.  find if previous child is present in case of up and 
// next child is present in case of down 
// swap chaild by using insertBefore method 


ulEle.addEventListener('click', function(event){
    if(event.target.tagName == "BUTTON" ){

        if(event.target.className == "remove"){
            let li=event.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }

        else if(event.target.className == "up"){
            let li=event.target.parentElement
            let ul=li.parentElement
            let preLi=li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }

        else if(event.target.className == "down"){
            let li=event.target.parentElement
            let ul=li.parentElement
            let nextLi=li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }

    }


    
})
