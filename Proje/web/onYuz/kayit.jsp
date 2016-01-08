
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Kayıt Ol</title>
<%@include file="ust.jsp" %>


                <%    
                    boolean kayitDenetim = (request.getParameter("basarili") != null);
                    if (kayitDenetim) {%>
                <div class="alert alert-success" style="margin-left: 11%;width: 79%;margin-bottom: auto;margin-top: 20;font-weight: bold;">
                    <button type="button" name="close" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Başarıyla Kaydınız Tamamlanmıştır !
                    <a href="index.jsp" style="text-decoration: underline;">Anasayfaya Dön</a>
                    <%
                        boolean alertKapa = (request.getParameter("close") != null);
                        if (alertKapa) {
                            out.print("<script>window.location.href = 'kayit.jsp';</script>");
                        }}
                    %>
                </div>

                <%
                    boolean kayitHataDenetim = (request.getParameter("insert") != null);
                    if (kayitHataDenetim) {%>
                <div class="alert alert-danger alert-dismissable" style="margin-left: 11%;;width: 79%;margin-bottom: auto;margin-top: 20;font-weight: bold;">
                    <button type="button" name="close" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    Kaydınız Yapılamamıştır !
                    <a href="index.jsp" style="text-decoration: underline;">Anasayfaya Dön</a>
                    <%
                            boolean alertKapa = (request.getParameter("close") != null);
                            if (alertKapa) {
                                out.print("<script>window.location.href = 'kayit.jsp';</script>");
                            }
                        %>
                    </div>
                    
                    <%}%>
                    
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
                       
                        </div>
                    </div>
                 
                    <div class="form-group required ">
                        <label class="col-sm-2 control-label" for="input-firstname">Adınız<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="text" name="adi" value="<% if(request.getParameter("adi")!=null){ out.print(request.getParameter("adi")); }%>" placeholder="Adınızı Giriniz..." id="input-firstname" class="form-control" required >
                        </div>
                    </div>



                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-lastname">Soyadınız <i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="text" name="soyadi" value="<% if(request.getParameter("soyadi")!=null){ out.print(request.getParameter("soyadi")); }%>" placeholder="Soyadınızı Giriniz..." id="input-lastname" class="form-control" required >
                        </div>
                    </div>
                           
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">E-Mail<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="email" name="email" value="<% if(request.getParameter("mail")!=null){ out.print(request.getParameter("mail")); }%>" placeholder="E-Mail'inizi Giriniz..." id="input-email" class="form-control" required>
                        </div>
                    </div>
                          
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-telephone">Telefon Numarası</label>
                        <div class="col-sm-10">
                            <input type="tel" name="telefon" value="<% if(request.getParameter("telefon")!=null){ out.print(request.getParameter("telefon")); }%>"  placeholder="Telefon numaranızı Giriniz..." id="input-telephone" class="form-control">
                        </div>
                    </div>
                    
                </fieldset>
                            <%--
                <fieldset id="address">
                    <legend>Adres Bilgileri</legend>
                    
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-address-1">Adres<i style="color: red;" >*</i> </label>
                        <div class="col-sm-10">
                            <input type="text" name="adres" value="" placeholder="Adres 1" id="input-address-1" class="form-control" >
                        </div>
                    </div>
                    <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                    
                  
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-city">İlçe<i style="color: red;" >*</i> </label>
                        <div class="col-sm-10">
                            <input type="text" name="ilce" value="" placeholder="İlçe" id="input-city" class="form-control" >
                        </div>
                    </div>
                             <%
                                if (hataKontrolu) {

                            %>
                            <div class="text-danger">Şifre Tekrarı Hatalı!</div>
                            <%}%>
                            
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-postcode">Posta Kodu </label>
                        <div class="col-sm-10">
                            <input type="text" name="postaKodu" value="" placeholder="Posta Kodu" id="input-postcode" class="form-control" >
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
                            --%>
                <fieldset>
                    <legend>Şifre</legend>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-password">Şifre<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="password" name="sifre" value="" placeholder="Şifrenizi Giriniz..." id="input-password" class="form-control" required>
                            <%
                                boolean sifreKontrol = (request.getParameter("sifreKisa") != null);
                                if (sifreKontrol) {
                                 
                            %>
                            <div class="text-danger" style="color:white;">Şifreniz en az 5 karakter en çok 15 karakter içermelidir!</div>
                            <%}%>
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-confirm">Şifre Tekrar<i style="color: red;" >*</i></label>
                        <div class="col-sm-10">
                            <input type="password" name="sifreTekrar" value="" placeholder="Şifrenizi Tekrar Giriniz..." id="input-confirm" class="form-control" required>
                            <%
                                boolean hataKontrolu = (request.getParameter("hata") != null);
                                if (hataKontrolu) {
                                 
                            %>
                            <div class="text-danger" style="color:white;">Şifre Tekrarı Hatalı!</div>
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