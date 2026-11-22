// type Person = {
//     username:string
// }
// type Emp = {
//     salary:number
// }

// type staff = Person & Emp

// type User = {
//     username:string
// }
// type Admin = {
//     permission: string[]
// }
// type AdminUser = User & Admin

// let admin: AdminUser = {
//     username: "Mohit",
//     permission: ["read","write"]
// }

// console.log(admin);

interface Person {
    username:string
}
interface Emp {
    salary:number
}
type Staff = Person & Emp

let worker : Staff = {
    username:"Mohit",
    salary:30000
}
console.log(worker);

// 4 mint