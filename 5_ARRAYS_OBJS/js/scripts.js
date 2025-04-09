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

console.log(typeof person);
