<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Şifre Düzenle</title>
<%@include file="ust.jsp" %>

<%
//kullaniciDuzenle.jsp'den gelen verileri çekme
    boolean dzDuzenle = (request.getParameter("duzenle") != null);

    String kID = "";
    if (dzDuzenle) {
        kID = request.getParameter("id");
    }

//girilen şifreleri çekme
    boolean dKaydet = (request.getParameter("kaydet") != null);

    if (dKaydet) {
        String kulID = request.getParameter("id");
        String eskiSifre = db.MD5(request.getParameter("kEskiSifre"));
        String yeniSifre = db.MD5(request.getParameter("kYeniSifre"));
        String yeniSifreTekrar = db.MD5(request.getParameter("kYeniSifreTekrar"));

        if(!yeniSifre.equals(yeniSifreTekrar)){
            out.println("<div style='margin-left:250px' class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>Yeni şifre tekrarı ile aynı olmalıdır!</div>");
        }else{
        ResultSet rssf = db.data("kullanici where id = '" + kulID + "'");
        if (rssf.next()) {
            if (rssf.getString("sifre").equals(eskiSifre)) {

                try {
                    int sonuc = db.st.executeUpdate("UPDATE kullanici SET sifre = '" + yeniSifre + "' WHERE id = '" + kulID + "'");
                    if (sonuc > 0) {
                        //düzenleme başarılı
            out.println("<div style='margin-left:250px; margin-top:100px; text-align:center' class='alert alert-info alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>Şifre Değiştirme İşlemi Başarılı<br/> Kullanıcı Düzenleme Sayfasına Yönlendiriliyorsunuz..</div>");

                        out.print("<script>function Page() {window.location.href='kullaniciDuzenle.jsp'}; setTimeout ('Page()', 2000);</script>");

                    }
                } catch (Exception e) {
                    out.println("<div style='margin-left:250px' class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>Şifre güncellenirken bir hata oluştu!</div>");
                }
            } else {
            out.println("<div style='margin-left:250px' class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>Eski Şifre Yanlış!</div>");

            }
        }
    }
    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row" style="padding: 40px 0px">

        <div class="col-md-6 col-md-offset-3">

            <div class="panel panel-primary">

                <div class="panel-heading text-center">
                    <h3>Şifre Değiştirme</h3>
                </div>

                <div class="panel-body">

                    <form action="" method="post">
                        <input name="fId" type="hidden" value="20">

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="fSifre">Eski Şifre:</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" type="password" name="kEskiSifre" id="kEskiSifre" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="fSifre">Yeni Şifre:</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" type="password" name="kYeniSifre" id="kYeniSifre" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-3">
                                        <label for="fSifreTekrar">Yeni Şifre Tekrar:</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input class="form-control" type="password" name="kYeniSifreTekrar" id="kYeniSifreTekrar" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-9 col-md-offset-3">
                                        <input class="btn btn-default btn-sm btn-primary" type="submit" name="kaydet" value="Kaydet">
                                            <a href="kullaniciDuzenle.jsp" class="btn btn-sm btn-danger">İptal</a>
                                    </div>
                                </div>
                            </div>
                    </form>

                </div>

            </div>

        </div>

    </div>

</div>
<%@include file="alt.jsp" %>



