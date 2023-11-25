class custommer{
   private first_name:string;
  private  last_name:string;

    constructor(theFrst:string,theLast:string){
        this.first_name=theFrst;
        this.last_name=theLast;
    }

    public get firstName():string{
        return this.first_name;
    }
    public set firstName(value:string){
           this.first_name=value;
    }

    public get lastName():string{
        return this.last_name;
    }
    public set lastName(value:string){
           this.last_name=value;
    }
}

//create a instance
let myCustommer =new custommer("Arifur","Rahman");
//myCustomer.first_name="Arifur";
//myCustomer.last_name="Rahman";
//console.log("Name is"+myCustommer.first_name+" "+myCustommer.last_name);
console.log("Name is: "+myCustommer.firstName +" "+myCustommer.lastName)
