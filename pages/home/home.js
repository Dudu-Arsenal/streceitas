let loginBtn = document.querySelector('#loginLink')
let logoutBtn = document.querySelector('.logoutDiv')

if (localStorage.getItem('token') != null){
    loginBtn.setAttribute('style', 'display: none')
} else {
    logoutBtn.setAttribute('style', 'display: none')
    loginBtn.setAttribute('style', 'display: flex')
}

function Logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../login/login.html'
}