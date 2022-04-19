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
            URL="jdbc:mysql://localhots/alumnos";
            username="ximena";
            password="Xime09865321";
            driver="com.mysql.jdbc.Driver";

            try{
                Class.forName(driver);
                con=DriverManager.getConnection(URL, username, password);
                
                try{
                    String nombre, appat, apmat, telefono;
                    int bol;
                    
                    nombre=request.getParameter("nombre2");
                    appat=request.getParameter("appat2");
                    apmat=request.getParameter("apmat2");
                    telefono=request.getParameter("tel2");
                    bol=Integer.parseInt(request.getParameter("boleta2"));
                    
                    set=con.createStatement();
                    
                    String q="update alumnobatiz set nombre='"+nombre+"',appat='"+appat+"',appat='"+appat+"',telefono='"+telefono+"' where boleta="+bol;
                    
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

