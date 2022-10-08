// function iterator(array) {
//     // firstly we give a variable that helps us to iterate next value of this array.
//     let increment = 0;
//     return {
//         //we return a object means a function (next() is a function) that retruns some value 
//         next() {
//             if (increment < array.length) {

//                 return {
//                     value: array[increment++],
//                     done: false
//                 }


//             }
//             else {
//                 return {
//                     value: array[increment++],
//                     done: true

//                 }
//             }
//         }
//     }
// }

// let array = ["apple", "banana", "fruity", "mango", "litchi"]
// let fun = iterator(array)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)



// let array = [233,2367,236,234,423,43,3,23]
// // now we iterate this array with the hlep of iterator function

// // it is a function of iterator . symbol.iterator
// let  result = array[Symbol.iterator]();

// // now we can iteratethe value of this array
// // we can iterate the values of it with while loop
// iter = result.next()

// console.log(iter);
// console.log(iter.value);
// console.log(iter.done);

// // so we run this while loop till done will true.

// while(!iter.done){
//     console.log(iter.value)
// iter = result.next()


// }



