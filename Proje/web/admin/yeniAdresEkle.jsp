<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Adres Ekleme</title>
<%@include file="ust.jsp" %>

<%
    String musteriID;
    boolean adresEkleDurum = (request.getParameter("adresEkle") != null );
    if(adresEkleDurum) {
        musteriID = request.getParameter("musteriID");
    } else {
        response.sendRedirect("musteriler.jsp");
    }
%>

<%
    boolean adresKaydetDurum = (request.getParameter("adresKaydet") != null);
    if(adresKaydetDurum) {
        musteriID = request.getParameter("musteriID");
        String adresBaslik = request.getParameter("adresTanimi");
        String adres = request.getParameter("adres");
        String postaKodu = request.getParameter("postaKodu");
        String ilce = request.getParameter("ilce");
        String il = request.getParameter("il");
        try {
            db.st.executeUpdate("insert into adresler values(null,'" + musteriID + "' ,'" + adresBaslik + "' ,'" + adres + "' ,'" + postaKodu + "' ,'" + ilce + "' , '" + il + "' , now())");
            out.print("<script>window.location.href = 'musteriler.jsp';</script>");
        } catch (Exception ex) {
            
        }
    }
%>


<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Yeni Adres Ekle</h1>
        </div>

        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Adres Bilgileri
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">
                                <div class="form-group">
                                    <label>Adres Tanımı</label>
                                    <input name="adresTanimi" class="form-control" placeholder="Adres Tanımı">
                                </div>
                                <div class="form-group">
                                    <label>Açık Adres</label>
                                    <textarea name="adres" class="form-control" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label>Posta Kodu</label>
                                    <input name="postaKodu" class="form-control" placeholder="Posta Kodu">
                                </div>
                                <div class="form-group">
                                    <label>İlçe</label>
                                    <input name="ilce" class="form-control" placeholder="İlçe">
                                </div>

                                <div class="form-group">
                                    <label>İl</label>
                                    <input name="il" class="form-control" placeholder="İl">
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="adresKaydet" class="btn btn-success" value="Kaydet">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<%@include file="alt.jsp" %>

