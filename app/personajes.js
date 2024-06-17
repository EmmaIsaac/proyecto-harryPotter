const $grid = document.querySelector("div");

const url = "https://hp-api.onrender.com/api/characters";

fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => {
    const personajes = data;
    console.log(personajes);

    const renderPersonajes = (personajes) => {
    $grid.innerHTML = "";
    personajes.forEach((personaje) => {
        const placeholder = "../assets/image/imagen-vacia.webp";
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
    };

    renderPersonajes(personajes);

    const $inputBuscar = document.getElementById("buscar");

    $inputBuscar.addEventListener("input", () => {
    const buscarValue = $inputBuscar.value.toLowerCase();

    const filtroPersonajes = personajes.filter((personaje) =>
        personaje.name.toLowerCase().includes(buscarValue)
    );

    renderPersonajes(filtroPersonajes);
    });
});  