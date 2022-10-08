// // generators

// function* gen(){
//     yield 1;
//     yield 2;
// }


// let result = gen();

// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// generators

function* gen(){
   let i = 0;

   while(true){
    yield i;
    i++;
   }

}


let result = gen();

console.log(result.next())
console.log(result.next())
console.log(result.next())
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
