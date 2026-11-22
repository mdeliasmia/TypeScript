// let statuscode = "Success";
// enum Direction {
//     up="East",
//     down="West",
//     left="North",
//     right="South"
// }

// console.log(Direction.right);

// enum StatusCode{
//     Success = 200,
//     NotFound= 404,
//     ServerError= 500
// }
// console.log(StatusCode.Success);

enum PaymentStatus {
    pending="PENDING",
    success="SECCESS",
    failed="FAILED"
}

function checkPayment(status:PaymentStatus){
    console.log(status);
}
checkPayment(PaymentStatus.failed)