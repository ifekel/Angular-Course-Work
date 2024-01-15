// function log(message) {
//     console.log(message);
// }
// let message = "Hello World";
// log(message);
// let a: number;
// let b: boolean;
// let c: string
// let d: any
// let e: number[] = [1, 2, 3, 4];
// let f: any[] = [1, true, "ifeanyi"]
// enum Color { Red, Green, Blue };
// let backgroundColor = Color.Red;
// let message;
// message = "abc";
// let endsWithC = (<string>message).endsWith("c");
// let alternative = (message as string).endsWith("c");
// let drawPoint = (point: { x: number, y: number}) => {
//     // ...
// }
// drawPoint({
//     x: 2,
//     y: 4
// })
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value must be greater than 0');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(5, 10);
var x = point.x;
point.x = -50;
point.draw();
