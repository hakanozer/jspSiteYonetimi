

<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>

<script type="text/javascript" src="js/e698801f02ebddc5550bd513d2ac2399b6228af1.js?1450361526"></script>
<script type="text/javascript" src="-js/libcode1_noajax.js"></script>
<link rel="stylesheet" href="css/13d7b55dc9a1c4b8b401518802b4e8b800564d96.css?1449216247" type="text/css" />
<link rel="stylesheet" href="css/3be7a54979243c13e24c838b23171215d73bbc1f.css?1441886309" type="text/css" />
<link rel="stylesheet" href="css/c631773c58c9c891c02e1c03f37140cbe35d1544.css?1449216247" type="text/css" />


<%
    boolean musterıIDkontrol = (session.getAttribute("musteriID") == null);
    boolean durum = (request.getParameter("adresEkle") != null);
    String adrr = "";
    String mID = "";
    String adresID = "";
    String mail = "";
    if (durum) {
        mID = session.getAttribute("musteriID").toString();

        String baslik = request.getParameter("baslik");
        String adres = request.getParameter("adres");
        String sehir = request.getParameter("city");
        String postaKodu = request.getParameter("postcode");
        String ulke = request.getParameter("country");
        String bolge = request.getParameter("ilce");
        try {
            int sonuc = db.st.executeUpdate("insert into adresler values(null,'" + mID + "','" + baslik + "','" + adres + "','" + postaKodu + "','" + bolge + "','" + sehir + "',now())");
            if (sonuc > 0) {
                out.print("<script>window.location.href='odemeSayfasi.jsp';</script>");
            }
        } catch (Exception e) {
            out.print("hata: " + e);
        }
    }
%>



<div class="container" style=" margin-top: 3%;">

    <%
        if (musterıIDkontrol) {
    %>

    <div>

        <h1>&nbsp;&nbsp;&nbsp;&nbsp;GİRİŞ YAP</h1>
    </div>

    <div class="panel-body">
        <%-- LOGİN BAŞLANGIÇ--%>   

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
                                <div class="bottom-form"><a href="kayit.jsp?&odemeKayit=1" class="btn btn-primary creat-acc">Devam</a></div>
                            </div>
                            <form action="girisKontrol.jsp?&odemeKayit=1" method="post">
                                <div class="col-sm-6 customer-login">
                                    <div class="well">
                                        <h2>Kayıtlı Kullanıcı</h2>
                                        <p><strong>Daha önce kaydoldum.</strong></p>
                                        <div class="form-group">
                                            <label class="control-label col-lg-12 col-md-12 col-xs-12 col-sm-12" for="input-email">E-Mail</label>
                                            <input type="email" name="email" value="" id="input-email" class="col-lg-6 col-md-6 col-xs-11 col-sm-11 form-control">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-lg-12 col-md-12 col-xs-12 col-sm-12" for="input-password">Şifre</label>
                                            <input type="password" name="sifre" value="" id="input-password" class="col-lg-6 col-md-6 col-xs-11 col-sm-11 form-control">
                                        </div>
                                        <div class="form-group">
                                            <input type="checkbox" name="hatirla"> Beni Hatırla
                                        </div>




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

        <%-- LOGİN BİTİŞ --%> 
    </div>



    <%
    } else {
        mID = session.getAttribute("musteriID").toString();
        mail = session.getAttribute("musteriMail").toString();
    %>

    <!---------------------------------- Kullanıcı giris Yaptıysa  ------------------------------------------------>
    <div class="panel-group" id="accordion">

        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed" aria-expanded="false">KİŞİ BİLGİSİ ADRES EKLE</a>
                </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                <div class="panel-body">


                    <%-- ADRES  BAŞLAMA --%>

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
                                                <input type="text" name="baslik" value="" placeholder="Başlık Giriniz" id="input-payment-address-2" class="form-control" required>
                                            </div>

                                            <div class="form-group required">
                                                <label class="control-label" for="input-payment-address-1">Adres</label>
                                                <input type="text" name="adres" value="" placeholder="Adres Giriniz" id="input-payment-address-1" class="form-control" required>
                                            </div>

                                            <div class="form-group required">
                                                <label class="control-label" for="input-payment-address-1">İlçe</label>
                                                <input type="text" name="ilce" value="" placeholder="Şehir Giriniz" id="input-payment-city" class="form-control" required>
                                            </div>


                                            <div class="form-group required">
                                                <label class="control-label" for="input-payment-city">Şehir</label>

                                                <select name="city" id="input-country" class="form-control">
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
                                            <div class="form-group required">
                                                <label class="control-label" for="input-payment-postcode">Posta Kodu</label>
                                                <input type="text" name="postcode" value="" placeholder="Posta Kodu Giriniz" id="input-payment-postcode" class="form-control" required>
                                            </div>

                                        </fieldset>

                                        <%-- ADRES BİLGİLERİ GİRİŞİ BİTİŞ--%>

                                    </div>
                                </div>
                                <div class="buttons clearfix">
                                    <div class="pull-right">
                                        <input type="submit" name="adresEkle" value="Adres Ekle" id="button-register" data-loading-text="Loading..." class="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                    <%-- ADRES  BİTİŞ --%>


                    <%--ADRES BİLGİLERİ BİLİNİYO BAŞLANGIÇ --%>

                    <div id="ContentCon" class="clearfix">
                        <div class="ContentLeft gg-w-17 gg-d-16 gg-t-24 gg-m-24" style=" width: 100%;">
                            <div class="box-content">
                                <form action="" method="post" id="SelectAddress">
                                    <input type="hidden" name="addressSelected" value="1">
                                    <div class="hint-head bblgray posr">


                                        <h2>Kargo teslim adresini seç<span class="hidden-m">in</span></h2>  </div>
                                        <%
                                            ResultSet rs = db.data("musteriler m inner join adresler a on m.musteriID=a.musteriID WHERE m.mail='" + mail + "'");
                                            while (rs.next()) {
                                                adresID = rs.getString("adresID");
                                                adrr = rs.getString("adres");

                                        %>



                                    <ul class="AddressSelect">
                                        <li class="clearfix selected">
                                        <div class="visible-m gg-m-2">
                                            <input class="mt30" type="radio" id="op5262377-mobile" name="address-mobile" value="5262377" checked="checked">
                                        </div>
                                        <div class="AdrOption gg-w-5 gg-d-5 gg-t-5 gg-m-22">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                <tbody>
                                                    <tr>
                                                    <td class="hidden-m">
                                                    <input type="radio" id="op5262377" name="Address" value="<%=adresID%>">
                                                    <span class="dpnone">5262377{#||#}<%=rs.getString("adresBaslik")%>{#||#}<%=rs.getString("musteriAdi")%>{#||#}<%=rs.getString("musteriSoyadi")%>{#||#}<%=rs.getString("adres")%>{#||#}34{#||#}<%=rs.getString("ilce")%>{#||#}<%=rs.getString("il")%>{#||#}<%=rs.getString("telefon")%>{#||#}4356933{#||#}{#||#}</span>
                                                    </td>
                                                    <td width="99%">
                                                    <label for="op5262377"><%=rs.getString("adresBaslik")%></label>
                                                    <br>
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td class="hidden-m"></td>
                                                    <td width="99%"><span class="EditAddress"><span class="hidden-m"></span><a href="odemeAdresDuzenle.jsp?duzenle=<%=rs.getString("adresID")%>"><strong><span class="visible-m-inline">Seçilen Adresi </span>Düzenle</strong></a><span class="hidden-m"></span></span>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <div class="AdrDetail gg-w-19 gg-d-19 gg-t-19 gg-m-22">
                                            <!-- Ad Yeri -->    <p><strong><%=rs.getString("musteriAdi")%>&nbsp;<%=rs.getString("musteriSoyadi")%></strong></p>
                                            <!-- Adres Yeri -->     <p><%=rs.getString("adres")%>&nbsp;<%=rs.getString("ilce")%>&nbsp;<%=rs.getString("il")%></p>
                                            <!-- Telefon Yeri -->   <p><%=rs.getString("telefon")%></p>
                                        </div>
                                        <div class="gg-d-24 mt20 trigger-continue visible-m"><a href="#" onclick="$('#SelectAddress').submit();" class="button_blue1 button_size3  gg-w-6 gg-d-7 gg-t-6 gg-m-24">Devam Et</a></div>
                                        </li>
                                    </ul>

                                    <%
                                        }
                                    %>
                                    
                                    <input type="submit" class="mt7 button_blue1 button_size3 gg-w-14 gg-d-17 gg-m-24" name="continue" value="continue">
                                </form>
                            </div>
                            <div class="ProcessBtns clearfix mt20">

                                <div class="gg-w-12 gg-d-10 gg-t-12 gg-m-12"></div>
                            </div>
                        </div>

                    </div>

                    <%--ADRES BİLGİLERİ Biliniyor BİTİŞ --%>

                </div>
            </div>       
        </div>


        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="collapsed" aria-expanded="false">KART BİLGİLERİ </a>
                </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                <div class="panel-body">

                    <%-- KART BİLGİLERİ BAŞLANGIÇ --%>
                    <!-------------------------------- Kart Uzerıne Bılgılerı Yazmak Baslangic   ----------------------------------------->
                    <script>
                        $(function () {
                            var kAdGiris = $("#P-CCOwnerName");
                            var kartAd = $("#kartAd");

                            var kNumGiris = $("#P-CCNumberField");
                            var kartNum = $("#kartNum");

                            var kTarihAyGiris = $("#P-CCMonthSelect");
                            var kartTarihAy = $("#kartTarihAy");

                            var kCVCGiris = $("#P-CVCNumberField");
                            var kartCVC = $("#kartCVC");

                            kAdGiris.keyup(function (event) {
                                keyReport(event, kartAd);
                            });
                            kNumGiris.keyup(function (event) {
                                keyReport(event, kartNum);
                            });
                            kTarihAyGiris.keyup(function (event) {
                                keyReport(event, kartTarihAy);
                            });

                            kCVCGiris.keyup(function (event) {
                                keyReport(event, kartCVC);
                            });
                            function keyReport(event, output) {
                                kartAd.text(kAdGiris.val());
                                kartNum.text(kNumGiris.val());
                                kartTarihAy.text(kTarihAyGiris.val());
                                kartCVC.text(kCVCGiris.val());
                            }

                        });


                    </script>

                    <!-------------------------------- Kart Uzerıne Bılgılerı Yazmak Bitis   ----------------------------------------->


                    <div class="CardInfo clearfix">
                        <div class="gg-w-9 gg-d-10 gg-m-24">
                            <ul>
                                <li><span class="FormTxt">Kart Üzerindeki Ad Soyad</span>
                                <input type="text" id="P-CCOwnerName" size="26" maxlength="80" name="cardname" class="FormInput" tabindex="1" onkeypress="return alpha(event, letters + trletters + ' ')">
                                </li>
                                <li class="posr"><span class="FormTxt">Kart Numarası</span>
                                <div class="posr">


                                    <input type="text" id="P-CCNumberField" maxlength="19" name="cardnum" class="FormInput" >
                                    <div id="jqfnumkeypad_cardnum" class="jqfnumkeypad" style="display: none;">
                                        <div class="jqfnumkeypad_keypad">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                    <tr>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">1</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">2</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">3</td>
                                                    <td width="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td colspan="5" height="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">4</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">5</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">6</td>
                                                    <td width="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td colspan="5" height="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">7</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">8</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">9</td>
                                                    <td width="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td colspan="5" height="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td class="jqfnumkeypad_digit" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">0</td>
                                                    <td width="5"></td>
                                                    <td class="jqfnumkeypad_clear" colspan="3" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">Sil</td>
                                                    </tr>
                                                    <tr>
                                                    <td colspan="5" height="5"></td>
                                                    </tr>
                                                    <tr>
                                                    <td class="jqfnumkeypad_random" colspan="5" onmouseover="changeClass(this, 0)" onmouseout="changeClass(this, 1)">
                                                    <label class="rndSpan" id="rndSpan">
                                                        <input type="checkbox" id="randomchk" class="random" style="position:absolute;left:-2000px"><span>Karıştır</span></label>
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                </li>
                                <li class="clearfix posr2">
                                    <!-- Son Kullanma Tarihi --->   <div class="gg-d-18 padding-none">
                                    <span class="FormTxt">Son Kullanma Tarihi</span>
                                    <div class="clearfix">
                                        <select name="month" class="DateSelect FormSelect" id="P-CCMonthSelect" tabindex="3">
                                            <option value="0">Ay</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>

                                        </select>
                                        <select name="year" id="P-CCYearSelect" class="DateSelect FormSelect" tabindex="4">
                                            <option value="0">Yıl</option>
                                            <option value="16">2016</option>
                                            <option value="17">2017</option>
                                            <option value="18">2018</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                            <option value="24">2024</option>
                                            <option value="25">2025</option>
                                            <option value="26">2026</option>
                                            <option value="27">2027</option>
                                            <option value="28">2028</option>
                                            <option value="29">2029</option>
                                            <option value="30">2030</option>
                                            <option value="31">2031</option>
                                            <option value="32">2032</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="gg-d-6 padding-none">
                                    <span class="FormTxt">CVC</span>
                                    <input type="password" id="P-CVCNumberField" size="26" name="CVC" class="FormInput" maxlength="3" tabindex="5" onkeypress="return alpha(event, numbers)" autocomplete="off">
                                </div>
                                </li>
                            </ul>
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                    <td width="20">
                                    <input type="checkbox" id="secure3D" tabindex="6" disabled="disabled" checked="checked">
                                    </td>
                                    <td>
                                    <label for="secure3D"><strong class="ml3">3D Secure kullanmak istiyorum</strong></label> <a href="javascript:;" id="Info3D">(?)</a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- 3D Secure -->   <div id="Info3DCon">
                                <div class="InfoBubble Faded ArrowT">
                                    <div class="Arrow"></div>
                                    <p></p>
                                    <h3>3D Secure nedir?</h3>3D Secure, internetten güvenle alışveriş yapılabilmesi için Visa ve MasterCard'ın geliştirdiği ek bir kimlik doğrulama sistemidir. Bu sistemle hem kart sahipleri hem de üye iş yerleri internet dolandırıcılıklarına karşı güvence altına alınır.
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="gg-w-1 gg-d-2 gg-t-1 hidden-m">
                            <span class="CardInfoSort" style="top: 173px;"></span>
                            <span class="card-seperator"></span>
                        </div>
                        <!-- Kartın On ve Arka Yuzu -->    <div class="gg-w-9 gg-d-12 gg-t-13 hidden-m">
                            <div class="Perspective">
                                <div id="CreditCardFront">
                                    <span class="CardLogo"></span>
                                    <span class="CardNumber" id="kartNum">1234 5678 9000 0000</span>
                                    <strong class="UserName" id="kartAd" style=" text-transform: uppercase;"></strong>
                                    <span class="LastDate" id="kartTarihAy">AA/YY</span>
                                    <span class="Cardype"></span>
                                    <span class="CVCTxt" id="kartCVC"></span>
                                </div>
                                <div id="CreditCardBack" class="past">
                                    <span class="CVCTxt"></span>
                                    <div id="CVCInfo">
                                        <div class="InfoBubble ArrowT">
                                            <div class="Arrow"></div>Kartınızın arkasındaki son 3 rakam
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- En alttakı Yazilar -->  


                    <div class="gg-d-24">
                        <div class="ShoppingTotal clearfix">
                            <div class="ShoppingLinks gg-d-12 gg-m-24 padding-none">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td width="20">
                                        <input type="checkbox" id="soz3" tabindex="9">
                                        </td>
                                        <td>
                                        <label for="soz3"><a href="odemeOnBilgilendirmeFormu.jsp" target="_blank" class="Contracts" rel="preInfo">Ön bilgilendirme formunu</a> kabul ediyorum.</label>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td width="20">
                                        <input type="checkbox" id="soz2" tabindex="8">
                                        </td>
                                        <td>
                                        <label for="soz2"><a href="odemeMesafeliSatisSozlesmesi.jsp" target="_blank" class="Contracts" rel="agreement">Mesafeli satış sözleşmesini</a> kabul ediyorum.</label>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td width="20" valign="top">
                                        <input type="checkbox" checked="" tabindex="17" value="1" id="termsofuse" name="termsofuse">
                                        </td>
                                        <td>
                                        <label for="termsofuse"><a class="link" target="_blank" href="odemeKullaniciSozlesmesi.jsp">Kullanıcı Sözleşmesini</a> ve <a target="_blank" class="link" href="odemeGizlilikPolitikasi.jsp">Gizlilik Politikasını</a> okudum ve kabul ediyorum.</label>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <input type="hidden" id="ContractType" value="">
                                <input type="hidden" id="PayPalType" value="0">
                            </div>
                            <!-- Sepetteki Urun -->   <div class="ShoppingTPrice gg-d-12 gg-t-12 gg-m-24 padding-none">
                                <div class="other-price-info">
                                    <p class="strike" style="display: block;"><b>Toplam:</b><strong> 199,<sup>00</sup> TL</strong></p>
                                </div>
                                <div class="pwp-price-info hidden">
                                    <div class="sub-pwp-total bblgray clearfix">
                                        <div class="point-info clearfix">
                                            <div class="sub-pwp-txt gg-w-18 gg-d-14 gg-t-18 gg-m-12">Toplam Sepet Tutarı :</div>
                                            <div id="sub-pwp1" class="sub-pwp-price gg-w-6 gg-d-10 gg-t-6 gg-m-12 pr0"></div>
                                        </div>
                                        <div class="point-info clearfix">
                                            <div class="sub-pwp-txt gg-w-18 gg-d-14 gg-t-18 gg-m-12">Kullandığınız Puan :</div>
                                            <div id="sub-pwp2" class="point-color sub-pwp-price gg-w-6 gg-d-10 gg-t-6 gg-m-12 pr0"></div>
                                        </div>
                                        <div class="point-info clearfix">
                                            <div class="pwp-discount-text sub-pwp-txt gg-w-18 gg-d-14 gg-t-18 gg-m-12">Kullandığınız İndirim :</div>
                                            <div id="sub-pwp3" class="pwp-discount-text sub-pwp-price gg-w-6 gg-d-10 gg-t-12 gg-m-12 pr0"></div>
                                        </div>
                                    </div>
                                    <div class="pwp-total mt10">
                                        Çekilecek Tutar: <span></span>
                                    </div>
                                </div>
                                <input id="RealPrice" type="hidden" value="199">
                                <input id="RealDisPrice" type="hidden" value="199">
                                <input id="HTotalPrice" type="hidden" value="199">
                                <input id="HDisPrice" type="hidden" value="199">

                                

                                <a href="odemeBilgileri.jsp?totalFiyat=200&adresID=<%=request.getParameter("Address")%>"  tabindex="12" class="mt7 button_blue1 button_size3 gg-w-14 gg-d-17 gg-m-24" id="BuyProduct"><span style="background-position: 95px -59px;">Ödeme Yap</span></a>



                            </div>
                        </div>
                    </div>

                    <%-- KART BİLGİLERİ BİTİŞ --%>


                </div>
            </div>
        </div>




        <!---------------------------------- Kullanıcı giris Yaptıysa  ------------------------------------------------>





    </div>

    <%        }
    %>

</div> 



