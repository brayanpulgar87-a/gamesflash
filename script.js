

const buscador = document.getElementById('buscador');
const juegos = document.querySelectorAll('.tarjeta-juego');
const botonesFiltro = document.querySelectorAll('.btn-filtro');
let categoriaActual = 'todos';

// FUNCIÓN PARA FILTRAR POR TEXTO ESCRITO Y BOTÓN DE CATEGORÍA
function filtrarJuegos() {
    const textoBusqueda = buscador.value.toLowerCase();

    juegos.forEach(juego => {
        const titulo = juego.querySelector('h3').textContent.toLowerCase();
        
        // Separa las múltiples categorías por comas (como en Minecraft y Halo)
        const categoriesJuego = juego.getAttribute('data-categoria').split(',').map(cat => cat.trim());

        const coincideTexto = titulo.includes(textoBusqueda);
        const coincideCategoria = (categoriaActual === 'todos' || categoriesJuego.includes(categoriaActual));

        // Si cumple ambas condiciones se muestra, si no se oculta
        if (coincideTexto && coincideCategoria) {
            juego.style.display = "flex";
        } else {
            juego.style.display = "none";
        }
    });
}

// Escuchar cuando el usuario escribe en el buscador
buscador.addEventListener('keyup', filtrarJuegos);

// Escuchar los clics en los botones de categorías
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', function() {
        document.querySelector('.btn-filtro.active').classList.remove('active');
        this.classList.add('active');
        categoriaActual = this.getAttribute('data-target');
        filtrarJuegos();
    });
});

// FUNCIÓN PARA MENÚS DESPLEGABLES (32/64 bits o Servidores)
function descargarISO(idSelector) {
    const selector = document.getElementById(idSelector);
    const enlaceSeleccionado = selector.value;
    
    // Abre la opción seleccionada en una pestaña nueva
    window.open(enlaceSeleccionado, '_blank');
}

// FUNCIÓN PARA EL CONTADOR AUTOMÁTICO DE CASILLAS
function actualizarContador() {
    const totalCasillas = document.querySelectorAll('.tarjeta-juego').length;
    document.getElementById('contador-total').textContent = `${totalCasillas} Disponibles`;
}

// Ejecutar el contador automáticamente al cargar la página
actualizarContador();
