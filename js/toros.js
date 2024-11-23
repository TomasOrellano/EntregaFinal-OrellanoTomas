const toros = [
    { id: 1, nombre: "Toro A", edad: 18, descripcion: "Seleccionado para vaquillonas", precio: 10000, imagen: "../Fixtures/toros1.png" },
    { id: 2, nombre: "Toro B", edad: 24, descripcion: "Alto potencial genético", precio: 12000, imagen: "../Fixtures/toros1.png" },
    { id: 3, nombre: "Toro C", edad: 36, descripcion: "Seleccionado para vaquillonas", precio: 9000, imagen: "../Fixtures/toros1.png" },
    { id: 4, nombre: "Toro D", edad: 30, descripcion: "Ideal para producción", precio: 15000, imagen: "../Fixtures/toros1.png" },
    { id: 5, nombre: "Toro E", edad: 20, descripcion: "Seleccionado para vaquillonas", precio: 11000, imagen: "../Fixtures/toros1.png" },
    { id: 6, nombre: "Toro F", edad: 28, descripcion: "Alta rusticidad", precio: 9500, imagen: "../Fixtures/toros1.png" },
    { id: 7, nombre: "Toro G", edad: 22, descripcion: "Alto peso al destete", precio: 10500, imagen: "../Fixtures/toros1.png" },
    { id: 8, nombre: "Toro H", edad: 24, descripcion: "Seleccionado para vaquillonas", precio: 12500, imagen: "../Fixtures/toros1.png" },
    { id: 9, nombre: "Toro I", edad: 32, descripcion: "Gran rendimiento", precio: 13000, imagen: "../Fixtures/toros1.png" },
];


// Referencias al DOM
const searchInput = document.getElementById("search");
const galeriaToros = document.getElementById("galeria-toros");

// Función para mostrar toros
function displayToros(torosFiltrados) {
    galeriaToros.innerHTML = ""; // Limpiar contenedor

    torosFiltrados.forEach((toro) => {
        galeriaToros.innerHTML += `
            <div class="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <img src="${toro.imagen}" alt="${toro.nombre}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h2 class="text-lg font-bold">${toro.nombre}</h2>
                    <p class="text-gray-600">Edad: ${toro.edad} meses</p>
                    <p class="text-gray-700">${toro.descripcion}</p>
                    <p class="text-xl font-semibold text-green-600">Precio: $${toro.precio.toLocaleString()}</p> <!-- Muestra el precio -->
                </div>
            </div>
        `;
    });
}

// Función para filtrar toros
function filterToros() {
    const searchValue = searchInput.value.toLowerCase();

    // Filtrar toros por edad o descripción
    const filteredToros = toros.filter((toro) =>
        toro.edad.toString().includes(searchValue) ||
        toro.descripcion.toLowerCase().includes(searchValue)
        );

    // Mostrar toros filtrados
    displayToros(filteredToros);
}

// Event Listener para el input
searchInput.addEventListener("input", filterToros);

// Inicializar la página mostrando todos los toros
displayToros(toros);
