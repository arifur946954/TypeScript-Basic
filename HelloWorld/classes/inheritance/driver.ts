import { circle } from "./circle";
import { shape } from "./shape";
import { triangle } from "./triangle";

let myShape=new shape(10,20);
console.log("shape is "+myShape.getInfo())
let myCircle=new circle(10,30,25); 
console.log("Circle is "+myCircle.getInfo())
let myTriangle=new triangle(11,121,111,21);
console.log("triangle is :"+myTriangle.getInfo());

let theShape:shape[]=[];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myTriangle);

for(let tempShape of theShape){
    console.log("push by call"+ tempShape.getInfo());
   

}