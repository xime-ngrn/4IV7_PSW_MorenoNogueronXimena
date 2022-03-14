
function datos(formulario){
    //var automovil=document.getElementById(valorAuto).value;
    var automovil=document.formulario.valorAuto.value;
    var valor=parseInt(automovil);
    document.tabla.valorTabla.value="$ "+valor;

    var cuotaI=document.formulario.cuota.value;
    var cuota=parseInt(cuotaI);
    document.tabla.cuotaInicial.value="$ "+cuota;

    var lista=document.formulario.periodo.selectedIndex;
    switch(lista){
        case 0:
            document.tabla.periodoTabla.value="3 meses";
            break
        case 1:
            document.tabla.periodoTabla.value="6 meses";
            break;
        case 2:
            document.tabla.periodoTabla.value="9 meses";
            break;
        case 3:
            document.tabla.periodoTabla.value="12 meses";
            break;
        case 4:
            document.tabla.periodoTabla.value="18 meses";
            break;
    }
}

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
}

function escribir(tabla){
    valor=datos(formulario);
    document.tabla.valorTabla.value="$"+valor;
    //document.tabla.cuotaInicial.value="$"+cuota;
    //tabla.getElementById("valorTabla").innerHTML="$"+valor;
    //tabla.getElementById("cuotaInicial").innerHTML="$"+cuota;
}