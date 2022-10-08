// we can create a new map from this  it is a function 
const mymap = new Map();

let elem1 = "this is key1";
let elem2 = {};
let elem3 = function(){};

mymap.set(elem1,"this is Value 1 ")
mymap.set(elem2,"this is Value 2")
mymap.set(elem3,"this is Value 3 ")


// we use keys() to access all keys 

for(let value of mymap.keys()){
    console.log(value)
}

// we use vlaues() to access all values
for(let key of mymap.values()){
    console.log(key)
}












// in this foreach loop we can iterate the value of this mymap and we need to give first value and after that key 
// mymap.forEach((value,key)=> {
//     console.log("this is key => "+ key +" It is value => " + value)
// });









// we can get value by .get() 
// let onlyvalue = mymap.get(elem1)
// console.log(onlyvalue);

// // we can iterate this map key values both with for of loop
// for(let [key,value] of mymap){
//     console.log(key,value)
// }



















// // we can acces this map's values by this values()
// let value = mymap.values()
// // // we can acces this map's values by this keys()
// // let key = mymap.keys()
// value = Array.from(value)
// // console.log(value)
// for(let i in value){
//     console.log(value[i])
// }
// console.log(key)

