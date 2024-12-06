// Renderiza os cachorros na página Adote
function renderizarCachorrosAdote() {
    const container = document.querySelector(".pets-section");
    let html = "";

    cachorrosAdote.forEach((cachorro) => {
        const isFavorito = verificarFavorito(cachorro.id); // Verifica se está nos favoritos
        const favoritedClass = isFavorito ? "favorited" : ""; // Adiciona classe se for favoritado

        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>Raça: ${cachorro.raça}</p>
                <p>Descrição: ${cachorro.descrição}</p>
                <p>Idade: ${cachorro.idade}</p>
                <button class="favorite-button ${favoritedClass}" onclick="alternarFavorito(${cachorro.id}, this)">&#9733;</button>
                <a href="adote-action.html" class="button">Adote</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Renderiza os cachorros na página Match
function renderizarCachorrosMatch() {
    const container = document.querySelector(".pets-section");
    let html = "";

    cachorrosMatch.forEach((cachorro) => {
        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>Raça: ${cachorro.raça}</p>
                <p>Descrição: ${cachorro.descrição}</p>
                <p>Idade: ${cachorro.idade}</p>
                <p>Sexo: ${cachorro.sexo}</p>
                <button class="button" onclick="matchPet(${cachorro.id})">Curtir</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Renderiza a lista de cachorros favoritados
function renderizarFavoritos() {
    const container = document.querySelector("#pets-section");
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let html = "";

    if (favoritos.length === 0) {
        html = "<p>Você ainda não adicionou nenhum pet aos favoritos.</p>";
    } else {
        favoritos.forEach((cachorro) => {
            html += `
                <div class="pet-card">
                    <img src="${cachorro.foto}" alt="${cachorro.nome}">
                    <h3>${cachorro.nome}</h3>
                    <p>Raça: ${cachorro.raça}</p>
                    <p>Descrição: ${cachorro.descrição}</p>
                    <p>Idade: ${cachorro.idade}</p>
                    <button class="button-remove" onclick="removerFavorito(${cachorro.id})">Remover</button>
                </div>
            `;
        });
    }

    container.innerHTML = html;
}

// Alterna o estado de favorito
function alternarFavorito(petId, button) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const petIndex = favoritos.findIndex((pet) => pet.id === petId);

    if (petIndex >= 0) {
        favoritos.splice(petIndex, 1);
        button.classList.remove("favorited");
        alert("Pet removido dos favoritos!");
    } else {
        const pet = [...cachorrosAdote, ...cachorrosMatch].find((cachorro) => cachorro.id === petId);
        favoritos.push(pet);
        button.classList.add("favorited");
        alert(`${pet.nome} foi adicionado aos favoritos!`);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Verifica se um pet está nos favoritos
function verificarFavorito(petId) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return favoritos.some((pet) => pet.id === petId);
}

// Remove um pet dos favoritos
function removerFavorito(petId) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter((pet) => pet.id !== petId);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Pet removido dos favoritos!");
    renderizarFavoritos(); // Atualiza a página de favoritos
}

// Dados exclusivos para Adote
const cachorrosAdote = [
    {
        id: 1,
        nome: "Bolt",
        raça: "Labrador",
        descrição: "Amável e brincalhão",
        idade: "2 anos",
        sexo: "Macho",
        foto: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg",
    },
    {
        id: 2,
        nome: "Luna",
        raça: "Golden Retriever",
        descrição: "Calma e carinhosa",
        idade: "1 ano",
        sexo: "Fêmea",
        foto: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg",
    },
    {
        id: 3,
        nome: "Max",
        raça: "Pastor Australiano",
        descrição: "Energético e leal",
        idade: "4 anos",
        sexo: "Macho",
        foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 4,
        nome: "Nenguinha",
        raça: "Husky Siberiano",
        descrição: "Aventureira e dócil",
        idade: "3 anos",
        sexo: "Fêmea",
        foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 5,
        nome: "Dino",
        raça: "Bulldog",
        descrição: "Calmo e fechado",
        idade: "2 anos",
        sexo: "Macho",
        foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
        id: 6,
        nome: "Linda",
        raça: "Poodle",
        descrição: "O prório nome já diz tudo",
        idade: "1 ano",
        sexo: "Fêmea",
        foto: "https://images.unsplash.com/photo-1558788353-f76d92427f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
];

// Dados exclusivos para Match
const cachorrosMatch = [
    {
        id: 7,
        nome: "Thor",
        raça: "Husky Siberiano",
        descrição: "Energético e leal",
        idade: "3 anos",
        sexo: "Macho",
        foto: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg",
    },
    {
        id: 8,
        nome: "Rex",
        raça: "Bulldog Francês",
        descrição: "Agitado e engraçado",
        idade: "5 anos",
        sexo: "Macho",
        foto: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg",
    },
    {
        id: 9,
        nome: "Charlie",
        raça: "Beagle",
        descrição: "Curioso e amigável",
        idade: "3 anos",
        sexo: "Macho",
        foto: "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
    },
    {
        id: 10,
        nome: "Bella",
        raça: "Poodle",
        descrição: "Elegante e carinhosa",
        idade: "2 anos",
        sexo: "Fêmea",
        foto: "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
    },
    {
        id: 11,
        nome: "Charlotte",
        raça: "Lulu da Pomerânia",
        descrição: "Charmosa e educada",
        idade: "2 anos",
        sexo: "Fêmea",
        foto: "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
    },
    {
        id: 12,
        nome: "Lulu",
        raça: "Vira-Lata",
        descrição: "Agitado e Desengonçado",
        idade: "7 anos",
        sexo: "Fêmea",
        foto: "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
    },
];

// Função de exemplo para Match (opcional)
function matchPet(petId) {
    const pet = cachorrosMatch.find((cachorro) => cachorro.id === petId);
    alert(`Você curtiu o perfil de ${pet.nome}. Caso ele (a) também curta o seu, é MATCH!`);
}
