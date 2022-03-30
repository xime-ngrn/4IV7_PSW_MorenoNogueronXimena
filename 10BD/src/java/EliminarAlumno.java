
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
public class EliminarAlumno extends HttpServlet {

    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    public void init(ServletConfig cfg) throws ServletException{
        //aqui se define cómo se conecta a la BD
        
        //tipo de conector jdbc(tipo de conector, este es lenguaje Java):manejador de BD:Puerto//IP/nombre BD
        String URL="jdbc:mysql:3306//localhost/alumnos";
        //Puede generarse un error si "no es soportable", el error puede ser por la url, 
        //por lo que se le puede quitar el puerto, porque el manejador trae por defecto el puerto
       
        String userName="root";
        String password="n0m3l0";
        
        try{
            //excepción para cuando se intenta concectar a la BD
            
            //Se especifica el driver "puerto.manejadorBD.tipoControlador.Driver"
            Class.forName("com.mysql.jdbc.Driver");
            //se establece la conexión
            con=DriverManager.getConnection(URL,userName,password);
            //se crea la sentencia
            set=con.createStatement();
            System.out.println("Se conectó a la BD");
            
        }catch(Exception e){
            //cuando no se conecta a la BD
            System.out.println("No se conectó con la BD :(");
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
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Eliminar un Alumno</title>");            
            out.println("</head>");
            out.println("<body>");
            
            try{
                //eliminar un alumno por su n° de boleta
                int bol=Integer.parseInt(request.getParameter("eliminarBoleta"));
                String q="delete from alumnobatiz where boleta="+bol;
                
                set.executeUpdate(q);
                out.println("<h1>Alumno eliminado</h1>");
            }catch(Exception e){
                System.out.println("No se pudo eliminar el registro");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                
                out.println("<h1>No se pudo eliminar el Alumno</h1>");
            }

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
        processRequest(request, response);
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

    
    //destructor
    public void destroy(){
        try{
            //destruir la conexión con la BD
            con.close();
        }catch(Exception e){
            //si no deja destruir la conexión, para obligarlo
            super.destroy();
        }
    }
}
