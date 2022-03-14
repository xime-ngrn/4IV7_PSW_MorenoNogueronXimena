/* Vamos a realizar una función que se encargue de validar 
la entrada de números por medio de una expresión regular */

function validarn(e){
    var teclado=(document.all)? e.keyCode : e.which;
    //document.all obtiene todo lo del teclado
    //"keyCode" obtiene el codigo de la tecla que se ha presionado
    //combinacion 8 para formato de numeros
    if(teclado==8) return true;
    var patron=/[0-9\d .]/;
    var codigo=String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(){
    var valor=document.formulario.cantidad.value;
    var result=parseInt(valor);
    var interes=result*0.037;
    var total=interes+result;

    document.formulario.sueldoI.value="$"+total;
}

function borrarDatos(){
    document.formulario.cantidad.value="";
    document.formulario.sueldoI.value="";
}