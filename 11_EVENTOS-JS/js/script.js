// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui!");
});

// 2 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn");

thirBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.srcElement);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("evento 2");
});

// 5 - removendo evento padrão
const a = document.querySelector("a");

addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Não alterou a página");
});

// 6 - eventos de tecla 
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

// 7 -  eventos de mouse 
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mouse", () => {
  console.log("Pressinou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o botão");
});

mouseEvents.addEventListener("dbclick", () => {
  console.log("Clique duplo");
});

// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
  console.log(`No eixo X: ${e.x}`);
  console.log(`No eixo Y: ${e.y}`);
});