function problema1(){
    var p1_input=document.querySelector('#p1-input').value;
    console.log("La cadena es"+p1_input);
    var palabras=p1_input.split(/\s/);
    console.log("El array de las palabras es: "+palabras);
    
    var palabrasInvertidas=palabras.reverse();
    console.log("El array de las palabras invertidas es: "+palabrasInvertidas);
    var stringInvertido=palabrasInvertidas.join(" ");
    document.querySelector('#p1-output').textContent=stringInvertido;
}

function invertir(){
    //si tambien se deben invertir las letras de cada palabra
    var p1_input=document.querySelector('#p1-input').value;
    console.log("La cadena es '"+p1_input+"'");
    var palabras=p1_input.split("");
    console.log("El array de las palabras es: "+palabras);
    var arrayInvertido=palabras.reverse();
    var stringInvertido=arrayInvertido.join("");
    document.querySelector('#p1-output').textContent=stringInvertido;
}

function problema2(){
    var negativos=/^-/;
    //obtener los datos
    var x1=document.getElementById("p2-x1").value;
    var x2=document.getElementById("p2-x2").value;
    var x3=document.getElementById("p2-x3").value;
    var x4=document.getElementById("p2-x4").value;
    var x5=document.getElementById("p2-x5").value;
    var y1=document.getElementById("p2-y1").value;
    var y2=document.getElementById("p2-y2").value;
    var y3=document.getElementById("p2-y3").value;
    var y4=document.getElementById("p2-y4").value;
    var y5=document.getElementById("p2-y5").value;
    var todoPositivo=true;

    if(negativos.test(x1)){
        //quitando el negativo
        x1=x1.substring(1,x1.length);
    }if(negativos.test(x2)){
        x2=x2.substring(1,x2.length);
    }if(negativos.test(x3)){
        x3=x3.substring(1,x3.length);
    }if(negativos.test(x4)){
        x4=x4.substring(1,x4.length);
    }if(negativos.test(x5)){
        x5=x5.substring(1,x5.length);
    }
    //quitando negativos en y
    if(negativos.test(y1)){
        //quitando el negativo
        y1=y1.substring(1,y1.length);
    }if(negativos.test(y2)){
        y2=y2.substring(1,y2.length);
    }if(negativos.test(y3)){
        y3=y3.substring(1,y3.length);
    }if(negativos.test(y4)){
        y4=y4.substring(1,y4.length);
    }if(negativos.test(y5)){
        y5=y5.substring(1,y5.length);
    }
    console.log("Positivos: "+x1+","+x2+","+x3+","+x4+","+x5);
    console.log("Positivos: "+y1+","+y2+","+y3+","+y4+","+y5);
    var producto1=x1*y1;
    var producto2=x2*y2;
    var producto3=x3*y3;
    var producto4=x4*y4;
    var producto5=x5*y5;
    var productoFinal=producto1+producto2+producto3+producto4+producto5;
    var productoF=productoFinal.toFixed(4);
    document.querySelector('#p2-output').textContent="El producto escalar es de: "+productoF;
}

function problema3(){
    //definir un alfabeto
    var alfabeto=['A','B','C','D','E','F',
    'G','H','I','J','K','L','M','N','Ñ','O',
    'P','Q','R','S','T','U','V','W','X',
    'Y','Z'];

    //obtener la cadena del input y separar por comas
    var p3_input=document.querySelector('#p3-input').value;
    var p3_palabras=p3_input.split(',');

    //eliminar espacio después de una coma
    p3_palabras=p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    }); 
    //map obtiene el 1er elemento y sus valores
    //se ocupa la expresión regular para detectar el espacio

    //calcular caracteres únicos de cada palabra
    var p3_res='';
    //iterar en cada palabra
    p3_palabras.forEach(function (palabra,i){
        //separar las palabras del array para leer cada letra
        var letras_unicas=[];
        var palabra_array=palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra está dentro del alfabeto
                if(letra_palabra==letra){
                    //si la letra no la hemos contado, se agrega a un array
                    //para contar las letras únicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res+='Palabra: '+palabra+' = '+letras_unicas+' longitud: '+letras_unicas.length+'\n';
    });
    document.querySelector('#p3-output').textContent=p3_res;
}