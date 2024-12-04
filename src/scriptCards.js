function renderizarCachorros() {
    const container = document.querySelector('.pets-section');
    let html = '';

    // biome-ignore lint/complexity/noForEach: <explanation>
    cachorros.forEach(cachorro => {
        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.idade}</p>
                <a href="#" class="button">Adote</a>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderizarCachorrosMatch() {
    const container = document.querySelector('.pets-section');
    let html = '';

    // biome-ignore lint/complexity/noForEach: <explanation>
    cachorrosMatch.forEach(cachorro => {
        html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.idade}</p>
                <a href="#" class="button">Match</a>
            </div>
        `;
    });

    container.innerHTML = html;
}
