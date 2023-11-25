var customer = /** @class */ (function () {
    function customer(theFrst, theLast) {
        this.first_name = theFrst;
        this.last_name = theLast;
    }
    return customer;
}());
//create a instance
var myCustomer = new customer("Arifur", "Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
console.log("Name is" + myCustomer.first_name + " " + myCustomer.last_name);
