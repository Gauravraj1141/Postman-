class Library {
    constructor(booklist) {
        this.booklist = booklist;
    }

    Getbooklist() {
        console.log(this.booklist)

    }


    Issubook(Bookname, User) {
        if (this.booklist.includes(Bookname)) {
            let myindex = this.booklist.indexOf(Bookname)
            let issubook = this.booklist.splice(myindex,1)
            console.log("in OUr library books are: ",this.booklist)
            let data = [];
           data.push(User,issubook)
           console.log(data)
            
        }
        else{
            console.log("Sorry!This book is not available in our library")
        }
    }

    Returnbook(Bookname) {
        this.booklist.push(Bookname)
        console.log("now Books in LIbrary",this.booklist)
    }
}



Booklist = ["math", "hindi", "english", "physices", "science"]
let user = new Library(Booklist)

user.Issubook("science","gaurav")
user.Issubook("math","gaurav")
user.Returnbook("math")


