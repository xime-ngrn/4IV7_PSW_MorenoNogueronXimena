<%-- 
    Document   : 6toSemestreRegistrado
    Created on : 18/04/2022, 11:41:22 AM
    Author     : ximena
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>6to Semestre</title>
        <link rel="stylesheet" href="elementos/style.css">
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
                    int bol=Integer.parseInt(request.getParameter("boletac"));
                    System.out.println(bol);
                    //obtener los datos del alumno
                    String nombre,appat,apmat,grupo;
                    String q="select * from alumno where alu_boleta="+bol;
                    
                    rs=set.executeQuery(q);
                    while(rs.next()){
                        nombre=rs.getString("alu_nombre");
                        appat=rs.getString("alu_appat");
                        apmat=rs.getString("alu_apmat");
                        grupo=rs.getString("alu_grupo");
                    
        %>
    <body>
        <div name="encabezado" id="encabezado">
            <div id="bienvenida">
                <i><h2>6to Semestre</h2></i>
            </div>
            <div id="paginas"></div>
        </div>
        <nav>
            <div id="datosu">
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2">Datos del Alumno</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Boleta: </td>
                        <td><% out.print(bol); %></td>
                    </tr>
                    <tr>
                        <td>Nombre(s): </td>
                        <td><% out.print(nombre); %></td>
                    </tr>
                    <tr>
                        <td>Apellido Paterno: </td>
                        <td><% out.print(appat); %></td>
                    </tr>
                    <tr>
                        <td>Apellido Materno: </td>
                        <td><% out.print(apmat); %></td>
                    </tr>
                    <tr>
                        <td>Grupo: </td>
                        <td><% out.print(grupo); %></td>
                        <% } %>
                    </tr> 
                </table>
            </div>
            <div id="form">
                <h5>Máquinas</h5>
                <table border="1" bordercolor="cadetblue">
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Aula</th>
                            <th>Número de Serie</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>Métodos Ágiles de Programación</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LPTI IV</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Soporte de Software</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ingeniería de Software Básica</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <br><br><br><br>
                <a href="index.html">Regresar al inicio</a>
            </div>
        </nav>
        <%
            }catch(Exception es){
                System.out.println("Error al registrar/modificar la tabla de 6toSemestreRegistrado");
                System.out.println(es.getMessage());
        %>
        <h2>No se ha podido realizar la solicitud</h2>
        <br><br>
        <a href="index.html">Regresar al inicio</a>
            <%
                }
            }catch(Exception e){
                System.out.println("No se pudo conectar a la BD");
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
