/*function obtenerDatos(){
    var automovil=document.getElementsById("valor").value;
    var cuotaI=document.getElementsById("cuota-inicial").value;
    var periodo=document.getElementsById("periodo ").value;
}*/

let valor_auto;
let cuotaInicial;
let validarCuota;
let periodo;


function validar(formulario){
    //validar valor del automovil
    if(formulario.valorAuto.value>=100000 && formulario.valorAuto.value<=1000000){
        valor_auto=parseInt(formulario.valorAuto.value);
    }
    else{
        alert("El valor del auto no es válido :(");
    }

    //validar la cuota incial
    cuotaInicial=formulario.cuota.value;
    validarCuota=valor_auto*0.10;

    if(cuotaInicial>validarCuota){
        cuotaInicial=parseInt(formulario.cuota.value);
    }
    else{
        alert("La cuota no cumple con el valor mínimo")
    }

    //validar periodo
    if(formulario.periodo.value==3 || formulario.periodo.value==6 || formulario.periodo.value==9 || formulario.periodo.value==12 || formulario.periodo.value==18){
        periodo=formulario.periodo.value;
    }
    else{
        alert("El periodo no es válido")
    }

    return valor_auto;
}

//NO FUNCIONA :)
function escribir(tabla){
    alert(valor_auto);
    tabla.getElementById("valorTabla").innerHTML="$"+valor_auto;
    tabla.getElementById("cuotaInicial").innerHTML="$"+cuotaInicial;
}