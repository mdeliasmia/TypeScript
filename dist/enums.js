"use strict";
// let statuscode = "Success";
// enum Direction {
//     up="East",
//     down="West",
//     left="North",
//     right="South"
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(Direction.right);
// enum StatusCode{
//     Success = 200,
//     NotFound= 404,
//     ServerError= 500
// }
// console.log(StatusCode.Success);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["pending"] = "PENDING";
    PaymentStatus["success"] = "SECCESS";
    PaymentStatus["failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
function checkPayment(status) {
    console.log(status);
}
checkPayment(PaymentStatus.failed);
