function validar(formulario){
    var salarioForm=salario.value;
    var vent1=venta1.value;
    var vent2=venta2.value;
    var vent3=venta3.value;
    var numeros=/^\d{1,6}$/;
    var todoValido=true;

    if(numeros.test(salarioForm)){
        document.getElementById("error").innerHTML="";
        if(numeros.test(vent1)){
            document.getElementById("error").innerHTML="";
            if(numeros.test(vent2)){
                document.getElementById("error").innerHTML="";
                if(numeros.test(vent3)){
                    generar();
                    document.getElementById("error").innerHTML="";
                }else{
                    document.getElementById("error").innerHTML="El valor de la venta 3 no es válido";
                    document.formulario.venta3.focus();
                    todoValido=false;
                }
            }else{
                document.getElementById("error").innerHTML="El valor de la venta 2 no es válido";
                document.formulario.venta2.focus();
                todoValido=false;
            }
        }else{
            document.getElementById("error").innerHTML="El valor de la venta 1 no es válido";
            document.formulario.venta1.focus();
            todoValido=false;
        }
    }else{
        document.getElementById("error").innerHTML="El valor del salario no es válido";
        document.formulario.salario.focus();
        todoValido=false;
    }

    if(!todoValido){
        document.getElementById("salarioEscribir").textContent="";
        document.getElementById("valorVenta1").textContent="";
        document.getElementById("valorVenta2").textContent="";
        document.getElementById("valorVenta3").textContent="";
        document.getElementById("sale1").textContent="";
        document.getElementById("sale2").textContent="";
        document.getElementById("sale3").textContent="";
        document.getElementById("salarioFinal").textContent="";
    }
}

function generar(){
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
    var comision1Decimal=comision1.toFixed(3);
    document.getElementById("sale1").textContent="$"+comision1Decimal;
    var comision2=venta2*0.10;
    var comision2Decimal=comision2.toFixed(3);
    document.getElementById("sale2").textContent="$"+comision2Decimal;
    var comision3=venta3*0.10;
    var comision3Decimal=comision3.toFixed(3);
    document.getElementById("sale3").textContent="$"+comision3Decimal;

    //calcular total
    var total=salario+comision1+comision2+comision3;
    var totalDecimal=total.toFixed(4);
    document.getElementById("salarioFinal").textContent="$"+totalDecimal;
}