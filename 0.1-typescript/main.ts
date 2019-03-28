//interface
class Point{
    constructor(private _x: number, private _y: number, private _z: number){};
    drawPoint () { // Inline Annotation
        console.log(`Draw a point at X: ${this._x} and Y: ${this._y} and Z: ${this._z}`);
    };

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(value: number){
        if(value <= 0){
            throw new Error("value cannot be less number 0");
        }
        this._x = value;
    }
}

let point = new Point(1, 2, 4);
console.log(`X is ${point.x}`);
try{
    point.x = 7;
}catch(err){
    console.log(err);
}
point.drawPoint();
