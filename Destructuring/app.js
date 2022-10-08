




// let  [a,b,c,...d] = [2,3,23,23,3,"ramu","gaurav"]

// console.log(a,b,c,d);


// ({a,b,c,...d} = {a:"Gauarv",b:"ram",c:"raghav",e:"extra value",fun:()=>{console.log("function run")},f:"ramesh",g:"radha"})
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// let ary = ["ram","raja","gaurav",23,234,55]

// let[a,b,c,...d] = ary;
// console.log(a,b,c,d)

// let obj = {a:"raja",c:"guru",d:"ramu",23:"it number",22:"twenttwo"}

// let{a,c,g,...r} = obj;
// // here we give g but in the obj g is not define so it will be undefine we have to give in destructure obj which should be define in obj .
// console.log(a,c,g,r)

let bo = document.body
bo.onload = function func1(){
    let h = document.querySelector("h1")
    h.innerHTML = `<p>this is onload </p>`
}