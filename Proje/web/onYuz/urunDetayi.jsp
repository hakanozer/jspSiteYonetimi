
<%@page import="java.util.TimerTask"%>
<%@page import="java.util.Timer"%>
<%@page import="java.rmi.server.UID"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Urun Detayı</title>
<%@include file="ust.jsp" %>


<%
    String urunAdi = "";
    String gecerliFiyat = "";
    String piyasaFiyati = "";
    String urunDetayi = "";
    String urunKisaAciklama = "";
    String id = "";
    String klasor = "";
    String adet = request.getParameter("adet");
    String resimAdi = "";
    String ID = "";
    boolean urunIDDenetim = (request.getParameter("id") != null);
    if (urunIDDenetim) {
        id = request.getParameter("id");
    }
    ResultSet rs = db.data("urunler where id= '" + id + "' ");
    if (rs.next()) {
        ID = rs.getString("id");
        urunAdi = rs.getString("baslik");
        gecerliFiyat = rs.getString("gecerliFiyat");
        piyasaFiyati = rs.getString("piyasaFiyati");
        urunDetayi = rs.getString("detay");
        urunKisaAciklama = rs.getString("kisaAciklama");
    }

    try {
        ResultSet rss = db.st.executeQuery("SELECT adi,klasor FROM urun_fotograflari WHERE urun_id='" + id + "' and album_adi='urunler' ");
        if (rss.next()) {
            resimAdi = rss.getString("adi");
            klasor = rss.getString("klasor");
        }
    } catch (Exception e) {

    }
    boolean sepetEklendi = (request.getParameter("basarili") != null);

    if (sepetEklendi) {

%>


<div id="jGrowl" class="top-right jGrowl">
    <div class="jGrowl-notification"></div>
    <div class="jGrowl-notification alert ui-state-highlight ui-corner-all success" style="display: block;">
        <form action="urunDetayi.jsp?&id=<%=id%>" method="post">
            <button  class="jGrowl-close" name="kapat" >×</button></form>
        <div class="jGrowl-header">Sepete Eklendi</div>
        <div class="jGrowl-message"><img src="http://localhost:8095/imageupload/server/php/files/<%=klasor%>/thumbnail/<%=resimAdi%>" alt="">
            <h3><a href="urunDetayi.jsp?&id=<%=id%>"><%=urunAdi%></a> eklendi. <a href="odemeSayfasi.jsp">Satın almak için tıklayınız</a>!</h3></div>
    </div>
</div>


<%
    }
%>

<%
 boolean begeniEklendi = (request.getParameter("begeni") != null);

    if (begeniEklendi) {

%>


<div id="jGrowl" class="top-right jGrowl">
    <div class="jGrowl-notification"></div>
    <div class="jGrowl-notification alert ui-state-highlight ui-corner-all success" style="display: block;">
        <form action="urunDetayi.jsp?&id=<%=id%>" method="post">
            <button  class="jGrowl-close" name="kapat" >×</button></form>
        <div class="jGrowl-header">Beğenilerinize Eklendi</div>
        <div class="jGrowl-message"><img src="http://localhost:8095/imageupload/server/php/files/<%=klasor%>/thumbnail/<%=resimAdi%>" alt="">
            <h3><a href="urunDetayi.jsp?&id=<%=id%>"><%=urunAdi%></a> eklendi.</h3></div>
    </div>
</div>


<%
    }
%>

<div class="container product-detail" style="margin-top: 3%;">
    <div class="row">
        <div id="content" class="col-sm-12">
            <div class="product-view row">
                <div class="left-content-product col-lg-10 col-xs-12">
                    <div class="row">
                        <div class="content-product-left col-sm-6 col-xs-12 ">
                            <div class="large-image "><img itemprop="image" class="product-image-zoom" src="http://localhost:8095/imageupload/server/php/files/<%=klasor%>/<%=resimAdi%>" title="" alt="">
                                <!--New Label-->
                                <!--Sale Label--><span class="label label-sale">İNDİRİM</span></div>


                        </div>
                        <div class="content-product-right col-sm-6 col-xs-12">
                            <div class="title-product">
                                <h1 style="text-transform: uppercase;font-size: 25;margin-top: 3px;"><%=urunAdi%></h1></div>
                            <!-- Review ---->
                            <div class="box-review" style="padding-bottom: 20;" >
                                <div class="ratings">



                                    <%
                                        boolean rating = (request.getParameter("star") != null);
                                        if (rating) {
                                            response.sendRedirect("index.jsp");
                                        }
                                    %>
                                    <div class="stars">

                                        <form action="" method="get">

                                            <input class="star star-5" id="star-5" type="radio" name="star" value="5"/>

                                            <label class="star star-5" for="star-5"></label>

                                            <input class="star star-4" id="star-4" type="radio" name="star" value="4"/>

                                            <label class="star star-4" for="star-4"></label>

                                            <input class="star star-3" id="star-3" type="radio" name="star" value="3"/>

                                            <label class="star star-3" for="star-3"></label>

                                            <input class="star star-2" id="star-2" type="radio" name="star" value="2"/>

                                            <label class="star star-2" for="star-2"></label>

                                            <input class="star star-1" id="star-1" type="radio" name="star" value="1"/>

                                            <label class="star star-1" for="star-1"></label>

                                        </form>

                                    </div>



                                </div><br>
                                <a class="reviews_button" href="" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;">Açıklama</a> | <a class="write_review_button" href="" onclick="$('a[href=\'#tab-1\']').trigger('click'); return false;">Ürün Detayı</a></div>

                            <div class="product-label">
                                <div class="product_page_price price" itemprop="offerDetails" itemscope="" itemtype="http://data-vocabulary.org/Offer">
                                    <div>



                                        <div style="padding-bottom: 5;">
                                            <label style="color: gray;font-size: 15; padding-right: 20;">Piyasa Fiyatı :</label>
                                            <span  class="price-old" style="font-size: 15;"><%=piyasaFiyati%>TL</span>
                                        </div >
                                        <div style="padding-bottom: 15;">
                                            <label style="
                                                   font-size: 25;
                                                   color: green;
                                                   padding-right: 30;">Geçerli Fiyat : </label>
                                            <span class="price-new" itemprop="price"  style="font-size: 25;"><%=gecerliFiyat%>TL</span>
                                        </div>
                                    </div>
                                    <%
                                        int piyasa = Integer.valueOf(piyasaFiyati);
                                        int gecerli = Integer.valueOf(gecerliFiyat);
                                        int sonuc = ((piyasa - gecerli) * 100) / piyasa;
                                    %>
                                    <div style="
                                         border-radius: 10px;
                                         background-color: rgb(244, 99, 55);
                                         color: white;
                                         font-weight: bold;
                                         text-align: center;
                                         width: 300; ">% <%out.print(sonuc);%> İndirim</div>
                                </div>

                            </div>

                            <div id="product">   
                                <div class="form-group box-info-product">
                                    <form action="sepeteEkle.jsp?&adet=<%=adet%>&id=<%=request.getParameter("ID")%>" method="get" >
                                        <input value="<%=id%>" name="ID" style="display: none;">
                                        <div class="option quantity">
                                            <div class="input-group quantity-control"  style="">
                                                <label>Adet</label>

                                                <input class="form-control" type="number" size="100" name="adet" value="1" style=" width: 60;text-align: center;">
                                            </div>

                                        </div>
                                        <div class="cart">

                                            <input style="height: 40;" type="submit" data-toggle="tooltip" title="" value="Sepete Ekle" data-loading-text="Loading..." name="sepetEkle" id="button-cart" class="btn btn-mega btn-lg" data-original-title="Sepete Ekle">

                                        </div> </form>
                                        <%
                                            boolean sessionControl = (session.getAttribute("musteriMail") != null);
                                        if(sessionControl){
                                            String musteriID= session.getAttribute("musteriID").toString();
                                           
                                        %>
                                    <div class="add-to-links wish_comp">
                                        <ul class="blank">
                                            
                                            <li class="wishlist">
                                                <a href="begeni.jsp?&urun_id=<%=id%>&musteri_id=<%=musteriID%>" class="icon" data-toggle="tooltip" title=""  data-original-title="Beğenilerime Ekle" style=" margin-top: -15;height: 40;" >
                                                    <i class="fa fa-heart"></i>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                            <%}%>
                                </div>
                                <!-- Go to www.addthis.com/dashboard to customize your tools -->

                                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                                <div class="addthis_native_toolbox"></div>
                            </div>
                            <!-- end box info product -->
                        </div>
                    </div>
                </div>
                <!-- end - left-content-product --->

            </div>
            <div class="producttab ">
                <div class="tabsslider vertical-tabs col-xs-12">
                    <ul class="nav nav-tabs col-lg-2 col-sm-3">
                        <li class="active"><a data-toggle="tab" href="#tab-1">Ürün Detayı</a></li>
                        <li class="item_nonactive"><a data-toggle="tab" href="#tab-review">Açıklama</a></li>

                    </ul>
                    <div class="tab-content col-lg-10 col-sm-9 col-xs-12">
                        <div id="tab-1" class="tab-pane fade active in">
                            <div class="cpt_product_description ">
                                <div>
                                    <h2 id="review-title">Ürün Detayı</h2>
                                    <p><%=urunDetayi%></p>
                                </div>
                            </div>
                            <!-- cpt_container_end -->
                        </div>
                        <div id="tab-review" class="tab-pane fade">
                            <form> 
                                <h2 id="review-title">Açıklama</h2>
                                <div id="review">
                                    <p><%=urunKisaAciklama%></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Products widgets desktop-->

            <div class="line-divider"></div>
            <!-- end Products widgets desktop-->

        </div>
    </div>
</div>
</div>
<%@include file="alt.jsp" %>