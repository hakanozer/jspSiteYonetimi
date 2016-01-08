
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Giriş</title>
<%@include file="ust.jsp" %>

<div class="container" style="
    padding-top: 50px;
    padding-bottom: 21px;
">
  
    <div class="row">
        <div id="content" class="col-sm-12">
            <div class="page-login">
                <div class="account-border">
                    <div class="row">
                        <div class="col-sm-6 new-customer">
                            <div class="well">
                                <h2>Yeni Kayıt</h2>
                                <p style="display:none;"><strong>Hesap Oluştur</strong></p>
                                <p>Bir hesap oluşturarak daha hızlı bir alışveriş yapabilir , sipariş durumu hakkında bilgi edinebilir veya daha önce yaptığınız siparişlerin takibini sağlayabilirsiniz.</p>
                            </div>
                            <div class="bottom-form"><a href="kayit.jsp" class="btn btn-primary creat-acc">Devam</a></div>
                        </div>
                        <form action="girisKontrol.jsp" method="get" >
                            <div class="col-sm-6 customer-login">
                                <div class="well">
                                    <h2>Kayıtlı Kullanıcı</h2>
                                    <p><strong>Daha önce kaydoldum.</strong></p>
                                    <div class="form-group">
                                        <label class="control-label col-lg-12 col-md-12 col-xs-12 col-sm-12" for="input-email">E-Mail</label>
                                        <input type="email" name="email" value="" id="input-email" class="col-lg-6 col-md-6 col-xs-11 col-sm-11 form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label col-lg-12 col-md-12 col-xs-12 col-sm-12" for="input-password">Şifre</label>
                                        <input type="password" name="sifre" value="" id="input-password" class="col-lg-6 col-md-6 col-xs-11 col-sm-11 form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="hatirla"> Beni Hatırla
                                    </div>
                                    <%
                                    boolean banKontrol = (request.getParameter("ban") != null);
                                    if(banKontrol){
                                    %>
                                    <div class="form-group" style="text-align: center;">
                                        <label style="color: red; font-size: 15px; padding: 5px;" >Girişiniz Engellenmiştir !</label>
                                        
                                    </div>
                                    <%}%>
                                    
                                    <%
                                    boolean hataKontrol = (request.getParameter("hata") != null);
                                    if(hataKontrol){
                                    %>
                                    <div class="form-group" style="text-align: center;">
                                        <label style="color: red; font-size: 15px; padding: 5px;" >Kullanıcı Adı veya Şifreniz Yanlış !</label>
                                    </div>
                                    <%}%>
                                    
                                </div>
                                <div class="bottom-form"><a href="sifreUnuttum.jsp" class="forgot">Şifremi Unuttum</a>
                                    <input type="submit" name="giris" value="Giriş" class="btn btn-primary">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<%@include file="alt.jsp" %>