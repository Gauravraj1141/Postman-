// first we have to access imgbox and whitebox 

let imgbox = document.querySelector(".img")
let whitebox = document.getElementsByClassName("whitebox")



imgbox.addEventListener("dragstart", (e) => {

    // we add this hold class in this img box . 
    e.target.className += " hold"

    setTimeout(() => {
        // we add settimout because all process will be end then it will apply
        e.target.className += " hide"
    }, 0);

})

// when dragend triggered so img class will be add and hold class removed 
imgbox.addEventListener("dragend", (e) => {
    //   in this we add only one class in it img because we remove all class and add only img 
    e.target.className = 'img'


})


whiteboxes = Array.from(whitebox)

whiteboxes.forEach(whitebox => {

    whitebox.addEventListener("dragenter", (e) => {
        // when dragenter fire so background color change and dashed apply 
        e.target.className += (" dashed")


    })


    whitebox.addEventListener("dragover", (e) => {
        // when we leave this image on over the whitebox so it is remove then we remove this default and it will add in it 
        e.preventDefault();

    })

    whitebox.addEventListener("dragleave", (e) => {
        // when dragleave fire so this class will be remove which we add in dragenter.
        e.target.classList.remove("dashed")
    })


    whitebox.addEventListener("drop", (e) => {
        // so when we drop the img so we add this img div append this whitebox 
        e.target.append(imgbox)
    })


});






