// let username: string = "Mohit"

// type Username = string;
// type Age = number;

// let myname:Username = "Mohit";
// console.log(myname);

// let userAge: Age = 27;
// console.log(userAge);

// let user : {
//     username:string,
//     age:number
// }

// type User = {
//     username:string,
//     age:number
// }

// let user1:User={
//     username:"Mohit",
//     age:27
// }
// let user2:User={
//     username:"Rohit",
//     age:28
// }
// let user3:User={
//     username:"Amit",
//     age:30
// }
// console.log(user3);
// console.log(user2);
// console.log(user2);

// type AddFunction = (
//     a:number,
//     b:number
// ) => number;

// let add: AddFunction = (x,y)=>{
//     return x+y
// }
// console.log(add(10,5));

// type ID = string | number;
// let userId:ID = 101;
// // userId = "MOHIT101"
// console.log(userId);

type Person = {
    username:string
}
type Emp = {
    salary:number
}

type Staff = Person & Emp

let worker:Staff = {
    username:"Mohit",
    salary:5000
}
console.log(worker);