function validar(formulario){
    var p1=parseInt(document.formulario.calificacion1.value);
    var p2=parseInt(document.formulario.calificacion2.value);
    var p3=parseInt(document.formulario.calificacion3.value);
    var examen=parseInt(document.formulario.calificacionExamen.value);
    var trabajoFinal=parseInt(document.formulario.calificacionTF.value);
    var todoValido=true;
    if(p1<=10 && p1>=0){
        if(p2<=10 && p2>=0){
            if(p3<=10 && p3>=0){
                if(examen<=10 && examen>=0){
                    if(trabajoFinal<=10 && trabajoFinal>=0){
                        evaluar();
                        document.getElementById("error").innerHTML="";
                    }else{
                        document.getElementById("error").innerHTML="La calificación 3 no es válida";
                        calificacionTF.focus();
                        todoValido=false;
                    }
                }else{
                    document.getElementById("error").innerHTML="La calificación del examen no es válida";
                    calificacionExamen.focus();
                    todoValido=false;
                }
            }else{
                document.getElementById("error").innerHTML="La calificación 3 no es válida";
                calificacion3.focus();
                todoValido=false;
            }
        }else{
            document.getElementById("error").innerHTML="La calificación 2 no es válida";
            calificacion2.focus();
            todoValido=false;
        }
    }else{
        document.getElementById("error").innerHTML="La calificación 1 no es válida";
        calificacion1.focus();
        todoValido=false;
    }
    if(!todoValido){
        document.getElementById("parciales").innerHTML="";
        document.getElementById("examen").innerHTML="";
        document.getElementById("trabajo").innerHTML="";
        document.getElementById("final").innerHTML="";
    }

}

function evaluar(){
    var p1=parseInt(document.formulario.calificacion1.value);
    var p2=parseInt(document.formulario.calificacion2.value);
    var p3=parseInt(document.formulario.calificacion3.value);
    var examen=parseInt(document.formulario.calificacionExamen.value);
    var trabajoFinal=parseInt(document.formulario.calificacionTF.value);
    console.log("P1:"+p1+", P2:"+p2+", P3:"+p3+", examen:"+examen+", tf:"+trabajoFinal);
    
    //calificacion de los parciales
    var parciales=p1+p2+p3;
    var parcialesPorcentaje=parciales*55;
    var parcialFinal=parcialesPorcentaje/30;
    var parcialFinalDecimal=parcialFinal.toFixed(3);
    document.getElementById("parciales").innerHTML="El porcentaje de los 3 parciales es de: "+parcialFinalDecimal;
    //calificacion del examen
    var examenPorcentaje=examen*30/10;
    var examenPorcentajeDecimal=examenPorcentaje.toFixed(3);
    document.getElementById("examen").innerHTML="El porcentaje del examen es de: "+examenPorcentajeDecimal;
    //calificacion trabajo
    var trabajoPorcentaje=trabajoFinal*15/10;
    var trabajoPorcentajeDecimal=trabajoPorcentaje.toFixed(3);
    document.getElementById("trabajo").innerHTML="El porcentaje del trabajo final es de: "+trabajoPorcentajeDecimal;

    //final sale NaN :(
    var calificacion=parcialFinal+examenPorcentaje+trabajoPorcentaje;
    var calificacionFinal=calificacion/10;
    var calificacionFinalDecimal=calificacionFinal.toFixed(3);
    document.getElementById("final").innerHTML="Calificación final: "+calificacionFinalDecimal;
}