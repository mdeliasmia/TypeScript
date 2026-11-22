"use strict";
// abstract class Animal{
//    abstract makeSound(): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof Woof");
//     }
// }
// const dog = new Dog()
// dog.makeSound()
class Emp {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dev extends Emp {
    calCuSalary() {
        return 50000;
    }
}
const dev = new Dev("Mohit");
console.log(dev.calCuSalary());
