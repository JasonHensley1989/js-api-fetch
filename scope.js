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
    console.log();
}

test2();

// function scope and block using var
const test3 = () => {
    var d = 2;
    let f = 4;
    if(true) {
        var e = 3;   
        let g = 5;
    }
    // e can be logged here because of the scope that var uses
    // this is what const and let rectify if its changed to let
    // it has block scope only again
  console.log(d, f);
  console.log(e);
}

test3();

// this test shows why non repetitive variable names are necessary
// due to block scope
const test4 = () => {
    const a = 9;
    if(true) {
        const a = 10;
        console.log(a);
    }
    console.log(a);
}

test4();

