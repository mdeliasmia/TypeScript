// // class MathUtils{
// //     static appName = "Calculator"
// // }
// // console.log(MathUtils.appName);

// class Company{
//     static companyName= "Mohit Decodes"
// }
// // const company = new Company();
// console.log(Company.companyName);

// class MathUtils {
//     static add(
//         a:number,
//         b:number
//     ){
//         return a+b
//     }
// }
// console.log(MathUtils.add(10,5));

class User{
    static appName= "Mohit Decodes";
    name:string;

    constructor(name:string){
        this.name = name
    }
}

const user = new User("Mohit");
console.log(user);
console.log(User.appName);