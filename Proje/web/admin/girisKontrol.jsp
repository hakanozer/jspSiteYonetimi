<%@page import="java.util.Base64"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="sinif.DB" %>
<%
    
    boolean gonderDurum = (request.getParameter("gonder") != null);
    if(gonderDurum){
        DB db = new DB();
        // datalar geldiyse yapılacak işlemler
        String mail = request.getParameter("email");
        String sifre = db.MD5(request.getParameter("sifre").trim());
        ResultSet rs = db.data("kullanici where mail = '"+mail+"' and sifre = '"+sifre+"'");
        
        if(rs.next()) {
            
            // kullanıcı var
            // seviye belirle
            if(rs.getString("seviye").equals("cfcd208495d565ef66e7dff9f98764da")){
               // yönlendirme - kullanıcı - 0 md5
                session.setAttribute("kullaniciID", rs.getString("id"));
                
            }
            
            if(rs.getString("seviye").equals("c4ca4238a0b923820dcc509a6f75849b")){
               // yönlendirme - admin - 1 md53
                session.setAttribute("adminID", rs.getString("id"));
                
                // çerez bilgileri tutuluyor
                Cookie cerezAdi = new Cookie("adminAdi", Base64.getEncoder().encodeToString(rs.getString("adi").getBytes()));
                cerezAdi.setMaxAge(60*60*24*30);
                response.addCookie(cerezAdi);
                Cookie cerezSoyadi = new Cookie("adminSoyadi", rs.getString("soyadi"));
                cerezSoyadi.setMaxAge(60*60*24*30);
                response.addCookie(cerezSoyadi);
                Cookie cerezMail = new Cookie("adminMail", rs.getString("mail"));
                cerezMail.setMaxAge(60*60*24*30);
                response.addCookie(cerezMail);
                
                // beni hatırla kontrolü sağlanıyor
                boolean hatirlaDurum = (request.getParameter("hatirla") != null);
                if(hatirlaDurum){
                    Cookie adminID = new Cookie("adminData", rs.getString("id"));
                    adminID.setMaxAge(60*60*24*30);
                    response.addCookie(adminID);
                }
                db.kapat();
                // admin sayfasına yönlen
                response.sendRedirect("index.jsp");
                
            }
        }else {
            // giriş hatalı
            response.sendRedirect("giris.jsp?Hata=1");
        }
        
        
    }else {
        response.sendRedirect("giris.jsp");
    }
%>