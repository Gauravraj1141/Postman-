console.log("before create function")

const get = async () => {
    console.log("inside the  function")
    url = "https://api.github.com/users"
    let resolve = await fetch(url);
    console.log(resolve)
    console.log("after the resolve")
    let data = await resolve.json()
    console.log("after the data")
    return data;



}

console.log("before calling function")
let a = get()
a.then((data)=>console.log(data))
console.log("after calling function")
