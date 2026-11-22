// let user: {
//     userName: string,
//     age: number
// }

// user = {
//     userName:"Mohit",
//     age:28
// }
// console.log(user.userName);
// console.log(user.age);
// let products:{
//     readonly productName: string,
//     price?: number
// }

let products = {
    productName:"Laptop",
    price: 5000,
    address: {
        city:"Delhi",
        pincode: 110056
    }
}
console.log(products.address.pincode);