
function obtenerRegistro(){
    var turno, semes,grupo, grupoF;
    var listaHorario=document.getElementById("horario");
    var horarioSelec=listaHorario.selectedIndex;
    var listaSemestre=document.getElementById("semestre");
    var semestreSelect=listaSemestre.selectedIndex;
    var listaGrupo=document.getElementById("grupo");
    var grupoSelect=listaGrupo.selectedIndex;

    if(horarioSelec==0){
        turno="IM";
    }else{
        turno="IV"
    }
    switch(semestreSelect){
        case 0:
            semes=3;
            break;
        case 1:
            semes=4;
            break;
        case 2:
            semes=5;
            break;
        case 3:
            semes=6;
            break;
    }
    switch(grupoSelect){
        case 0:
            grupo=7;
            break;
        case 1:
            grupo=8;
            break;
        case 2:
            grupo=9;
            break;
        case 3:
            grupo=10;
            break;
    }

    grupoF=semes+turno+grupo;
    alert("Tu grupo es: "+grupoF);
    return grupoF;
}

function validarDatos(formulario){
    var flag=true;
    var boleta=document.getElementById("boletaIngresar").value;
    var nombre=document.getElementById("nomIngresar").value;
    var appat=document.getElementById("appatIngresar").value;
    var apmat=document.getElementById("apmatIngresar").value;
    var contraseña=document.getElementById("contraseñaIngresar").value;

    var expBol=/^[0-9]{1,10}$/;
    var expPmay=/[A-Z]{1,}/;
    var expPmin=/[a-z]{1,}/;
    var expPnum=/[0-9]{1,}/;
    var expNom=/^[A-Z][a-z]{2,50}./;

    if(expBol.test(boleta)==true){
        if(expNom.test(nombre)==true){
            if(expNom.test(appat)==true){
                if(expNom.test(apmat)==true){
                    if(contraseña.length>=8 && contraseña.length<=20){
                        if(expPmay.test(contraseña)==true && expPmin.test(contraseña)){
                            if(expPnum.test(contraseña)==true){
                                document.getElementById("error").innerHTML="";
                                flag=true;
                            }else{
                                document.getElementById("error").innerHTML="La contraseña no es válida. Debe contener 1 número";
                                document.getElementById("contraseña").focus();
                                flag=false;
                            }
                        }else{
                            document.getElementById("error").innerHTML="La contraseña no es válida. Debe contener 1 mayúscula y 1 minúscula";
                            document.getElementById("contraseñaIngresar").focus();
                            flag=false;
                        }
                    }else{
                        document.getElementById("error").innerHTML="La contraseña no es válida. Debe ser mayor a 8 dígitos y menor a 20";
                        document.getElementById("contraseñaIngresar").focus();
                        flag=false;
                    }
                }else{
                    flag=false;
                    document.getElementById("apmatIngresar").focus();
                    document.getElementById("error").innerHTML="El apellido materno no es válido. Debe iniciar en mayúscula.";
                }
            }else{
                flag=false;
                document.getElementById("appatIngresar").focus();
                document.getElementById("error").innerHTML="El apellido paterno no es válido. Debe iniciar en mayúscula.";
            }
        }else{
            flag=false;
            document.getElementById("nomIngresar").focus();
            document.getElementById("error").innerHTML="El nombre no es válido. Debe iniciar en mayúscula.";
        }
    }else{
        flag=false;
        document.getElementById("boletaIngresar").focus();
        document.getElementById("error").innerHTML="La boleta no es válida";
    }

    return flag;
}

function validarInicio(formulario){
    var flag=true;
    var boleta=document.getElementById("boletaInicio").value;
    var contraseña=document.getElementById("contraseñaInicio").value;
    
    var expBol=/^[0-9]{1,10}$/;
    var expPmay=/[A-Z]{1,}/;
    var expPmin=/[a-z]{1,}/;
    var expPnum=/[0-9]{1,}/;

    if(expBol.test(boleta)==true){
        if(contraseña.length>=8 && contraseña.length<=20){
            if(expPmay.test(contraseña)==true && expPmin.test(contraseña)){
                if(expPnum.test(contraseña)==true){
                    document.getElementById("error").innerHTML="";
                    flag=true;
                }else{
                    document.getElementById("error").innerHTML="La contraseña no es válida. Debe contener 1 número";
                    document.getElementById("contraseñaInicio").focus();
                    flag=false;
                }
            }else{
                document.getElementById("error").innerHTML="La contraseña no es válida. Debe contener 1 mayúscula y 1 minúscula";
                document.getElementById("contraseñaInicio").focus();
                flag=false;
            }
        }else{
            document.getElementById("error").innerHTML="La contraseña no es válida. Debe ser mayor a 8 dígitos y menor a 20";
            document.getElementById("contraseñaInicio").focus();
            flag=false;
        }
    }else{
        document.getElementById("error").innerHTML="La boleta no es válida";
        document.getElementById("boletaInicio").focus();
        flag=false;
    }
    return flag;
}

function validarRadio4(formulario4to){
    var valido=true;
    var psw=document.getElementById("maquinapsw").value;
    var lpti=document.getElementById("maquinalpti").value;
    var bd=document.getElementById("maquinabd").value;
    var tppc=document.getElementById("maquinatppc").value;
    var expReg=/[A-Za-z0-9]{5,12}$/;

    if(document.querySelector('input[name="psw"]:checked')){
        if(document.querySelector('input[name="lpti"]:checked')){
            if(document.querySelector('input[name="bd"]:checked')){
                if(document.querySelector('input[name="tppc"]:checked')){
                    if(expReg.test(psw) && psw.length<13){
                        if(expReg.test(lpti) && lpti.length<13){
                            if(expReg.test(bd) && bd.length<13){
                                if(expReg.test(tppc) && tppc.length<13){
                                    document.getElementById("error").innerHTML="";
                                    valido=true;
                                }else{
                                    document.getElementById("maquinatppc").focus();
                                    document.getElementById("error").innerHTML="El n° de máquina no es válido";
                                    valido=false;
                                }
                            }else{
                                document.getElementById("maquinabd").focus();
                                document.getElementById("error").innerHTML="El n° de máquina no es válido";
                                valido=false;
                            }
                        }else{
                            document.getElementById("maquinalpti").focus();
                            document.getElementById("error").innerHTML="El n° de máquina no es válido";
                            valido=false;
                        }
                    }else{
                        document.getElementById("maquinapsw").focus();
                        document.getElementById("error").innerHTML="El n° de máquina no es válido";
                        valido=false;
                    }
                }else{
                    document.getElementById("error").innerHTML="No has elegido una opción en Técnicas de Programación Personal con Calidad";
                    valido=false;
                }
            }else{
                document.getElementById("error").innerHTML="No has elegido una opción en Bases de Datos";
                valido=false;
            }
        }else{
            document.getElementById("error").innerHTML="No has elegido una opción en LPTI II";
            valido=false;
        }
    }else{
        document.getElementById("error").innerHTML="No has elegido una opción en Programación y Servicios Web";
        valido=false;
    }
    
    return valido;
}

function validarRadio6(formulario6to){
    var valido=true;
    var map=document.getElementById("maquinamap").value;
    var lptiv=document.getElementById("maquinalptiv").value;
    var ss=document.getElementById("maquinass").value;
    var isb=document.getElementById("maquinaisb").value;
    var expReg=/[A-Za-z0-9]{5,12}$/;

    if(document.querySelector('input[name="map"]:checked')){
        if(document.querySelector('input[name="lptiv"]:checked')){
            if(document.querySelector('input[name="ss"]:checked')){
                if(document.querySelector('input[name="isb"]:checked')){
                    if(expReg.test(map) && map.length<13){
                        if(expReg.test(lptiv) && lptiv.length<13){
                            if(expReg.test(ss) && ss.length<13){
                                if(expReg.test(isb) && isb.length<13){
                                    document.getElementById("error6").innerHTML="";
                                    valido=true;
                                }else{
                                    document.getElementById("error6").innerHTML="El n° de máquina no es válido";
                                    document.getElementById("maquinaisb").focus();
                                    valido=false;
                                }
                            }else{
                                document.getElementById("error6").innerHTML="El n° de máquina no es válido";
                                document.getElementById("maquinass").focus();
                                valido=false;
                            }
                        }else{
                            document.getElementById("error6").innerHTML="El n° de máquina no es válido";
                            document.getElementById("maquinalptiv").focus();
                            valido=false;
                        }
                    }else{
                        document.getElementById("error6").innerHTML="El n° de máquina no es válido";
                        document.getElementById("maquinamap").focus();
                        valido=false;
                    }
                }else{
                    document.getElementById("error6").innerHTML="No has elegido una opción en Ingeniería de Software Básica";
                    valido=false;
                }
            }else{
                document.getElementById("error6").innerHTML="No has elegido una opción en Soporte de Software";
                valido=false;
            }
        }else{
            document.getElementById("error6").innerHTML="No has elegido una opción en LPTI IV";
            valido=false;
        }
    }else{
        document.getElementById("error6").innerHTML="No has elegido una opción en Métodos Ágiles de Programación";
        valido=false;
    }

    return valido;
}