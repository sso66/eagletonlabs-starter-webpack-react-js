// File: es6/usecases/class.js
// Date: 10/15/2010

class Hamburger {
    constructor() {
        // ...
    }
    // $ convention to mark as private method 
    $listToppings() {
        console.log("\nList Toppings")
    }

    formatToppings() {
        console.log("\nFormat Toppings: " + (10*10))
    }
    
    list() {
        // return this.formatToppings(this.$listToppings)
        
        // function invocation
        return this.formatToppings(this.$listToppings())
    }

}
// Object
let burger = new Hamburger();
// method invocation
burger.list();




// eof
