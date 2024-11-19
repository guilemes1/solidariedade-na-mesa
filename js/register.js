document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const senha = e.target.senha.value;
    const confirmarSenha = e.target.confirmarSenha.value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Enviar a requisição ao backend
    fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: e.target.name.value,
            login: e.target.login.value,
            senha,
            confirmarSenha,
        }),
    }).then(response => {
        if (response.ok) {
            alert('Usuário registrado com sucesso!');
        } else {
            response.text().then(text => alert(text));
        }
    });
});