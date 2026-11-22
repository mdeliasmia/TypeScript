// namespace App{
//     export function greet(){
//         console.log("Welcome to Mohit");
//     }
// }

// App.greet()

// namespace User{
//     export const company = "Mohit Decodes";

//     export function login(){
//         console.log("User Logged In");
//     }
//     export class Emp{
//         constructor(
//             public name:string
//         ){}
//         show(){
//             console.log(this.name);
//         }
//     }
// }

// console.log(User.company);
// User.login();

// const emp = new User.Emp("Mohit")
// emp.show()


namespace Company{
    export namespace HR{
        export function hire(){
            console.log("Hiring Emp");
        }
    }
}

Company.HR.hire()