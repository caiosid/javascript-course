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
//document.addEventListener("mousemove", (e) => {
//console.log(`No eixo X: ${e.x}`);
//console.log(`No eixo Y: ${e.y}`);
//});

// 9 - evento por scroll
window.addEventListener("scroll", (e) => {
  if (window.pageXOffset > 200) {
    console.log("Passamos de 200px");
  }
});

// 10 - eventos por foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu no input");
});

// 11 - evento de carregamento
window.addEventListener("load", () => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "teste";
});

// 12 - debounce
const debounce = (f, delay) => {
  let timout
  return (...arguments) {
    if (timout) {
      clearTimeout(timout)
    }
    timout = setTimeout(() => {
      f.apply(arguments)
    }, delay)
  }
}

window.addEventListener(
  "mousemove", 
  debounce(() =>{
  console.log("Executando a cada 400ms"), 400})
);
