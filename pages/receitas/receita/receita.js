if (localStorage.getItem('token') == null){
    alert('Voc\u00ea precisa estar logado para acessar esta p\u00e1gina')
    window.location.href = '../login/login.html'
}  