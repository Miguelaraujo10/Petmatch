document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o usuário está logado
    const loggedInUser = localStorage.getItem("username");
    if (!loggedInUser) {
        alert("Você precisa estar logado para cadastrar um pet.");
        window.location.href = "login.html"; // Redirecionar para a página de login
    }

    document.getElementById("petForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const petImage = document.getElementById("petImage").files[0];
        const petName = document.getElementById("petName").value;
        const petAge = document.getElementById("petAge").value;
        const petType = document.getElementById("petType").value;

        if (!petImage || !petName || !petAge || !petType) {
            document.getElementById("message").innerText = "Preencha todos os campos.";
            return;
        }

        // Aqui você pode adicionar a lógica para salvar os dados do pet
        document.getElementById("message").innerText = "Pet cadastrado com sucesso!";
    });
});