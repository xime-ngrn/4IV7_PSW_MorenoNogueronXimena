function validar(formulario){
    var inv=inversion.value;
    var mes=meses.value;

    if(inv>=0){
        if(mes>=1 && mes<=48){
            //funcion para crear la inversion
            document.getElementById("error").innerHTML=""
        }else{
            document.getElementById("error").innerHTML="La cantidad de meses no son válidos";
            meses.focus();
        }
    }else{
        document.getElementById("error").innerHTML="La inversión no es válida";
        inversion.focus();
    }
}