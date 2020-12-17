function agregarAlCarrito(boton){
    var filaImgBoton = boton.parentNode.parentNode;
    var divNombre = filaImgBoton.nextSibling.nextSibling;
    var nombre = divNombre.childNodes[1].textContent;
    var divPrecio = divNombre.nextSibling.nextSibling;
    var precio = divPrecio.childNodes[1].textContent;
    var productos = document.getElementById("productos");
    htmlProducto = 
    '<tr>'+
    '    <td>'+nombre+'</td>'+
    '    <td class="precio">'+precio+'</td>'+
    '    <td><button type="button" class="btn btn-danger" onclick="eliminarDelCarrito(this)">X</button></td>'+
    '</tr>';
    productos.innerHTML += htmlProducto;
    obtenerPrecio();
}
function eliminarDelCarrito(boton){
    var fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
    obtenerPrecio();
}
function obtenerPrecio(){
    let Precios = document.getElementsByClassName("precio");
    PrecioTotal=0;
    for( let i=0 ; i < Precios.length; i++){
        PrecioTotal +=  parseFloat(Precios[i].innerHTML.substring(3));
    }
    let compraTotal = document.getElementById("precio-total");
    compraTotal.innerHTML =  "S/ "+PrecioTotal;
}