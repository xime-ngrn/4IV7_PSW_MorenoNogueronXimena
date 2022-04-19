<%-- 
    Document   : ingresarDatos
    Created on : 15/04/2022, 09:04:34 PM
    Author     : ximena
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Ingresar Datos</title>
        <link rel="stylesheet" href="elementos/style.css">
    <script src="elementos/validacion.js"></script>
    </head>
    <body>
        <div name="encabezado" id="encabezado">
            <div id="bienvenida"><i>
                    <h1>Bienvenido</h1>
                </i></div>
            <div id="paginas">
                <h5>Registrar Alumno</h5>
            </div>
        </div>
        <nav>
            <div id="ipn">
                <img src="elementos/logoIPN.png" width="240" height="320">
            </div>
            <div id="form">
                <% 
                    int semestreN; 
                    String grupoFinal, horario, turn, semestre, grupo;
                    horario=request.getParameter("horario"); 
                    System.out.println("*** Nueva Peticion ***");
                    System.out.println("------------------"); 
                    System.out.println("El turno es: "+horario);
                    System.out.println(" ------------------"); 
                    semestre=request.getParameter("semestre");
                    System.out.println("El semestre es: "+semestre);
                    grupo=request.getParameter("grupo"); 
                    System.out.println("El grupo es: "+grupo);
    
                    grupoFinal=semestre+horario+grupo;
                    System.out.println(grupoFinal);
                    %>
                    <br>
                    <br>
                    <div id="formularioItems">
                        <div id="formularioP">
                            <%  
                                String dir;
                                semestreN=Integer.parseInt(request.getParameter("semestre")); 
                                if(semestreN==4){
                                    dir="4toMaquinasProgramacion.jsp"; 
                                    System.out.println(" Redirección a 4toMaquinas"); 
                                }else{
                                    dir="6toMaquinasProgramacion.jsp" ;
                                    System.out.println(" Redirección a 6toMaquinas");
                                } 
                            %>
                                <form name="formulario" method="post" action="<% out.print(dir); %>">
                                    <input type="text" name="grupoIngresar" id="grupoIngresar" hidden value="<% out.print(grupoFinal); %>">
                                    <br>
                                    <label>Introduce tu boleta: </label>
                                    <input type="number" min="0" name="boletaIngresar" id="boletaIngresar">
                                    <br>
                                    <label>Nombre: </label>
                                    <input type="text" name="nomIngresar" id="nomIngresar">
                                    <br>
                                    <label>Apellido Paterno: </label>
                                    <input type="text" name="appatIngresar" id="appatIngresar">
                                    <br>
                                    <label>Apellido Materno: </label>
                                    <input type="text" name="apmatIngresar" id="apmatIngresar">
                                    <br>
                                    <label>Genera una Contraseña: </label>
                                    <input type="password" name="contraseñaIngresar" id="contraseñaIngresar">
                                    <br>
                                    <br>
                                    <button type="submit" class="subirDatos" id="subirDatos"
                                        onclick="return validarDatos(this)">Terminar Registro</button>
                                </form>
                        </div>
                        <div id="divError">
                            <p id="error"></p>
                        </div>
                    </div>
            </div>
        </nav>
    </body>
</html>
