
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Kayıt Ol</title>
<%@include file="ust.jsp" %>
<%   
    boolean hataKontrolu = (request.getParameter("hata") != null);
    
%>
<div class="container">
   
    <div class="row">
        <div id="content" class="col-sm-12">
            <h1>Kayıt Ol</h1>
            <p>Eğer daha önce kayıt oluysanız bu linke tıklayınız  <a href="giris.jsp">giriş</a>.</p>
            <form action="kayitYap.jsp" method="post"  class="form-horizontal account-register">
                <fieldset id="account">
                 
                            
                    <legend>Kişisel Bilgileriniz</legend>
                    <div class="form-group required" style="display: none;">
                        <label class="col-sm-2 control-label">Müşteri</label>
                        <div class="col-sm-10">
                            <div class="radio">
                                <label>
                                    <input type="radio" name="customer_group_id" value="1" checked="checked"> Default</label>
                            </div>
                        </div>
                    </div>
                 
                    <div class="form-group required ">
                        <label class="col-sm-2 control-label" for="input-firstname">Adınız<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="text" name="adi" value="" placeholder="Adınızı Giriniz..." id="input-firstname" class="form-control" required >
                        </div>
                    </div>
                    <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                    


                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-lastname">Soyadınız <i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="text" name="soyadi" value="" placeholder="Soyadınızı Giriniz..." id="input-lastname" class="form-control" required>
                        </div>
                    </div>
                            <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">E-Mail<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="email" name="email" value="" placeholder="E-Mail'inizi Giriniz..." id="input-email" class="form-control" required>
                        </div>
                    </div>
                            <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-telephone">Telefon Numarası</label>
                        <div class="col-sm-10">
                            <input type="tel" name="telefon" value="" placeholder="Telefon numaranızı Giriniz..." id="input-telephone" class="form-control">
                        </div>
                    </div>
                    
                </fieldset>
                <fieldset id="address">
                    <legend>Adres Bilgileri</legend>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-company">Şirket</label>
                        <div class="col-sm-10">
                            <input type="text" name="sirket" value="" placeholder="Şirket Adresinizi Giriniz..." id="input-company" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-address-1">Adres 1<i style="color: red;" >*</i> </label>
                        <div class="col-sm-10">
                            <input type="text" name="adres-1" value="" placeholder="Adres 1" id="input-address-1" class="form-control" required>
                        </div>
                    </div>
                    <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                    
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-address-2">Adres 2</label>
                        <div class="col-sm-10">
                            <input type="text" name="adres-2" value="" placeholder="Adres 2" id="input-address-2" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-city">İlçe<i style="color: red;" >*</i> </label>
                        <div class="col-sm-10">
                            <input type="text" name="ilce" value="" placeholder="İlçe" id="input-city" class="form-control" required>
                        </div>
                    </div>
                             <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-postcode">Posta Kodu <i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="text" name="postaKodu" value="" placeholder="Posta Kodu" id="input-postcode" class="form-control" required>
                        </div>
                    </div>
                             <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-country">Şehir<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <select name="sehir" id="input-country" class="form-control">
                                <option value="" selected="selected"> --- Lütfen Şehir Seçimi Yapınız --- </option>
                               
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
                                <option value="İstanbul">İstanbul</option>
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
                    </div>
                   
                </fieldset>
                <fieldset>
                    <legend>Şifre</legend>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-password">Şifre<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="password" name="sifre" value="" placeholder="Şifrenizi Giriniz..." id="input-password" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-confirm">Şifre Tekrar<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="password" name="sifreTekrar" value="" placeholder="Şifrenizi Tekrar Giriniz..." id="input-confirm" class="form-control" required>
                            <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                        </div>
                    </div>
                </fieldset>
                
                <div class="buttons">
                    <div class="pull-right">
                        <input type="submit" name="kaydol" value="Kaydol" class="btn btn-primary">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  <%@include file="alt.jsp" %>