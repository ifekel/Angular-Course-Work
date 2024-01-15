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


import { Point } from './point';

let point = new Point(5, 10);
point.draw();