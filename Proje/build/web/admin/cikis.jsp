<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% 
    // çıkış yap
    // sessionları sil
    session.invalidate();
    
    Cookie adi = new Cookie("adminAdi", "");
    adi.setMaxAge(0);
    response.addCookie(adi);
    
    Cookie soyadi = new Cookie("adminSoyadi", "");
    soyadi.setMaxAge(0);
    response.addCookie(soyadi);
    
    Cookie mail = new Cookie("adminMail", "");
    mail.setMaxAge(0);
    response.addCookie(mail);
    
    Cookie id = new Cookie("adminData", "");
    id.setMaxAge(0);
    response.addCookie(id);
    
    response.sendRedirect("giris.jsp");
    return;

%>