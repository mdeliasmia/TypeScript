// type User = {
//     name: string;
//     age: number
// }

// type ReadonlyUser = {
//     readonly [key in keyof User]: User[key]
// }

// const user: ReadonlyUser ={
//     name:"Mohit",
//     age:30
// }
// user.name = "Rohit"

// type OptionalUser = {
//     [key in keyof User]?: User[key]
// }

// const user:OptionalUser={
//     name:"Mohit"
// }


type User = {
    name: string;
    age: number
}

type BooleanUser = {
    [key in keyof User]: boolean
}

const userStatus: BooleanUser = {
    name:true,
    age:false
}
console.log(userStatus.name);