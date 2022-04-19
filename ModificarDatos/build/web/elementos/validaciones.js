function validarBoleta(formulario){
    var boleta=document.getElementById("boleta").value;
    var boletaActual=document.getElementById("boletaact1").value;
    var expReg=/^\d{1,10}$/;
    var valido=true;

    if(expReg.test(boletaActual)==true){
        if(expReg.test(boleta)==true){
            valido=true;
            document.getElementById("errorBoletas").innerHTML="";
        }else{
            document.getElementById("errorBoletas").innerHTML="La boleta no es válida";
            document.getElementById("boleta").focus();
            valido=false;
        }
    }else{
        document.getElementById("errorBoletas").innerHTML="La boleta no es válida";
        document.getElementById("boletaact1").focus();
        valido=false;
    }
    
    return valido;
}

function validarNombre(formulario){
    var nom=document.getElementById("nombre").value;
    var boletaActual=document.getElementById("boletaact2").value;
    var expRegBol=/^\d{1,10}$/;
    var expReg=/^[A-Z]\w{2,20}/;
    var expRegNN=/[^[^0-9]$/;
    var valido=true;

    if(expRegBol.test(boletaActual)==true){
        if(expReg.test(nom)&&expRegNN.test(nom)){
            document.getElementById("errorNombre").innerHTML=" ";
            valido=true;
        }else{
            document.getElementById("errorNombre").innerHTML="El nombre no es válido. Debe iniciar con mayúscula y no puede tener números.";
            document.getElementById("nombre").focus();
            valido=false;
        }
    }else{
        document.getElementById("errorNombre").innerHTML="La boleta no es válida";
        document.getElementById("boletaact2").focus();
        valido=false;
    }
    
    return valido;
}

function validarApellidos(formulario){
    var paterno=document.getElementById("appat").value;
    var materno=document.getElementById("apmat").value;
    var boletaActual=document.getElementById("boletaact3").value;
    var expRegBol=/^\d{1,10}$/;
    var expReg=/^[A-Z]\w{2,20}/;
    var expRegNN=/[^[^0-9]$/;
    var valido=true;

    if(expRegBol.test(boletaActual)==true){
        if(expReg.test(paterno)&&expRegNN.test(paterno)){
            if(expReg.test(materno)&&expRegNN.test(materno)){
                document.getElementById("errorApellidos").innerHTML="";
                valido=true;
            }else{
                document.getElementById("errorApellidos").innerHTML="El apellido materno no es válido. Debe iniciar con mayúscula y no puede tener números.";
                document.getElementById("apmat").focus();
                valido=false;
            }
        }else{
            document.getElementById("errorApellidos").innerHTML="El apellido paterno no es válido. Debe iniciar con mayúscula y no puede tener números.";
            document.getElementById("appat").focus();
            valido=false;
        }
    }else{
        document.getElementById("errorApellidos").innerHTML="La boleta no es válida";
        document.getElementById("boletaact3").focus();
        valido=false;
    }
    return valido;
}

function validarTelefono(formulario){
    var tel=document.getElementById("telefono").value;
    var boletaActual=document.getElementById("boletaact4").value;
    var expReg=/^\d{1,10}$/;
    var valido=true;

    if(expReg.test(boletaActual)==true){
        if(expReg.test(tel)==true){
            document.getElementById("errorTelefono").innerHTML="";
            valido=true;
        }else{
            document.getElementById("errorTelefono").innerHTML="El número de teléfono no es válido";
            document.getElementById("telefono").focus();
            valido=false;
        }
    }else{
        document.getElementById("errorTelefono").innerHTML="La boleta no es válida";
        document.getElementById("boletaact4").focus();
        valido=false;
    }

    return valido;
}

function validarTodo(formulario){
    var boletaActual=document.getElementById("boletaact5").value;
    var boleta=document.getElementById("boletaT").value;
    var nom=document.getElementById("nombreT").value;
    var paterno=document.getElementById("appatT").value;
    var materno=document.getElementById("apmatT").value;
    var tel=document.getElementById("telefonoT").value;
    var expRegBT=/^\d{1,10}$/;
    var expRegNA=/^[A-Z]\w{2,20}/;
    var expRegNN=/[^[^0-9]$/;
    var valido=true;

    if(expRegBT.test(boletaActual)==true){
        if(expRegBT.test(boleta)){
            if(expRegNA.test(nom)&&expRegNN.test(nom)){
                if(expRegNA.test(paterno)&&expRegNN.test(paterno)){
                    if(expRegNA.test(materno)&&expRegNN.test(materno)){
                        if(expRegBT.test(tel)){
                            valido=true;
                            document.getElementById("errorTodos").innerHTML="";
                        }else{
                            document.getElementById("errorTodos").innerHTML="El número de teléfono no es válido.";
                            document.getElementById("telefonoT").focus();
                            valido=false;
                        }
                    }else{
                        document.getElementById("errorTodos").innerHTML="El apellido materno no es válido. Debe iniciar con mayúscula y no puede tener números.";
                        document.getElementById("apmatT").focus();
                        valido=false;
                    }
                }else{
                    document.getElementById("errorTodos").innerHTML="El apellido paterno no es válido. Debe iniciar con mayúscula y no puede tener números.";
                    document.getElementById("appatT").focus();
                    valido=false;
                }
            }else{
                document.getElementById("errorTodos").innerHTML="El nombre no es válido. Debe iniciar con mayúscula y no puede tener números.";
                document.getElementById("nombreT").focus();
                valido=false;
            }
        }else{
            document.getElementById("errorTodos").innerHTML="La boleta no es válida";
            document.getElementById("boletaT").focus();
            valido=false;
        }
    }else{
        document.getElementById("errorTodos").innerHTML="La boleta no es válida";
        document.getElementById("boletaact5").focus();
        valido=false;
    }

    return valido;
}
function nuevoAlumno(formulario){
    var boleta=document.getElementById("boletaN").value;
    var nom=document.getElementById("nombreN").value;
    var paterno=document.getElementById("appatN").value;
    var materno=document.getElementById("apmatN").value;
    var tel=document.getElementById("telefonoN").value;
    var expRegBT=/^\d{1,10}$/;
    var expRegNA=/^[A-Z]\w{2,20}/;
    var expRegNN=/[^[^0-9]$/;
    var valido=true;

    if (expRegBT.test(boleta)) {
        if (expRegNA.test(nom) && expRegNN.test(nom)) {
            if (expRegNA.test(paterno) && expRegNN.test(paterno)) {
                if (expRegNA.test(materno) && expRegNN.test(materno)) {
                    if (expRegBT.test(tel)) {
                        valido = true;
                        document.getElementById("errorN").innerHTML = "";
                    } else {
                        document.getElementById("errorN").innerHTML = "El número de teléfono no es válido.";
                        document.getElementById("telefonoN").focus();
                        valido = false;
                    }
                } else {
                    document.getElementById("errorN").innerHTML = "El apellido materno no es válido. Debe iniciar con mayúscula y no puede tener números.";
                    document.getElementById("apmatN").focus();
                    valido = false;
                }
            } else {
                document.getElementById("errorN").innerHTML = "El apellido paterno no es válido. Debe iniciar con mayúscula y no puede tener números.";
                document.getElementById("appatN").focus();
                valido = false;
            }
        } else {
            document.getElementById("errorN").innerHTML = "El nombre no es válido. Debe iniciar con mayúscula y no puede tener números.";
            document.getElementById("nombreN").focus();
            valido = false;
        }
    } else {
        document.getElementById("errorN").innerHTML = "La boleta no es válida";
        document.getElementById("boletaN").focus();
        valido = false;
    }

    return valido;
}