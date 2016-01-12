<%@page import="java.nio.charset.StandardCharsets"%>
<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    // beni hatırla işaretlenmiş ise
  
     String  adi="";
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
            
        }
       boolean oturumAcik = (session.getAttribute("musteriAdi") != null);
       if(oturumAcik){
     adi = new String(Base64.decodeBase64(session.getAttribute("musteriAdi").toString()));
     soyadi = new String(Base64.decodeBase64(session.getAttribute("musteriSoyadi").toString()));
    
     session.setAttribute("musterininAdi" ,adi +" "+soyadi);
     
       }
     
   
%>
<%@page import="sinif.DB" %>

