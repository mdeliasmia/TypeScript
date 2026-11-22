"use strict";
// function add(
//     a:number,
//     b:number
// ): number;
Object.defineProperty(exports, "__esModule", { value: true });
// function add(
//     a:string,
//     b:string
// ):string
// function add (
//     a:any,
//     b:any
// ){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add("Hello ","Mohit"));
// function show(
//     value: string
// ):void
// function show(
//     value: number
// ):void
// function show(
//     value:any
// ){
//     console.log(value);
// }
// function search(
//     id:number
// ):string
// function search(
//     username: string
// ): string
function search(value) {
    if (typeof value === "number") {
        return `Serach by id: ${value}`;
    }
    else {
        return `Serach by Name: ${value}`;
    }
}
console.log(search(101));
console.log(search("Mohit"));
