showdata();

class Book {
    constructor(bookname, authorname) {
        this.bookname = bookname;
        this.authorname = authorname;
    }

}

class Display {
    reset() {
        let libraryform = document.getElementById("libraryform")
        libraryform.reset();
    }

    add(book) {
        let nameofbook = book.bookname;
        let nameofauthor = book.authorname;


        let data;
        let getdata = localStorage.getItem("alldata")
        if (getdata == null) {
            data = [];
        }
        else {
            data = JSON.parse(getdata)

        }
        let storedata = { bookname: nameofbook, authorname: nameofauthor }

        data.push(storedata)
        localStorage.setItem("alldata", JSON.stringify(data))


    }

    validate(book) {

        if (book.bookname.length > 2 && book.authorname.length > 2) {
            return true;
        }
        else { return false; }
    }

    alert(type, Message) {

        // set the color of alert 
        let color = "";
        if (type === "sucess") {
            color = "success";
        }
        else { color = "warning"; }

        let alert = document.getElementById("message")

        let html = "";
        html += `<div class="alert alert-${color} alert-dismissible fade show" id="alert" role="alert">
                    <strong>${type}!</strong> ${Message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`

        alert.innerHTML = html;

        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }

}





function showdata() {

    let data;
    let getdata = localStorage.getItem("alldata")
    if (getdata == null) {
        data = [];
    }
    else {
        data = JSON.parse(getdata)

    }

    console.log(data)

    let html = "";

    data.forEach(function (element, index) {

        html += `<tr>
                <td>${element.bookname}</td>
                <td>${element.authorname}</td>
                <td><button class="btn btn-primary" id=${index} onclick = "deletenode(this.id)" >Delete</button></td>
            </tr>`
    });


    let tabledata = document.getElementById("tablebody")
    tabledata.innerHTML = html


}



let addbook = document.getElementById("addbook")

addbook.addEventListener("click", adddata)

function adddata(e) {
    e.preventDefault();
    let namebook = document.getElementById("bookname").value
    let nameauthor = document.getElementById("authorname").value


    let book = new Book(namebook, nameauthor)


    let display = new Display()

    if (display.validate(book)) {
        display.alert("sucess", "Your book  has been successfully added ")
        display.reset();
        display.add(book);
        showdata();
    }
    else {
        display.alert("failed", "Sorry you cannot add this please enter a valid Book & Author Name")
    }

}


let data;
let getdata = localStorage.getItem("alldata")
if (getdata == null) {
    data = [];
}
else {
    data = JSON.parse(getdata)

}



function deletenode(index) {

    let data;
    let getdata = localStorage.getItem("alldata")
    if (getdata == null) {
        data = [];
    }
    else {
        data = JSON.parse(getdata)

    }

  
    data.splice(index, 1)
    localStorage.setItem("alldata", JSON.stringify(data))
    showdata();
    console.log(data)

}






