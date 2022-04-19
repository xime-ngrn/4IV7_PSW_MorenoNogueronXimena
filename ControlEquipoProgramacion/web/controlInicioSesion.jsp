<%-- 
    Document   : controlInicioSesion
    Created on : 18/04/2022, 02:57:05 PM
    Author     : ximena
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Inicio de Sesión</title>
        <link rel="stylesheet" href="elementos/style.css">
    </head>
    <body>
        
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
                    int boleta, boletabd, semestre;
                    boleta=Integer.parseInt(request.getParameter("boletaInicio"));
                    semestre=Integer.parseInt(request.getParameter("semestre"));
            
                    String q="select * from alumno where alu_boleta="+boleta;
                    rs=set.executeQuery(q);
                    while(rs.next()){
                        boletabd=rs.getInt("alu_boleta");
                        System.out.println(boletabd);
                        if(boletabd==boleta){
                        %>
                            <input type="text" name="boletac" id="boletac" hidden value="<% out.print(boleta); %>">
                        <%
                            if(semestre==4){
                                String dir="4toSemestreRegistrado.jsp";
                                response.sendRedirect(dir);
                            }else{
                                String direc="6toSemestreRegistrado.jsp";
                                response.sendRedirect(direc);
                            }
                        }else{
                            System.out.println("Boleta no encontrada en la BD al iniciar sesión");
                            
            %>
                <h2>El alumno no está registrado</h2>
                <br><br>
                <a href="index.html">Regresar al inicio</a>
            <%
                        }
                    }
                }catch(Exception es){
                System.out.println(es.getStackTrace());
                System.out.println("No se pudo realizar la solicitud");
        %>
        <h2>No se pudo realizar la solicitud</h2>
        <%
                }
            }catch(Exception e){
                System.out.println(e.getStackTrace());
                System.out.println("No se conecto a la BD"); 
        %>
        <h2>No se ha podido conectar a la base de datos</h2>
        <%
           }
        %>
        <h2>Ha ocurrido un error</h2>
        <br><br>
        <a href="index.html">Regresar al inicio</a>
    </body>
</html>
