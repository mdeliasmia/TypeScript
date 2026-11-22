"use strict";
// parameter ?: type
Object.defineProperty(exports, "__esModule", { value: true });
// function greet(
//     name ?: string
// ){
//     console.log(name);
// }
// greet("Rohit")
// greet()
function welcome(country, age, username = "Guest") {
    console.log(`Hello ${username}`);
    console.log(age);
    console.log(country);
}
welcome("India", 25, "Mohit");
