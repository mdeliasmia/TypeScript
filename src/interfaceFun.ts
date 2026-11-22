// interface MultiplyFun {
//   (x: number, y: number): number;
// }

// let multiply: MultiplyFun = (a,b) =>{
//     return a*b
// }
// console.log(multiply(5,4));

// interface Greeting {
//   (userName: string): string;
// }
// let greetUser: Greeting = (userName) => {
//   return `Hello ${userName}`;
// };
// console.log(greetUser("Mohit"));

interface Calculator {
    (
        a:number,
        b:number
    ):number
}

let add:Calculator = (x,y)=> x+y;
let sub:Calculator = (x,y)=> x-y;
let mul:Calculator = (x,y)=> x*y;

console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));