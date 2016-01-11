<%@page import="java.rmi.server.UID"%>
<%@page import="sinif.DB"%>
<%
     DB db = new DB();
         UID cruUID = new UID();
         String id = "";
         String adet = "";

         boolean sepeteEkle = (request.getParameter("ID") != null);
         if (sepeteEkle) {
             id = request.getParameter("ID");
             adet = request.getParameter("adet");

             try {

                 int sonuc = db.st.executeUpdate("insert into sepet values(null,'" + cruUID.toString() + "','" + id + "','" + adet + "',now()) ");

                 if (sonuc > 0) {
                     response.sendRedirect("urunDetayi.jsp?&basarili=1&id=" + id);
                 } else {
                     response.sendRedirect("index.jsp");
                 }
             } catch (Exception e) {
                 response.sendRedirect("urunDetayi.jsp?&hata=1");
             }
         }
%>