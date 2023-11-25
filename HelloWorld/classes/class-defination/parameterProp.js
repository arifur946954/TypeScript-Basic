"use strict";
class parameter {
    constructor(theFrst, theLast) {
        this.theFrst = theFrst;
        this.theLast = theLast;
    }
    get firstName() {
        return this.theFrst;
    }
    set firstName(value) {
        this.theFrst = value;
    }
    get lastName() {
        return this.theLast;
    }
    set lastName(value) {
        this.theLast = value;
    }
}
//create a instance
let myCusparametertommer = new parameter("Arifur", "Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
//console.log("Name is"+myCustommer.first_name+" "+myCustommer.last_name);
console.log("Name is: " + myCusparametertommer.firstName + " " + myCusparametertommer.lastName);
