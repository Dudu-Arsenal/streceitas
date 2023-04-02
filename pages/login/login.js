function Logar(){
    let username = document.querySelector('#username')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (username.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });
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
        msgError.innerHTML = 'Usuário ou senha incorretos.'
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