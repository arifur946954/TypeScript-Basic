class customer{
    first_name:string;
    last_name:string;

    constructor(theFrst:string,theLast:string){
        this.first_name=theFrst;
        this.last_name=theLast;
    }
}

//create a instance
let myCustomer =new customer("Arifur","Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
console.log("Name is"+myCustomer.first_name+" "+myCustomer.last_name);
