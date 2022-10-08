



// async return always promise 

// const getdata = async()=>{
//     console.log("inside function")
//     var a = await "hello world";
//     console.log(a)
//     console.log("after await")
// }

// console.log("before call function")
// getdata();
// console.log("after call function")


// async function gaurav(){
//     console.log("inside function")
//     url = "https://api.github.com/users"
//     // now with the help it store in response
//     const response = await fetch(url);
//     console.log("before response")
//     const data = await response.json();
//     console.log("after data ")
//     return data;
    
// }

// console.log("before calling function")
// let a = gaurav();
// console.log(a)
// a.then(data=>console.log(data))
// console.log("after  calling function")

console.log("before function")
async function gr(){
console.log("inside function")
    
    let a = await "rajj";
console.log("after a ")

    return a;
}

console.log("before call function")

let b = gr();
b.then((data)=> console.log(data))
console.log(b)

console.log("after  call function")


