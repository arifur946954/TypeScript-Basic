"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const shape_1 = require("./shape");
const triangle_1 = require("./triangle");
let myShape = new shape_1.shape(10, 20);
console.log("shape is " + myShape.getInfo());
let myCircle = new circle_1.circle(10, 30, 25);
console.log("Circle is " + myCircle.getInfo());
let myTriangle = new triangle_1.triangle(11, 121, 111, 21);
console.log("triangle is :" + myTriangle.getInfo());
let theShape = [];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myTriangle);
for (let tempShape of theShape) {
    console.log("push by call" + tempShape.getInfo());
}
