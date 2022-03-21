function validar(formulario){
    var inv=inversion.value;
    var mes=meses.value;

    if(inv>=0){
        if(mes>=1 && mes<=48){
            calcularInversion();
            document.getElementById("error").innerHTML=""
        }else{
            document.getElementById("error").innerHTML="La cantidad de meses no son válidos. \nPuedes introducir 1 o hasta 48 meses";
            meses.focus();
            document.getElementById("inversionMes").innerHTML="";
            document.getElementById("inversionTotal").innerHTML="";
        }
    }else{
        document.getElementById("error").innerHTML="La inversión no es válida";
        inversion.focus();
        document.getElementById("inversionMes").innerHTML="";
        document.getElementById("inversionTotal").innerHTML="";
    }
}

function calcularInversion(){
    var inv=parseInt(document.formulario.inversion.value);
    var meses=parseInt(document.formulario.meses.value);
    var inver=2*inv/100;
    document.getElementById("inversionMes").innerHTML="El dinero generado después de un mes es de: $"+inver;
    console.log("La inversión es de: "+inver);
    var total=inv;
    for(var i=1; i<=meses;i++){
        total+=inver;
        var totalDecimal=total.toFixed(3);
        console.log("La inversión en el mes "+i+" es de: "+totalDecimal);
    }
    document.getElementById("inversionTotal").innerHTML="La cantidad final por "+meses+" mes(es) es de: $"+totalDecimal;
}