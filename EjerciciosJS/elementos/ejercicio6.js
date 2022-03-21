function validar(formulario){
    var año=añoNac.value;
    var comprobar=/^\d\d-\d\d-\d\d\d\d$/;

    if(comprobar.test(año)){
        document.getElementById("error").innerHTML="";
    }else{
        document.getElementById("error").innerHTML="El año no es válido";
        añoNac.focus();
    }
}