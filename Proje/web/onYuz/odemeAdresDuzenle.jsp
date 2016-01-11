<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>
<%@page import="java.sql.ResultSet" %>

<script type="text/javascript" src="js/e698801f02ebddc5550bd513d2ac2399b6228af1.js?1450361526"></script>
<script type="text/javascript" src="-js/libcode1_noajax.js"></script>
<link rel="stylesheet" href="css/13d7b55dc9a1c4b8b401518802b4e8b800564d96.css?1449216247" type="text/css" />
<link rel="stylesheet" href="css/3be7a54979243c13e24c838b23171215d73bbc1f.css?1441886309" type="text/css" />
<link rel="stylesheet" href="css/c631773c58c9c891c02e1c03f37140cbe35d1544.css?1449216247" type="text/css" />

<%
    String adres_id = request.getParameter("duzenle");
    ResultSet rs = db.data("adresler where adresID='" + adres_id + "'");
    rs.next();
    String baslik = rs.getString("adresBaslik");
    String address = rs.getString("adres");
    String city = rs.getString("il");
    String postaCode = rs.getString("postaKodu");
    String ilce = rs.getString("ilce");

    boolean durumDuzenle = (request.getParameter("adresDuzenle") != null);

    if (durumDuzenle) {
        String bas = request.getParameter("bas");
        String adres = request.getParameter("adrr");
        String postaKodu = request.getParameter("postaCode");
        String bolge = request.getParameter("ilce");
        String sehir = request.getParameter("il");

        try {
            int sonuc = db.st.executeUpdate("update adresler set adresBaslik='" + bas + "',adres='" + adres + "',postaKodu='" + postaKodu + "',ilce='" + bolge + "',il='" + sehir + "' where adresID='" + adres_id + "' ");
            if (sonuc > 0) {
                out.print("<script>window.location.href='odemeSayfasi.jsp';</script>");
            }
        } catch (Exception e) {
            out.print("Hata: " + e);
        }
    }
%>

<div class="container" style=" margin-top: 3%;">

    <div class="panel-group" id="accordion">



        <div class="panel-collapse collapse in" id="collapse-payment-address" aria-expanded="true">
            <div class="panel-body">
                <form action="" method="post">
                    <div class="row">
                        <div class="col-sm-6">

                            <%-- ADRES BİLGİLERİ GİRİŞİ --%>



                            <fieldset id="address" class="required">
                                <legend>Adres Bilgileri</legend>

                                <div class="form-group required">
                                    <label class="control-label" for="input-payment-address-2">Adres Başlığı</label>
                                    <input type="text" name="bas" value="<%=baslik%>" placeholder="Başlık Giriniz" id="input-payment-address-2" class="form-control" required>
                                </div>

                                <div class="form-group required">
                                    <label class="control-label" for="input-payment-address-1">Adres</label>
                                    <input type="text" name="adrr" value="<%=address%>" placeholder="Adres Giriniz" id="input-payment-address-1" class="form-control" required>
                                </div>

                                <div class="form-group required">
                                    <label class="control-label" for="input-payment-postcode">Posta Kodu</label>
                                    <input type="text" name="postaCode" value="<%=postaCode%>" placeholder="Posta Kodu Giriniz" id="input-payment-postcode" class="form-control" required>
                                </div>
                                <div class="form-group required">
                                    <label class="control-label" for="input-payment-address-1">İlçe</label>
                                    <input type="text" name="ilce" value="<%=ilce%>" placeholder="Şehir Giriniz" id="input-payment-city" class="form-control" required>
                                </div>

                                <div class="form-group required">
                                    <label class="control-label" for="input-payment-city">Şehir</label>

                                    <select name="il" id="input-country" class="form-control">
                                        <option value="" selected="selected"> --- Lütfen Şehir Seçimi Yapınız --- </option>
                                        <option value="İstanbul">İstanbul</option>
                                        <option value="Adana">Adana</option>
                                        <option value="Adıyaman">Adıyaman</option>
                                        <option value="Afyon">Afyon</option>
                                        <option value="Ağrı">Ağrı</option>
                                        <option value="Amasya">Amasya</option>
                                        <option value="Ankara">Ankara</option>
                                        <option value="Antalya">Antalya</option>
                                        <option value="8">Artvin</option>
                                        <option value="Artvin">Aydın</option>
                                        <option value="Balıkesir">Balıkesir</option>
                                        <option value="Bilecik">Bilecik</option>
                                        <option value="Bingöl">Bingöl</option>
                                        <option value="Bitlis">Bitlis</option>
                                        <option value="Bolu">Bolu</option>
                                        <option value="Burdur">Burdur</option>
                                        <option value="Bursa">Bursa</option>
                                        <option value="Çanakkale">Çanakkale</option>
                                        <option value="Çankırı">Çankırı</option>
                                        <option value="Çorum">Çorum</option>
                                        <option value="Denizli">Denizli</option>
                                        <option value="Diyarbakır">Diyarbakır</option>
                                        <option value="Edirne">Edirne</option>
                                        <option value="Elazığ">Elazığ</option>
                                        <option value="Erzincan">Erzincan</option>
                                        <option value="Erzurum">Erzurum</option>
                                        <option value="Eskişehir">Eskişehir</option>
                                        <option value="Gaziantep">Gaziantep</option>
                                        <option value="Giresun">Giresun</option>
                                        <option value="Gümüşhane">Gümüşhane</option>
                                        <option value="Hakkari">Hakkari</option>
                                        <option value="Hatay">Hatay</option>
                                        <option value="Isparta">Isparta</option>
                                        <option value="Mersin">Mersin</option>

                                        <option value="İzmir">İzmir</option>
                                        <option value="Kars">Kars</option>
                                        <option value="Kastamonu">Kastamonu</option>
                                        <option value="Kayseri">Kayseri</option>
                                        <option value="Kırklareli">Kırklareli</option>
                                        <option value="Kırşehir">Kırşehir</option>
                                        <option value="Kocaeli">Kocaeli</option>
                                        <option value="Konya">Konya</option>
                                        <option value="Kütahya">Kütahya</option>
                                        <option value="Malatya">Malatya</option>
                                        <option value="Manisa">Manisa</option>
                                        <option value="Kahramanmaraş">Kahramanmaraş</option>
                                        <option value="Mardin">Mardin</option>
                                        <option value="Muğla">Muğla</option>
                                        <option value="Muş">Muş</option>
                                        <option value="Nevşehir">Nevşehir</option>
                                        <option value="Niğde">Niğde</option>
                                        <option value="Ordu">Ordu</option>
                                        <option value="Rize">Rize</option>
                                        <option value="Sakarya">Sakarya</option>
                                        <option value="Samsun">Samsun</option>
                                        <option value="Siirt">Siirt</option>
                                        <option value="Sinop">Sinop</option>
                                        <option value="Sivas">Sivas</option>
                                        <option value="Tekirdağ">Tekirdağ</option>
                                        <option value="Tokat">Tokat</option>
                                        <option value="Trabzon">Trabzon</option>
                                        <option value="Tunceli">Tunceli</option>
                                        <option value="Şanlıurfa">Şanlıurfa</option>
                                        <option value="Uşak">Uşak</option>
                                        <option value="Van">Van</option>
                                        <option value="Yozgat">Yozgat</option>
                                        <option value="Zonguldak">Zonguldak</option>
                                        <option value="Aksaray">Aksaray</option>
                                        <option value="Bayburt">Bayburt</option>
                                        <option value="Karaman">Karaman</option>
                                        <option value="Kırıkkale">Kırıkkale</option>
                                        <option value="Batman">Batman</option>
                                        <option value="Şırnak">Şırnak</option>
                                        <option value="Bartın">Bartın</option>
                                        <option value="Ardahan">Ardahan</option>
                                        <option value="Iğdır">Iğdır</option>
                                        <option value="Yalova">Yalova</option>
                                        <option value="Karabük">Karabük</option>
                                        <option value="Kilis">Kilis</option>
                                        <option value="Osmaniye">Osmaniye</option>
                                        <option value="Düzce">Düzce</option>
                                    </select>
                                </div>
                            </fieldset>

                            <%-- ADRES BİLGİLERİ GİRİŞİ BİTİŞ--%>

                        </div>
                    </div>
                    <div class="buttons clearfix">
                        <div class="pull-right">
                            <input type="submit" name="adresDuzenle" value="Düzenle" id="button-register" data-loading-text="Loading..." class="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    </div>
</div>
