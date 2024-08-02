let productos = {};
const setProductos = (listado) => {
    productos = listado;
}

fetch("assets/productos_listado.json") /**con metodo get como defecto estamos haciendo una peticion del json mio y devuelve una promesa*/
    .then(response => response.json()) /**esta es la respuesta del fetch y lo transformamos en un json*/
    .then((json) => setProductos(json["productos"])) /* se llama a la funcion setProductos para asignar los datos del JSON al objeto productos */
    .then(() => cargarProductos()) /* esta funcion se encarga de cargar los productos al html */

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