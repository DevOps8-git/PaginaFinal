function Imagen(seleccion){
    document.getElementById('btn-ventana').checked = true;
    document.getElementById("foto").src = document.getElementById(seleccion).src;
    document.getElementById("foto").style.width="65%"
    
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function habilitar(){
    window.onscroll = null;
}

function cerrar(){
    document.getElementById("btn-ventana").checked = false;
    habilitar();
}

function bajo(seleccion){
    document.getElementById('btn-ventana').checked = true;
    document.getElementById("foto").src = document.getElementById(seleccion).src;
    document.getElementById("foto").style.width="35%"
    
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}