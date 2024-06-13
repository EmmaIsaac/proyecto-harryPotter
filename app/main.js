const $exploraDiv = document.getElementById("explora");

const renderExplora = () => {
    const explora = [
        {
            titulo: "Noticias y Actualizaciones",
            descripcion: "Mantente al día con las últimas novedades sobre Harry Potter, desde nuevos lanzamientos hasta eventos especiales y más."
        },
        {
            titulo: "Personajes",
            descripcion: "Conoce en profundidad a tus personajes favoritos. Desde Harry, Hermione y Ron, hasta Dumbledore, Snape y Voldemort."
        },
        {
            titulo: "Hogwarts",
            descripcion: "Aprende todo sobre la escuela de magia y hechicería más famosa del mundo. Desde sus casas (Gryffindor, Slytherin, Ravenclaw y Hufflepuff) hasta sus profesores y clases."
        },
        {
            titulo: "Hechizos y Pociones",
            descripcion: "Sumérgete en el estudio de la magia. Descubre los hechizos más icónicos y las pociones más poderosas del universo de Harry Potter."
        },
        {
            titulo: "Merchandising",
            descripcion: "Encuentra productos oficiales, desde varitas y capas hasta libros y figuras de colección."
        },
    ];

    explora.forEach((e) => {
        $exploraDiv.innerHTML += `
        <div class="card">
        <h3>${e.titulo}</h3>
        <p>${e.descripcion}</p>
        </div>
        `;
    });
};

renderExplora();