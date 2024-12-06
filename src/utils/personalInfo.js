document.addEventListener("DOMContentLoaded", () => {
    const tempData = {}; // Objeto para armazenar dados temporários

    // Função para carregar os dados
    const loadData = () => {
        const profilePic = localStorage.getItem("profilePic");
        const name = localStorage.getItem("name") || "Carregando...";
        const email = localStorage.getItem("username") || "Carregando...";
        const phone = localStorage.getItem("phone") || "Adicionar número";
        const city = localStorage.getItem("city") || "Adicionar cidade";
        const intent = localStorage.getItem("intent") || "Adoção";
        const gender = localStorage.getItem("gender") || "Ambos";
        const breed = localStorage.getItem("breed") || "Indefinida";

        // Atualiza a foto de perfil em todas as páginas
        const profilePicElements = document.querySelectorAll("#profile-pic, #profilePicHeader");
        profilePicElements.forEach((element) => {
            element.src = profilePic || "../imgs/default-profile.png"; // Caminho da imagem padrão
        });

        // Atualiza os campos de informações (se eles existirem na página)
        if (document.getElementById("user-name")) document.getElementById("user-name").innerText = name;
        if (document.getElementById("user-email")) document.getElementById("user-email").innerText = email;
        if (document.getElementById("info-name")) document.getElementById("info-name").innerHTML = `${name} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-email")) document.getElementById("info-email").innerHTML = `${email} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-phone")) document.getElementById("info-phone").innerHTML = `${phone} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-city")) document.getElementById("info-city").innerHTML = `${city} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-intent")) document.getElementById("info-intent").innerHTML = `${intent} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-gender")) document.getElementById("info-gender").innerHTML = `${gender} <i class="fa fa-pencil edit-icon"></i>`;
        if (document.getElementById("info-breed")) document.getElementById("info-breed").innerHTML = `${breed} <i class="fa fa-pencil edit-icon"></i>`;
        addEditListeners();
    };

    // Função para habilitar edição nos campos
    const enableEdit = (span) => {
        const currentValue = span.innerText.replace(" <i class=\"fa fa-pencil edit-icon\"></i>", "").trim();
        const inputType = span.id === "info-intent" || span.id === "info-gender" ? "select" : "input";
        const input = document.createElement(inputType);

        if (inputType === "select") {
            const options = span.id === "info-intent" ?
                ["Adoção", "Match", "Ambos"] :
                ["Fêmea", "Macho", "Ambos"];
            options.forEach((option) => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                opt.selected = option === currentValue;
                input.appendChild(opt);
            });

            input.addEventListener("change", () => {
                const newValue = input.value;
                span.innerHTML = `${newValue} <i class="fa fa-pencil edit-icon"></i>`;
                tempData[span.id] = newValue; // Salva temporariamente
                addEditListeners();
            });
        } else {
            input.type = "text";
            input.value = currentValue;

            input.addEventListener("blur", () => {
                const newValue = input.value.trim();
                span.innerHTML = `${newValue} <i class="fa fa-pencil edit-icon"></i>`;
                tempData[span.id] = newValue; // Salva temporariamente
                addEditListeners();
            });

            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    input.blur();
                }
            });
        }

        span.innerHTML = "";
        span.appendChild(input);
        input.focus();

        if (inputType === "select") {
            input.click();
        }
    };

    const addEditListeners = () => {
        document.querySelectorAll(".edit-icon").forEach((icon) => {
            icon.addEventListener("click", (event) => {
                const span = event.target.closest("span");
                enableEdit(span);
            });
        });
    };

    // Função para salvar os dados do tempData no localStorage
    const saveData = () => {
        const fieldMap = {
            "info-name": "name",
            "info-email": "username",
            "info-phone": "phone",
            "info-city": "city",
            "info-intent": "intent",
            "info-gender": "gender",
            "info-breed": "breed",
        };

        for (const id in tempData) {
            if (fieldMap[id]) {
                localStorage.setItem(fieldMap[id], tempData[id]);
            }
        }

        if (tempData["profilePic"]) {
            localStorage.setItem("profilePic", tempData["profilePic"]);
        }

        alert("Informações atualizadas com sucesso!");
        location.reload(); // Recarrega a página
    };

    // Configurações iniciais
    const confirmButton = document.querySelector(".confirm-button");
    if (confirmButton) confirmButton.addEventListener("click", saveData);

    // Foto de perfil - abrir seletor ao clicar na imagem
    const profilePic = document.getElementById("profile-pic");
    if (profilePic) {
        profilePic.addEventListener("click", () => {
            document.getElementById("photo-input").click();
        });
    }

    const photoInput = document.getElementById("photo-input");
    if (photoInput) {
        photoInput.addEventListener("change", () => {
            const file = photoInput.files[0];

            if (!file) {
                alert("Nenhum arquivo selecionado.");
                return;
            }

            if (!["image/png", "image/jpeg"].includes(file.type)) {
                alert("Por favor, selecione um arquivo PNG ou JPEG.");
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                tempData["profilePic"] = reader.result; // Salva temporariamente
                const profilePicElements = document.querySelectorAll("#profile-pic, #profilePicHeader");
                profilePicElements.forEach((element) => {
                    element.src = reader.result;
                });
            };
            reader.readAsDataURL(file);
        });
    }

    loadData();
});
