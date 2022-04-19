import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ximem
 */
import java.sql.*;
import javax.servlet.ServletConfig;

public class ConsultarAlumnos extends HttpServlet {
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //Constructor de la clase 
    public void init(ServletConfig cfg) throws ServletException{
        String URL="jdbc:mysql://localhost/alumnos";
       
        String userName="root";
        String password="n0m3l0";
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con=DriverManager.getConnection(URL,userName,password);
            set=con.createStatement();
            System.out.println("Se conectó a la BD");
            
        }catch(Exception e){
            System.out.println("No se conectó con la BD");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
            
        }
        
    }
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Lista de Alumnos</title>");
            out.println("<style>"
                    +"body{"
                    + "background-color:#8D8DAA;\n" +
                      "text-align: center;}"
                    + "table{"
                    + "border-style: solid;\n" +
                      "border-color: white;\n" +
                      "border-radius: 5px;"
                    + "}"
                    + "</style>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla de la Lista de Alumnos</h1>"+
                    "<table border=1 align='center'>"+
                    "<tr>"+
                        "<th>Boleta</th>"
                        +"<th>Nombre del Alumno</th>"
                        +"<th>Teléfono</th>"
                    +"</tr>");
            try{
                int boleta;
                String nombre, apellidoP, apellidoM,tel;
                String q="select * from alumnobatiz";
                set=con.createStatement();
                rs=set.executeQuery(q);
                
                while(rs.next()){
                    boleta=rs.getInt("boleta");
                    nombre=rs.getString("nombre");
                    apellidoP=rs.getString("appat");
                    apellidoM=rs.getString("apmat");
                    tel=rs.getString("telefono");
                    //hacer la tabla
                    out.print("<tr>"+
                            "<td>"+boleta+"</td>"
                            +"<td>"+nombre+" "+apellidoP+" "+" "+apellidoM+"</td>"
                            +"<td>"+tel+"</td>"
                            + "</tr>");
                }
                
                rs.close();
                set.close();
            }catch(Exception e){
                System.out.println("Error al conectar a la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            out.print("</table>");
            out.print("<br><br>");
            out.print("<a href=index.html>Regresar a Modificar Datos</a><br><br>");
            out.print("<a href=ingresarAlumno.html>Regresar a Ingresar Alumno</a><br><br>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /*Returns a short description of the servlet.
     @return a String containing servlet description */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    
    //Destructor
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
    
}