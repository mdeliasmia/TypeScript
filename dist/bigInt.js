"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
// BigInt
let bigIntNumber = 124522112255555555555n;
console.log(bigIntNumber);
let bigIntNumber1 = BigInt(122222222222222222222);
console.log(bigIntNumber1);
let a = 100n;
let b = 50n;
console.log(a + b);
// Run
// node dist/bigInt.js
