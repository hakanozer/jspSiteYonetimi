<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="sinif.DB" %>
<%
    
    boolean gonderDurum = (request.getParameter("giris") != null);
    if(gonderDurum){
        DB db = new DB();
        // datalar geldiyse yapılacak işlemler
        String mail = request.getParameter("email");
        String sifre = db.MD5(request.getParameter("sifre").trim());
        ResultSet rs = db.data("musteriler where mail = '"+mail+"' and sifre = '"+sifre+"'");
        
        if(rs.next()) {
          
            if(rs.getInt("ban") == 0){
                
               // session.setAttribute("musteriID", rs.getString("musteriID"));
               // session.setAttribute("musteriAdi", rs.getString("musteriAdi"));
               // session.setAttribute("musteriSoyadi", rs.getString("musteriSoyadi"));
               // session.setAttribute("musteriMail", rs.getString("mail"));
                
                // çerez bilgileri tutuluyor
                Cookie cerezAdi = new Cookie("Adi", Base64.encodeBase64String(rs.getString("musteriAdi").getBytes()));
                cerezAdi.setMaxAge(60*60*24*30);
                response.addCookie(cerezAdi);
                Cookie cerezSoyadi = new Cookie("Soyadi", Base64.encodeBase64String(rs.getString("musteriSoyadi").getBytes()));
                cerezSoyadi.setMaxAge(60*60*24*30);
                response.addCookie(cerezSoyadi);
                Cookie cerezMail = new Cookie("Mail", Base64.encodeBase64String(rs.getString("mail").getBytes()));
                cerezMail.setMaxAge(60*60*24*30);
                response.addCookie(cerezMail);

                          
                            boolean hatirlaDurum = (request.getParameter("hatirla") != null);
                            if (hatirlaDurum) {
                                Cookie ID = new Cookie("musteriID", Base64.encodeBase64String(rs.getString("musteriID").getBytes()));
                                ID.setMaxAge(60 * 60 * 24 * 30);
                                response.addCookie(ID);
                            }
                            db.kapat();
                            // admin sayfasına yönlen
                            response.sendRedirect("index.jsp");

                        } else {
                           
                            response.sendRedirect("giris.jsp?ban&ban=1");
                        }
                    } else {
                         response.sendRedirect("giris.jsp?hata&hata=1");
                    }
    }
%>