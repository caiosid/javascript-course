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
const usuarios = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`Listando o usuário: ${usuarios[i]}`);
}

// 11 - métodos de array: push e pop
const array = ["a", "b,", "c", "d"];

array.push("e");

console.log(array);
console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("d", "e", "f", "g", "h");
