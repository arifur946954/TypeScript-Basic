var custommer = /** @class */ (function () {
    function custommer(theFrst, theLast) {
        this.first_name = theFrst;
        this.last_name = theLast;
    }
    Object.defineProperty(custommer.prototype, "firstName", {
        get: function () {
            return this.first_name;
        },
        set: function (value) {
            this.first_name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(custommer.prototype, "lastName", {
        get: function () {
            return this.last_name;
        },
        set: function (value) {
            this.last_name = value;
        },
        enumerable: false,
        configurable: true
    });
    return custommer;
}());
//create a instance
var myCustommer = new custommer("Arifur", "Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
//console.log("Name is"+myCustommer.first_name+" "+myCustommer.last_name);
console.log("Name is: " + myCustommer.firstName + " " + myCustommer.lastName);
