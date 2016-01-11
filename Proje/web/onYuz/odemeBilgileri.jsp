<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>
<%@page import="java.sql.ResultSet" %>

<script type="text/javascript" src="js/e698801f02ebddc5550bd513d2ac2399b6228af1.js?1450361526"></script>
<script type="text/javascript" src="-js/libcode1_noajax.js"></script>
<link rel="stylesheet" href="css/13d7b55dc9a1c4b8b401518802b4e8b800564d96.css?1449216247" type="text/css" />
<link rel="stylesheet" href="css/3be7a54979243c13e24c838b23171215d73bbc1f.css?1441886309" type="text/css" />
<link rel="stylesheet" href="css/c631773c58c9c891c02e1c03f37140cbe35d1544.css?1449216247" type="text/css" />

<%
    String adr = request.getParameter("adresID");
    String totalFiyat = request.getParameter("totalFiyat");

    ResultSet rs = db.data("adresler a inner join musteriler m on a.musteriID=m.musteriID where a.adresID='" + adr + "'");
    rs.next();
    String mAdi = rs.getString("musteriAdi");
    String mSoyadi = rs.getString("musteriSoyadi");
    String mMail = rs.getString("mail");
    String mTelefon = rs.getString("telefon");
    String baslik = rs.getString("adresBaslik");
    String adres = rs.getString("adres");
    String postCode = rs.getString("postaKodu");
    String ilce = rs.getString("ilce");
    String il = rs.getString("il");

    boolean odemeDuzenle = (request.getParameter("ode") != null);

    if (odemeDuzenle) {
        try {
            int sonuc = db.st.executeUpdate("insert into satis values(null,'1','" + mAdi + "','" + mSoyadi + "','" + adres + "','" + totalFiyat + "',now())");
            if (sonuc > 0) {
                out.print("<script>window.location.href='odemeTamamlandi.jsp';</script>");
            }
        } catch (Exception e) {
            out.print("hata : " + e);
        }
    }
%>



<div class="container" style=" margin-top: 3%;">

    <div class="panel-group" id="accordion">

        <%-- KİŞİ KAYIT VE ADRES  BAŞLAMA --%>

        <div class="panel-collapse collapse in" id="collapse-payment-address" aria-expanded="true">
            <div class="panel-body">
                <div class="row">

                    <%-- PERSONAL BİLGİLERİ KISMI SİLİNEBİLİR--%>

                    <div class="col-sm-6">
                        <fieldset id="account">
                            <legend>Müşteri Bilgileri</legend>
                            <div class="form-group" style="display: none;">
                                <label class="control-label">Customer Group</label>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="customer_group_id" value="1" checked="checked"> Default</label>
                                </div>
                            </div>
                            <div class="form-group required">
                                <label class="control-label" for="input-payment-firstname">Ad</label>
                                <input type="text" name="firstname" value="<%=mAdi%>" disabled placeholder="First Name" id="input-payment-firstname" class="form-control">
                            </div>
                            <div class="form-group required">
                                <label class="control-label" for="input-payment-lastname">Soyad</label>
                                <input type="text" name="lastname" value="<%=mSoyadi%>" disabled placeholder="Last Name" id="input-payment-lastname" class="form-control">
                            </div>
                            <div class="form-group required">
                                <label class="control-label" for="input-payment-email">E-Mail</label>
                                <input type="text" name="email" value="<%=mMail%>" disabled placeholder="E-Mail" id="input-payment-email" class="form-control">
                            </div>
                            <div class="form-group required">
                                <label class="control-label" for="input-payment-telephone">Telefon</label>
                                <input type="text" name="telephone" value="<%=mTelefon%>" disabled placeholder="Telephone" id="input-payment-telephone" class="form-control">
                            </div>

                        </fieldset>




                        <!-- Reklam Kısmı Baslangıcı -->


                        <!-- Reklam Kısmı Bitişi -->


                    </div>
                    <%-- PERSONEL BİLGİLERİ BİTİŞİ SİLİNEBİLİR :D --%>

                    <div class="col-sm-6">

                        <%-- ADRES BİLGİLERİ GİRİŞİ --%>

                        <fieldset id="address" class="required">
                            <legend>Adres Bilgileri</legend>
                            <div class="form-group">
                                <label class="control-label" for="input-payment-address-2">Adres Başlığı</label>
                                <input type="text" name="baslik" value="<%=baslik%>" disabled placeholder="Başlık" id="input-payment-company" class="form-control">
                            </div>
                            <div class="form-group required">
                                <label class="control-label" for="input-payment-address-1">Adres</label>
                                <input type="text" name="adres" value="<%=adres%>" disabled placeholder="Adres" id="input-payment-address-1" class="form-control">
                            </div>

                            <div class="form-group required">
                                <label class="control-label" for="input-payment-postcode">Posta Kodu</label>
                                <input type="text" name="postcode" disabled value="<%=postCode%>" placeholder="Posta Kodu" id="input-payment-postcode" class="form-control">
                            </div>

                            <div class="form-group required">
                                <label class="control-label" for="input-payment-zone">İlçe</label>
                                <input type="text" name="ilce" value="<%=ilce%>" disabled placeholder="Bölge Giriniz" id="input-payment-zone" class="form-control" required>
                            </div>

                            <div class="form-group required">
                                <label class="control-label" for="input-payment-zone">İlçe</label>
                                <input type="text" name="il" value="<%=il%>" disabled placeholder="Bölge Giriniz" id="input-payment-zone" class="form-control" required>
                            </div>

                        </fieldset>

                        <%-- ADRES BİLGİLERİ GİRİŞİ BİTİŞ--%>

                    </div>
                </div>

                <!------------------------   --------------------------------->


                <!----------------------- ------------------------------------>
                <form action="" method="post">
                    <div class="buttons clearfix">
                        <div class="pull-right">
                            <input type='submit' name='ode' value='Öde' id="button-register" data-loading-text="Loading..." class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>


        <%-- KİŞİ KAYIT VE ADRES  BİTİŞ --%>   
    </div>
</div>

