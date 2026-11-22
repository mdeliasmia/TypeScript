// let id: string | number;
// id= 101;
// // id= "mohitid";
// // id= true
// console.log(id);


// function printId(
//     id:string | number
// ){
//     console.log(id); 
// }
// printId(true)

function printData(
    data: string | number
){
    if(typeof data === "string"){
        console.log(data.toUpperCase()); 
    } else{
        console.log(data);  
    }
}
printData(123)