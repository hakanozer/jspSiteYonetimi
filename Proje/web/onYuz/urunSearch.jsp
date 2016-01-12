
<%@page import="beans.UrunArama"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="sinif.DB"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>



<%
    String category_id = "";
    String searchText = "";
    String urunID = "";
    String urunBaslik = "";
    String kisaAciklama = "";
    String detay = "";
    String piyasaFiyati = "";
    String gecerliFiyat = "";
    String kampanyaliUrun = "";
    String klasor = "";
    String foto_adi = "";
    Integer indirimOrani = 0;
    ArrayList<UrunArama> urunlerList = new ArrayList();
    
    boolean submit_searchDurum = (request.getParameter("submit_search") != null);
    if (submit_searchDurum) {
        category_id = request.getParameter("category_id");
        searchText = request.getParameter("search");
        
        if(category_id.equals("0")) {
            ResultSet rs = db.dataSearch("select * from urunler where baslik like '%"+ searchText +"%' ");
            while(rs.next()) {
                UrunArama urunarama = new UrunArama();
                urunarama.setId(rs.getString("id")); 
                urunarama.setBaslik(rs.getString("baslik")); ;
                urunarama.setKisaAciklama(rs.getString("kisaAciklama")); 
                urunarama.setDetay(rs.getString("detay"));
                urunarama.setPiyasaFiyati(rs.getString("piyasaFiyati"));
                urunarama.setGecerliFiyat(rs.getString("gecerliFiyat"));
                urunarama.setKampanyaliUrun(rs.getString("kampanyaliUrun"));
                urunlerList.add(urunarama);
            }
        } else {
            ResultSet rs = db.dataSearch("select * from urunler where katID = '" + category_id +"' and baslik like '%"+ searchText +"%' ");
            while(rs.next()) {
                UrunArama urunarama = new UrunArama();
                urunarama.setId(rs.getString("id")); 
                urunarama.setBaslik(rs.getString("baslik")); ;
                urunarama.setKisaAciklama(rs.getString("kisaAciklama")); 
                urunarama.setDetay(rs.getString("detay"));
                urunarama.setPiyasaFiyati(rs.getString("piyasaFiyati"));
                urunarama.setGecerliFiyat(rs.getString("gecerliFiyat"));
                urunarama.setKampanyaliUrun(rs.getString("kampanyaliUrun"));
               urunlerList.add(urunarama);
            } 
        }
        
    } else {
        response.sendRedirect("index.jsp");
    }
    
%>

<!-- end container for top line of header -->
            <!-- Header Bottom -->
            
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=common/home"><i class="fa fa-home"></i></a></li>
                <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0">Arama</a></li>
            </ul>
            <div class="row">
                <div id="content" class="col-sm-12">
                    <div class="form-group">
                        <h1>Arama - <%=searchText%></h1>
                        <label class="control-label" for="input-search">Arama Kriteri</label>
                        <div class="row">
                            <div class="col-sm-3">
                                <form action="urunSearch.jsp" method="get">
                                <input type="text" name="search" value="<%=searchText%>" placeholder="Anahtar Kelimeler" id="input-search" class="form-control" />
                            </div>
                            <div class="col-sm-3">
                                <select name="category_id" class="form-control">
                                    <%
                                        if (category_id.equals("0")) {
                                            out.print("<option selected=\"selected\" name=\"\" value=\"0\">Tüm Kategoriler</option>");
                                            for (kategori item : ktl) {

                                                if (item.getUstKat().equals("0")) {
                                                    if (category_id.equals(item.getKatID())) {
                                                        out.print("<option selected=\"selected\" name=\"" + item.getKatID() + "\" value=\"" + item.getKatID() + "\">" + item.getKatAdi() + "</option>");
                                                    } else {
                                                        out.print("<option name=\"" + item.getKatID() + "\" value=\"" + item.getKatID() + "\">" + item.getKatAdi() + "</option>");
                                                    }

                                                    for (kategori items : ktl) {
                                                        if (item.getKatID().equals(items.getUstKat())) {

                                                            if (category_id.equals(items.getKatID())) {
                                                                out.print("<option selected=\"selected\" value=\"" + items.getKatID() + "\"> &nbsp;&nbsp; " + items.getKatAdi() + "</option>");
                                                            } else {
                                                                out.print("<option value=\"" + items.getKatID() + "\"> &nbsp;&nbsp; " + items.getKatAdi() + "</option>");
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        } else {
                                            out.print("<option name=\"\" value=\"0\">Tüm Kategoriler</option>");
                                            for (kategori item : ktl) {

                                                if (item.getUstKat().equals("0")) {
                                                    if (category_id.equals(item.getKatID())) {
                                                        out.print("<option selected=\"selected\" name=\"" + item.getKatID() + "\" value=\"" + item.getKatID() + "\">" + item.getKatAdi() + "</option>");
                                                    } else {
                                                        out.print("<option name=\"" + item.getKatID() + "\" value=\"" + item.getKatID() + "\">" + item.getKatAdi() + "</option>");
                                                    }

                                                    for (kategori items : ktl) {
                                                        if (item.getKatID().equals(items.getUstKat())) {

                                                            if (category_id.equals(items.getKatID())) {
                                                                out.print("<option selected=\"selected\" value=\"" + items.getKatID() + "\"> &nbsp;&nbsp; " + items.getKatAdi() + "</option>");
                                                            } else {
                                                                out.print("<option value=\"" + items.getKatID() + "\"> &nbsp;&nbsp; " + items.getKatAdi() + "</option>");
                                                            }
                                                        }
                                                    }
                                                }

                                            }
                                        }

                                    %>


                                </select>
                            </div>
                            
                        </div>
                                    
                            <input style="margin-top:5px;" name="submit_search" type="submit" value="Ara" id="button-search" class="btn btn-primary" />
                    </form>
                    </div>
                    <!-- Filters -->
                    <!-- Filters -->
                    <div class="product-filter filters-panel">
                        <div class="row">
                            <div class="col-md-2 hidden-sm hidden-xs">
                              <!--  <div class="view-mode">
                                    <div class="list-view">
                                        <button class="btn btn-default grid active" data-view="grid"><i class="fa fa-th-large"></i></button>
                                        <button class="btn btn-default list " data-view="list"><i class="fa fa-th-list"></i></button>
                                    </div>
                                </div> -->
                            </div>
                            <div class="short-by-show form-inline text-right col-sm-7 col-xs-12">
                            <!--    <div class="form-group">
                                    <label class="control-label" for="input-sort">Sort By:</label>
                                    <select id="input-sort" class="form-control" onchange="location = this.value;">
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=p.sort_order&amp;order=ASC&amp;search=a&amp;category_id=0" selected="selected">Default</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=pd.name&amp;order=ASC&amp;search=a&amp;category_id=0">Name (A - Z)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=pd.name&amp;order=DESC&amp;search=a&amp;category_id=0">Name (Z - A)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=p.price&amp;order=ASC&amp;search=a&amp;category_id=0">Price (Low &gt; High)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=p.price&amp;order=DESC&amp;search=a&amp;category_id=0">Price (High &gt; Low)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=rating&amp;order=DESC&amp;search=a&amp;category_id=0">Rating (Highest)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=rating&amp;order=ASC&amp;search=a&amp;category_id=0">Rating (Lowest)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=p.model&amp;order=ASC&amp;search=a&amp;category_id=0">Model (A - Z)</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;sort=p.model&amp;order=DESC&amp;search=a&amp;category_id=0">Model (Z - A)</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="input-limit">Show:</label>
                                    <select id="input-limit" class="form-control" onchange="location = this.value;">
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;limit=9" selected="selected">9</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;limit=25">25</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;limit=50">50</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;limit=75">75</option>
                                        <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;limit=100">100</option>
                                    </select>
                                </div> -->
                            </div>
                            <div class="box-pagination col-sm-3 text-right">
                             <!--   <ul class="pagination">
                                    <li class="active"><span>1</span></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">2</a></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">&gt;</a></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">&gt;|</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <!-- //end Filters -->
                    <!--Changed Listings-->
                    <div class="products-list row grid">
                        <%
                            
                            for(int i = 0; i < urunlerList.size(); i++) {
                                UrunArama urun = urunlerList.get(i); 
                                ResultSet rsr = db.dataSearch("select * from urun_fotograflari where urun_id = '"+ urun.getId()+"' limit 0,1" );
                                if (rsr.next()){
                                    foto_adi = rsr.getString("adi");
                                    klasor = rsr.getString("klasor");
                                } else {
                                    foto_adi = "noimage.jpg";
                                    klasor = "";
                                }
                                rsr.close();
                                indirimOrani = Math.round((Integer.parseInt(urun.getPiyasaFiyati()) - Integer.parseInt(urun.getGecerliFiyat())) * 100 / Integer.parseInt(urun.getGecerliFiyat())) ;
                        %>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://localhost:8080/imageupload/server/php/files/<%=klasor%>/<%=foto_adi%>" alt="<%=urun.getBaslik()%>" title="<%=urun.getBaslik()%>" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label--><span class="label label-sale">Sale</span>
                                    <!--full quick view block--><a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://localhost:8090/Proje/onYuz/quickView.jsp?view=true&urunID=<%=urun.getId()%>&klasor=<%=klasor%>&foto_adi=<%=foto_adi%>"> Quickview</a>
                                    <!--end full quick view block-->
                                </div>
                                <!-- end left block -->
                                <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=42&amp;search=a&amp;category_id=0"><%=urun.getBaslik()%></a></h4>
                                        <div class="description "> <%=urun.getKisaAciklama()%> </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new"><%=urun.getGecerliFiyat()%> TL</span><span class="price-old"><%=urun.getPiyasaFiyati()%> TL</span><span class="price-tax">Ex Tax: $60.00</span><span class="label label-percent">-<%=indirimOrani%>%</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Sepete Ekle" onclick="cart.add('42', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Sepete Ekle</span></button>
                                <!--        <button class="wishlist" type="button" data-toggle="tooltip" title="İstek Ekle" onclick="wishlist.add('42');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Karşılaştır" onclick="compare.add('42');"><i class="fa fa-exchange"></i></button> -->
                                    </div>
                                </div>
                                <!-- right block -->
                                
                            </div>
                        </div>
                        <%}%>
                    <!--    <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/141-270x270.jpg" alt="Canon EOS 5D" title="Canon EOS 5D" class="img-responsive" /></div>
                                    <!--countdown box-->
                                   <!-- <div class="countdown_box">
                                        <div class="countdown_inner">
                                            <div class="title">This limited offer ends</div>
                                            <script type="text/psajs" pagespeed_orig_type="text/javascript">
                                                <!--
                                                $(function() {
                                                    var austDay = new Date(2016, 9 - 1, 16);
                                                    $('.defaultCountdown-30').countdown(austDay, function(event) {
                                                        var $this = $(this).html(event.strftime('' + '<div class="time-item time-day"><div class="num-time">%d</div><div class="name-time">Day </div></div>' + '<div class="time-item time-hour"><div class="num-time">%H</div><div class="name-time">Hour </div></div>' + '<div class="time-item time-min"><div class="num-time">%M</div><div class="name-time">Min </div></div>' + '<div class="time-item time-sec"><div class="num-time">%S</div><div class="name-time">Sec </div></div>'));
                                                    });
                                                });
                                                //-->
                                         <!--   </script>
                                            <div class="defaultCountdown-30"></div>
                                        </div>
                                    </div>
                                    <!--end countdown box-- <!--New Label-->
                                   <!--Sale Label--><!--<span class="label label-sale">Sale</span> > -->
                                    <!--full quick view block--> <!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=30"> Quickview</a>
                                    <!--end full quick view block-->
                            <!--    </div>
                                <!-- end left block -->
                            <!--    <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=30&amp;search=a&amp;category_id=0">Canon EOS 5D</a></h4>
                                        <div class="description "> Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$60.00</span><span class="price-old">$145.00</span><span class="price-tax">Ex Tax: $60.00</span><span class="label label-percent">-59%</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('30', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('30');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('30');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
                      <!--      </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/35-270x270.jpg" alt="Filet Mign" title="Filet Mign" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--> <!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=44"> Quickview</a>
                                    <!--end full quick view block-->
                            <!--   </div>
                                <!-- end left block -->
                            <!--    <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=44&amp;search=a&amp;category_id=0">Filet Mign</a></h4>
                                        <div class="description "> Qui labore chicken lorem t-bone cupim nostrud strip steak tempor ground round. Tenderloin pork be.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$1,202.00</span><span class="price-tax">Ex Tax: $1,000.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('44', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('44');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('44');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
                      <!--      </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/E3_1-270x270.jpg" alt="HP LP3065" title="HP LP3065" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label--> <!--<span class="label label-sale">Sale</span>
                                    <!--full quick view block--> <!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=47"> Quickview</a>
                                    <!--end full quick view block-->
                           <!--     </div>
                                <!-- end left block -->
                            <!--    <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=47&amp;search=a&amp;category_id=0">HP LP3065</a></h4>
                                        <div class="description "> Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel .. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$60.00</span><span class="price-old">$100.00</span><span class="price-tax">Ex Tax: $60.00</span><span class="label label-percent">-40%</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('47', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('47');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('47');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
                 <!--           </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/14-270x270.jpg" alt="HTC Touch HD" title="HTC Touch HD" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--> <!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=28"> Quickview</a>
                                    <!--end full quick view block-->
               <!--                 </div>
                                <!-- end left block -->
                <!--                <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=28&amp;search=a&amp;category_id=0">HTC Touch HD</a></h4>
                                        <div class="description "> HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high de.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$122.00</span><span class="price-tax">Ex Tax: $100.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('28', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('28');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('28');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
           <!--                 </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/18-270x270.JPG" alt="iMac" title="iMac" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--><!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=41"> Quickview</a>
                                    <!--end full quick view block-->
                      <!--          </div>
                                <!-- end left block -->
               <!--                 <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=41&amp;search=a&amp;category_id=0">iMac</a></h4>
                                        <div class="description "> Just when you thought iMac had everything, now there´s even more. More powerful Intel Core 2 Duo .. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$122.00</span><span class="price-tax">Ex Tax: $100.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('41', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('41');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('41');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
        <!--                    </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/J10-270x270.jpg" alt="Jowl Pliq" title="Jowl Pliq" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--> <!--<a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=45"> Quickview</a>
                                    <!--end full quick view block-->
         <!--                       </div>
                                <!-- end left block -->
         <!--                         <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=45&amp;search=a&amp;category_id=0">Jowl Pliq</a></h4>
                                        <div class="description "> Cupidatat do boudin ball tip ham aliquip. Adipisicing id venison shankle, short loin cow r.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$2,000.00</span><span class="price-tax">Ex Tax: $2,000.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('45', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('45');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('45');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
        <!--                      </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/24-270x270.png" alt="MacBook" title="MacBook" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--> <!-- <a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=43"> Quickview</a>
                                    <!--end full quick view block-->
                <!--                  </div>
                                <!-- end left block -->
             <!--                     <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=43&amp;search=a&amp;category_id=0">MacBook</a></h4>
                                        <div class="description "> Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$602.00</span><span class="price-tax">Ex Tax: $500.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('43', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('43');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('43');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
        <!--                      </div>
                        </div>
                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div class="product-item-container">
                                <div class="left-block">
                                    <div class="product-image-container "><img src="http://opencart.magentech.com/themes/so_market/image/cache/catalog/product/11-270x270.jpg" alt="Nikon D300" title="Nikon D300" class="img-responsive" /></div>
                                    <!--countdown box-->
                                    <!--end countdown box-- <!--New Label-->
                                    <!--Sale Label-->
                                    <!--full quick view block--> <!-- <a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://opencart.magentech.com/themes/so_market/index.php?route=product/quickview&amp;product_id=31"> Quickview</a>
                                    <!--end full quick view block-->
              <!--                    </div>
                                <!-- end left block -->
               <!--                   <div class="right-block">
                                    <div class="caption">
                                        <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;product_id=31&amp;search=a&amp;category_id=0">Nikon D300</a></h4>
                                        <div class="description "> Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combine.. </div>
                                        <div class="ratings">
                                            <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                        </div>
                                        <div class="price"><span class="price-new">$98.00</span><span class="price-tax">Ex Tax: $80.00</span></div>
                                    </div>
                                    <div class="button-group">
                                        <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('31', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Add to Cart</span></button>
                                        <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('31');"><i class="fa fa-heart"></i></button>
                                        <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('31');"><i class="fa fa-exchange"></i></button>
                                    </div>
                                </div>
                                <!-- right block -->
       <!--                       </div>
                        </div>
                    </div>
                    <!--// End Changed listings-->
                    <!-- Filters -->
                    <div class="product-filter product-filter-bottom filters-panel" style="float: left; width: 100%;">
                        <div class="row">
                            <div class="col-md-2 hidden-sm hidden-xs">
                                <div class="view-mode">
                                <!--     <div class="list-view">
                                       <button class="btn btn-default grid " data-view="grid"><i class="fa fa-th-large"></i></button>
                                        <button class="btn btn-default list active" data-view="list"><i class="fa fa-th-list"></i></button>
                                    </div> -->
                                </div> 
                            </div>
                            <div class="short-by-show text-center col-sm-7 col-xs-12">
                                <div class="form-group" style="margin: 7px 10px"></div>
                            </div>
                            <div class="box-pagination col-md-3 col-sm-4 text-right">
                            <!--    <ul class="pagination">
                                    <li class="active"><span>1</span></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">2</a></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">&gt;</a></li>
                                    <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/search&amp;search=a&amp;category_id=0&amp;page=2">&gt;|</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <!-- //end Filters -->
                    <!--changed listings-->
                    <!--end content-->
                </div>
            </div>
        </div>
     <!--   <script type="text/psajs" pagespeed_orig_type="text/javascript">
            
            
            $('#button-search').bind('click', function() {
                url = 'index.php?route=product/search';

                var search = $('#content input[name=\'search\']').prop('value');

                if (search) {
                    url += '&search=' + encodeURIComponent(search);
                }

                var category_id = $('#content select[name=\'category_id\']').prop('value');

                if (category_id > 0) {
                    url += '&category_id=' + encodeURIComponent(category_id);
                }

                var sub_category = $('#content input[name=\'sub_category\']:checked').prop('value');

                if (sub_category) {
                    url += '&sub_category=true';
                }

                var filter_description = $('#content input[name=\'description\']:checked').prop('value');

                if (filter_description) {
                    url += '&description=true';
                }

                location = url;
            });

            $('#content input[name=\'search\']').bind('keydown', function(e) {
                if (e.keyCode == 13) {
                    $('#button-search').trigger('click');
                }
            });

            $('select[name=\'category_id\']').on('change', function() {
                if (this.value == '0') {
                    $('input[name=\'sub_category\']').prop('disabled', true);
                } else {
                    $('input[name=\'sub_category\']').prop('disabled', false);
                }
            });

            

            $(document).ready(function() {
                // Check if Cookie exists
                if ($.cookie('display')) {
                    view = $.cookie('display');
                } else {
                    view = 'list';
                }
                if (view) display(view);

                // Click Button
                $('.list-view .btn').each(function() {
                    var ua = navigator.userAgent,
                        event = (ua.match(/iPad/i)) ? 'touchstart' : 'click';
                    $(this).bind(event, function() {
                        $(this).addClass(function() {
                            if ($(this).hasClass('active')) return '';
                            return 'active';
                        });
                        $(this).siblings('.btn').removeClass('active');
                        $catalog_mode = $(this).data('view');
                        display($catalog_mode);
                    });

                });
            });

            
        </script>
        <!-- end container section -->
        
    <div class="back-to-top"><i class="fa fa-angle-up"></i></div>
    <div id="sp-cpanel_btn" class="isDown visible-lg"><i class="fa fa-cog"></i></div>
    <div id="sp-cpanel" class="sp-delay">
        <h2 class="sp-cpanel-title"> Demo Options <span class="sp-cpanel-close"><i class="fa fa-times"></i></span></h2>
        <div id="sp-cpanel_settings">
            <div class="panel-group">
                <label>Color Scheme</label>
                <div class="group-schemes"><span data-scheme="default" class="item_scheme selected"><span style="background: #e8622d;"></span></span><span data-scheme="blue" class="item_scheme "><span style="background: #478bca;"></span></span><span data-scheme="boocdo" class="item_scheme "><span style="background: #e54e4e;"></span></span><span data-scheme="cyan" class="item_scheme "><span style="background: #1ea181;"></span></span><span data-scheme="green" class="item_scheme "><span style="background: #52a633;"></span></span>
                </div>
            </div>
            <div class="panel-group ">
                <label>Layout Box</label>
                <div class="group-boxed">
                    <select id="cp-layoutbox" name="cplayoutbox" class="form-control" onchange="changeLayoutBox(this.value);">
                        <option selected value="full">Wide</option>
                        <option value="boxed">Boxed</option>
                        <option value="iframed">Iframed</option>
                        <option value="rounded">Rounded</option>
                    </select>
                </div>
            </div>
            <div class="panel-group">
                <label>Body Image</label>
                <div class="group-pattern">
                    <div data-pattern="28" class="img-pattern "><img src="images/patterns/28.png" alt="pattern 28"></div>
                    <div data-pattern="29" class="img-pattern "><img src="images/patterns/29.png" alt="pattern 29"></div>
                    <div data-pattern="30" class="img-pattern "><img src="images/patterns/30.png" alt="pattern 30"></div>
                    <div data-pattern="31" class="img-pattern "><img src="images/patterns/31.png" alt="pattern 31"></div>
                    <div data-pattern="32" class="img-pattern "><img src="images/patterns/32.png" alt="pattern 32"></div>
                    <div data-pattern="33" class="img-pattern "><img src="images/patterns/33.png" alt="pattern 33"></div>
                    <div data-pattern="34" class="img-pattern "><img src="images/patterns/34.png" alt="pattern 34"></div>
                    <div data-pattern="35" class="img-pattern "><img src="images/patterns/35.png" alt="pattern 35"></div>
                    <div data-pattern="36" class="img-pattern "><img src="images/patterns/36.png" alt="pattern 36"></div>
                    <div data-pattern="37" class="img-pattern "><img src="images/patterns/37.png" alt="pattern 37"></div>
                    <div data-pattern="38" class="img-pattern "><img src="images/patterns/38.png" alt="pattern 38"></div>
                    <div data-pattern="39" class="img-pattern "><img src="images/patterns/39.png" alt="pattern 39"></div>
                    <div data-pattern="40" class="img-pattern "><img src="images/patterns/40.png" alt="pattern 40"></div>
                    <div data-pattern="41" class="img-pattern "><img src="images/patterns/41.png" alt="pattern 41"></div>
                    <div data-pattern="42" class="img-pattern "><img src="images/patterns/42.png" alt="pattern 42"></div>
                    <div data-pattern="43" class="img-pattern "><img src="images/patterns/43.png" alt="pattern 43"></div>
                    <div data-pattern="44" class="img-pattern "><img src="images/patterns/44.png" alt="pattern 44"></div>
                    <div data-pattern="45" class="img-pattern "><img src="images/patterns/45.png" alt="pattern 45"></div>
                </div>
                <p class="label-sm">Background only applies for Boxed,Framed, Rounded Layout</p>
            </div>
            <div class="reset-group"><a href="index.php" class="btn btn-success " onclick="ResetAll()">Reset</a></div>
        </div>
    </div>
    <script type="text/psajs" pagespeed_orig_type="text/javascript">
        
        var themes = 'so-market';
        
    </script>
    <link rel='stylesheet' property='stylesheet' href='css/cpanel.css' type='text/css' media='all' />
    <script type="text/psajs" pagespeed_orig_type="text/javascript" src="js/cpanel.js"></script>
    <!-- Social widgets -->
 <!--   <section class="social-widgets visible-lg">
        <ul class="items">
            <li class="item item-01 facebook"><a href="catalog/view/theme/so-market/template/social/facebook.php?account=envato" class="tab-icon"><span class="fa fa-facebook"></span></a>
                <div class="tab-content">
                    <div class="title">
                        <h5>FACEBOOK</h5></div>
                    <div class="loading"><img src="images/ajax-loader.gif" class="ajaxloader" alt="loader"></div>
                </div>
            </li>
            <li class="item item-02 twitter"><a href="catalog/view/theme/so-market/template/social/twitter.php?account_twitter=envato" class="tab-icon"><span class="fa fa-twitter"></span></a>
                <div class="tab-content">
                    <div class="title">
                        <h5>TWITTER FEEDS</h5></div>
                    <div class="loading"><img src="images/ajax-loader.gif" class="ajaxloader" alt="loader"></div>
                </div>
            </li>
            <li class="item item-03 youtube"><a href="catalog/view/theme/so-market/template/social/youtubevideo.php?account_video=LHdVkPrdRYg" class="tab-icon"><span class="fa fa-youtube"></span></a>
                <div class="tab-content">
                    <div class="title">
                        <h5>YouTube</h5></div>
                    <div class="loading"><img src="images/ajax-loader.gif" class="ajaxloader" alt="loader"></div>
                </div>
            </li>
        </ul>
    </section>
    <!-- //end Social widgets -->
    </div>
    <script type="text/javascript" src="js/js_defer.js" async defer></script>
</body>

</html>


 <%@include file="alt.jsp" %>
