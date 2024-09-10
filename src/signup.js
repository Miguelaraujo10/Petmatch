document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Armazenando os dados no localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("signupMessage").innerText = "Conta criada com sucesso! Você pode fazer login agora.";
});
