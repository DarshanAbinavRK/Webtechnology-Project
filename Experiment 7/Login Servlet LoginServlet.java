import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if(username.equals("admin") && password.equals("1234")) {

            HttpSession session = request.getSession();
            session.setAttribute("username", username);
            session.setMaxInactiveInterval(300);

            response.sendRedirect("welcome");
        }
        else {
            out.println("<h3>Invalid Username or Password</h3>");
        }
    }
}