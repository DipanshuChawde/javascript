//program to display single user info on document (html page)

//program to fetch data from reqress page 2 all user info .jason format, 
//get single user info fron data
//print it on html page

function getUserInfo(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`) //${pageNumber} string interpolation
    .then(function(response){
        return response.json()   //returns promise again need to consume promise
        //console.log(response)
    }).then(function(response){
        //console.log(response.data)
        return response.data // return data of all user
    })
}
//getUserInfo(2)


function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`) //string interpolation
    .then(function(response){
        return response.json() //returns promise again need to consume promise
        //console.log(response.json()) 
    }).then(function(response){
        //console.log(response)
        return response.data
    })
}
//getSingleUser(2)

function renderHTML(el){
    document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
    document.write(`<h2>${el.email}${el.id}</h2>`)
    document.write(`<img src="${el.avatar}">`)
}

//with .then

// getUserInfo(2).then(function(user){
//     //console.log(user[0].id)})
//     let id =user[0].id
//     return getSingleUser(id) //need to pass id to the getSingle user
// }).then(function(element){
//     //console.log(element)
//     renderHTML(element)
// })


//using async await

async function getInfo(page){
    let userData=await getUserInfo(page)
    let userId =userData[1].id
    let singleEle=await getSingleUser(userId)
    await renderHTML(singleEle)
}
getInfo(2)


