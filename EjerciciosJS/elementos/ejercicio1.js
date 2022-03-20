function validar(formulario){
    var inv=inversion.value;

    if(inv>=0){
        //funcion para crear la inversion
        document.getElementById("error").innerHTML="La inversión es válida"
    }else{
        document.getElementById("error").innerHTML="La inversión no es válida";
        inversion.focus();
    }
}