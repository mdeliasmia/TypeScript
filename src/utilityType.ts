// type User={
//     id:number,
//     name:string,
//     email:string,
//     age:number
// }
// type UpdatedUser=Partial<User>

// const user:UpdatedUser={
//     name:'Elias'
// }

// console.log(user);

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };

// type UserBasicInfo = Pick<User, "name" | "email">;

// const user:UserBasicInfo={
//     name:'ilias',
//     email:'ilias@gmail.com'
// }

// console.log(user)
// ;

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser=Omit<User,'password'>

const user:PublicUser={
    id:1,
    name:'ilias',
    email:'ilias@gmail.com',
    
}

console.log(user);
