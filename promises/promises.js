// function func1(){
//     // we create with new object Promise inside this we give two more functions
//     return new Promise(function (resolve,reject){
//         setTimeout(() => {
//             const error = true;
//             // if error false ho to ye run hojaye
//             if (!error) {
//                 console.log("your request is resolved and this resolve fun will be run")
//                 resolve();
//             }

//             else{
//                 console.log("your request rejected so reject fun run")
//                 reject("we can give parameter it print when  we console e ");
//             }
//         }, 2000);


//     })
// }


// func1().then(function(){
//     console.log("gaurav: Thanks for resolving")
// }).catch(function(e){
//     console.log("gaurav: very bad bro for this error",e)
// })



function mixveg(params) {

    params.forEach((element, index) => {

        console.log("mix the veg", index, element)
    });
}



function vegetables() {
    return new Promise(function (resovle, reject) {
        let error = true;
        if (error = true) {
            console.log("your request is resolved and see the mixvegs : ", resovle())


                }
        else {
            console.log("your request is rejected ")
            reject();
                    }
                    }
                    )
                    }       

vegetables().then(function () {
    console.log("finally it is resolved")
    mixveg(["tarbug", "gask", "ksfj"]);
}).catch(function () {
    console.log('sorry bro your request rejected')
}) 