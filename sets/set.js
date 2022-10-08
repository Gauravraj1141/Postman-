// // we makes set with new keyword and it stores unique values 

// let myset = new Set()

// // we add in values by .add() 
// myset.add("gaurav")
// myset.add("gaurav")
// myset.add("Gaurav")
// myset.add("Ravi")
// myset.add(234)

// console.log("Before Delete",myset)

// // // we can iterate it with the for each loop 
// myset.forEach((Element)=>{
//     console.log(Element)
// })

// we have an array  
// let array = [23,234,23,4,23,23,23,2,32,3,3,434,25,12,4]
// console.log(array)

// console.log("length of Previous array ",array.length)

// // we remove all the duplicates from It  with the help of sets 

// let newset = new Set(array)
// console.log(newset)

// // now we convert set in to array 
// newset = Array.from(newset)
// console.log(newset)
// console.log("length of new array ",newset.length)




// const myset = new Set()

// console.log(myset);

// myset.add("name")
// myset.add("name")
// myset.add("rll no")
// myset.add("class")
// myset.add("profession")

// console.log(myset);


// const yourset = new Set(["gaurav",343,{name:"gaurav",class:"mca"},()=>{console.log("myname")},function (){console.log("annonymous funciton")},"gaurav"])

// console.log(yourset)
// console.log(yourset.size)

// // how can we delete the value from set 
// console.log(myset.has("name"));

// myset.delete("name")
// console.log(myset)

// console.log(myset.has("name"));


// why we use set . 

// let myarray = [2235,23423,3,23,4,34,3,453,56,6,46,345,34,5354,3,345,35,35,3345.3453,345]

// // remove all the repeated values from this array 
// console.log(myarray);
// console.log(myarray.length);


// const removerepeat = new Set(myarray)

// console.log(removerepeat)

// let newarray = Array.from(removerepeat)

// console.log(newarray)




















// // we can delete any value from it  

// myset.delete("Ravi")

// console.log("Bafter Delete",myset)

// // we can know the length of this set by .size

// console.log(myset.size)













// we can check any value that is inside it or not 

// console.log(myset.has("gaurav"))
// console.log(myset.has("rajput"))












// // we can access these value by for of and for each and we can iterate it .   
// for(let i of myset){
//     console.log(i)
// }


















// // we can also give values in it 

// let myset2 = new Set([23,"ravi",{name:"gaurav",village:"kalyanpur"},"rajput",2343])

// console.log(myset2)
