function renderizarCachorros() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	cachorros.forEach((cachorro) => {
		html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.idade}</p>
                <a href="adote-action.html" class="button">Adote</a>
            </div>
        `;
	});

	container.innerHTML = html;
}

function renderizarCachorrosMatch() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	cachorrosMatch.forEach((cachorro) => {
		html += `
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.sexo}</p>
                <p>${cachorro.idade}</p>
                <a href="./match-action.html" class="button">Match</a>
            </div>
        `;
	});

	container.innerHTML = html;
}

function renderizarSeusPets() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	seusPets.forEach((cachorro) => {
		html += `
        <div class ="container">
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="info">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.sexo}</p>
                <p>${cachorro.idade}</p>
                </div>
                <div class="actions">
                <a href="#" class="button">Editar</a>
                <a href="#" class="button-remove">Remover</a>
                </div>
                </div>
            </div>
        `;
	});

	container.innerHTML = html;
}

function renderizarFavoritos() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	petsFavoritos.forEach((cachorro) => {
		html += `
        <div class ="container">
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="info">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.sexo}</p>
                <p>${cachorro.idade}</p>
                </div>
                <div class="actions">
                <a href="#" class="button">Ver Pet</a>
                <a href="#" class="button-remove">Remover</a>
                    </div>
                </div>
            </div>
        `;
	});

	container.innerHTML = html;
}

function renderizarMatchAction() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	matchAction.forEach((cachorro) => {
		html += `
        <div class ="container">
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="info">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.sexo}</p>
                <p>${cachorro.idade}</p>
                </div>
                <div class="actions">
                    </div>
                </div>
            </div>
        `;
	});

	container.innerHTML = html;
}

function renderizarAdoteAction() {
	const container = document.querySelector(".pets-section");
	let html = "";

	// biome-ignore lint/complexity/noForEach: <explanation>
	adoteAction.forEach((cachorro) => {
		html += `
        <div class ="container">
            <div class="pet-card">
                <img src="${cachorro.foto}" alt="${cachorro.nome}">
                <div class="info">
                <h3>${cachorro.nome}</h3>
                <p>${cachorro.raça}</p>
                <p>${cachorro.descrição}</p>
                <p>${cachorro.sexo}</p>
                <p>${cachorro.idade}</p>
                </div>
                <div class="actions">
                    </div>
                </div>
            </div>
        `;
	});

	container.innerHTML = html;
}



