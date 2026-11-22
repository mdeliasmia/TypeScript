"use strict";
// type Result<T> = T extends string ? string :number
Object.defineProperty(exports, "__esModule", { value: true });
// type CheckString<T> = 
//     T extends string ? "Yes": "No"
// type Result1 = CheckString<string>
// type Result2 = CheckString<number>
// const result:Result1 = "No"
// console.log(result)
// type IsAdmin<T> = 
//     T extends "admin"? true :false
// type User1 = IsAdmin<"admin">
// type User2 = IsAdmin<"user">
// interface Admin {
//     permission: string[]
// }
// interface Emp{
//     department:string
// }
// type UserType<T> = 
//     T extends Admin? "Admin User":"Emp User"
// type Result1 = UserType<Emp>
function getUser() {
    return {
        name: "Mohit",
        age: 30
    };
}
