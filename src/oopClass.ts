// class User{
//     name="Mohit"
// }
// const user = new User();
// console.log(user);

// class User{
//     name:string;
//     age:number
// }
// const user = new User();
// user.name = "Mohit";
// user.age = 30;

// console.log(user);

// class User{
//     name:string;
//     age:number;

//     constructor (
//         name: string,
//         age: number
//     ){
//         this.name = name;
//         this.age = age
//     }
// }

// const user1 = new User(
//     "Mohit",
//     30
// )

// const user2 = new User(
//     "Rohit",
//     42
// )

// console.log(user1);
// console.log(user2);


class User {
    constructor(
        public name:string,
        public age:number
    ){}
}

const user = new User(
    "Mohit",
    30
)
console.log(user);