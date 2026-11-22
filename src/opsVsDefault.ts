// parameter ?: type

// function greet(
//     name ?: string
// ){
//     console.log(name);
// }
// greet("Rohit")
// greet()

function welcome(
    country : string,
    age ?:number,
    username:string = "Guest"
){
    console.log(`Hello ${username}`);
    console.log(age);
    console.log(country);
}
welcome("India",25,"Mohit")