document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores do formulário
    const name = document.getElementById("signupName").value; // Nome do usuário
    const username = document.getElementById("signupUsername").value; // Email do usuário
    const password = document.getElementById("signupPassword").value; // Senha do usuário

    // Verifica se o nome de usuário (email) já existe no localStorage
    const existingUsername = localStorage.getItem("username");

    if (existingUsername === username) {
        // Exibe uma mensagem de erro se o email já existir
        document.getElementById("signupMessage").innerText = "Este email já está em uso.";
        document.getElementById("signupMessage").style.color = "red";
    } else {
        // Salva o nome, email e senha no localStorage
        localStorage.setItem("name", name); // Nome do usuário
        localStorage.setItem("username", username); // Email do usuário
        localStorage.setItem("password", password); // Senha do usuário

        // Define a sessão como ativa
        localStorage.setItem("isLoggedIn", "true");

        // Exibe uma mensagem de sucesso
        document.getElementById("signupMessage").innerText = "Conta criada com sucesso!";
        document.getElementById("signupMessage").style.color = "green";

        // Redireciona para a página inicial após 2 segundos
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    }
});
