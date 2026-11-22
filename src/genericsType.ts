// function printString(value: string){
//     return value
// }

// function printNumber(value: number){
//     return value
// }

// function printValue<T>(value:T):T{
//     return value
// }

// console.log(printValue("Mohit"));
// console.log(printValue(100));
// console.log(printValue(true));


// function getData<T>(data:T):T{
//     return data;
// }
// let userName = getData<string>("Mohit")
// let age = getData<number>(30)

// console.log(userName);
// console.log(age);

// function getFirstElement<T>(
//     arr:T[]
// ):T{
//     return arr[0]
// }

// console.log(getFirstElement([
//     "React",
//     "Angular",
//     "NextJS"
// ]));


// interface ApiResponce<T>{
//     success: boolean,
//     data:T;
// }

// const responce1 : ApiResponce<string>={
//     success:true,
//     data:"User Found"
// }

// const responce2: ApiResponce<{
//     name:string;
//     age:number
// }>={
//     success:true,
//     data:{
//         name:"Mohit",
//         age: 30
//     }
// }
// console.log(responce2);

// function printData<T>(data:T){
//     return data.length;
// }
// console.log(printData(true));

// function getLength<
//     T extends {length:number}>(item:T){
//         return item.length
//     }
// console.log(getLength("Mohit"));

interface HasId{
    id: number
}
function printId<
    T extends HasId>(obj:T){
        console.log(obj.id);   
    }
printId({
    id:101,
    name:"Mohit"
})