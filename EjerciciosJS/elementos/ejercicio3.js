function validar(formulario){
    var compraU=compra.value;
    var valido=/^\d+$/;
    if(valido.test(compraU)){
        descuento();
        document.getElementById("error").innerHTML="";
    }else{
        document.getElementById("error").innerHTML="El valor de la compra no es válido";
        compra.focus();
        document.getElementById("final").innerHTML="";
    }
}

function descuento(){
    var compraU=parseInt(compra.value);
    var descuento=compraU*0.15;
    var total=compraU-descuento;
    var totalDecimal=total.toFixed(3);
    document.getElementById("final").innerHTML="La compra final es de $"+totalDecimal;
}