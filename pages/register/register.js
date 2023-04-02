
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let username = document.querySelector('#username');
let labelUsername = document.querySelector('#labelUsername');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');

let validaNome = false;
let validaUsername = false;
let validaSenha = false;
let validaConfirmSenha = false;

let msgSucess = document.getElementById('msgSucess');
let msgError = document.getElementById('msgError');

/* VALIDAÇÃO DOS DADOS NO REGISTRO */
nome.addEventListener('keyup', () => {

    if (nome.value.length > 0 && nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres*'
        validaNome = false;
    } else if (!nome.value) {
        labelNome.setAttribute('style', 'color: #1f1f1f')
        nome.setAttribute('style', 'border-color: ')
        labelNome.innerHTML = 'Nome'
        validaNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
        labelNome.innerHTML = 'Nome'
        validaNome = true;
    }
})
username.addEventListener('keyup', () => {
    if (username.value.length > 0 && username.value.length <= 4) {
        labelUsername.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        labelUsername.innerHTML = 'Usuario *Insira no mínimo 5 caracteres*'
        validaUsername = false;
    } else if (!username.value) {
        labelUsername.setAttribute('style', 'color: #1f1f1f')
        username.setAttribute('style', 'border-color: ')
        labelUsername.innerHTML = 'Usuario'
        validaUsername = false;
    } else {
        labelUsername.setAttribute('style', 'color: green')
        username.setAttribute('style', 'border-color: green')
        labelUsername.innerHTML = 'Usuario'
        validaUsername = true;
    }
})
senha.addEventListener('keyup', () => {
    if (senha.value.length > 0 && senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres*'
        validaSenha = false;
    } else if (!senha.value) {
        labelSenha.setAttribute('style', 'color: #1f1f1f')
        senha.setAttribute('style', 'border-color: ')
        labelSenha.innerHTML = 'Senha'
        validaSenha = false;
    } else if (senha.value != confirmSenha.value || confirmSenha.value != senha.value) {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.innerHTML = 'Senha *As senhas não coincidem*'
        validaSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        labelSenha.innerHTML = 'Senha'
        validaSenha = true;
    }
})
confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        confirmSenha.setAttribute('style', 'border-color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não coincidem*'
        validaConfirmSenha = false;
    } else if (!confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: #1f1f1f')
        confirmSenha.setAttribute('style', 'border-color: ')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validaConfirmSenha = false;
    } else if (confirmSenha.value == senha.value && senha.value.length > 5) {
        labelSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        labelSenha.innerHTML = 'Senha'
        validaSenha = true;

        labelConfirmSenha.setAttribute('style', 'color: green')
        confirmSenha.setAttribute('style', 'border-color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validaConfirmSenha = true;
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        confirmSenha.setAttribute('style', 'border-color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        validaConfirmSenha = true;
    }
})
/* VALIDAÇÃO DOS DADOS NO REGISTRO */

function verSenha() {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}

function verConfirmSenha() {

    let inputConfirmSenha = document.querySelector('#confirmSenha')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }

}

function Cadastrar() {
    if (validaNome && validaUsername && validaSenha && validaConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        valid = false;
        listaUser.forEach((item) => {
            if (username.value == item.userCad) {
                msgSucess.setAttribute('style', 'display: none');
                msgError.setAttribute('style', 'display: none');
                msgError.innerHTML = 'Usuário já existe.'
                setTimeout(() => {
                    msgError.setAttribute('style', 'display: block');
                }, 1)
                valid = true;
                console.log('verificando user')
            }
        })
        if (valid == false){
                listaUser.push({
                    nomeCad: nome.value,
                    userCad: username.value,
                    senhaCad: senha.value
                })
/*                 localStorage.setItem('listaUser', JSON.stringify(listaUser))
                setTimeout(() => {
                    window.location.href = '../login/login.html'
                }, 3000) */
                msgError.setAttribute('style', 'display: none');
                msgSucess.setAttribute('style', 'display: block');
        }

    } else {
        msgSucess.setAttribute('style', 'display: none');
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = 'Preencha os campos corretamente.'
        setTimeout(() => {
            msgError.setAttribute('style', 'display: block');
        }, 1)
    }
}