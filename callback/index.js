// shortcut for multiple element :
// div>nav>ul*3>a

// let arr1 = [2,3,4,6,7]


// let cub = function cube(arr1){
//     return (Math.PI*arr1**2);
// }

// let area = function a(arr1){
//     return (arr1**6);
// }

// function cpu(ipw , cub){
//     let ip = []
//     for (let i = 0; i < ipw.length; i++) {
//         ip.push(cub(arr1[i]))
//     }
//     console.log((ip))

// }

// console.log(cpu(arr1,cub));
// console.log(cpu(arr1,area));


















// // let logic = function x(a){
// //     return a*a;
// // }

// // function y(logic, b){
// // let c = [];
// // for (let i = 0; i <logic.length; i++) {
// //              c.push(logic[i]*5)
// // }
// //   return c;

// // }


// let length1 = [5, 8, 9, 55]
// let width = [22, 5, 6, 9]


// let area = function x(length1, width) {
//     return length1 * width;
// }

// let parameter = function x(length1, width) {
//     return 2 * (length1 + width);
// }


// function process(logic) {
//     let p = [];
// // we call these functions in this function firstly we give in this without call these functions
//     console.log(logic)

//     for (let i = 0; i < length1.length; i++) {
//         p.push(logic(length1[i], width[i]))
//     }

//     console.log(p)

// }

// process(area);
// process(parameter);











// let  arr = [3,3,2,3,4,33]


// let logic = function (arr){

//     return arr*arr*3
// }

// let calculation = function x(logic , arr)
// {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(logic(arr[i]))

//     }
//     console.log("this is function",arr2)
// }

// // and we can use map place of this calculation function
// console.log("this is map", arr.map(logic))

// calculation(logic,arr)








// // map filter and reduce
// let array = [33,2,3,4,43,33]

// // convert in to binary
// // because binary ka base 2 hota h isliye 2 kr dia 

//  function binary(x){
//     return x.toString(2);
// }
// const output  = array.map(binary)
// console.log(output);

// // we can write a funciton like this
// // it is annoymous arrow function
// console.log(array.map((x)=>{
//     return x.toString(2);  }))

// // and we write this funciton like this 
// console.log(array.map((x)=>x.toString(2)))












// // filter

// array = [3, 3, 24, 2, 423, 43, 42, 32, 234, 234, 3, 3]

// function isodd(x) {
//     return x % 2 !== 0;
// }
// function iseven(x) {
//     return x % 2 === 0;
// }

// console.log(array.filter(isodd))
// console.log(array.filter(iseven))

// // and we can write also this type of function in it
// // all the number that are divisible by 3;
// // it is a one line function in higherorder function

// console.log(array.filter((x) => x % 3 === 0));













// // reduce   
// array = [33, 32, 23, 23, 423, 42]

// function addall(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }

//     return sum;
// }
// console.log(addall(array))


// // logic in reduce because reduce is iterate all the value of array.  
// let output = array.reduce((a, b) => a + b)
// console.log(output)

// // here acc = accumulator means it gives 0 in second parameter in reduce and curr is array current value iteration
// let output1 = array.reduce(function (acc, curr) {
//     acc = curr + acc;
//     return acc;
// },0)
// console.log(output1)


// array = [33, 32, 23, 23, 423, 42]

// console.log(array.reduce((a,b)=>{
//     a = a+b
//   return a;
// }))
// console.log(array.reduce((a,b)=>{
//     a = a+b
//   return b;
// }))





// const array = [
//     {firstName:"gaurav",lastName:"rajput",age:24},
//     {firstName:"ram",lastName:"singh",age:55},
//     {firstName:"tanwar",lastName:"chaudhary",age:54},
//     {firstName:"puysh",lastName:"rchaudhary",age:35},
//     {firstName:"anu ",lastName:"rchaudhary",age:23},
//     {firstName:"gita",lastName:"harijan",age:24}


// ]


// console.log(array.map((x)=>{
//     return (x.firstName + " "+x.lastName);
// }))


// let names = array.filter((x)=>x.age>30)
// let names2 = names.map((x)=>x.firstName)


// console.log(names2)


// let names2 = names.reduce((x,y)=>{

//    x = x +  y.firstName
//     return x;
// }," ")

// console.log(names2)



















// console.log(array.reduce((x,y)=>{

//     if (x[y.age]) {
//         x[y.age]=++x[y.age]
//     }
//     else{
//         x[y.age] = 1

//     }
//     return x;
// },{}))





















// const array = [
//     {firstName:"gaurav",lastName:"rajput",age:24,marks:60},
//     {firstName:"ram",lastName:"singh",age:55,marks:56},
//     {firstName:"tanwar",lastName:"chaudhary",age:54,marks:25},
//     {firstName:"puysh",lastName:"rchaudhary",age:35,marks:35},
//     {firstName:"anu ",lastName:"rchaudhary",age:23,marks:23},
//     {firstName:"gita",lastName:"harijan",age:24,marks:22}


// ]

// const age1 = (x)=>{
//     x = x.age<30 && x.marks >50 ;
//     return x;
// }
// let names = array.filter(age1)

// let finalname = names.map((x)=>{
//     x = x.firstName+""+x.lastName
// return x;
// })


// console.log("younger tooper is : ",finalname)


// let a = true;
// let b = 66;
// b = b.toString(2)
// console.log(typeof a)
// console.log(typeof b) //binary is string 
// console.log("this is 66 in binary ", b)
// console.log( a+77)
// console.log(a+a)







// let b  = String(22);
// let a = 222;
// a = a.toString();
// console.log(a)
// console.log( typeof b  , typeof a)

// let date  = new Date
// let time = new Date().getTime()
// let onlydate = new Date().getDate()
// let onlyhour = new Date().getVarDate

// console.log(date)
// console.log(time)
// console.log(onlydate)
// console.log(onlyhour)


// let arr = [33,2,23,3,43,43,4,343]

// // it is array this length is 8 because in this object it counts only in this value
// console.log(arr.length , typeof arr)

// // it converted in to string so it count all the character inside this like comma also
// arr = arr.toString()

// console.log(arr.length , typeof arr)











// let num = "22";

// console.log(typeof num)

//  num = Number("22");

// console.log(typeof num)

// let num2 = 222.223;
// // it converts into he integer 
// num2 = parseInt(222.223)

// console.log(typeof num2 , num2)
// // in converts only number
// num2 = Number(222.223)


// console.log(typeof num2 , num2)



// let num3 = parseFloat("223.323")
// console.log(num3  , typeof num3)






// let a = 3223;

// // when we add decimal number  in any number by default it will 0 but we add more we want to add number after point .

// console.log(a.toFixed(2))

// a  = 23423.323;
// console.log(a.toFixed(33))


// let str = "234";
// let num = 343;
// ye dono concatinate hojaeynge
// console.log(str +num)

// let b  = document.images
// a = document.scripts
// document.write(a)
// document.write(b)


// let sentence = "harry "
// let links  = document.links
// links = Array.from(links)
// links.array.forEach(element => {
//     console.log(element)
//     for (let i = 0; i < links.length; i++) {
//         console.log(element[i])

//         }

//     });










// let a = document.links
// a = Array.from(a)

// href = "python"
// a.forEach(element => {
// element = element.toString()
//     if (element.includes(href)) {
//         console.log(element)

//     }
// });



// let doc = document.links
// console.log(doc)

// let str = "gr"
// Array.from(doc).forEach(element => {
//     let href = element.href


//     if (href.includes(str)) {
//         console.log(href)

//     }
// });




// let data = document.getElementsByTagName("span")[0]
// console.log(data)
// console.dir(data)

// let node = document.body.firstChild.tagName
// console.log(node)

// let node1 = document.body.firstElementChild.tagName
// console.log(node1)

// console.log(get.innerText = "this is only a boy")

// console.log(get.outerHTML = "<div>this is only a box </div")

// console.log(get.innerHTML = "this is no anythins <br><hr>")

// let get = document.getElementById("bio")


// let cont = document.body

// console.log(cont.childNodes)
// console.log(cont.childNodes[0])
// console.log("this is nodetype of comment : ",cont.childNodes[0].nodeType)
// console.log("this is nodetype of text : ",cont.childNodes[1].nodeType)
// console.log(cont.children)
// console.log("this is nodetype of elements : ",cont.children[5].nodeType)
// console.log(cont.children[0].nodeName)









// so we get a element in which we add a child node
// we get first ul for append in li and inside li we append anchor tag ok.
// let ul = document.getElementById("nav").firstElementChild
// console.log(ul)

// // now we create a new li 
// let li = document.createElement("li")


// // now we create a element  anchor tag and it append inside li 
// let make = document.createElement("a")
// make.id = "myid";
// // and give a class name
// make.className = "mycl"
// // and give an attributes this
// make.setAttribute("href", "#")
// // we give some text in this in innertext and innerhtml but we prefferinner html
// make.innerHTML = " my new li"
// // we append anchor tag inside li
// li.appendChild(make)
// // we append it in ul 
// ul.appendChild(li)
// console.log(make)






// let atr = document.getElementById("navbar")
// console.log(atr)
// console.log(atr.hasAttribute("class"))


// atr  = atr.firstElementChild.firstElementChild.firstElementChild
// console.log(atr.hasAttribute("href"))



// let atr = document.getElementById("navbar")
// console.log(atr)
// console.log(atr.getAttributeNames())
// console.log(atr.getAttribute("id"))
// console.log(atr.getAttribute("class"))


// let atr = document.getElementById("navbar")
// console.log(atr)


// atr = atr.setAttribute("href","https//www.google.com//")

// atr  = atr.setAttribute("title","bar")



// let atr = document.getElementById("navbar")
// console.log(atr)
// atr = atr.removeAttribute("id")


// let atr = document.getElementById("navbar")
// atr  = atr.attributes
// console.log(atr)
// console.log(atr[0])
// console.log(atr[1])


// let atr = document.getElementById("navbar")
// console.log(atr.setAttribute("data-log","bharat"))
// console.log(atr)
// console.log(atr.dataset)
// console.log(atr.dataset.log)
// console.log(atr.dataset.name)





// let element = document.createElement("a")
// let text = document.createTextNode("new navbar")
// element.append(text)
// console.log(element)
// element.id = "navbar1"
// element.className = "nav1"
// element.setAttribute("href","#")

// let ul  = document.getElementsByTagName("ul")[0]
// console.log(ul)

// let li = document.createElement("li")
// li.append(element)

// ul.append(li)
// console.log(li)







// let element = document.createElement("div")

// element.id = "new"
// element.className = "newcl"
// element.setAttribute("href","#")
// console.log(element)
// //   we give in this text node

// let text = document.createTextNode("this is new div")
// element.append(text)

// let text = document.createTextNode("Go to code with Harry")
// let heading = document.createElement("h1")
// heading.append(text)
// console.log(heading)

// let anchor = document.createElement("a")
// anchor.setAttribute("href","https://www.codewithharry.com")
// console.log(anchor)
// anchor.append(heading)
// document.body.append(anchor)


// let element = document.getElementById("home").firstElementChild
// console.log(document.getElementById("home"))
// // so in this element we get first line of this div
// console.log(element)

// let elem2 = document.createElement("h1")
// elem2.id = "heading"
// elem2.className = "heading"
// elem2.setAttribute("title","heading")
// console.log(elem2)
// // now in this elem2 we add textnode
// let text = document.createTextNode("this is our new heading we replace it previous heading ")
// elem2.append(text)

// element.replaceWith(elem2)


// // we replace the child of this navbar
// let ul = document.getElementById("navbar").firstElementChild
// console.log(ul)

// let newchild = document.createElement("li")
// newchild.id = "newnav"
// newchild.className = "nav"
// let text = document.createTextNode("new child ")
// newchild.append(text)

// // now we replace ul first child means home from newchild

// ul.replaceChild(newchild,ul.firstElementChild)

// // we can remove child from any elements

// ul.removeChild(ul.lastElementChild)

















// let elem = document.getElementById('home').firstElementChild
// console.log(elem)
// function press(x){
//     // this function will be execute when we click on the line
//     // it gives us many items 
//     console.log(x)
//     // x.target gives us a element , we click on that.
//     let element = x.target;
//     element = x.target.className;
//     element = x.target.classList;
//     // we can get id and all many things by the help of this 
//     // target yani hmne kha click kiya 
//     console.log(element)
//     console.log("you press home line")

// }
// elem.addEventListener("click",press)


// let nav = document.getElementsByTagName("li")[0].firstElementChild
// console.log(nav)


// // we give a function 
// function process(x){
//     nav.style.fontSize = "55px"
//     console.log("done")
// }

// nav.addEventListener("mouseover", process)






// function func1(x){
// // so when on this submit button so it goes to the next page and event listener is not run properly so we give preventdefault in x
//     console.log("we click on this ", x )
//     // now eventlistener work properly
//     x.preventDefault();
// }

// function func2(x){
// // now we add event double click when we double click on this submit buton so this funciton will be execute
//     console.log("we click double on it  ", x )
//     // now eventlistener work properly
//     x.preventDefault();
// }
// btn.addEventListener("mousedown",func1)

// function func1(x){
//     console.log(" we press on mouse center button", x)
//     x.preventDefault();
// }


// let btn = document.getElementById("home")
// console.log(btn)


// btn.addEventListener("mouseenter" , func1)

// function func1(x){
//     console.log("it is mouseenter when mouse enter at home so it will print means event will execute.",x)
// }




// let btn = document.getElementById("home")
// console.log(btn)


// btn.addEventListener("mouseout",func1)

// function func1(x){
//     console.log("it is mouseout when we exite this element means cursor is exit this element then it execute.",x)
// }



// let btn = document.getElementById("home")
// console.log(btn)


// btn.addEventListener("mousemove",func1)

// function func1(x){
//     console.log("when we move cursor so it will execute .",x)
// console.log(x.offsetX,x.offsetY)
// btn.style.background = `rgb(${x.offsetY},${x.offsetY},${x.offsetX})`
// }
// now we append this div in before div
// div.append(newdiv)
// div.prepend(newdiv)

// div.innerHTML =   div.innerHTML + "<br> we insert this tag in this div <br> "


// we insert element in dom

// let div = document.getElementById("home")



// let newdiv = document.createElement("div")

// newdiv.className  = "second"
// newdiv.id  = "second"
// newdiv.innerHTML = "<br> we add second div in this <br>"

// // div.before(newdiv)
// div.after(newdiv)







// insert adjacent

// let div = document.getElementById("first")

// let newdiv = document.createElement("div")
// newdiv.innerHTML = "this is beforebegin"

// div.insertAdjacentHTML("beforebegin",`<br>this is html</br>`  )
// div.insertAdjacentElement("beforebegin",newdiv  )
// div.insertAdjacentText("beforebegin", "this is text beforebegin this div" )






// let div = document.getElementById("first")

// div.insertAdjacentText("afterend","this is text")

// div.insertAdjacentHTML("afterend",`<br>this is html it add after the div </br>`  )
// let newdiv = document.createElement("div")
// newdiv.innerHTML = "this is afterend we add this in the last "


// div.insertAdjacentElement("afterend", newdiv  )




// let div = document.getElementById("first").lastElementChild
// console.log(div)

// div.remove()


// let storage = localStorage.clear()


// console.log(storage)



// how we add our data in local storage

// let storage = localStorage.setItem("name","gaurav")
// let storage1 = localStorage.setItem("name2","raja")
// let storage2 = localStorage.setItem("name3","gaurav")


// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('name2'))
// console.log(localStorage.getItem('name3'))

// // let clear = localStorage.clear()
// let remove = localStorage.removeItem("name")

// let value = ["rohan","raju","rampal"]
// // when we store values so it will be store as a string so we give this form of json.stringfy
// // let store = localStorage.setItem("names", value)
// let store2 = localStorage.setItem("names", JSON.stringify(value))

// // and we get it json.parse 
// let items = JSON.parse(localStorage.getItem("names"))
// console.log(items)

// let items = ["gaurav", "professional","rajput"
// ]

// localStorage.setItem("name", JSON.stringify(items))


// console.log(JSON.parse(localStorage.getItem("name")))



//class name & class list 

// we can give in this div many class name 

// let div = document.getElementById("first")

// console.log(div)

// console.log(div.classList)


// let cl = div.classList.contains("first")
// console.log(cl)

// let cl1 = div.classList.contains("ram")
// console.log(cl1)




// by this we add only one class at particluar Element
// div.classList.add("ram")
// div.classList.toggle("first")
// div.classList.toggle("ram")












// let elem  = document.createElement("div")

// console.log(elem)
// elem.id = "first"

// elem.innerHTML = "<br><h1>this is div and please touch it and edit your text</h1>"

// document.body.append(elem)

// let submit = document.createElement("button")
// submit.setAttribute("type","submit")
// submit.innerHTML = "<b>Submit</b>"
// submit.style.fontSize = "33px"
// console.log(submit)

// elem.addEventListener("click",func1)
// submit.addEventListener("click",func2)


// let ip = document.createElement("input")
// ip.setAttribute("title","text")
// ip.style.height = "33px"

// function func1(x){


//     return elem.after(ip,submit)
// }


// function func2(y){
//     console.log("hshsh")
//     let value = ip.value
//     localStorage.setItem("name",value)
//     elem.insertAdjacentText("beforeend",value)


// }


















// let ap = document.getElementById("first")
// console.log(ap)


// ap.addEventListener("click",func1)
// ap.addEventListener("blur",func2)


// function func1(x){
// console.log(x)
//     let ip = document.createElement("input")
//     ip.setAttribute("title","text")
//     ip.style.height = "33px"
//     ap.after(ip)
// }

// function func2(y){
//     console.log(y)

//     let add = localStorage.setItem("data","radaha")
//     console.log(add)

// }


// let div = document.getElementById("first")
// console.log(div.classList)
// let change = div.classList
// change.add("ram")
// // let newcolor = document.getElementsByClassName("ram").style.color = "red"



// Set timeout and setintervals



// let timerId = setTimeout(function xyz(param1, param2) {
//     console.log("timer is expire and settimeout executed")
//     console.log(param1, param2)
// }, 3000, 'argue1', "argu2");


// console.log("this is timer id ", timerId)



// let timerid = setTimeout((x,y,z) => {
//     console.log("this is settimout")
//     alert("this is alert and it will execute when timer will expire")

//     console.log("sum of numbers are :",x+y+z);
// }, 2000, 4,5,6);


// clearTimeout(timerid)


// setinterval
// it is similiar to while loop 

// let timerid = setInterval(function (x,y,z){
//         console.log("this is settimout")
//         alert("this is alert and it will execute when timer will expire")
//         console.log("sum of numbers are :",x+y+z);
        
//     }, 2000, 4,5,6);
    
//   setTimeout(function(x){
//     clearInterval(timerid);
//   },6000)  


// let div = document.getElementById('div')
// console.log(div)

// div.addEventListener("mouseenter",function(){
//     console.log("it is override div")
// })


// Add eventlistener & removeEventListener


// let btn = document.getElementById('btn')



// let func1 = function func1(d){
//     console.log("this is first func");
// }
// let func2 = function func2(d){
//     console.log("this is second func");
// }
// btn.addEventListener("click", func1)


// btn.addEventListener("click", func2)


// // now we want to alert only second function so we
// // should use for it removeEventListener
// console.log("now remove is on")
// btn.removeEventListener("click",func1)







// let btn = document.getElementById('btn')

// btn.addEventListener("mouseenter",function(event){
//     console.log("this is click event")
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.clientX)
//     console.log(event.clientY)
//     console.log(event.type)

// })


// Question no 1.
// let btns = document.getElementById("navbar").firstElementChild.children
// console.log(btns[0].firstElementChild.addEventListener("click",function func(d){alert("this is home")}))
// console.log(btns[1].firstElementChild.addEventListener("click",function func(d){alert("this is contact")}))
// console.log(btns[2].firstElementChild.addEventListener("click",function func(d){alert("this is about us")}))
// console.log(btns[3].firstElementChild.addEventListener("click",function func(d){alert("this is protfolio")}))


// Question no 2&3.



// let btns = document.getElementById("navbar").firstElementChild.children
// console.log(btns[0].firstElementChild.addEventListener("click",function func(d){location = "https://drive.google.com/drive/u/0/my-drive" }))
// console.log(btns[1].firstElementChild.addEventListener("click",function func(d){location = "https://internshala.com/student/resume?detail_source=resume_after_profile"}))
// console.log(btns[2].firstElementChild.addEventListener("click",function func(d){location = "https://www.youtube.com/watch?v=ER9SspLe4Hg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"}))
// console.log(btns[3].firstElementChild.addEventListener("click",function func(d){location = "https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"}))




// Question no 4.












// Question no 5.


// let bulb = document.getElementById("bulb")


// setInterval(function x(y){
// bulb.innerHTML = '<img id="yel" src="yello.png" alt="yel">'
// setTimeout(() => {
//     bulb.innerHTML = "";
// },1000);

// },2000);




// let timerid = setInterval(function x(e){
//     let col = document.getElementById("yel")
//     col.classList.toggle("clch")
    
// }, 100);

// clearInterval(timerid)


// console.log(Math)

// // Math.round is given next number if .5 or above in the decimal or below the 0.5 case it gives 5
// let z = Math.round(5.4) //it gives 5
//  z = Math.round(5.5)  //it gives 6

// //  ceil gives always next number decimal No. doesn't matter.
//  z = Math.ceil(5.3)   //it gives 6
//  z = Math.ceil(5.7) //it gives 6

 
//  //floor gives only integer value all the point value will be remove 
//  z = Math.floor(5.45454)

// //  it will convert any negative number in to positive number this is abs 
//  z = Math.abs(-6)


// z = Math.E  //value of e 2.718281828459045

// z = Math.PI  // value of pi3.141592653589793


// z = Math.sqrt(36) //6 

// // Math.pow means power of 6 means 6powers 3 = 216
// z = Math.pow(6,3)

// z = Math.min(23432,23,42,342,34,23,423,23,344,2) //2
// z = Math.max(23432,23,42,342,34,23,423,23,344,2) //23432


// // it gives 0 to 1 random number and when we mul by 100 so it will gives 0 to 100 so we add 50 in 0  and decrese 50 from last now it will gives 50 to 100 random numbers. 
// z =Math.floor( 50+Math.random()*(100-50))
// console.log(z)



// bulb on off 

// let on = document.getElementById('btn').firstElementChild
// let off = document.getElementById('btn').lastElementChild



// off.addEventListener("click",func1)
//  function func1(){  let bulb = document.getElementById("bulb")
//             bulb.innerHTML = "";
//             bulb.innerHTML = '<img src="off.png" alt="ligth">'
//         }
    
// (on.addEventListener("click",func2)) 
//         function func2(){
//             let bulb = document.getElementById("bulb")
//             bulb.innerHTML = "";
//             bulb.innerHTML = '<img src="on.png" alt="ligth">'    }
    


// let date = new Date
// console.log(date)
// console.log(date.getFullYear())
// console.log(`Date : ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} , Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)




// let div = document.getElementById("inp").firstElementChild
// let ip = document.getElementById("inp")

// div.addEventListener("click",func1)

// function func1(x){
//       ip.insertAdjacentHTML("beforeend", `<textarea name="text" id="text" cols="30" rows="10" placeholder = "write here" ></textarea>`)
// }
     

// let textarea = document.getElementById('text')

// textarea.addEventListener("blur",function(x){
//     let txtarea  = document.getElementById("text")
  
//     localStorage.setItem("value", txtarea.value)
//     txtarea.value = "";

// })   








