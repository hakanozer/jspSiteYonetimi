<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>

<%
// kaydet işlemi
request.setCharacterEncoding("utf-8");
    boolean dkaydet = (request.getParameter("kaydet") != null);
    boolean hata = false;
    if (dkaydet) {
        String kisaAciklama = request.getParameter("kisaAciklama");
        String baslik = request.getParameter("baslik");
        String detay = request.getParameter("detay");
        String durum = request.getParameter("durum");

        try {
            db.st.executeUpdate("insert into icerik values(null, '" + durum + "' , '" + baslik + "' ,'" + kisaAciklama + "' ,'" + detay + "' , now())");
            out.print("<script>window.location.href = 'icerikYonetimi.jsp';</script>");
        } catch (Exception ex) {
            hata = true;
        }

    }
%>



<div id="page-wrapper" style="min-height: 99px;">

    <div class="text-right" style="margin-bottom: 25px">
        <a href="./" class="btn btn-primary"><i class="glyphicon glyphicon-backward"> </i> Geri Dön</a>
    </div>

   
    <section>

        <div class="panel panel-primary" style="width: 75%; margin: 0 auto; margin-bottom: 50px">

            <div class="panel-heading">
                <h4 class="panel-title text-center">İcerik Ekleme</h4>
            </div>

            <div class="panel-body">

                <p class="text-center">İçerik bilgilerinizi aşağıda girebilirsiniz.</p>
                <hr>
                <form class="form-horizontal" action="icerikEkle.jsp" method="get" style="width: 90%; margin: 0 auto;">

                    <!-- Başlık -->

                    <input class="form-control" placeholder="Başlık" name="baslik">
                    <br>

                    <!-- Kısa Açıklama -->


                    <input class="form-control" placeholder="Kısa Açıklama" name="kisaAciklama">
                    <br>



                    <!-- Detay -->
                    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                    <textarea name="detay" id="detay" class="ckeditor"></textarea>
                    <script type="text/javascript">
                        CKEDITOR.replace('detay');
                    </script>
                    <!-- Durum -->
                    <br>

                    <div class="form-group">

                        <select class="form-control" name="durum">
                            <option value="1">Aktif</option>
                            <option value="0">Pasif</option>

                        </select>
                    </div>

                    <%if (hata) {%>
                    <div class="alert alert-danger alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        Eklemede hata oldu !
                    </div>
                    <%}%>

                    <!-- Buton -->
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3"> </div>
                            <div class="col-md-9 text-right">
                                <input type="submit" name="kaydet" class="btn btn-primary">
                                
                            </div>
                        </div>
                    </div>
                </form>

            </div>

            <div class="panel-footer"></div>
        </div>

    </section>



</div>
<%@include file="alt.jsp" %>