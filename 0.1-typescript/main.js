//interface
var Point = /** @class */ (function () {
    function Point(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
    }
    ;
    Point.prototype.drawPoint = function () {
        console.log("Draw a point at X: " + this._x + " and Y: " + this._y + " and Z: " + this._z);
    };
    ;
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("value cannot be less number 0");
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2, 4);
console.log("X is " + point.x);
try {
    point.x = 7;
}
catch (err) {
    console.log(err);
}
point.drawPoint();
