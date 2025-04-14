// 1 - métodos
/* const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au!");
  },
};

console.log(animal.nome);

animal.latir();

// 2 - aprofundando em métodos
const pessoa = {
  nome: "Caio",
  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Cesar");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes básicas
const cachorro = {
  raca: null,
  pata: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.pata);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - funções como classe
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jackie = criarCachorro("Jackie", "Dalmata");

console.log(jackie);

// 7 - funções construtoras
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - função com métodos
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuuu!");
};

console.log(cachorro.prototype);

husky.uivar();

//  9 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff)); */

// 10 - mais sobre classes
/* class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(
      `Este caminhão tem ${this.eixos} eixos, e a sua cor é:  ${this.cor}`
    );
  }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4;

const caminhao2 = new Caminhao(4, "Preta");

console.log(caminhao2);

console.log(caminhao2.motor);

Caminhao.prototype.motor = 4.0

const caminhao3 = new Caminhao(6, "Azul");

console.log(caminhao3.motor); */

// 11 - override
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const caio = new Humano("Caio", 27);

console.log(caio);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(caio.idade);

console.log(Humano.prototype.idade);
