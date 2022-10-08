// let fetchbtn = document.getElementById("fetchbtn")

// we took this fetch button here and add event listener on it
// fetchbtn.addEventListener("click", handler)

// // make function
// function handler() {
//     console.log("i clicked on the fetchbtn")

//     // initiate  a xhr(XmlHttpRequest) object here
//     const xhr = new XMLHttpRequest();

//     //now open this object and give some input in it
//     // it take first get/post or anything we want to give and second is path or api where our data is stored and third is asynchoronous is true means no blocking in the code run it asynchoronously if data is not found then next line will be execute 
//     xhr.open('GET','gaurav1.txt',true)


//     // it is optional when we want to run it so feel free to run it . this is onprogress object when we fetch data from given link and path in this time this object will be run means when process will be start it runs till data comes 
//     xhr.onprogress = function(){
//         console.log("our request is on progress")
//     }


//     // when all fetching will be complete then it runs 
//     xhr.onload = function(){
//         console.log(this.responseText)
//     }

//     // and after that we must send request
//     xhr.send();


// }













// let fetchbtn = document.getElementById("fetchbtn")

// // we took this fetch button here and add event listener on it
// fetchbtn.addEventListener("click", handler)

// // make function
// function handler() {
//     console.log("i clicked on the fetchbtn")

//     // initiate  a xhr(XmlHttpRequest) object here
//     const xhr = new XMLHttpRequest();


//     xhr.open('GET','gaurav.txt',true)

// // in this we can show a loader icon
//     xhr.onprogress = function(){
//         console.log("our request is on progress")
//     }

//     // this obj will be show how much steps done
//     xhr.onreadystatechange = function(){
//         console.log("ready state is",xhr.readyState)
//     }


//     xhr.onload = function(){
//         console.log(this.responseText)
//     }

//     // and after that we must send request
//     xhr.send();


// }












// let fetchbtn = document.getElementById("fetchbtn")

// // we took this fetch button here and add event listener on it
// fetchbtn.addEventListener("click", handler)

// // make function
// function handler() {
//     console.log("i clicked on the fetchbtn")

//     // initiate  a xhr(XmlHttpRequest) object here
//     const xhr = new XMLHttpRequest();

//     // now we use POST request
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

//     // in this we can show a loader icon
//     xhr.onprogress = function () {
//         console.log("our request is on progress")
//     }

//     //it is onload means response text will be come here
//     xhr.onload = function () {
//         console.log(this.responseText)
//     }

//     // and after that we must send request
//     xhr.send();


// }









// let fetchbtn = document.getElementById("fetchbtn")

// // we took this fetch button here and add event listener on it
// fetchbtn.addEventListener("click", handler)

// // make function
// function handler() {
//     console.log("i clicked on the fetchbtn")

//     // initiate  a xhr(XmlHttpRequest) object here
//     const xhr = new XMLHttpRequest();

//     // now we use POST request with post api 
//     xhr.open('POST', 'https://reqres.in/api/users', true)

//     // this is for post request send data we send data is the form in json in this links attach and send data in to send object.
//     xhr.getResponseHeader('content-type','application/json');



//     // in this we can show a loader icon
//     xhr.onprogress = function () {
//         console.log("our request is on progress")
//     }

//     //it is onload means response text will be come here
//     xhr.onload = function () {
//         console.log(this.responseText)
//     }

//     // and after that we must send request
//     let data = {
//         "name": "sdfsdfss",
//         "job": "leadessfsdfr"
//     }
//     xhr.send(JSON.stringify(data));


// }





let fruit = document.getElementsByClassName("fruit")[0].firstElementChild

let btn = document.getElementById("fetchbtn")
btn.addEventListener("click",getfruits)


function getfruits(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','fruit.json',true)

    xhr.onload = function(){
        let fruits =  JSON.parse(this.responseText) 
         for(i in fruits){
            console.log(fruit."fruits-name")
         }
    
    }
 
    xhr.send();


}
