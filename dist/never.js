"use strict";
// function throwError(message:string):never{
//     throw new Error(message);
// }
// throwError('404 Error')
Object.defineProperty(exports, "__esModule", { value: true });
function infinityLoop() {
    while (true) {
        console.log('Running...');
    }
}
infinityLoop();
// 1:23 mint
// Run 
// node dist/never.js
