let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')

   if (localStorage.getItem('token') == null){
    alert('Voc\u00ea precisa estar logado para acessar esta p\u00e1gina')
    window.location.href = '../login/login.html'
}  

let titulos = ['Bolo de Fub\u00e1', 'Brigadeiro', 'Torta de Lim\u00e3o', 'Misto Quente', 'Bolo de Aipim', 'Bolo de Cenoura com Chocolate', 'Mousse de Maracuj\u00e1', 'Mousse de Lim\u00e3o', 'Mousse de Morango', 'Doce de Abacate', 'Doce de Banana', 'Ovo de P\u00e2scoa', 'Torta de Frango'];
let descricoes = [
  'Essa \u00e9 a mais famosa do Brasil e tamb\u00e9m uma das mais simples, facil de se fazer e facil de comer',
  'O brigadeiro \u00e9 um doce genuinamente brasileiro. Um orgulho s\u00f3!',
  'Com apenas 5 ingredientes, voc\u00ea prepara uma torta de lim\u00e3o simples e muito saborosa para a sobremesa.',
  'O melhor e mais r\u00e1pido lanche para uma tarde cansativa ou uma manh\u00e3 agitada.',
  'O bolo de mandioca \u00e9 uma iguaria da culin\u00e1ria brasileira.',
  'O bolo de cenoura com chocolate \u00e9 um cl\u00e1ssico que combina com caf\u00e9 da manh\u00e3 ou lanche da tarde.',
  'Bora aprender a fazer mousse de maracuj\u00e1? Delicioso, esse mousse de maracuj\u00e1 \u00e9 r\u00e1pido e bem f\u00e1cil de preparar!'
]

let divMain = document.querySelector('.receitas-vistas-container');

for (x = 0; x < 7; x++) {
  let divLista = document.createElement('div');
  divLista.classList.add('lista-receitas-vistas');
  let divTitulo = document.createElement('div');
  let divImage = document.createElement('div');
  let divDescricao = document.createElement('div');
  let titulo = document.createElement('p')
  let image = document.createElement('img');
  let descricao = document.createElement('p')
  /* Variavel que armazena o nome das receitas toda em LowerCase */
  let noSpace = titulos[x].replace(/\s/g, '');
  noSpace = noSpace.toLowerCase();

  titulo.innerHTML = titulos[x];
  image.src = '../../assets/img-receitas/'+noSpace+'.jpg';
  descricao = descricoes[x];

  divTitulo.append(titulo);
  divTitulo.classList.add('titulo-receita');
  divImage.append(image);
  divImage.classList.add('img-receita');
  divDescricao.append(descricao);
  divDescricao.classList.add('desc-receita')

  divLista.append(divTitulo);
  divLista.append(divImage);
  divLista.append(divDescricao);
  divLista.setAttribute('id', noSpace);
  divLista.setAttribute('onclick', 'Teste(id)')

  if (x % 3 == 0) {
    let divLinha = document.createElement('div');
    divLinha.classList.add('receitas-vistas');
    divMain.append(divLinha);
    divLinha.append(divLista);
  } else {
    let ultimaLinha = document.querySelector('.receitas-vistas:last-of-type');
    ultimaLinha.append(divLista);
  }
}

$(function () {
  $('#seta_up').click(function (e) {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
});

function Logout() {
  console.log('a')
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = '../login/login.html'
}

let pesquisa = document.querySelector('#pesquisa')
let listaItens = document.querySelector('.itens-receitas')
let closeIcon = document.querySelector('.fa-times')

pesquisa.addEventListener('keyup', () =>{
  if (pesquisa.value == ''){
    listaItens.setAttribute('style', 'display: none')
    closeIcon.setAttribute('style', 'display: none !important')
  } else {
    listaItens.setAttribute('style', 'display: block')
    closeIcon.setAttribute('style', 'display: flex !important')
  }
})

pesquisa.oninput = () => {
  listaItens.innerHTML = "";

  titulos.filter((item) =>
    item.toLowerCase().includes(pesquisa.value.toLowerCase())
  ).forEach((item) => addHTML(item));
}

function addHTML(item) {
  const div = document.createElement('div');
  const p = document.createElement('p')
  const img = document.createElement('img')
  let noSpace = item.replace(/\s/g, '');
  noSpace = noSpace.toLowerCase()
  img.src = '../../assets/img-receitas/'+noSpace+'.jpg';
  p.innerHTML = item;
  listaItens.append(div);
  div.append(img);
  div.append(p);
  div.setAttribute('id', 'idItems')
  div.setAttribute('class', noSpace)
  div.setAttribute('onclick', 'Teste(className)')
}

function HidePesquisa() {
  listaItens.setAttribute('style', 'display: none')
}

function ShowPesquisa() {
}

function LimpaPesquisa(){
  pesquisa.value = ''
  closeIcon.setAttribute('style', 'display: none !important')
  listaItens.setAttribute('style', 'display: none')
}

function Teste(x) {
  window.location.href = 'receita/'+x+'.html'
}

let count = 0;
let slider = document.querySelector('#slider')

function ClickEsquerdo(){
  if (count == 0){
    console.log('limite máximo')
    console.log('contador = 0')
  } else if (count == 1){
    slider.setAttribute('style', 'margin-left: 0');
    count = 0;
    console.log('contador = 1')
  } else if (count == 2){
    slider.setAttribute('style', 'margin-left: -680px');
    count = 1;
    console.log('contador = 2')
  }
}

function ClickDireito(){
  if (count == 0){
    slider.setAttribute('style', 'margin-left: -680px');
    count = 1;
  } else if (count == 1){
    slider.setAttribute('style', 'margin-left: -1360px');
    count = 2;
  } else if (count == 2){
    console.log('limite máximo')
  }
}

let sliderCount = 0;
setInterval(function (){
      if (sliderCount == 0){
        slider.setAttribute('style', 'margin-left: -680px');
        sliderCount = 1;
      } else if (sliderCount == 1){
        slider.setAttribute('style', 'margin-left: -1360px')
        sliderCount = 2;
      } else if(sliderCount == 2){
        slider.setAttribute('style', 'margin-left: 0px')
        sliderCount = 0;
      }
}, 5000);