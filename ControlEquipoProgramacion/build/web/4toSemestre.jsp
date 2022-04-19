<%-- 
    Document   : 4toSemestre
    Created on : 14/04/2022, 12:22:40 PM
    Author     : ximena
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Cuarto Semestre</title>
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
                    int bol=Integer.parseInt(request.getParameter("boletamp"));
                    
                    //para guardar el registro de las maquinas que se usan
                    String maquinapsw,maquinalpti,maquinabd,maquinatppc;
                    int lpsw,llpti,lbd,ltppc;
                    maquinapsw=request.getParameter("maquinapsw");
                    lpsw=Integer.parseInt(request.getParameter("psw"));
                    maquinalpti=request.getParameter("maquinalpti");
                    llpti=Integer.parseInt(request.getParameter("lpti"));
                    maquinabd=request.getParameter("maquinabd");
                    lbd=Integer.parseInt(request.getParameter("bd"));
                    maquinatppc=request.getParameter("maquinatppc");
                    ltppc=Integer.parseInt(request.getParameter("tppc"));
                    
                    //agregar primero el registro a la tabla maquina (maq_nserie,lab_id)
                    String qmpsw="insert into maquina values('"+maquinapsw+"',"+lpsw+")";
                    int registropsw=set.executeUpdate(qmpsw);
                    String qml="insert into maquina values('"+maquinalpti+"',"+llpti+")";
                    int registrolpti=set.executeUpdate(qml);
                    String qmbd="insert into maquina values('"+maquinabd+"',"+lbd+")";
                    int registrobd=set.executeUpdate(qmbd);
                    String qmtppc="insert into maquina values('"+maquinatppc+"',"+ltppc+")";
                    int registrotppc=set.executeUpdate(qmtppc);
                    System.out.println("Se realizó el registro de todas las maquinas");
                    
                    //realizar el registro en maquinauso de cada maquina por alumno (alu_boleta,maq_serie,mat_id)
                    String mapsw="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinapsw+"',"+lpsw+")";
                    int ralumnopsw=set.executeUpdate(mapsw);
                    String malpti="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinalpti+"',"+llpti+")";
                    int ralumnolpti=set.executeUpdate(malpti);
                    String mabd="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinabd+"',"+lbd+")";
                    int ralumnobd=set.executeUpdate(mabd);
                    String matppc="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinatppc+"',"+ltppc+")";
                    int ralumnotppc=set.executeUpdate(matppc);
                    System.out.println("Se realizó el registro de cada máquina por alumno");
                    
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
                <i><h2>4to Semestre</h2></i>
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
                        <td>Programación y Servicios Web</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabpsw;
                            String nlpsw="select lab_nombre from laboratorio where lab_id="+lpsw;
                            rs=set.executeQuery(nlpsw);
                            while(rs.next()){
                                nomlabpsw=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabpsw); %></td>
                        <% } %>
                        <td><% out.print(maquinapsw); %></td>
                    </tr>
                    <tr>
                        <td>LPTI II</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlablpti;
                            String nllpti="select lab_nombre from laboratorio where lab_id="+llpti;
                            rs=set.executeQuery(nllpti);
                            while(rs.next()){
                                nomlablpti=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlablpti); %></td>
                        <% } %>
                        <td><% out.print(maquinalpti); %></td>
                    </tr>
                    <tr>
                        <td>Bases de Datos</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabbd;
                            String nlbd="select lab_nombre from laboratorio where lab_id="+lbd;
                            rs=set.executeQuery(nlbd);
                            while(rs.next()){
                                nomlabbd=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabbd); %></td>
                        <% } %>
                        <td><% out.print(maquinabd); %></td>
                    </tr>
                    <tr>
                        <td>TPPC</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabtppc;
                            String nltppc="select lab_nombre from laboratorio where lab_id="+ltppc;
                            rs=set.executeQuery(nltppc);
                            while(rs.next()){
                                nomlabtppc=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabtppc); %></td>
                        <% } %>
                        <td><% out.print(maquinatppc); %></td>
                    </tr>
                    
                </table>
                <br><br><br><br>
                <a href="index.html">Regresar al inicio</a>
            </div>
        </nav>
        
        <%
            }catch(Exception es){
                System.out.println("Error al registrar/modificar la tabla de 4toSemestre");
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
