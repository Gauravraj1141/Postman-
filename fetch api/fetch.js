// let btn = document.getElementById("btn")

// // now we write code for  fetch api 

// btn.addEventListener("click",getdata)


// function getdata(){

//     url = "https://api.github.com/users"
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//         // this this data we have some links so we add only avatar links in a anchor tag and see all the photo on our dom
//           for(i in data){
//            let link =  data[i].avatar_url;
//            let names = data[i].login;
//         //    we access our div where we add this new Element
//            let input = document.getElementById("input")
//         //    we make a new image tag and inside it setattribute we add a link of these avatar
//         let imgtag = document.createElement("img")
//         imgtag.setAttribute("src",link)

//         // now we add names of these all persons 
//         let ptag = `<div style = "background-color:blue";><b>${names}</b></div>`


//         // and append it inside the input( div) 
//         input.appendChild(imgtag)
//         // we add names of all after the images 
//         input.insertAdjacentHTML("beforeend",ptag)
//           }
//     })
// }



// How Works Fetch api?
// it is a asychronous method to get data from api and any other resources we don't need to give this any argument for async behaviour and it is state forward when we give url for fetch data after that we give a then keyword which store the data and it all work done in background means asynchronously and next then give us data that we give in form of text or json or any other

// console.log("before function making")
// function getdata(){
//     console.log("inside function")
//     // this is gibhub/users api  
//     url = "https://api.github.com/users"

//     console.log("before fetching ")
//     fetch(url).then((response)=>{
//         // in the response we get data in any form but we can change it into text or json or anyother format so we fetch it in text form .
//         return response.json();
//     }).then((data)=>{
//         // this then function will give data for use anywhere it is based on promises syntax
//         console.log(data)
//         console.log("fetching complete asynchronously")
//     })
//     console.log("after fetching")
// }

// console.log("before function calling")
// getdata();
// console.log("after function calling")





// How Post api works

// function postdata(){

//     url  = "https://reqres.in/api/users"
// // data which we give with url 
//     data = {
//         "email": "gr23asdfasdf@gmail.com",
//         "password": "psfgsdfsdfasdfstol"
//     }
//     param = {
//         method:"post",
//         // and we give json so we write application/json

//         headers:{
//             'content-type':'application/json'
//         },
//         // in this body we should give the data in string format not in json if data string me h to only data likh do
//         body:JSON.stringify(data)
//     }

//     // it take url and parameters 
//     fetch(url,param).then((response)=>{
//         return response.json();
//     }).then((data)=>{console.log(data)})

// }

// postdata();









function postdata() {

    url = "https://reqres.in/api/users"
    // data which we give with url 
    data =` {
        "email": "gr222f@gmail.com",
        "password": "rajput21l"
    }`
    param = {
        method: "post",
        // and we give json so we write application/json

        headers: {
            'content-type': 'application/json'
        },
// we change data into string don't need to write jsonstringify
        body: data
    }
// we use short form of arrow function when we give only one paramater inside it
    fetch(url, param).then(response =>  response.json())
    .then(data => console.log(data) )
}

postdata();