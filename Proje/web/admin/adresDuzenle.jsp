<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Adres Ekleme</title>
<%@include file="ust.jsp" %>
<%
// düzenle - data
    boolean dDuzenle = (request.getParameter("adresDuzenle") != null);
    String adresID = "";
    String musteriID = "";
    String adresBaslik = "";
    String adres = "";
    String postaKodu = "";
    String ilce = "";
    String il = "";
    if (dDuzenle) {
        adresID = request.getParameter("adresID");

        ResultSet rss = db.data("adresler where adresID = '" + adresID + "' ");
        rss.next();
        musteriID = rss.getString("musteriID");
        adresBaslik = rss.getString("adresBaslik");
        adres = rss.getString("adres");
        postaKodu = rss.getString("postaKodu");
        ilce = rss.getString("ilce");
        il = rss.getString("il");

    }
    
    // duzenle kaydet
    boolean aDuzenleDurum = (request.getParameter("aDuzenle") != null);
    if (aDuzenleDurum) {
        adresID = request.getParameter("adresID");
        musteriID = request.getParameter("musteriID");
        
        String adresTanimi = request.getParameter("duzenleAdresTanimi");
        String dAdres = request.getParameter("duzenleAdres");
        String dPostaKodu = request.getParameter("duzenlePostaKodu");
        String dIlce = request.getParameter("duzenleIlce");
        String dIl = request.getParameter("duzenleIl");

        int sonuc = db.st.executeUpdate("update adresler set musteriID = '" + musteriID + "', adresBaslik = '" + adresTanimi + "', adres = '" + dAdres + "', postaKodu = '" + dPostaKodu + "', ilce = '" + dIlce + "', il ='"+dIl+"' where adresID = '" + adresID + "' ");
        if (sonuc > 0) {
        }
        // başarılı
        out.print("<script>window.location.href = 'musteriler.jsp';</script>");

    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Adres Düzenleme</h1>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Adres Bilgileri
                    </div>
                    <div class="panel-body">
                        <div class="dataTable_wrapper">
                            <div class="col-lg-6">
                                <form action="" method="post">
                                    <div class="form-group">
                                        <label>Adres Tanımı</label>
                                        <input name="duzenleAdresTanimi" class="form-control" placeholder="Adres Tanımı" value="<%=adresBaslik%>">
                                    </div>
                                    <div class="form-group">
                                        <label>Açık Adres</label>
                                        <textarea name="duzenleAdres" class="form-control" rows="3"><%=adres%></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Posta Kodu</label>
                                        <input name="duzenlePostaKodu" class="form-control" placeholder="Posta Kodu" value="<%=postaKodu%>">
                                    </div>
                                    <div class="form-group">
                                        <label>İlçe</label>
                                        <input name="duzenleIlce" class="form-control" placeholder="İlçe" value="<%=ilce%>">
                                    </div>
                                    <div class="form-group">
                                        <label>İl</label>
                                        <input name="duzenleIl" class="form-control" placeholder="İl" value="<%=il%>">
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="aDuzenle" class="btn btn-success" value="Düzenle">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- /.panel -->
    </div>
        <!-- /.col-lg-12 -->
</div>





<%@include file="alt.jsp" %>