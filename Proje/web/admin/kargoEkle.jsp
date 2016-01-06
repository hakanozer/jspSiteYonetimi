<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Kargo İşlemleri</title>
<%@include file="ust.jsp" %>


<%
    boolean kaydetDurum = (request.getParameter("kaydet") != null);

    boolean hata = false;
    boolean kontrol = false;
    boolean isimKontrol = false;
    
     ResultSet rsK = db.data("kargo");

    if (kaydetDurum) {
        String kargoAdi = request.getParameter("kargoAdi");
        String ucreti = request.getParameter("ucreti");
        try {
            while (rsK.next()) {
                if (kargoAdi.equals(rsK.getString("kargo_adi"))) {
                    isimKontrol = true;
                }
            }
            
            if (kargoAdi.equals("") || ucreti.equals("")) {
                hata = true;
            } else {
                db.st.executeUpdate("insert into kargo values(null,'" + kargoAdi + "' ,'" + ucreti + "' , now())");
                out.print("<script>window.location.href = 'kargoYonetim.jsp';</script>");
            }
        } catch (Exception ex) {

        }

    }

    boolean duzenleDurum = (request.getParameter("kargoID") != null);
    String dkargoID = "";
    String dkargoAd = "";
    String ducret = "";
    if (duzenleDurum) {
        dkargoID = request.getParameter("kargoID");
        dkargoAd = request.getParameter("kargo_AD");
        ducret = request.getParameter("ucret");
    }

    // duzenle kaydet
    boolean duzenleBtnDrm = (request.getParameter("duzenleBtn") != null);
    if (duzenleBtnDrm) {
        String kargoID = request.getParameter("dkargoID");
        String kargo_ad = request.getParameter("kargoAdi");
        String ducreti = request.getParameter("ucreti");

       

        try {

            while (rsK.next()) {
                if (kargo_ad.equals(rsK.getString("kargo_adi"))) {
                    isimKontrol = true;
                }
            }
            if (kargo_ad.equals("") || ducreti.equals("")) {
                hata = true;
            } else {
                int sonuc = db.st.executeUpdate("update kargo set kargo_adi = '" + kargo_ad + "', ucreti = '" + ducreti + "' where kargo_id = '" + kargoID + "' ");
                if (sonuc > 0) {
                    out.print("<script>window.location.href = 'kargoYonetim.jsp';</script>");
                } else {
                    kontrol = true;
                }
            }
        } catch (Exception ex) {

        }

    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Kargo İşlemleri</h1>
        </div>


    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Yeni Kargo Ekle
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">

                                    <label for="kargoAdi">Kargo Adı</label>
                                    <input name="kargoAdi" value="<%=dkargoAd%>" id="kargoAdi" class="form-control" placeholder="Kargo Adı">
                                        <label for="ucreti">Ücreti</label>
                                        <input name="ucreti" value="<%=ducret%>" id="ucreti" class="form-control" placeholder="Ücreti">
                                            <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="kaydet" value="Kaydet"/>

                                            <% if (duzenleDurum) {%>
                                            <input name="dkargoID" value="<%=dkargoID%>" style="display: none;"/>
                                            <input class="btn btn-info" style="margin-top: 5px;" type="submit" name="duzenleBtn" value="Düzenle"/>
                                            <%}%>
                                            </div>

                                            <%if (hata) {%>
                                            <div class="alert alert-danger alert-dismissable">
                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Bu Alanlar Boş Olamaz !
                                            </div>

                                            <% }%>

                                            <%if (kontrol) {%>
                                            <div class="alert alert-danger alert-dismissable">
                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Düzenleme İşlemi Başarısız !
                                            </div>

                                            <% }%>

                                            <%if (isimKontrol) {%>
                                            <div class="alert alert-danger alert-dismissable">
                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                Bu Kargo Kayıtlı Farklı Bir İsim Seçiniz !
                                            </div>

                                            <% }%>

                                            </form>
                                            </div>
                                            <!-- /.col-lg-6 (nested) -->
                                            </div>
                                            <!-- /.row (nested) -->
                                            </div>
                                            <!-- /.panel-body -->
                                            </div>
                                            <!-- /.panel -->
                                            </div>
                                            <!-- /.col-lg-12 -->
                                            </div>

                                            </div>
                                            <%@include file="alt.jsp" %>