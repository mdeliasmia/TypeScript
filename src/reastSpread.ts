// ...

// function addNumber(...num:number[]){
//     console.log(num);
// }
// addNumber(10,20,30,40)

// function total(
//     name:string,
//     ...prices:number[]
// ):number{
//     return prices.reduce(
//         (sum,price)=> sum +price,
//         0
//     )
// }
// console.log(total("Mohit",100,200,300));

// let num1 = [1,2,3];
// let num2 = [...num1];

// let num1 = [1,2,3];
// let num2 = [6,7,8];

// let result = [...num1, ...num2]
// console.log(result);


let user = {
    name:"Mohit",
    age:23
}

let updatedUser = {
    ...user,
    age: 25
}

console.log(updatedUser);