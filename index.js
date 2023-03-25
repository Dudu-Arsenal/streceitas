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

{/* <div class="receitas-vistas">
          <div class="lista-receitas-vistas">
            <div class="titulo-receita">
              <p>Bolo de Fuba</p>
            </div>
            <div class="img-receita">
              <img src="./assets/maisvista1.webp" alt="" />
            </div>
            <div class="desc-receita">
              <p>
                Essa é a mais famosa do Brasil e também uma das mais simples,
                facil de se fazer e facil de comer
              </p>
            </div>
          </div>
          <div class="lista-receitas-vistas">
            <div class="titulo-receita">
              <p>Brigadeiro</p>
            </div>
            <div class="img-receita">
              <img src="./assets/maisvista2.jpg" alt="" />
            </div>
            <div class="desc-receita">
              <p>
                O brigadeiro é um doce genuinamente brasileiro. Um orgulho só!
              </p>
            </div>
          </div>
          <div class="lista-receitas-vistas">
            <div class="titulo-receita">
              <p>Torta de Limão</p>
            </div>
            <div class="img-receita">
              <img src="./assets/maisvista3.jpg" alt="" />
            </div>
            <div class="desc-receita">
              <p>
                Com apenas 5 ingredientes, você prepara uma torta de limão
                simples e muito saborosa para a sobremesa.
              </p>
            </div>
          </div>
        </div>
        <div class="receitas-vistas">
          <div class="lista-receitas-vistas">
            <div class="titulo-receita">
              <p>Misto Quente</p>
            </div>
            <div class="img-receita">
              <img src="./assets/maisvista4.jpg" alt="" />
            </div>
            <div class="desc-receita">
              <p>
                O melhor e mais rápido lanche para uma tarde cansativa ou uma
                manhã agitada.
              </p>
            </div>
          </div>
        </div>
 */}