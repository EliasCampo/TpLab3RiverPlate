let productos = {};
const setProductos = (listado) => {
    productos = listado;
}

fetch("assets/productos_listado.json")
    .then(response => response.json())
    .then((json) => setProductos(json["productos"]))
    .then(() => cargarProductos())

const cargarProductos = () => {    
    div = document.getElementById('listadoProductos');
    div.innerHTML = "";

    productos.forEach((prod)=> {
        div.innerHTML = div.innerHTML + `<div class= "productos col-lg-4 col-md-6 col-sm-12" >

                                            <img src='${prod.image}' >

                                            <p class="name">${prod.name}</p>
                                            <p class="descripcion">${prod.descripcion}</p>

                                            <p class="price">
                                                <span>${prod.price}</span>
                                                <span>&dollar;</span>
                                            </p>
                                            

                                        </div>`;
    });
}