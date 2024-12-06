function renderizarCachorros() {
    const container = document.querySelector(".pets-section");
    let html = "";

    // Recupera os pets do Local Storage
    const pets = JSON.parse(localStorage.getItem("pets")) || cachorros; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <h3>${pet.nome || pet.name}</h3>
                <p>${pet.raça || pet.race}</p>
                <p>${pet.descrição || pet.description}</p>
                <p>${pet.idade || pet.age}</p>
                <a href="adote-action.html" class="button">Adote</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarCachorrosMatch() {
    const container = document.querySelector(".pets-section");
    let html = "";

    const pets = JSON.parse(localStorage.getItem("pets")) || cachorrosMatch; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <h3>${pet.nome || pet.name}</h3>
                <p>${pet.raça || pet.race}</p>
                <p>${pet.descrição || pet.description}</p>
                <p>${pet.sexo || pet.type}</p>
                <p>${pet.idade || pet.age}</p>
                <a href="./match-action.html" class="button">Match</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarSeusPets() {
    const container = document.querySelector(".pets-section");
    let html = "";

    const pets = JSON.parse(localStorage.getItem("pets")) || seusPets; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <div class="info">
                    <h3>${pet.nome || pet.name}</h3>
                    <p>${pet.raça || pet.race}</p>
                    <p>${pet.descrição || pet.description}</p>
                    <p>${pet.sexo || pet.type}</p>
                    <p>${pet.idade || pet.age}</p>
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

function renderizarFavoritos() {
    const container = document.querySelector(".pets-section");
    let html = "";

    const pets = JSON.parse(localStorage.getItem("pets")) || petsFavoritos; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <div class="info">
                    <h3>${pet.nome || pet.name}</h3>
                    <p>${pet.raça || pet.race}</p>
                    <p>${pet.descrição || pet.description}</p>
                    <p>${pet.sexo || pet.type}</p>
                    <p>${pet.idade || pet.age}</p>
                </div>
                <div class="actions">
                    <a href="#" class="button">Ver Pet</a>
                    <a href="#" class="button-remove">Remover</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarMatchAction() {
    const container = document.querySelector(".pets-section");
    let html = "";

    const pets = JSON.parse(localStorage.getItem("pets")) || matchAction; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <div class="info">
                    <h3>${pet.nome || pet.name}</h3>
                    <p>${pet.raça || pet.race}</p>
                    <p>${pet.descrição || pet.description}</p>
                    <p>${pet.sexo || pet.type}</p>
                    <p>${pet.idade || pet.age}</p>
                </div>
                <div class="actions">
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderizarAdoteAction() {
    const container = document.querySelector(".pets-section");
    let html = "";

    const pets = JSON.parse(localStorage.getItem("pets")) || adoteAction; // Fallback para os pets estáticos

    pets.forEach((pet) => {
        html += `
            <div class="pet-card">
                <img src="${pet.foto || pet.image}" alt="${pet.nome || pet.name}">
                <div class="info">
                    <h3>${pet.nome || pet.name}</h3>
                    <p>${pet.raça || pet.race}</p>
                    <p>${pet.descrição || pet.description}</p>
                    <p>${pet.sexo || pet.type}</p>
                    <p>${pet.idade || pet.age}</p>
                </div>
                <div class="actions">
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}