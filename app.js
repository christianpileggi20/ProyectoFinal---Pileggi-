const contenidoCarrito = document.getElementById("contenidoCarrito");
const verCarrito = document.getElementById("verCarrito");
const ventanaContenedor = document.getElementById("ventana-contenedor");
const finalizarCompra = document.getElementById("finalizarCompra");



let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const asProductos = async () => {
    const respuesta = await fetch("datos.json")
    const datos = await respuesta.json()

    datos.forEach((producto) => {
        let contenido = document.createElement("div")
        contenido.className = "card"
        contenido.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precioPorKg}$</p> `

        contenidoCarrito.append(contenido);




        let comprar = document.createElement("button");
        comprar.innerText = "Agregar al carrito";
        comprar.className = "comprar";

        contenidoCarrito.append(comprar);







        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);

            if (repeat) {
                carrito.map((producto) => {
                    if (producto.id === producto.id) {
                        producto.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precioPorKg,
                    cantidad: producto.cantidad,
                });
                guardarLocal()
       }   })
    })
}

asProductos();








const guardarLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


JSON.parse(localStorage.getItem("carrito"))




guardarLocal();

