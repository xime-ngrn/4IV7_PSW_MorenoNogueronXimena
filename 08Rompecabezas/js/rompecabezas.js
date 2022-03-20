//obtener todas las piezas
var piezas=document.getElementsByClassName('movil');
//redimensionar las piezas
var tamWidth=[134,192,134,163,134,163,134,192,134];
var tamHeight=[163,134,163,134,192,134,163,134,163]
//pasarlo a las piezas
for(var i=0; i<piezas.length; i++){
    //enviar el atributo del width y heigth a cada pieza
    piezas[i].setAttribute("width",tamWidth[i]);
    piezas[i].setAttribute("height",tamHeight[i]);
    piezas[i].setAttribute("x",Math.floor(Math.random()*10)+i);
    piezas[i].setAttribute("y",Math.floor(Math.random()*400)+i);

    //enviar que se puedan mover las piezas
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementoSeleccionado=0; //pieza seleccionada
var currentX=0; //coordenadas de la pieza
var currentY=0;
var currentPosX=0; //coordenadas donde debe estar la pieza
var currentPosY=0;

function seleccionarElemento(evt){
    elementoSeleccionado=reordenar(evt);
    currentX=evt.clientX; //el cliente es el navegador
    currentY=evt.clientY;
    currentPosX=parseFloat(elementoSeleccionado.getAttribute("x"));
    currentPosY=parseFloat(elementoSeleccionado.getAttribute("y"));

    //ahora sí debe existir un movimiento
    elementoSeleccionado.getAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt){
    var dx=evt.clientX-currentPosX;
    var dy=evt.clientY-currentPosY;

    currentPosX=currentPosX+dx;
    currentPosY=currentPosY+dy;

    //enviar la posicion
    elementoSeleccionado.setAttribute("x", currentPosX);
    elementoSeleccionado.setAttribute("y", currentPosY);

    //para posicionarlo en el navegador
    currentPosX=evt.clientX;
    currentPosY=evt.clientY;

    //cuando se deselecciona la pieza
    elementoSeleccionado.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementoSeleccionado.setAttribute("onmouseup", "deseleccionarElemento(evt)");
}

function deseleccionarElemento(evt){
    //validar que haga el match
    testing();
    if(elementoSeleccionado!=0){
        //si es diferente de 0, eliminar los atributos
    }
}