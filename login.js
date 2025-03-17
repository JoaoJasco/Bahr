const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar se o email e a senha estão corretos
    if (email === 'usuario@example.com' && password === 'senha123') {
        // Redirecionar para a página de sucesso
        window.location.href = 'sucesso.html';
    } else {
        // Mostrar mensagem de erro
        alert('Email ou senha incorretos!');
    }
});