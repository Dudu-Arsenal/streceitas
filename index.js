function inicialize(){

let setTitulo = document.getElementById('titulo-receita')
let setImg = document.getElementById('img-receita')
let setDesc = document.getElementById('desc-receita')

let titulos = ['Bolo de Fuba', 'Brigadeiro', 'Torta de Limão', 'Misto Quente'];
let descricoes = [
' Essa é a mais famosa do Brasil e também uma das mais simples, facil de se fazer e facil de comer', 
'O brigadeiro é um doce genuinamente brasileiro. Um orgulho só!', 
'Com apenas 5 ingredientes, você prepara uma torta de limão simples e muito saborosa para a sobremesa.', 
'O melhor e mais rápido lanche para uma tarde cansativa ou uma manhã agitada.'
]

for (x = 0; x < titulos.length; x++){
    setTitulo.innerHTML = titulos[x];
    setImg.src = './assets/maisvista'+(x+1)+'.jpg';
    setDesc.innerHTML = descricoes[x];
    console.log(x);
}
}
