//Record<keys,valueType>

// type UserRole={
//     admin:string;
//     user:string;
//     guest:string
// }

// type UserRole= Record<
//     "admin" | "user" | "guest",
//     string >;

// const roles: UserRole = {
//     admin:"Full Access",
//     user:"Limited Access",
//     guest:"Read Only"
// }
// console.log(roles);

// type StudentMarks = Record< string,number>;

// const marks: StudentMarks={
//     Mohit:95,
//     Rahul:60,
//     Amit:30
// }
// console.log(marks);

type User = {
    name:string;
    age:number
}
type Users= Record<string,User>;

const users:Users={
    user1:{
        name:"Mohit",
        age:30
    },
    user2:{
        name:"Rohit",
        age:40
    },
}

console.log(users);