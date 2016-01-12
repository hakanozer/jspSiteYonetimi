<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="sinif.DB" %>
<%
    boolean yonlendirme = (request.getParameter("odemeKayit") != null);
    
    boolean gonderDurum = (request.getParameter("giris") != null);
    if (gonderDurum) {
        DB db = new DB();
        // datalar geldiyse yapılacak işlemler
        String mail = request.getParameter("email");
        String sifre = db.MD5(request.getParameter("sifre").trim());
        ResultSet rs = db.data("musteriler where mail = '" + mail + "' and sifre = '" + sifre + "'");

        if (rs.next()) {

            if (rs.getInt("ban") == 0) {

                session.setAttribute("musteriAdi", Base64.encodeBase64String(rs.getString("musteriAdi").getBytes()));
                session.setAttribute("musteriSoyadi", Base64.encodeBase64String(rs.getString("musteriSoyadi").getBytes()));
                session.setAttribute("musteriMail", rs.getString("mail"));
                session.setAttribute("musteriID", rs.getString("musteriID"));
                // çerez bilgileri tutuluyor
                boolean hatirlaDurum = (request.getParameter("hatirla") != null);
                if (hatirlaDurum) {
                    Cookie ID = new Cookie("musteriID", Base64.encodeBase64String(rs.getString("musteriID").getBytes()));
                    ID.setMaxAge(60 * 60 * 24 * 30);
                    response.addCookie(ID);
                    
                    Cookie cerezAdi = new Cookie("Adi", Base64.encodeBase64String(rs.getString("musteriAdi").getBytes()));
                    cerezAdi.setMaxAge(60 * 60 * 24 * 30);
                    response.addCookie(cerezAdi);
                    Cookie cerezSoyadi = new Cookie("Soyadi", Base64.encodeBase64String(rs.getString("musteriSoyadi").getBytes()));
                    cerezSoyadi.setMaxAge(60 * 60 * 24 * 30);
                    response.addCookie(cerezSoyadi);
                    Cookie cerezMail = new Cookie("Mail", Base64.encodeBase64String(rs.getString("mail").getBytes()));
                    cerezMail.setMaxAge(60 * 60 * 24 * 30);
                    response.addCookie(cerezMail);
                }
                db.kapat();
                // admin sayfasına yönlen
                if(yonlendirme){
                    response.sendRedirect("odemeSayfasi.jsp");
                }else{
                response.sendRedirect("index.jsp");
                }
            } else {

                response.sendRedirect("giris.jsp?ban&ban=1");
            }
        } else {
            response.sendRedirect("giris.jsp?hata&hata=1");
        }
    }
   
%>