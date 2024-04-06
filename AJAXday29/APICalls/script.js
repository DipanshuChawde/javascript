// let user={
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// let userButton=document.querySelector('button')
// userButton.addEventListener('click',function(){
//     getUserInfo()
// })

// function getUserInfo(){
//     user.data.forEach(function(ele){
//         document.write(`<h1>${ele.first_name}${ele.last_name}</h2>`)
//         document.write(`<h2>${ele.id}${ele.email}</h2>`)
//         document.write(`<img src =${ele.avatar}>`)
//     })
// }

//above all code is giving data from object user copied from reqres.in


//following will render data on api call

let userButton=document.querySelector('button')
userButton.addEventListener('click',function(){
    getUserInfo(2)
})


function getUserInfo(page){
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        return response.json()
    }).then(function(response){
        response.data.forEach(function(ele){
            document.write(`<h1>${ele.first_name}${ele.last_name}</h2>`)
            document.write(`<h2>${ele.id}${ele.email}</h2>`)
            document.write(`<img src =${ele.avatar}>`)
        })
    })
}

//getUserInfo(2)