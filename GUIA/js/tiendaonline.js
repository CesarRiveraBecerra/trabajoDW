function Agregar(lol){
    var fila = lol.parentNode.parentNode;
    var producto = lol.parentNode.parentNode.childNodes[1].textContent;
    var cantidad = lol.parentNode.parentNode.childNodes[3].childNodes[0].value;
    var precio = lol.parentNode.parentNode.childNodes[5].textContent;
    var total = lol.parentNode.parentNode.childNodes[7].textContent;
    var codigoFila = "<tr>" +
    "<td>" + producto + "</td>" + "<td>" + cantidad + "</td>" + "<td>" + precio + "</td>"  +
    "<td>" +total  +"</td>"+"</tr>";

    var carrito = document.getElementById("tbl");
    carrito.innerHTML += codigoFila;
}