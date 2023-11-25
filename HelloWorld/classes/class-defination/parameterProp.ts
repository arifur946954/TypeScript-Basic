class parameter{
   
 
     constructor(private theFrst:string,private theLast:string){
         
     }
 
     public get firstName():string{
         return this.theFrst;
     }
     public set firstName(value:string){
            this.theFrst=value;
     }
 
     public get lastName():string{
         return this.theLast;
     }
     public set lastName(value:string){
            this.theLast=value;
     }
 }
 
 //create a instance
 let myCusparametertommer =new parameter("Arifur","Rahman");
 //myCustomer.first_name="Arifur";
 //myCustomer.last_name="Rahman";
 //console.log("Name is"+myCustommer.first_name+" "+myCustommer.last_name);
 console.log("Name is: "+myCusparametertommer.firstName +" "+myCusparametertommer.lastName)
 