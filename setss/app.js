// set  

let myset = new Set();

myset.add("gaurav")
myset.add("ram")
myset.add(45)
myset.add({name:"rohit"})



console.log(myset)

let yourset = new Set(["some",23,3423,23,343,2342,])

console.log(yourset)

console.log(yourset.size)
console.log(myset.size)


let myarray = [2342,23,23,242,23,423,21,123,42,342,42,342,42,42,42345,.345,3534,345]


console.log(myarray)

let removeduplicate = new Set(myarray)

console.log("before convert into array",removeduplicate)
removeduplicate = Array.from(removeduplicate)

console.log("after convert into array",removeduplicate)






