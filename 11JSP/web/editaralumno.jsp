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
        <form name="editar" action="actualizaralumno.jsp" method="post">
        
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
                    int id=Integer.parseInt(request.getParameter("id"));
                    String q="select * from alumnobatiz where boleta="+id;
                    set=con.createStatement();
                    rs=set.executeQuery(q);
                    while(rs.next()){
                        %>
                        <label>Boleta</label>
                        <br>
                        <input type="hidden" name="boleta2" value="<% rs.getInt("boleta"); %>">
                        <br>
                        <label>Nombre</label>
                        <br>
                        <input type="text" name="nombre2" value="<% rs.getString("nombre"); %>">
                        <br>
                        <label>Apellido Paterno</label>
                        <br>
                        <input type="text" name="appat2" value="<% rs.getString("appat"); %>">
                        <br>
                        <label>Apellido Materno</label>
                        <br>
                        <input type="text" name="apmat2" value="<% rs.getString("apmat"); %>">
                        <br>
                        <label>Telefono</label>
                        <br>
                        <input type="text" name="telefono2" value="<% rs.getString("telefono"); %>">
                        <br>
                        <input type="submit" value="Actualizar Datos">
                        <br>
                        <input type="reset" value="Borrar Datos">
                        
                        <%
                    }
                }catch(SQLException es){
                    System.out.println("Error al registrar en la tabla");
                    System.out.println(es.getMessage());
%>
                    <h1>Error al acceder al formulario</h1>
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
                
    </form>
    <br>
    <br>
    <a href="index.html">Regresar a Principal</a>
    <br>
    <a href="registroalumno.jsp">Registrar Nuevo Alumno</a>
    </body>
</html>