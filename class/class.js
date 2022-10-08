// we make class and inside it add a constructor

class student {
    // we need to make a constructor
    constructor(stname, stcourse, stmarks, stvillage) {
        this.name = stname,
            this.course = stcourse,
            this.marks = stmarks,
            this.village = stvillage
    }

    // now we  make another function speech it is prototype .
    speech() {
        return `Hello EveryOne , I am ${this.name} and I am  ${this.course} student`
    }
    // now we make one more function in this class it is also a prototype
    residence() {
        return `hi I am ${this.name} and i am from ${this.village}`
    }
    // we make a static method in this we not need to any object to access it  we can access it without this object like we don't need gaurav to access it

    static average(a, b, c) {
        return a + b + b / 3;
    }

}

// now we make a instace object for this class or template

let gaurav = new student("gaurav", "Mca", 66, "kalyanpur")

console.log(gaurav)
console.log(gaurav.speech())
console.log(gaurav.residence())

//  we can access it by class name don't need any object to acces it.
console.log(student.average(33, 32, 22))


// now we inherit the properties of student class and after that add some more property let's see how it works.
// means that it takes all the property of student class with the help of extends 

class programmer extends student {
    constructor(stname, stcourse, stmarks, stvillage, language) {
        // when we give value in our object then this constructor call student's class constructor
        super(stname, stcourse, stmarks, stvillage);
        this.language = language

    }

    project() {
        return ` this project made by ${this.name} in ${this.language} `
    }

    favlang() {
        if (this.language == "python") {

            return `${this.name} favorate language is ${this.language}`;
        }
        else { return `${this.name} favorate language is javascript` }
    }

}

let harry = new programmer("harrybro", "mca", 55, "nagal", "python")



let tushar = new programmer("tushar", "mca", 55, "nagal", "c++")


console.log(harry)
console.log(harry.project())
console.log(harry.favlang())
console.log(tushar.project())
console.log(tushar.favlang())

// now we can inherit  it's all prototype functions like this.with the help of class we can easily inherit all the constructor and prototype of parent class 
console.log(tushar.speech())