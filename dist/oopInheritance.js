"use strict";
// class Animal{
//     name:string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name:string){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Woff Woof");
//     }
// }
// const dog = new Dog("Tommy");
// dog.eat()
// dog.bark()
// class Animal{
//     constructor(
//         public name: string
//     ){}
// }
// class Dog extends Animal{
//     constructor(
//         name: string,
//         public breed: string
//     ){
//         super(name)
//     }
// }
// const dog = new Dog(
//     "Tommy",
//     "Labrador"
// )
// console.log(dog);
class Emp {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Dev extends Emp {
    showSalary() {
        console.log(this.salary);
    }
}
const dev = new Dev(60000);
dev.showSalary();
