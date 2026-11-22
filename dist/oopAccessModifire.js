"use strict";
// class User{
//     public name: string;
//     constructor(name:string){
//         this.name= name
//     }
// }
// const user = new User("Mohit");
// console.log(user.name);
Object.defineProperty(exports, "__esModule", { value: true });
// class BankAcc{
//     private balance: number;
//     constructor(balance: number){
//         this.balance = balance
//     }
//     showBalance(){
//         console.log(this.balance);
//     }
// }
// // console.log(this.balance);
// const account = new BankAcc(5000);
// account.showBalance()
class Emp {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Developer extends Emp {
    showSalary() {
        console.log(this.salary);
    }
}
// console.log(this.salary);
const dev = new Developer(50000);
dev.showSalary();
