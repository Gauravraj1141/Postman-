
// in this we make cake from flour and inherit the property of flour for making cake

function flour(name, price, water) {
    this.name = name,
        this.price = price,
        this.water = water
}

// we add some function in it help of prototype 
flour.prototype.makingprocess = function () {
    return (`we make dought(gutha hua ata) with the help of ", ${this.name} flour`)
}


let dought = new flour("aashirvad", "44 Rs./kg", "4cup")

console.log(dought.makingprocess())
console.log(dought)

// now we make cake from this flor property and we need to add only one or two property to make cake.

function cake(name, price, water, cream, tags) {

// first we need to  inherit all properties of flour 
flour.call(this, name, price, water)
// and we add our property for making cake
this.cream = cream,
this.tags = tags

}


// but in this we can't got prototype of flour so we inherit prototype mannually , we store flour prototype inside cake.
cake.prototype = Object.create(flour.prototype);

// we set the constructor mannually
cake.prototype.constructor = cake;



let makecake = new cake("aashirvad","55 Rs./kg","6 cup","5 packets","birthday tags")

console.log(makecake)
console.log(makecake.makingprocess())