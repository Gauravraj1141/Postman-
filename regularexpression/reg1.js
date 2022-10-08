// let reg = /gaurav/g; // we give regular expression inside it
// // reg = /gaurav/i;
// console.log(reg.source) //it is source of this regx
// console.log(reg.ignoreCase) //it is true when we add ignorecase flag means it is case sensitive 
// console.log(reg.global) //it is true when we add global flag


// regular expression main work is searching the value 

// we have a string and we see functions  to search regexp

// let string = "MY name is gaurav rajput and gaurav is a brand "

// let result = string.split("is")

// console.log(result)













// let result = string.search(reg)
// // it gives an index of the reg if it is available 
// console.log("it is available",result);

// let result1 = string.search(reg2)
// //it gives -1 for the reg is not available
// console.log("it is not available",result1);












// in the match we give before string where we find regex and in the match we give regex
// let result = string.match(reg)
// console.log(result)



















// let result = reg.test(string)
// console.log(result.input)
// let result1 = reg.test(string)
// console.log(result1)
// let result2 = reg.test(string)
// console.log(result2)



// let result = reg.exec(string)
// console.log(result.input)

// let result1 = reg.exec(string)
// console.log(result1)
// let result2 = reg.exec(string)
// console.log(result2)









// // metacharacters in reg ex
// let regx = /gaurav/ 
// // we override the regx and check all the metacharacters

// regx = /^gaurav/ // ^ it checks is start the string with this regx 
// regx = /cute$/ // $ it checks is end the string with this regx 
// regx = /c.te/ // $ it will true when in place of . comes any one character


// regx = /g*uav/ // in place of * can be 0 to many character



// regx = /ga?urav?/ // ? it is use for optional here a and v is optional if here a and v is not avialable so not effect on it .  




// // regx = /ga\*urav/


// let regx = /gaurav/

// regx = /g[a-z]urav/ // means that in place of bracket from a to z will be come. 

// regx = /g[adfsdf]urav/ // in these character a is present so a will come


// regx = /g[^acb]ur[abdsdf]v/ // we can add many character set in one regx



// regx = /g[a-z A-Z]ur[abdsdf][0-9]/ // 





// // Quantifieres
// regx = /ra{2}ja/ // a should be 2 times in this



// regx = /ra{0,2}ja/ // a should be comes 0 or 2 times 0 means if  a is not here so don't worry



//  regx = /(raj){3} ([0-9]r){3}/  //if we give in regx space so it should be in string 

// let string = "rajrajraj 6r4r6r is cute boy"

// let result = regx.exec(string)
// let test = regx.test(string)
// console.log(result)

// if (test) {
//     console.log(`this string ${string} matches the expression ${regx.source} `);
    
// }

// else{
//     console.log(`this string ${string} doest not  match the expression ${regx.source} `);
    
// }






// tut 49

let regx = /\w/
 regx = /\w+/ // \w is for word character which can be a alphabet , number or  _ underscore


 regx = /\w+very/ 

 regx = /\W+/





regx = /boy \d/  //one digit character

regx = /boy \d+/  //more than one digit character

regx = /\D/  // one non digit character

regx = /\D+/  // one non digit character


regx = /\s63/  // one white space character

regx = /\s+ 63/  // more than  one white space character

regx = /\Sboy/  // one non white space character

regx = /\S+boy/  // one non white space character


regx = /gaurav\b/  // word boundary means after gaurav start a new word

// Assertions

regx = /cute(?!   _boy)/ // means that after gaurav space and "is" avaiable

let string = "gaurav is_very_cute_boy         6395463912"

let result = regx.test(string)
let result1 = regx.exec(string)
console.log(result1)



if (result) { console.log(`this regx ${regx.source} is in this string ${string} `);
}

else{
    console.log(`this regx '${regx.source}'  is not match the string`)
}