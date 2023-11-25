"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const shape_1 = require("./shape");
class circle extends shape_1.shape {
    constructor(theX, theY, _radious) {
        super(theX, theY);
        this._radious = _radious;
    }
    get radious() {
        return this._radious;
    }
    set radious(value) {
        this._radious = value;
    }
    getInfo() {
        return super.getInfo() + `radious=${this._radious}`;
    }
}
exports.circle = circle;
