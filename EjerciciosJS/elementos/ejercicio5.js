function validar(formulario){
    var hom=parseInt(hombres.value);
    var muj=parseInt(mujeres.value);
    
    if(hom>=0){
        if(muj>=0){
            porcentaje();
            document.getElementById("error").innerHTML="";
        }else{
            document.getElementById("error").innerHTML="La cantidad de mujeres no es válida";
            mujeres.focus();
            document.getElementById("total").innerHTML="";
            document.getElementById("phombres").innerHTML="";
            document.getElementById("pmujeres").innerHTML="";
        }
    }else{
        document.getElementById("error").innerHTML="La cantidad de hombres no es válida";
        hombres.focus();
        document.getElementById("total").innerHTML="";
        document.getElementById("phombres").innerHTML="";
        document.getElementById("pmujeres").innerHTML="";
    }
}

function porcentaje(){
    var hom=parseInt(hombres.value);
    var muj=parseInt(mujeres.value);
    var total=hom+muj;
    document.getElementById("total").innerHTML="Total de alumnos: "+total;

    //porcentajes
    var porcentajeH=hom*100/total;
    var porcentajeHDecimal=porcentajeH.toFixed(3);
    document.getElementById("phombres").innerHTML="Porcentaje de Hombres: "+porcentajeHDecimal+"%";
    var porcentajeM=muj*100/total;
    var porcentajeMDecimal=porcentajeM.toFixed(3);
    document.getElementById("pmujeres").innerHTML="Porcentaje de Mujeres: "+porcentajeMDecimal+"%";
}