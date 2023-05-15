// Scope Testing 

// Global, Module, Block, and Local

const a = 1;

const test = () => {
    const b = 2;
    console.log("Local Scope", a, b);
}

test();
console.log("B is not defined here becuase of local scope", a, b);

// 