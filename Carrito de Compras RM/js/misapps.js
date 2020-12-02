
function guardarDato(boton){
    var nombre = boton.parentNode.childNodes[0].textContent;
    var precio = boton.parentNode.childNodes[4].textContent;
    localStorage.setItem(nombre, precio);
    actualizarDatos();
}

function eliminarDato(boton){
    var nombre = boton.parentNode.childNodes[0].textContent;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro ="";
    if(localStorage.length===0){
        registro+= '<li>Vacio</li>';
    }else{
        for(var i = 0; i<=localStorage.length-1; i++){
            var key = localStorage.key(i);
            registro += '<li>'+'<span class="nom">'+key+'</span>'+'<span class="nom">'
            +localStorage.getItem(key)+'</span>'+ '<input type="number" min=0>'+'<button class="eliminarGuapo" onclick="eliminarDato(this)">'
            + '</li><br><br>'+'<hr>';
        }
        
    }
    document.getElementById('productos2').innerHTML=registro;
}




//alert("Hello! I am an alert box!!"); PARA COMPRAR 