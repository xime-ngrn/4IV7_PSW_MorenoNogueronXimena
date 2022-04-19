
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
//importar las librerias para SQL
import java.sql.*;
import javax.servlet.ServletConfig;
//me marcaba un error en init si no lo ponía :)

public class ConsultarAlumnos extends HttpServlet {

    /**
     Para poder conectar a la BD es necesario un constructor
     Se necesitan 3 tipos de objetos para poder establecer la conexión
     (deben de ser tipo private)
      ° Connection establece la conexión con el servidor de la BD
      ° Statement sirve para poder definir las sentencias de manipulación 
        y definición de datos (create, update, insert, delete)
      ° ResulSet sirve para crear querrys (peticiones)
     */
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //definir el constructor de la clase (se les llama inicializador en los servlets)
    public void init(ServletConfig cfg) throws ServletException{
        //aqui se define cómo se conecta a la BD
        
        /*La URL está compuesta por: tipo de conector 
        (jdbc es lenguaje Java):manejador de BD:Puerto//IP/nombre BD */
        String URL="jdbc:mysql://localhost/alumnos";
        /*Puede generarse un error si "no es soportable", el error puede ser 
        por la url, por lo que se le puede quitar el puerto, porque el manejador 
        trae por defecto el puerto*/
       
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
    
    
     //se toma la respuesta del servlet y se pasa al método GET (línea 93) :)
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
        //aqui se pega lo que estaba en la línea 72 (la respuesta del servidor)
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Lista de Alumnos</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla de la Lista de Alumnos</h1>"+
                    "<table border=2>"+
                    "<tr>"+
                        "<th>Boleta</th>"
                        +"<th>Nombre del Alumno</th>"
                        +"<th>Teléfono</th>"
                    +"</tr>");
            //se debe recorrer la tabla para saber el número de registros
            try{
                int boleta;
                String nombre, apellidoP, apellidoM,tel;
                //establecer la querry
                String q="select * from alumnobatiz";
                /*set establece la sentencia de conexión, la query pide los 
                valores de la tabla*/
                set=con.createStatement();
                rs=set.executeQuery(q);
                
                //se recorre la tabla, .next establece que haya algo en la consulta
                while(rs.next()){
                    //se obtienen las variables
                    //como parámetro se da el nombre de la columna de la que se quiere obtener la información
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
                
                //se deben cerrar conexiones
                rs.close();
                set.close();
            }catch(Exception e){
                System.out.println("Error al conectar a la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            out.print("</table>");
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
        //no tendrá nada programado
    }

    /*Returns a short description of the servlet.
     @return a String containing servlet description */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    
    //CREAR EL DESTRUCTOR (libera memoria y recursos)
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
