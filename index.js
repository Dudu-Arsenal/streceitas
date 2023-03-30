
$(document).ready(function(){

  let titulos = ['Bolo de Fub\u00e1', 'Brigadeiro', 'Torta de Lim\u00e3o', 'Misto Quente', 'Bolo de Aipim', 'Bolo de Cenoura com Chocolate', 'Mousse de Maracuj\u00e1'];
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

  for (x = 0; x < titulos.length; x++) {
    let divLista = document.createElement('div');
    divLista.classList.add('lista-receitas-vistas');
    let divTitulo = document.createElement('div');
    let divImage = document.createElement('div');
    let divDescricao = document.createElement('div');
    let titulo = document.createElement('p')
    let image = document.createElement('img');
    let descricao = document.createElement('p')

    titulo.innerHTML = titulos[x];
    image.src = './assets/img-receitas/maisvista'+ (x + 1) + '.jpg';
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
});