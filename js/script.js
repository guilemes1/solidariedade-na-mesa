document.querySelector('form').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Por favor, preencha todos os campos.');
        e.preventDefault(); // Impede o envio do formulário
    } else {
        alert('Login realizado com sucesso!'); // Placeholder para ação de login
    }
});

document.querySelector('.google-login').addEventListener('click', function() {
    alert('Login com Google ainda não implementado.');
});

document.querySelector('.facebook-login').addEventListener('click', function() {
    alert('Login com Facebook ainda não implementado.');
});