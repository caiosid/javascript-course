/*
// 1 -  criando uma função
function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParamentro(txt) {
  console.log(`Imprimindo ${txt}`);
}

funcaoComParamentro("Imprimindo alguma coisa");

funcaoComParamentro("outra função");

// 2 - Retornando valores das funções
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// 3 - escopo das função
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função é: ${y}`);
}

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// 4 - escopo aninhado
let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;

      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - arrow function
const testeArrow = () => {
  console.log("Esta é uma arrow fuction");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }

  console.log("Impar");
};

parOuImpar(4);

parOuImpar(5);

parOuImpar(10);

// 6 - mais sobre arrow function
const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello World!");

helloWorld(); */

// 7 - parametro opicional
/*
const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(5));

console.log(multiplication(2, 4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá");
    return;
  }

  console.log(`Olá, ${name}`);
};

greeting();

greeting("Caio"); */

/*
// 8 - valor default
const customGreeting = (name, greet = "olá") => {
  return `${greet}, ${name}!`;
};

console.log(customGreeting("caio"));

console.log(customGreeting("Caio", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);

// 9 - closure
function someFuction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFuction(); */

// 10 - mais sobre closure
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));
