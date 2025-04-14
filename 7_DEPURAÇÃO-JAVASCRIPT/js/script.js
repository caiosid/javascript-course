// 1 strict
"use strict";

const opa = "teste";

//const undefined = 10;

//delete [].length;

// 2 - console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - método de debug: debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

console.log("executou o loop");

debugger;

if (c > 5) {
  c = 25;
}
