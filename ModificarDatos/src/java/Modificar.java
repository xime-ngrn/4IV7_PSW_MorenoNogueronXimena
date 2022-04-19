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
public class Modificar extends HttpServlet {

    private Connection con;
    private Statement set;
    private ResultSet rs;
    
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
        processRequest(request, response);
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Modificar</title>");
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
                int bol, nbol;
                String nom, appat, apmat, tel;
                
                bol=Integer.parseInt(request.getParameter("boletaact5"));
                nbol=Integer.parseInt(request.getParameter("boletaT"));
                nom=request.getParameter("nombreT");
                appat=request.getParameter("appatT");
                apmat=request.getParameter("apmatT");
                tel=request.getParameter("telefonoT");
                String q="update alumnobatiz set boleta='"+nbol+"',nombre='"+nom+"',"
                        + "appat='"+appat+"',apmat='"+apmat+"',telefono='"+tel+"' where boleta="+bol;
                
                set.executeUpdate(q);
                out.println("<div id='servlet'><h1>Se han modificado todos los datos del alumno</h1>"
                    + "<img src='elemenServlet/gatoFeliz.gif'><br><br>"
                    + "<p>¡Recuerda! Si la boleta ingresada no está registrada, tus datos no serán modificados.</p>"
                    +"<a href='ConsultarAlumnos'>Consultar</a><br>"
                    + "<a href=index.html>Regresar a Modificar Datos</a><br><br></div>");
            }catch(Exception e){
                out.println("<div id='servletErr'><h1>No se han podido modificar los datos del alumno</h1>"
                    + "<img src='elemenServlet/gatoTiste.gif'><br><br>" 
                    +"<a href='ConsultarAlumnos'>Consultar</a><br>"
                    + "<a href=index.html>Regresar a Modificar Datos</a><br><br></div>");
                System.out.println("No se pudo modificar el registro");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }

}
