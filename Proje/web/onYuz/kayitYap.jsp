

<%

    
     String adi = "";
    String soyadi = "";
    String email = "";
    String telefon = "";
    String sirket = "";
    String adres1 ="";
    String adres2 = "";
    String ilce = "";
    String postaKodu = "";
    String sehir = "";
    String sifre = "";
    String sifreTekrar = "";
    
        boolean kaydet = (request.getParameter("kaydol") != null);
        if (kaydet) {

            adi = request.getParameter("adi");
            soyadi = request.getParameter("soyadi");
            email = request.getParameter("email");
            telefon = request.getParameter("telefon");
            sirket = request.getParameter("sirket");
            adres1 = request.getParameter("adres-1");
            adres2 = request.getParameter("adres-2");
            ilce = request.getParameter("ilce");
            postaKodu = request.getParameter("postaKodu");
            sehir = request.getParameter("sehir");
            sifre = request.getParameter("sifre");
            sifreTekrar = request.getParameter("sifreTekrar");
        }
        if (sifre.equals(sifreTekrar)) {

        } else {
            response.sendRedirect("kayit.jsp?&hata=1");
        }
    
    
    
    
    
    
    
    
    
    
    
    





%>
