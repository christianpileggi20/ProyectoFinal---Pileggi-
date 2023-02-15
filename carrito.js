const renderizarCarrito = () => {
    ventanaContenedor.innerHTML = ""
    ventanaContenedor.style.display = "flex"
    let ventanaHeader = document.createElement("div")
    ventanaHeader.className = "ventana-header"
    ventanaHeader.innerHTML = `
 <h1 class="ventana-header-item"> Tu carrito </h1>
 `
    ventanaContenedor.append(ventanaHeader)





    const ventanaBoton = document.createElement("h1")
    ventanaBoton.innerText = "X"
    ventanaBoton.className = "ventana-header-boton"



    ventanaBoton.addEventListener("click", () => {
        ventanaContenedor.style.display = "none"
    })

    ventanaHeader.append(ventanaBoton)


    carrito.forEach((producto) => {
        const carritoContenido = document.createElement("div");
        carritoContenido.className = "ventana-contenedor"
        carritoContenido.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.precioPorKg} $</p>
        <span class="restar"> - </span>
        <p>${producto.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${producto.cantidad * producto.precioPorKg} $</p>
        <span class="borrar-producto"> ❌ </span>`


        ventanaContenedor.append(carritoContenido)

        const restar = carritoContenido.querySelector(".restar");

        restar.addEventListener("click", () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--;
            }
            guardarLocal();
            renderizarCarrito();
        });

        const sumar = carritoContenido.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            producto.cantidad++;
            guardarLocal();
            renderizarCarrito();
        });

        const eliminar = carritoContenido.querySelector(".borrar-producto");

        eliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });

         
    })





    const total = carrito.reduce((acc, el) => acc + el.precioPorKg, 0)






    


    let finalizarCompra = document.createElement("button")
    finalizarCompra.className = "total-compra"
    finalizarCompra.innerHTML = `Finalizar compra`
    ventanaContenedor.append(finalizarCompra)

    finalizarCompra.addEventListener("click", () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu compra ha sido realizada correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    });


    

};

verCarrito.addEventListener("click", renderizarCarrito);


const eliminarProducto = () => {
    const buscarId = carrito.find((producto) => producto.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;

    });

    renderizarCarrito();


};