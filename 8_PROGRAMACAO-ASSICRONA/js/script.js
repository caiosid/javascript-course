// 1 - setTimout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisão assíncrona");
}, 200);

console.log("Ainda não executou 2");

// 2 - setInternal
//console.log("Ainda não começou");

//setInterval(function () {
//console.log("Intervalo assíncrono");
//}, 3000);

//console.log("Ainda não começou 2");

// 3 - promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Algum código");

// 4 - falha na promise
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 rejeição
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Número muito baixo!"));
    }
  });
}

const a = checkNumber(20);

const b = checkNumber(10);

console.log(a);

console.log(b);

a.then((v) => console.log(`O resultado é ${v}}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6 - reslvendo varias promises
const p1 = new Promise((resolve, reject) => {
  setInterval(function () {
    resolve(10);
  }, 1000);
});

const p2 = Promise(10 + 20);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async functions
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

console.log("teste async");

// 8 - async await
function resoleComDelay() {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e esperando o resultado");
  const result = await resoleComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();