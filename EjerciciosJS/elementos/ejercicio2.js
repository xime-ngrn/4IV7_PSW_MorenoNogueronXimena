function validar(formulario){
    var salarioForm=formulario.salario.value;
    var numeros="0987654321";
    var todoValido=true;

    for(var i=0; i<salarioForm.length;i++){
        var comprobar=salarioForm.charAt(i);
        for(var j=0; j<numeros.length;j++){
            if(comprobar==numeros.charAt(j)){
                break;
            }
        }
        if(j==numeros.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("EL salario no es válido");
        formulario.salario.focus();
        return false;
    }

    //Validar las 3 ventas
    var venta=document.formulario.venta1.value;
    var numeros="0987654321";
    var todoValido=true;

    for(var i=0; i<venta.length;i++){
        var comprobar=venta.charAt(i);
        for(var j=0; j<numeros.length;j++){
            if(comprobar==numeros.charAt(j)){
                break;
            }
        }
        if(j==numeros.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("El valor de la venta no es válido");
        formulario.venta1.focus();
        return false;
    }

    var venta=document.formulario.venta2.value;
    var numeros="0987654321";
    var todoValido=true;

    for(var i=0; i<venta.length;i++){
        var comprobar=venta.charAt(i);
        for(var j=0; j<numeros.length;j++){
            if(comprobar==numeros.charAt(j)){
                break;
            }
        }
        if(j==numeros.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("El valor de la venta no es válido");
        formulario.venta2.focus();
        return false;
    }
    
    var venta=document.formulario.venta3.value;
    var numeros="0987654321";
    var todoValido=true;

    for(var i=0; i<venta.length;i++){
        var comprobar=venta.charAt(i);
        for(var j=0; j<numeros.length;j++){
            if(comprobar==numeros.charAt(j)){
                break;
            }
        }
        if(j==numeros.length){
            todoValido=false;
            break;
        }
    }
    if(!todoValido){
        alert("El valor de la venta no es válido");
        formulario.venta3.focus();
        return false;
    }

}