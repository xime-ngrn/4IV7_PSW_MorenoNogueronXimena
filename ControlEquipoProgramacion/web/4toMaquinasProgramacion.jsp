<%-- 
    Document   : MaquinasProgramacion
    Created on : 14/04/2022, 07:41:57 PM
    Author     : ximena
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Máquinas Programación</title>
        <link rel="stylesheet" href="elementos/style.css">
        <script src="elementos/validacion.js"></script>
    </head>
    <% 
        Connection con=null;
        Statement set=null;
        ResultSet rs=null;
        
        String username, URL, password, driver;
        URL="jdbc:mysql://localhost/maquinaslaboratorio";
        username="root";
        password="n0m3l0";
        driver="com.mysql.jdbc.Driver";
        
        try{
            Class.forName(driver);
            con=DriverManager.getConnection(URL, username, password);
            set=con.createStatement();
            System.out.println("Se conecto a la BD");
            try{
                int boleta;
                String nombre, appat, apmat, grupo, contraseña;
                
                boleta=Integer.parseInt(request.getParameter("boletaIngresar"));
                nombre=request.getParameter("nomIngresar");
                appat=request.getParameter("appatIngresar");
                apmat=request.getParameter("apmatIngresar");
                contraseña=request.getParameter("contraseñaIngresar");
                grupo=request.getParameter("grupoIngresar");
                
                //values(boleta,nombre,appat,apmat,contraseña,semestre,grupo)
                String q="insert into alumno values("+boleta+",'"+nombre+"','"+appat+"','"+
                apmat+"','"+contraseña+"',2,'"+grupo+"')";
                int registro=set.executeUpdate(q);
                System.out.println("Se realizó el registro del alumno");
    %>
    <body>
        <div name="encabezado" id="encabezado">
            <div id="bienvenida">
                <i>
                    <h2>Máquinas del Alumno</h2>
                </i>
            </div>
            <div id="paginas">
                <h5>Cuarto Semestre</h5>
            </div>
        </div>
        <nav>
            
            <form method="post" name="formulario4to" action="4toSemestre.jsp">
                <label>Boleta: </label>
                <input type="text" name="boletamp" id="boletamp" readonly value="<% out.print(boleta); %>">
                <br>
                <table border="1px" bordercolor="cadetblue">
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Aula 4.0</th>
                            <th>Lab. Bases de Datos</th>
                            <th>Lab. Nuevas Tecnologías</th>
                            <th>Lab. de Desarrollo de Software</th>
                            <th>N° de Serie de la Máquina</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Programación y Servicios Web</td>
                        <td align="center"><input type="radio" name="psw" value="1"></td>
                        <td align="center"><input type="radio" name="psw" value="2"></td>
                        <td align="center"><input type="radio" name="psw" value="3"></td>
                        <td align="center"><input type="radio" name="psw" value="4"></td>
                        <td align="center"><input type="text" name="maquinapsw" id="maquinapsw"></td>
                    </tr>
                    <tr>
                        <td>LPTI II</td>
                        <td align="center"><input type="radio" name="lpti" value="1"></td>
                        <td align="center"><input type="radio" name="lpti" value="2"></td>
                        <td align="center"><input type="radio" name="lpti" value="3"></td>
                        <td align="center"><input type="radio" name="lpti" value="4"></td>
                        <td align="center"><input type="text" name="maquinalpti" id="maquinalpti"></td>
                    </tr>
                    <tr>
                        <td>Bases de Datos</td>
                        <td align="center"><input type="radio" name="bd" value="1"></td>
                        <td align="center"><input type="radio" name="bd" value="2"></td>
                        <td align="center"><input type="radio" name="bd" value="3"></td>
                        <td align="center"><input type="radio" name="bd" value="4"></td>
                        <td align="center"><input type="text" name="maquinabd" id="maquinabd"></td>
                    </tr>
                    <tr>
                        <td>Técnicas de Programación Personal con Calidad</td>
                        <td align="center"><input type="radio" name="tppc" value="1"></td>
                        <td align="center"><input type="radio" name="tppc" value="2"></td>
                        <td align="center"><input type="radio" name="tppc" value="3"></td>
                        <td align="center"><input type="radio" name="tppc" value="4"></td>
                        <td align="center"><input type="text" name="maquinatppc" id="maquinatppc"></td>
                    </tr>
                </table>
                <br>
                <p id="error"></p>
                <br>
                <button type="submit" class="subirDatos" id="subirDatos" 
                    onclick="return validarRadio4(this)">Subir Datos</button>
            </form>
        </nav>
        <%
            }catch(Exception es){
            System.out.println("Error al registrar/modificar la tabla de 4toMaquinasProgramacion");
            System.out.println(es.getMessage());
        %>
        <h2>No se ha podido ejecutar la solicitud</h2>
        <br><br>
        <a href="index.html">Regresar al inicio</a>
        <%
            }
            }catch(Exception e){
            System.out.println("Error al establecer la conexion con la BD");
            System.out.println(e.getStackTrace());
            
        %>
        <h2>No se ha podido conectar a la base de datos</h2>
        <br><br>
        <a href="index.html">Regresar al inicio</a>
        <%
        }
        %>
    </body>
</html>