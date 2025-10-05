//BOTON 1_checkout//
function confirmarVenta() {
    //    Usar prompt() para pedir el apellido del vendedor
    const vendedor = prompt("Por favor, ingrese su apellido para confirmar la venta (Pérez, López o Torres):");

    //    Convertir a mayúsculas o minúsculas para hacer la validación más flexible
    if (vendedor) { // Si el usuario no cancela el prompt
        const apellidoNormalizado = vendedor.trim().toLowerCase();

        //    Usar condicionales para validar
        if (apellidoNormalizado === 'pérez' || apellidoNormalizado === 'lopez' || apellidoNormalizado === 'torres') {
            // Validación correcta
            alert("Venta confirmada por el vendedor " + vendedor + ".");

            // Redirigir a la página de agradecimiento solo si es correcto
            window.location.href = 'thankyou.html'; 
        } else {
            // Validación incorrecta
            alert("Vendedor no autorizado. Venta cancelada.");
        }
    } else {
        alert("Operación cancelada.");
    }
}

//BOTON 2_contact//
function generarReporte() {
    //    Obtener valores de los campos del formulario
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensajeCompleto = document.getElementById('message').value;
    
    //    Obtener el valor del radio button seleccionado
    const radioSeleccionado = document.querySelector('input[name="promociones"]:checked');
    const recibePromociones = radioSeleccionado ? radioSeleccionado.value : 'No especificado';
    
    //    Crear el mensaje recortado para el reporte (máximo 50 caracteres)
    // Usamos el operador ternario para mostrar el mensaje o "Vacío"
    const mensajeRecortado = mensajeCompleto.length > 50 
        ? mensajeCompleto.substring(0, 50) + '...' // Si es largo, recorta
        : mensajeCompleto; // Si es corto o vacío, lo muestra tal cual

    //    Construir el reporte usando Template Literals (más fácil de leer)
    const reporteTexto = `
=== REPORTE ===
Nombre: ${nombre || 'Vacío'}
Gmail: ${email || 'Vacío'}
Recibir Promociones: ${recibePromociones}
Mensaje:
---
${mensajeRecortado || 'Vacío'}
---
    `.trim();

    //    Mostrar el reporte
    document.getElementById('reporte').value = reporteTexto;
}

//BOTON 3_index.html//
function crearElementoDestacado() {
    const contenedor = document.getElementById('contenedor-dinamico');
    
    // Opcional pero útil: verifica si ya existe el producto para no duplicarlo
    if (contenedor.children.length > 0) {
        alert("El Producto del Día ya se ha añadido.");
        return;
    }
    
    // 1. Crear el nuevo elemento principal (div)
    const nuevoProducto = document.createElement('div');
    // Le puedes dar estilos de CSS que ya tengas, como 'producto'
    nuevoProducto.classList.add('producto'); 
    nuevoProducto.style.border = '2px solid #b85c38'; // Resaltarlo

    // 2. Crear la Imagen
    const imagen = document.createElement('img');
    imagen.src = 'https://cdn0.recetasgratis.net/es/posts/1/2/5/cafe_affogato_74521_600.jpg';
    imagen.alt = 'cafe_affogato';
    
    // 3. Crear el Título y el Precio
    const titulo = document.createElement('h3');
    titulo.textContent = '¡OFERTA:Café Affogato';
    
    const precio = document.createElement('p');
    precio.textContent = 'S/ 12.00 (Por tiempo limitado!)';

    // 4. Ensamblar: añadir Imagen, Título y Precio al nuevo div
    nuevoProducto.appendChild(imagen);
    nuevoProducto.appendChild(titulo);
    nuevoProducto.appendChild(precio);
    
    // 5. Insertar todo el nuevo elemento en la página
    contenedor.appendChild(nuevoProducto);
    alert("¡Producto del Día añadido con éxito!");
}

//BOTON 4_index.html//
function cambiarModo() {
    // Selecciona el header (que tiene la clase 'main-header')
    const header = document.querySelector('.main-header');
    
    // .toggle() añade la clase si no existe, o la quita si existe
    header.classList.toggle('modo-oscuro');
    
    // Mensaje de confirmación
    if (header.classList.contains('modo-oscuro')) {
        alert("Modo Nocturno Activado. (¡Revisa el header!)");
    } else {
        alert("Modo Nocturno Desactivado.");
    }
}