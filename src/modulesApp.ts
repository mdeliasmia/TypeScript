import { company, greet } from "./modulesUser";
import { Employee } from "./modulesEmployee";
import add from "./modulesMath";
import * as Utils from "./modulesUtils"

console.log(company);
console.log(greet("Mohit"));

const emp = new Employee("Mohit");
emp.showInfo();

console.log(add(10,20));

console.log(Utils.PI);
console.log(Utils.square(5));