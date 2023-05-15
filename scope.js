import { exportedVar } from "./moduleScript.js";

// Scope Testing 

// Global, Module, Block, and Local

const a = 1;

const test = () => {
    const b = 2;
    console.log("Local Scope", a, b);
}

test();
console.log("B is not defined here becuase of local scope", a);

// Global Variable 
console.log(globalVar);
// console.log(exportedVar);
// console.log(moduleVar);

// function scope vs block scope
const test2 = () => {
    const b = 2;

    if(true) {
        const c = 3;
        console.log(b, c);
    }
    console.log(c);
}

test2();