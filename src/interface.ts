interface Employee {
    readonly id:number,
    userName: string,
    salary?: number
}

let employee1:Employee = {
    id: 123,
    userName:"Mohit",
    // salary:40000
}

let employee2:Employee = {
    id: 345,
    userName:"Rohit",
    salary:20000
}

console.log(employee1.userName);
console.log(employee2.userName);