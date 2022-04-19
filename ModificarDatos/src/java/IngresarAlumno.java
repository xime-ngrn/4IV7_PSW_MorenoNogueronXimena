import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author ximem
 */
public class IngresarAlumno extends HttpServlet {

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
        processRequest(request, response);
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
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Registro nuevo Alumno</title>");
            out.println("<style>"
                    +"body{"
                    + "background-color:#8D8DAA;\n" +
                      "text-align: center;}"
                    + "#servlet{"
                    + "border-style: solid;\n" +
                      "border-color: white;\n" +
                      "border-radius: 5px;"
                    + "}"+
                    "#servletErr{"
                    + "border-style: solid;\n" +
                      "border-color: red;\n" +
                      "border-radius: 5px;"
                    + "}"
                    + "</style>");
            out.println("</head>");
            out.println("<body>");
            
            try{
                int bol;
                String nom, appat, apmat, tel;
                
                bol=Integer.parseInt(request.getParameter("boletaN"));
                nom=request.getParameter("nombreN");
                appat=request.getParameter("appatN");
                apmat=request.getParameter("apmatN");
                tel=request.getParameter("telefonoN");
                
                String q="insert into alumnobatiz values("
                        +bol+",'"+nom+"','"+appat+"','"+apmat+"','"+tel+"');";
                
                set.executeUpdate(q);
                out.println("<div id='servlet'><h1>Se ha registrado al alumno</h1>"
                    + "<img src='elemenServlet/gatoFeliz.gif'><br><br>" 
                    +"<a href='ConsultarAlumnos'>Consultar Alumnos</a><br>"
                    + "<a href=index.html>Regresar a Modificar Datos</a><br><br></div>");
                System.out.println("Se registró un nuevo alumno");
                
            }catch(Exception e){
                out.println("<div id='servletErr'><h1>No se ha podido registrar al alumno</h1>"
                    + "<img src='elemenServlet/gatoTiste.gif'><br><br>" 
                    +"<p>Puede que el alumno ya exista, para ello la boleta debe ser diferente a las ya registradas.</p>"
                    + "<p>Por favor, verifícalo: </p>"
                    +"<a href='ConsultarAlumnos'>Consultar Alumnos</a><br>"
                    + "<a href=index.html>Regresar a Modificar Datos</a><br><br></div>");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
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
