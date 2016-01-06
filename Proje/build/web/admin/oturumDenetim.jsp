<%@page import="java.nio.charset.StandardCharsets"%>
<%@page import="java.util.Base64"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    // beni hatırla işaretlenmiş ise
    String adminAdi = "";
     Cookie[] cookies = request.getCookies();
        boolean adminCerez = false;
        for(int i = 0; i < cookies.length; i++) { 
            Cookie c = cookies[i];
            if (c.getName().equals("adminData")) {
                adminCerez = true;
                session.setAttribute("adminID", c.getValue());
                break;
            }
            if(c.getName().equals("adminAdi")){
                String encoded = Base64.getEncoder().encodeToString(c.getValue().getBytes());
                adminAdi = new String(Base64.getDecoder().decode(c.getValue()));
    
            }
        } 
    
    
    // oturum denetimi yapılıyor
    boolean oturumDurum = (session.getAttribute("adminID") == null);
    if(oturumDurum){
        response.sendRedirect("giris.jsp");
        return;
    }
%>
<%@page import="sinif.DB" %>
<% DB db = new DB(); %>
<% String urunResimUrl = "http://localhost:8095/resim/"; %>
<% String urunResimFile = "http://localhost:8095/resim/server/php/files/"; %>
<% String sliderResimUrl = "http://localhost:8095/slideResim/"; %>
<% String sliderResimFile = "http://localhost:8095/slideResim/server/php/files/"; %>
<!--${cookie["adminData"].value}!-->