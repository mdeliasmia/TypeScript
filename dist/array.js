"use strict";
// let number = [10,20,30];
// console.log(number[0]);
Object.defineProperty(exports, "__esModule", { value: true });
//Type[]
// let marks : number[] = [90,80,70];
// console.log(marks);
// //Array<Type>
// let user : Array<string> = [
//     "Mohit",
//     "Rohit"
// ]
// console.log(user);
// let prices: number[] = [100,200,300]
// prices.push(111)
// let cities: string[] = ["Delhi","Mumbai"]
// let statusCode: boolean[] = [true,false,true]
//Push()/pop()
// let fruits: string[] = ["Apple"]
// // fruits.push("Mango")
// // fruits.pop()
// console.log(fruits[0]);
// let data: (string | number)[] = [
//     "Mohit",
//     25,
//     "Delhi"
// ]
// data.push(22)
// Array Methods 
// let number: number[] = [1,2,3,4];
// let double = number.map(num => num*2);
// console.log(double);
// console.log(number);
// let number: number[] = [10,20,30,40];
// let result = number.filter(num => num >20);
// console.log(result);
// let user : string[] = ["Mohit","Rohit","Aman"]
// let filterUser = user.filter(user => user.startsWith("M"))
// console.log(filterUser);
let prices = [100, 200, 300];
let total = prices.reduce((sum, prices) => sum + prices, 0);
console.log(total);
