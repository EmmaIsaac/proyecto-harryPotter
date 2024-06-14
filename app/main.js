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

const $comunidadDiv = document.getElementById("comunidad");

const renderComunidad = () => {
    const comunidad = [
        {
            titulo: "Foros de Discusión",
            icono: "<i class='bx bxs-comment-detail'></i>",
            descripcion: "Comparte teorías, participa en debates y conecta con otros fans del mundo mágico."
        },
        {
            titulo: "Eventos",
            icono: "<i class='bx bxs-calendar-event' ></i>",
            descripcion: "Entérate de los próximos eventos y convenciones dedicados a Harry Potter."
        },
        {
            titulo: "Concursos y Premios",
            icono: "<i class='bx bxs-trophy'></i>",
            descripcion: "Participa en nuestros concursos temáticos y gana premios increíbles."
        },
    ];

    comunidad.forEach((e) => {
        $comunidadDiv.innerHTML += `
        <div>
        <h3>${e.titulo}</h3>        
        <p class="iconos">${e.icono}</p>
        <p>${e.descripcion}</p>
        </div>
        `;
    });
};

renderExplora();
renderComunidad();