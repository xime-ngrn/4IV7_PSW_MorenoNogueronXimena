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
        
<% 
            Connection con=null;
            Statement set=null;
            ResultSet rs=null;
            
            String username, URL, password, driver;
            URL="jdbc:mysql://localhost/alumnos";
            username="ximena";
            password="Xime09865321";
            driver="com.mysql.jdbc.Driver";

            try{
                Class.forName(driver);
                con=DriverManager.getConnection(URL, username, password);
                
                try{
                    String nombre, appat, apmat, telefono;
                    int bol;
                    
                    nombre=request.getParameter("nombre");
                    appat=request.getParameter("appat");
                    apmat=request.getParameter("apmat");
                    telefono=request.getParameter("tel");
                    bol=Integer.parseInt(request.getParameter("boleta"));
                    
                    set=con.createStatement();
                    
                    String q="insert into alumnobatiz values("+bol+",'"+nombre+"','"
                            +appat+"','"+apmat+"','"+telefono+"')";
                    
                    int registro=set.executeUpdate(q);
%>
                    <h1>Registro del Alumno Exitoso</h1>
<%
                }catch(SQLException es){
                    System.out.println("Error al registrar en la tabla");
                    System.out.println(es.getMessage());
%>
                    <h1>Error en el registro de la tabla</h1>
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
    <br>
    <a href="index.html">Regresar a Principal</a>
    </body>
</html>
