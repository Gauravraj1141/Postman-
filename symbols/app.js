// let mysymbol = Symbol()
// let mysymbol2 = Symbol()
// // these symbols are not same 
// console.log(mysymbol === mysymbol2)


// console.log(mysymbol);

// // we can access the value of symbol from description
// console.log(mysymbol.description );


// // but the value of these symbols is same so it will true 
// console.log(mysymbol.description  ===  mysymbol2.description );

// console.log(null === null);
// console.log(undefined === undefined);


// let mysymbol = Symbol()
// let mysymbol2 = Symbol()
// // these symbols are not same 
// console.log(mysymbol === mysymbol2)

// console.log(typeof mysymbol);





// now we make two symbols

const s1 = Symbol("this is symbol 1 ")
const s2 =  Symbol("this is symbol 2 ")

let myobj = {}
myobj[s1] = "gaurav"
myobj[s2] = "ravi"
myobj["name"]  = "radha "

console.log(myobj);

console.log(myobj[s1])
console.log(myobj[s2])


// for in loop ignore the symbols 
for(let key in myobj){
    console.log(key, myobj[key])
}