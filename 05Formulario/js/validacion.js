/*
javascrip es un lenguaje que posee un paradigma orientado a objetos y 
a funciones. Por tal motivo, presenta una particularidad, la cual es:

NO tipado 

no existen enteros, ni flotantes, ni cadena,
por lo que todo es char.

De acuerdo al estandar ES6 se manejan 3 tipos de variables:
-VAR (variable)
-LET (variable "protegida" o "protected")
-CONST (variable constante, nunca cambia su valor)

Diferencia entre metodo y funcion, las funciones retornan valores
*/

function validar(formulario){
    //obtener los datos sin aceptar a quienes tienen 3 letras
    if(formulario.nombre.value.length < 3){
        alert("Escriba al menos 5 caracteres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";
    var checkStr = formulario.nombre.value;
    /*transformar las 2 variables a caracteres
    si son correspondientes, que continue, si no, que mande error*/
    var todoValido = true;
    for(var i=0; i<checkString.length; i++){
        var ch = checkStr.charAt(i);
        for(var j=0; j<checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        //si j llega al final del abecedario y no hay coincidencia
        if(j==checkOK.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    //validar la edad
    var checkOK = "0123456789";
    var checkStr = formulario.edad.value;
    /*transformar las 2 variables a 
    si son correspondientes, que continue, si no, que mande error*/
    var todoValido = true;
    for(var i=0; i<checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j=0; j<checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        //si j llega al final de los numeros y no hay coincidencia
        if(j==checkOK.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    var txt=formulario.email.value;
    //crear la expresion regular (\s indica string)
    var b =/^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    alert("Email" + (b.test(txt)?" ":" no ")+" valido");
    return b.test;
}