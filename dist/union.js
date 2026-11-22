"use strict";
// let id: string | number;
// id= 101;
// // id= "mohitid";
// // id= true
// console.log(id);
Object.defineProperty(exports, "__esModule", { value: true });
// function printId(
//     id:string | number
// ){
//     console.log(id); 
// }
// printId(true)
function printData(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }
    else {
        console.log(data);
    }
}
printData(123);
