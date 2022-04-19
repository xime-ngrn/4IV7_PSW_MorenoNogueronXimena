<%-- 
    Document   : registroalumno
    Created on : 4/04/2022, 03:25:06 PM
    Author     : Alumno
--%>

<%@page contentType="text/html" language="java" import="java.sql.*, java.util.*, java.text.*"
        pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <table border="2">
            <thead>
                <tr><th>Boleta</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Teléfono</th>
            </thead>
            <tbody>

<% 
            Connection con=null;
            Statement set=null;
            ResultSet rs=null;
            
            String username, URL, password, driver;
            URL="jdbc:mysql://localhots/alumnos";
            username="ximena";
            password="Xime09865321";
            driver="com.mysql.jdbc.Driver";

            try{
                Class.forName(driver);
                con=DriverManager.getConnection(URL, username, password);
                
                try{
                    String q="select * from alumnobatiz order by boleta asc";
                    set=con.createStatement();
                    rs=set.executeQuery(q);
                    while(rs.next()){
                        %>
                        
                        <tr><td> <%=rs.getInt("boleta")%> </td>
                            <td> <%=rs.getString("nombre")%> </td>
                            <td> <%=rs.getString("appat")%> </td>
                            <td> <%=rs.getString("apmat")%> </td>
                            <td> <%=rs.getString("telefono")%> </td>
                            <td><a href="editaralumno.jsp?id=<%=rs.getInt("boleta")%>">Editar</a></td>
                            <td><a href="borraralumno.jsp?id=<%=rs.getInt("boleta")%>">Borrar</a></td>
                        </tr>
                        <%
                    }
                }catch(SQLException es){
                    System.out.println("Error al registrar en la tabla");
                    System.out.println(es.getMessage());
%>
                    <h1>Error al acceder a la tabla</h1>
<%
                }
            }catch(Exception e){
                System.out.println("Error al conectar con la base de datos");
                System.out.println(e.getMessage());
%>
            <h1>Not conected :(</h1>       
<%
    }

%>
                
        </tbody>
        </table>
    <br>
    <br>
    <a href="index.html">Regresar a Principal</a>
    <br>
    <a href="registroalumno.jsp">Registrar Nuevo Alumno</a>
    </body>
</html>