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

function generar(datosTabla){
    var salario=parseInt(document.formulario.salario.value);
    var venta1=parseInt(document.formulario.venta1.value);
    var venta2=parseInt(document.formulario.venta2.value);
    var venta3=parseInt(document.formulario.venta3.value);
    console.log("Salario: "+salario+" Venta1:"+venta1+" Venta2:"+venta2+" Venta3:"+venta3);

    //para escribir en cada <td> el valor dado por el usuario
    document.getElementById("salarioEscribir").textContent="$"+salario;
    document.getElementById("valorVenta1").textContent="$"+venta1;
    document.getElementById("valorVenta2").textContent="$"+venta2;
    document.getElementById("valorVenta3").textContent="$"+venta3;

    //calcular comisión
    var comision1=venta1*0.10;
    document.getElementById("sale1").textContent="$"+comision1;
    var comision2=venta2*0.10;
    document.getElementById("sale2").textContent="$"+comision2;
    var comision3=venta3*0.10;
    document.getElementById("sale3").textContent="$"+comision3;

    //calcular total
    var total=salario+comision1+comision2+comision3;
    document.getElementById("salarioFinal").textContent="$"+total;

}