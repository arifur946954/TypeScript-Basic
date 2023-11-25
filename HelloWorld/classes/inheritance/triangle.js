"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
const shape_1 = require("./shape");
class triangle extends shape_1.shape {
    constructor(theX, theY, _width, _len) {
        super(theX, theY);
        this._width = _width;
        this._len = _len;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get len() {
        return this._len;
    }
    set len(value) {
        this._len = value;
    }
    getInfo() {
        return super.getInfo() + `width=${this._width} lengt=${this._len}`;
    }
}
exports.triangle = triangle;
