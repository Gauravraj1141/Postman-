








// we creates objects from object literals.
// let car = {
//     name: "baleno",
//     model : 2022,
//     average : 33,
//     seates : 4,

//     speed : function (){
//         console.log("speed is very fast")
//     }

// }

// console.log(car)
// console.log(car.name)
// console.log(car.speed())
// console.log(car.model,car.average,car.seates)




// now we create object with the help of constructor

function laptop(lpname,lpram,lpprocessor,lpbattery){

    this.name= lpname;
    this. ram = lpram;
    this.processor = lpprocessor;
    this.battery = lpbattery;
    this.speed = function(){
        return(`${this.processor} is very fast processor and it's ram is  ${this.ram}`)
    }

}


let mylappy = new laptop("acer","8Gb","AMD Ryzen 5","8000-mh")

let hp = new laptop("HP","5Gb","i5 5th gen","5600-mh")

console.log(mylappy)
console.log(hp)
console.log(hp.name)
console.log(hp.speed())