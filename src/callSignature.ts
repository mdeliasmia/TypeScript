// type FuntionName = {
//     (
//         parmeter:type
//     ):Return Type;
// }

// type Multiple = {
//     (
//         x:number,
//         y:number
//     ): number;
// }

// let muliplyNumber : Multiple = (a,b)=>{
//     return a*b;
// }
// console.log(muliplyNumber(10,5));


// interface Multiple {
//     (
//         x:number,
//         y:number
//     ): number;
// }

// let muliplyNumber : Multiple = (a,b)=>{
//     return a*b;
// }
// console.log(muliplyNumber(10,5));

interface LoginFuntion{
    (
        email:string,
        password: string
    ): boolean;
}

let login:LoginFuntion = 
(email,password)=>{
    return true
}

console.log(login("Mohit@gmail.com","1234"));