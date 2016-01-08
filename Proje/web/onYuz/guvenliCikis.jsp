<%
    
    session.invalidate();
    
    Cookie cerez = new Cookie("musteriID","");
    cerez.setMaxAge(0);
    response.addCookie(cerez);
    
    Cookie cerezSoyadi = new Cookie("Soyadi","");
    cerezSoyadi.setMaxAge(0);
    response.addCookie(cerezSoyadi);
    
    Cookie cerezAdi = new Cookie("Adi","");
    cerezAdi.setMaxAge(0);
    response.addCookie(cerezAdi);
    
    Cookie cerezMail = new Cookie("Mail","");
    cerezMail.setMaxAge(0);
    response.addCookie(cerezMail);
    
    response.sendRedirect("index.jsp");

%>