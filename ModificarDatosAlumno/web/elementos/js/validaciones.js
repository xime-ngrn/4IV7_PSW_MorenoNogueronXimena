function validarBoleta(formulario){
    var boleta=document.formulario.boleta.value;
    var expReg=/^\d{1,10}$/;
    var valido=true;

    if(expReg.test(boleta)){
        valido=true;
        document.getElementById("error").innerHTML="";
    }else{
        document.getElementById("error").innerHTML="La boleta no es válida";
        document.formulario.boleta.focus();
        valido=false;
    }
    return valido;
}

function validarNombre(formulario){
    var nom=document.formulario.nombre.value;
    var expReg=/^\w$/i;
    //Checar expresion regular
    var valido=true;

    alert(expReg.test(nom));
    if(expReg.test(nom)){
        alert("La expresión regular dice true")
        valido=true;
        document.getElementById("error").innerHTML="";
    }else{
        document.getElementById("error").innerHTML="El nombre no es válido";
        document.formulario.nombre.focus();
        valido=false;
    }
    return valido;
}