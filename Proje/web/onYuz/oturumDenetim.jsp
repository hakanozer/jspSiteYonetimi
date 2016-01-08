<%@page import="java.nio.charset.StandardCharsets"%>
<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    // beni hatırla işaretlenmiş ise
  
     String adi="";
     String soyadi="";
    
     Cookie[] cookies = request.getCookies();
        boolean Cerez = false;
        for(int i = 0; i < cookies.length; i++) { 
            Cookie c = cookies[i];
            if (c.getName().equals("musteriID")) {
                Cerez = true;
                session.setAttribute("ID", c.getValue());
                break;
            }
            if(c.getName().equals("Adi")){
                String encoded = Base64.encodeBase64String(c.getValue().getBytes());
                adi = new String(Base64.decodeBase64(c.getValue()));
    
            }
           if(c.getName().equals("Soyadi")){
                String encoded = Base64.encodeBase64String(c.getValue().getBytes());
                soyadi = new String(Base64.decodeBase64(c.getValue()));
    
            }
        }
     session.setAttribute("musterininAdi", adi +" "+soyadi);
     
   
%>
<%@page import="sinif.DB" %>

