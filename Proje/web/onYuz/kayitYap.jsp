
<%@page import="sinif.DB"%>
<%

    DB db = new DB();

    String adi = "";
    String soyadi = "";
    String email = "";
    String telefon = "";

    String sifre = "";
    String sifreTekrar = "";
    String ms5Sifre = "";

    boolean kaydet = (request.getParameter("kaydol") != null);
    if (kaydet) {

        adi = request.getParameter("adi");
        soyadi = request.getParameter("soyadi");
        email = request.getParameter("email");
        telefon = request.getParameter("telefon");

        sifre = request.getParameter("sifre");
        sifreTekrar = request.getParameter("sifreTekrar");

    }
    if (sifre.length() > 4 && sifre.length() < 16) {
        if (sifre.equals(sifreTekrar)) {
            ms5Sifre = db.MD5(sifre);
            int sonuc = db.st.executeUpdate("insert into musteriler values(null,'" + adi + "','" + soyadi + "','" + email + "','" + ms5Sifre + "','" + telefon + "','0',now())");
            if (sonuc > 0) {
                response.sendRedirect("kayit.jsp?basariliKayit&basarili=1");
            } else {
                response.sendRedirect("kayit.jsp?basarisizKayit&insert=1");
            }
        } else {
            response.sendRedirect("kayit.jsp?&hata=1&adi=" + adi + "&soyadi=" + soyadi + "&mail=" + email + "&telefon=" + telefon + " ");
        }

    } else {
        response.sendRedirect("kayit.jsp?&sifreKisa=1&adi=" + adi + "&soyadi=" + soyadi + "&mail=" + email + "&telefon=" + telefon + " ");
    }

%>
