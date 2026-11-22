"use strict";
// function greet(username:string){
//     console.log("Welcome to TS",username);
// }
// greet("Mohit Kumar")
Object.defineProperty(exports, "__esModule", { value: true });
// function add(a:number,b:number):number{
//     return a+b;
// }
// let result = add(10,20);
// console.log(result);
// function test():number{
//     return 100;
// }
// let result = test();
// console.log(result);
//?:
// function greetUser(
//     username : string = "Guest"
// ){
//     console.log(username);
// }
// greetUser("Mohit")
// greetUser()
const addNumber = (a, b) => {
    return a + b;
};
// let result = addNumber(10,20);
console.log(addNumber(10, 20));
const square = (num) => num * num;
console.log(square(3));
