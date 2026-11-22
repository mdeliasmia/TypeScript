"use strict";
// let value: string | number = 123
Object.defineProperty(exports, "__esModule", { value: true });
// value = "Mohit";
// value = 100;
// console.log(value.toUpperCase());
// if (typeof value === "string"){
//     console.log(value.toUpperCase());
// } else {
//     console.log(value); 
// }
// function printVal(value: string | number){
//     if( typeof value === "string"){
//         console.log(value.toUpperCase());
//     } else{
//         console.log(value.toFixed(2));
//     }
// }
// printVal("hello");
// printVal(123)
// type Admin = {
//     name: string;
//     permission: string[]
// };
// type User ={
//     name:string;
//     email: string
// }
// function getInfo(person: Admin | User){
//     if("permission" in person){
//         console.log("Admin User");
//     }else {
//         console.log("Normal User");
//     }
// }
// getInfo({
//     name:"Mohit",
//     permission: ["create","delete"]
// })
// getInfo({
//     name:"Rohit",
//     email:"rohit@gmail.com"
// })
class Dog {
    bark() {
        console.log("Dog is barking");
    }
}
class Cat {
    meow() {
        console.log("Cat is meowing");
    }
}
function makesound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makesound(new Dog());
makesound(new Cat());
