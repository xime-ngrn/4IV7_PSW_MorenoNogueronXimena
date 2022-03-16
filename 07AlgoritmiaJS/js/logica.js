




//problema 3
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