<%-- 
    Document   : 6toSemestre
    Created on : 14/04/2022, 12:22:57 PM
    Author     : ximena
--%>

<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Sexto Semestre</title>
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
                    String maquinamap,maquinalptiv,maquinass,maquinaisb;
                    int lmap,llptiv,lss,lisb;
                    maquinamap=request.getParameter("maquinamap");
                    lmap=Integer.parseInt(request.getParameter("map"));
                    maquinalptiv=request.getParameter("maquinalptiv");
                    llptiv=Integer.parseInt(request.getParameter("lptiv"));
                    maquinass=request.getParameter("maquinass");
                    lss=Integer.parseInt(request.getParameter("ss"));
                    maquinaisb=request.getParameter("maquinaisb");
                    lisb=Integer.parseInt(request.getParameter("isb"));
                    
                    //agregar primero el registro a la tabla maquina (maq_nserie,lab_id)
                    String qmpsw="insert into maquina values('"+maquinamap+"',"+lmap+")";
                    int registropsw=set.executeUpdate(qmpsw);
                    String qml="insert into maquina values('"+maquinalptiv+"',"+llptiv+")";
                    int registrolpti=set.executeUpdate(qml);
                    String qmbd="insert into maquina values('"+maquinass+"',"+lss+")";
                    int registrobd=set.executeUpdate(qmbd);
                    String qmtppc="insert into maquina values('"+maquinaisb+"',"+lisb+")";
                    int registrotppc=set.executeUpdate(qmtppc);
                    System.out.println("Se realizó el registro de todas las maquinas");
                    
                    //realizar el registro en maquinauso de cada maquina por alumno (alu_boleta,maq_serie,mat_id)
                    String mapsw="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinamap+"',"+lmap+")";
                    int ralumnopsw=set.executeUpdate(mapsw);
                    String malpti="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinalptiv+"',"+llptiv+")";
                    int ralumnolpti=set.executeUpdate(malpti);
                    String mabd="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinass+"',"+lss+")";
                    int ralumnobd=set.executeUpdate(mabd);
                    String matppc="insert into maquinauso (alu_boleta,maq_serie,mat_id) values ("+
                                    bol+",'"+maquinaisb+"',"+lisb+")";
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
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabmap;
                            String nlmap="select lab_nombre from laboratorio where lab_id="+lmap;
                            rs=set.executeQuery(nlmap);
                            while(rs.next()){
                                nomlabmap=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabmap); %></td>
                        <% } %>
                        <td><% out.print(maquinamap); %></td>
                    </tr>
                    <tr>
                        <td>LPTI IV</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlablptiv;
                            String nllptiv="select lab_nombre from laboratorio where lab_id="+llptiv;
                            rs=set.executeQuery(nllptiv);
                            while(rs.next()){
                                nomlablptiv=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlablptiv); %></td>
                        <% } %>
                        <td><% out.print(maquinalptiv); %></td>
                    </tr>
                    <tr>
                        <td>Soporte de Software</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabss;
                            String nlss="select lab_nombre from laboratorio where lab_id="+lss;
                            rs=set.executeQuery(nlss);
                            while(rs.next()){
                                nomlabss=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabss); %></td>
                        <% } %>
                        <td><% out.print(maquinass); %></td>
                    </tr>
                    <tr>
                        <td>Ingeniería de Software Básica</td>
                        <%
                            //obtener el nombre del laboratorio
                            String nomlabisb;
                            String nlisb="select lab_nombre from laboratorio where lab_id="+lisb;
                            rs=set.executeQuery(nlisb);
                            while(rs.next()){
                                nomlabisb=rs.getString("lab_nombre");
                        %>
                        <td><% out.print(nomlabisb); %></td>
                        <% } %>
                        <td><% out.print(maquinaisb); %></td>
                    </tr>
                </table>
                <br><br><br><br>
                <a href="index.html">Regresar al inicio</a>
            </div>
        </nav>
        <%
            }catch(Exception es){
                System.out.println("Error al registrar/modificar la tabla de 6toSemestre");
                System.out.println(es.getMessage());
        %>
        <h2>No se ha podido realizar la solicitud</h2>
        <br><br>
        <a href="index.html">Regresar al inicio</a>
        <%
                }
            }catch(Exception e){
                System.out.println("Erro al conectar a la BD");
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
