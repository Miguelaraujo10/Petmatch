function renderizarCachorros() {
    const container = document.querySelector(".pets-section");
    let html = "";

    cachorros.forEach((cachorro, index) => {
        const isFavorito = verificarFavorito(index); // Verifica se está nos favoritos
        const favoritedClass = isFavorito ? "favorited" : ""; // Adiciona classe se for favoritado

        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="card-content">
                    <h3>${cachorro.nome}</h3>
                    <p>Raça: ${cachorro.raça}</p>
                    <p>Descrição: ${cachorro.descrição}</p>
                    <p>Idade: ${cachorro.idade}</p>
                </div>
                <div class="card-actions">
                    <button class="favorite-button ${favoritedClass}" onclick="alternarFavorito(${index}, this)">&#9733;</button>
                    <a href="adote-action.html" class="button">Adote</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function alternarFavorito(index, button) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const petExistente = favoritos.find((fav) => fav.foto === cachorros[index].foto);

    if (petExistente) {
        // Remove o pet dos favoritos
        favoritos = favoritos.filter((fav) => fav.foto !== cachorros[index].foto);
        button.classList.remove("favorited");
        alert("Pet removido dos favoritos!");
    } else {
        // Adiciona o pet aos favoritos
        favoritos.push(cachorros[index]);
        button.classList.add("favorited");
        alert(`${cachorros[index].nome} foi adicionado aos favoritos!`);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function verificarFavorito(index) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return favoritos.some((fav) => fav.foto === cachorros[index].foto);
}

function renderizarFavoritos() {
    const container = document.querySelector(".pets-section");
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let html = "";

    if (favoritos.length === 0) {
        html = "<p>Você ainda não adicionou nenhum pet aos favoritos.</p>";
    } else {
        favoritos.forEach((favorito) => {
            html += `
                <div class="pet-card">
                    <img src="${favorito.foto}" alt="${favorito.nome}">
                    <div class="card-content">
                        <h3>${favorito.nome}</h3>
                        <p>Raça: ${favorito.raça}</p>
                        <p>Descrição: ${favorito.descrição}</p>
                        <p>Idade: ${favorito.idade}</p>
                    </div>
                    <div class="card-actions">
                        <button class="button-remove" onclick="removerFavorito('${favorito.foto}')">Remover</button>
                    </div>
                </div>
            `;
        });
    }

    container.innerHTML = html;
}

function removerFavorito(foto) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter((fav) => fav.foto !== foto);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Pet removido dos favoritos!");
    renderizarFavoritos(); // Atualiza a página de favoritos
}

function renderizarCachorrosMatch() {
    const container = document.querySelector(".pets-section");
    let html = "";

    cachorrosMatch.forEach((cachorro) => {
        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="card-content">
                    <h3>${cachorro.nome}</h3>
                    <p>Raça: ${cachorro.raça}</p>
                    <p>Descrição: ${cachorro.descrição}</p>
                    <p>Idade: ${cachorro.idade}</p>
                    <p>Sexo: ${cachorro.sexo}</p>
                </div>
                <div class="card-actions">
                    <a href="./match-action.html" class="button">Match</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarSeusPets() {
    const container = document.querySelector(".pets-section");
    let html = "";

    seusPets.forEach((cachorro) => {
        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="info">
                    <h3>${cachorro.nome}</h3>
                    <p>Raça: ${cachorro.raça}</p>
                    <p>Descrição: ${cachorro.descrição}</p>
                    <p>Idade: ${cachorro.idade}</p>
                </div>
                <div class="actions">
                    <a href="#" class="button">Editar</a>
                    <a href="#" class="button-remove">Remover</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
