"use strict";
// function add(a:number,b:number){
//     return a-b;
// }
// console.log(add(10,20));
Object.defineProperty(exports, "__esModule", { value: true });
function cal(price, quantity) {
    console.log(price);
    console.log(quantity);
    const result = price * quantity;
    return result;
}
console.log(cal(500, 2));
