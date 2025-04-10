/*
// 1 - arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Caio", "Cesar", "Sidartha", "Barbosa"];

console.log(itens[1]);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[84]);

// 3 - propriedades
const numbers = [5, 2, 6, 8];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Caio";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3, 4];

const allNumbers = numbers.concat();

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - objetos
const person = {
  name: "Caio",
  age: 27,
  job: "Programador",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person); */

/*

// 6 - criando e deletando propriedades
const car = {
  egine: 2.0,
  brand: "W",
  model: "Tiguan",
  km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const c = {
  name: "Caio",
};

const a = c;

console.log(c);
console.log(a);

console.log(c === a);

c.age = 31;

console.log(c);
console.log(a);

delete a.age;

console.log(c);
console.log(a);

*/

// 10 - loop em arrays
//const usuarios = ["Matheus", "João", "Pedro", "Miguel"];

//for (let i = 0; i < usuarios.length; i++) {
//  console.log(`Listando o usuário: ${usuarios[i]}`);
//}

// 11 - métodos de array: push e pop
/* const array = ["a", "b,", "c", "d"];

array.push("e");

console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("d", "e", "f", "g", "h"); */

// 12 - shift e unshift
/* const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

// 13 - indexOf e lastIndexOf
const minhasFrutas = [
  "Morango",
  "Maçã",
  "Morango",
  "Abacate",
  "Pêra",
  "Abacate",
];

console.log(minhasFrutas.indexOf("Maçã"));
console.log(minhasFrutas.indexOf("Abacate"));

console.log(minhasFrutas[2]);
console.log(minhasFrutas[minhasFrutas.indexOf("Abacate")]);

console.log(minhasFrutas.lastIndexOf("Abacate"));
console.log(minhasFrutas.lastIndexOf("Morango"));

console.log(minhasFrutas.indexOf("laranja"));

console.log(minhasFrutas.lastIndexOf("limão")); */

// 14 - slice
/* const livrosSlice = [
  "A pedra filosofal",
  "A camêra secreta",
  "O prisoneiro de Azkaban",
  "O cálice de fogo",
  "A ordem da fénix",
  "O enigma do príncipe",
  "As relíquias da morte",
];

const subArray = livrosSlice.slice(2, 4);

console.log(subArray);
console.log(livrosSlice);

const subArray2 = livrosSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = livrosSlice.slice(10,20);

console.log(subArray3);

const subArray4 = livrosSlice.slice(2);

console.log(subArray4); */

// 15 - foreach
/* let numeros = [1,2,3,4,5];

numeros.forEach((numero) => {
  console.log(`O número é: ${numero}`);
});

const posts = [
  {title: "Primeiro post", category: "PHP"},
  {title: "Segundo post", category: "JavaScript"},
  {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
}); */

// 16 - includes
let frutas = ["maçã", "banana", "uva", "morango", "laranja", "limão"];

let temBanana = frutas.includes("banana");
console.log(temBanana);

let temAbacaxi = frutas.includes("abacaxi");
console.log(temAbacaxi);

const marcas = ["BMW", "VW", "Fiat"];

console.log(marcas.includes("Fiat"));
console.log(marcas.includes("Ferrari"));

if (marcas.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTeste = [1,2,3,4,5,6,7,8,9,10];

reverseTeste.reverse();

console.log(reverseTeste);

// 18 - trim  
const trimTest = "  testando  \n ";

console.log(trimTest);

console.log(trimTest.trim());
console.log(trimTest.length);
console.log(trimTest.trim().length);

// 19 - padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo);

const itensParaComprar = ["mouse", "teclado", "monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando ";

console.log(palavra.repeat(6));
