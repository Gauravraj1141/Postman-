let uname = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let submit = document.getElementById("submit")

// console.log(uname,email,phone)

let namevalid = false;
let emailvalid = false;
let phonevalid = false;


// name event
uname.addEventListener("blur", func1)

function func1() {

    let regex = /^[a-zA-Z]([0-9a-zA-z\s]){2,15}$/
    let str = uname.value;
    if (regex.test(str)) {
        console.log("name valid ")
        uname.classList.remove("is-invalid")
        namevalid = true;


    }

    else {
        // we add this invalid class in this name form
        uname.classList.add("is-invalid")
        namevalid = false;
    }
}


//Email event

email.addEventListener("blur", func2)

function func2() {
    let regex = /([a-zA-Z0-9\_\-\.]+)@([a-zA-Z0-9\_\-\.]+)\.([a-zA-Z]){2,9}$/
    let str = email.value;
    if (regex.test(str)) {
        console.log("email valid ")
        email.classList.remove("is-invalid")
        emailvalid = true;

    }

    else {
        // we add this invalid class in this email form
        email.classList.add("is-invalid")
        emailvalid = false;
    }
}

// Phone event

phone.addEventListener("blur", func3)

function func3() {
    let regex = /^[0-9]{10}$/
    let str = phone.value;
    if (regex.test(str)) {
        console.log("Phone valid ")
        phone.classList.remove("is-invalid")
        phonevalid = true;

    }

    else {
        // we add this invalid class in this phone form
        phone.classList.add("is-invalid")
        phonevalid = false;
    }
}


// submit event

submit.addEventListener("click", func4)

function func4() {



    let html = "";
    if (namevalid && emailvalid && phonevalid) {

        // we add innnerhtml in the alert for sucess

        html = `<strong>Success!</strong> Your Car Request have been Successfully Submitted .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

        let notification = document.getElementById("alert")
        // we add class in alert 
        notification.classList.add("show", "alert-success")
        // we give show class in it when we click on submit button

        notification.innerHTML = html;

        setTimeout(() => {
            notification.classList.remove("show", "alert-success")
            notification.innerHTML = "";
            // it is for reset this submit btn
            namevalid = false;
            emailvalid = false;
            phonevalid = false;

            
        }, 3000);

        // it is for form reset
        uname.value = "";
        email.value = "";
        phone.value = "";
        // it is for massage reset massage means address.
        let massage = document.getElementById("massage")
        massage.value = "";
        // it is for car seletector reset
        let car = document.getElementById("car")
        car.selectedIndex = 0 ;


    }

    else {
        let notification = document.getElementById("alert")


        // we add innnerhtml in the alert for failer
        html = `<strong>failed!</strong> Your Car Request is not submitted .
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

        // we give show class in it when we click on submit button
        notification.classList.add("show", "alert-danger")

        notification.innerHTML = html;


        setTimeout(() => {
            notification.classList.remove("show", "alert-danger")
            notification.innerHTML = "";

        }, 3000);
    }

}