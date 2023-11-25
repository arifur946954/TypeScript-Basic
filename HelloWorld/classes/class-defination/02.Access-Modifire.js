"use strict";
class custommer {
    constructor(theFrst, theLast) {
        this.first_name = theFrst;
        this.last_name = theLast;
    }
    get firstName() {
        return this.first_name;
    }
    set firstName(value) {
        this.first_name = value;
    }
    get lastName() {
        return this.last_name;
    }
    set lastName(value) {
        this.last_name = value;
    }
}
//create a instance
let myCustommer = new custommer("Arifur", "Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
//console.log("Name is"+myCustommer.first_name+" "+myCustommer.last_name);
console.log("Name is: " + myCustommer.firstName + " " + myCustommer.lastName);
