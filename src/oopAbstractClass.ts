// abstract class Animal{
//    abstract makeSound(): void;
// }

// class Dog extends Animal{
//     makeSound(){
//         console.log("Woof Woof");
//     }
// }

// const dog = new Dog()
// dog.makeSound()

abstract class Emp{
    constructor(
        public name:string
    ){}
    abstract calCuSalary():number
}

class Dev extends Emp{
    calCuSalary(): number {
        return 50000;
    }
}

const dev = new Dev("Mohit");
console.log(dev.calCuSalary());