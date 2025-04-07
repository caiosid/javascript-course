// 1 - variáveis
let nome = "Caio";

console.log(nome);

nome = "Caio Cesar";

console.log(nome);

const idade = 31;
console.log(idade);

console.log(typeof nome);

console.log(typeof idade);

// 2  - mais sobre variáveis
//let 2teste = "inválido";
//let @teste = "inválido";

let a = 10;
(b = 20), (c = 30);

console.log(a, b, c);

const nomecompleto = "Caio Cesar";

const nomeCompleto = "Cesar da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - prompt
//const age = prompt("Digite a sua idade: ");
//console.log(`Você tem ${age} anos!`);

// 4 - alerta
//alert("Testando");

//const z = 10;

//alert(`O número é ${z}`);

// 5 - Math
//console.log(Math.max(5,3,1,10));
//console.log(Math.floor(5.14));
//console.log(Math.ceil(5.14));

// 6 -  console
//console.log("Teste!");

//console.error("erro!");

//console.warn("aviso!");

// 7 - if
const m = 10;

if (m > 5) {
  console.log("M é mior que 5!");
}

const user = "Caio";

if (user === "Caio") {
  console.log(`Olá, ${user}`);
}

// 8 - else
const loggedIn = false;

if (loggedIn) {
  console.log("EStá autenticado!");
} else {
  console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos!");
} else {
  console.log("Os números não são mais altos!");
}

// 9 - else if
if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Teste 3");
}

const userName = "Caio";
const userAge = 27;

if (userName === "Jóse") {
  console.log("Bem vindo José!");
} else if (userName === "Caio" && userAge === 27) {
  console.log("Olá Caio, você tem 27 anos!");
} else {
  console.log("Nenhuma condição aceita!");
}

// 10 - estruturas de repetições while
let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// loop infinito
// let x = 10;
//

// 11 - do while
let o = 10;

do {
  console.log(`valor de o: ${o}`);
  o--;
} while (o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo!");
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`O r está diminuindo: ${r}`);
}

// 13 - identação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10 ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0");
    }
  }
}

// 14 - break 
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 12) {
        console.log("O g é 12");
        break;
    }
}


