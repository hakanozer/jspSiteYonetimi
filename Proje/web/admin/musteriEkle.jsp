<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Müşteriler</title>
<%@include file="ust.jsp" %>

<%
    boolean musteriKaydetDurum = (request.getParameter("mKaydet") != null);
    if(musteriKaydetDurum) {
        
        String musteriAdi = request.getParameter("adi");
        String musteriSoyadi = request.getParameter("soyadi");
        String musteriMail = request.getParameter("mail");
        String musteriSifre = db.MD5(request.getParameter("sifre"));
        String musteriTelefon = request.getParameter("telefon");
        try {
            db.st.executeUpdate("insert into musteriler values(null,'" + musteriAdi + "' ,'" + musteriSoyadi + "' ,'" + musteriMail + "' , '" + musteriSifre + "', '" + musteriTelefon + "' , 0 , now())");
            out.print("<script>window.location.href = 'musteriler.jsp';</script>");
        } catch (Exception ex) {
            
        }
    }
%>


<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Müşteri Ekleme</h1>
        </div>

        <!-- çalışma alanı !-->
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Müşteri Bilgileri
                </div>
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <div class="col-lg-6">
                            <form action="" method="post">
                                <div class="form-group">
                                    <label>Adı</label>
                                    <input name="adi" class="form-control" placeholder="Adı">
                                </div>
                                <div class="form-group">
                                    <label>Soyadı</label>
                                    <input name="soyadi" class="form-control" placeholder="Soyadı">
                                </div>
                                <div class="form-group">
                                    <label>Mail</label>
                                    <input name="mail" class="form-control" placeholder="Mail">
                                </div>
                                
                                <div class="form-group">
                                    <label>Şifre</label>
                                    <input name="sifre" class="form-control" placeholder="Şifre">
                                </div>
                                <div class="form-group">
                                    <label>Telefon</label>
                                    <input name="telefon" class="form-control" placeholder="Telefon">
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="mKaydet" class="btn btn-success" value="Kaydet">
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

