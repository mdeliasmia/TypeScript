"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputField = document.getElementById('username');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const value = inputField.value;
    if (value.trim() === '') {
        alert('Please enter a name');
    }
    else {
        console.log(value);
    }
});
