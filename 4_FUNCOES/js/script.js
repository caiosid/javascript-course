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