import { initScrollHandler } from './scrollHandler.js';

const $casasDiv = document.getElementById("casas");

const renderCasas = () => {
    const casas = [
        {
            escudo: "../assets/image/escudoGryffinddor.png",
            nombre: "Gryffinddor",
            descripcion: "La Casa Gryffindor fue fundada por el célebre mago Godric Gryffindor. Godric sólo aceptaba en su casa a aquellos magos y brujas que tenían valentía, disposición, coraje y caballerosidad, ya que éstas son las cualidades de un auténtico Gryffindor."
        },
        {
            escudo: "../assets/image/escudoHufflepuff.png",
            nombre: "Hufflepuff",
            descripcion: "La Sala Común de Hufflepuff se encuentra en una bodega en el mismo pasillo subterráneo que la cocina. Inicialmente, Hufflepuff buscaba alumnos que simplemente quisieran pertenecer a esa casa, aunque actualmente busca alumnos leales, honestos y que no teman el trabajo pesado."
        },
        {
            escudo: "../assets/image/escudoRavenclaw.png",
            nombre: "Ravenclaw",
            descripcion: "La Casa Ravenclaw se encuentra en una torre en el ala oeste del castillo. En la entrada se encuentra una estatua con forma de águila que dice acertijos y sólo te deja entrar si lo resuelves. Sus colores son el azul y el bronce. Ravenclaw busca alumnos creativos, curiosos y que siempre busquen la respuesta."
        },
        {
            escudo: "../assets/image/escudoSlytherin.png",
            nombre: "Slytherin",
            descripcion: "La Casa Slytherin está caracterizada principalmente por la ambición y la astucia. Fue fundada por el mago Salazar Slytherin. La Sala Común está situada en las mazmorras, pasando por un serie de numerosos pasillos subterráneos. Posiblemente se llega a ellos a través del Vestíbulo de Hogwarts ."
        },        
    ];

    casas.forEach((e) => {
        $casasDiv.innerHTML += `
        <div class="casa">
        <div class="casa_img">
        <img src="${e.escudo}" alt="Escudo de ${e.nombre}">
        </div>
        <div class="casa_desc">
        <h3>${e.nombre}</h3>
        <p>${e.descripcion}</p>
        </div>
        </div>
        `;
    });
};

const $hechizosDiv = document.getElementById("hechizos");

const renderHechizos = () => {
    const hechizos = [
        {
            nombre:"Expelliarmus",
            descripcion: "El encantamiento desarmador. Este hechizo es utilizado para desarmar a un oponente, haciendo que su varita vuele fuera de su mano."
        },
        {
            nombre:"Expecto Patronum",
            descripcion: "El encantamiento patronus. Este hechizo conjura un Patronus, una manifestación mágica de energía positiva utilizada para repeler Dementores."
        },
        {
            nombre:"Avada Kedavra",
            descripcion: "La maldición asesina. Es uno de los tres maleficios imperdonables y causa la muerte instantánea de la víctima."
        },
        {
            nombre:"Alohomora",
            descripcion: "El encantamiento de apertura. Este hechizo se usa para desbloquear puertas y cerraduras cerradas mágicamente."
        },
    ];

    hechizos.forEach((e) => {
        $hechizosDiv.innerHTML += `
        <div class="hechizo">
        <h3>${e.nombre}:</h3>
        <p>${e.descripcion}</p>
        <hr>
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

initScrollHandler();
renderCasas();
renderHechizos();
renderComunidad();