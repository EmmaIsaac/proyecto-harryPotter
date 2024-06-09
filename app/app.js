const $grid = document.querySelector("div");

const url = "https://hp-api.onrender.com/api/characters";

fetch(url)
.then((respuesta) => {
    return respuesta.json();
})

.then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
        const placeholder = "../assets/image/placeholder.jpg";
        const imagen = personaje.image ? personaje.image : placeholder;
        const casa = personaje.house ? personaje.house : "unknown";
        const genero = personaje.gender ? personaje.gender : "unknown";

        $grid.innerHTML += `
        <div class="card">
            <div class="card_img">
                <img src="${imagen}" alt="${personaje.name}">
            </div>
            <div>
                <h3>${personaje.name}</h3>
                <p>Genero: ${genero}</p>
                <p>Especie: ${personaje.species}</p>
                <p>Casa: ${casa}</p>
            </div>
        </div>
        `;
    });    
});