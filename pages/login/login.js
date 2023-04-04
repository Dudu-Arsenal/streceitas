function Logar(){
    /* Criando o DOM para receber os valores de input de usuario e Senha */
    let username = document.querySelector('#username')
    let userLabel = document.querySelector('#userLabel')
    
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    /* DOM para a mensagem de erro */
    let msgError = document.querySelector('#msgError')
    
    /* Array que armazena os dados vindo do "Banco de Dados" */
    let listaUser = []

    /* Array que armazena os dados do usuario caso os inputs sejam corretos*/
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    
    /* Pegando o Array do "Banco" e armazenando no nosso array */
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    /* Se o usuario não existir no banco */
    if (localStorage.getItem('listaUser') == null){
        msgError.innerHTML = 'Fa\u00e7a seu Primeiro registro.'
        msgError.setAttribute('style', 'display: block')
        setTimeout(() =>{
            window.location.href = '../register/register.html'
        }, 3000)
    }

    /* Varrendo o array para comparar o input com algum usuario do banco */
    listaUser.forEach((item) => {
        if (username.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });
    /* Comparando se o usuario e senha estão corretos */
    if (!username.value || !senha.value){
        msgError.setAttribute('style', 'display: none')
        setTimeout(() =>{
            msgError.setAttribute('style', 'display: block')
        }, 1)
        msgError.innerHTML = 'Preencha os campos vazios.'
        userLabel.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
    } else if (username.value == userValid.user && senha.value == userValid.senha){

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

        msgError.setAttribute('style', 'display: none')
        userLabel.setAttribute('style', 'color: green')
        username.setAttribute('style', 'border-color: green')
        senhaLabel.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')

        setTimeout(() =>{
            window.location.href = '../receitas/index.html'
        }, 500)
    } else {
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = 'Usu\u00e1rio ou senha incorretos.'
        setTimeout(() =>{
            msgError.setAttribute('style', 'display: block')
        }, 1)
        userLabel.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        username.focus()
    }

}

/* Evento para chamar a função de Login caso seja usado o Enter */
username.addEventListener('keypress', (function(e){
    if(e.key === 'Enter'){
        Logar();
    }
}))
senha.addEventListener('keypress', (function(e){
    if(e.key === 'Enter'){
        Logar();
    }
}))