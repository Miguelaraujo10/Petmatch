document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar se os dados estão armazenados no localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        // Redireciona para a página inicial se a conta existir
        window.location.href = "index.html";
    } else {
        // Se a conta não existir, exibe uma mensagem de erro
        document.getElementById("message").innerText = "Conta não encontrada. Por favor, crie uma conta.";
    }
});
