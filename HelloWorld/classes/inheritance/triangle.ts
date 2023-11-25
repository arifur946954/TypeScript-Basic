import { shape } from "./shape";

export class triangle extends shape{
    

    constructor(theX:number,theY:number,private _width: number,private _len: number){
        super(theX,theY);

    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get len(): number {
        return this._len;
    }
    public set len(value: number) {
        this._len = value;
    }

    getInfo(): string {
        return super.getInfo() +`width=${this._width} lengt=${this._len}`
    }
}