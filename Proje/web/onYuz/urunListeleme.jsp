
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>
<%@page import = "sinif.DB" %>
<%@page import="beans.kategori"%>
<%@page import="beans.urunler"%>
<%@page import="beans.urunResimler"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
                
<% 
    String urunKategoriID = request.getParameter("urunKateID");
    
    ArrayList<kategori> kategoriList = new ArrayList();
try{
    ResultSet rsKate = db.data("kategori");
    while (rsKate.next()) {
        kategori kt = new kategori();
        kt.setKatID(rsKate.getString("katID"));
        kt.setUstKat(rsKate.getString("ustKat"));
        kt.setKatAdi(rsKate.getString("katAdi"));
        kategoriList.add(kt);
    }
    

} catch(Exception ex) {
    
}
    

%>





<% ArrayList<urunler> urunList = new ArrayList();
try{
    ResultSet rsUrun = db.data("urunler");
    while (rsUrun.next()) {
        urunler urun = new urunler();
        urun.setId(rsUrun.getString("id"));
        urun.setKatID(rsUrun.getString("katID"));
        urun.setBaslik(rsUrun.getString("baslik"));
        urun.setKisaAciklama(rsUrun.getString("kisaAciklama"));
        urun.setGununUrunu(rsUrun.getString("gununUrunu"));
        urun.setHaftaninUrunu(rsUrun.getString("haftaninUrunu"));
        urun.setKampanyaliUrun(rsUrun.getString("kampanyaliUrun"));
        urun.setDetay(rsUrun.getString("detay"));
        urun.setPiyasaFiyati(rsUrun.getString("piyasaFiyati"));
        urun.setGecerliFiyat(rsUrun.getString("gecerliFiyat"));
        urun.setGosterim(rsUrun.getString("gosterim"));
        
            
        urunList.add(urun);
    }

    
} catch(Exception ex) {
    
}
    

%>


<div class="container">
            <ul class="breadcrumb">
                <li><a href="index.jsp"><i class="fa fa-home"></i></a></li>
                
            </ul>
    
            <div class="row">
               
                <aside class="col-sm-4 col-md-3 content-aside left_column">
                    
                    <div class="module block_category">
                        <h3 class="modtitle">Kategoriler</h3>
                        <div class="modcontent box-content">
                            
                            <%    for (kategori item : kategoriList) {
                                if (item.getUstKat().equals("0")) {
%>
                            <ul class="list-group">
                                <li class="hadchild"><a href="urunListeleme.jsp?urunKateID=<%=item.getKatID()%>" class="list-group-item "><span><%=item.getKatAdi()%></span></a>
                                    
                                    <%

                                                                                                                                for (kategori items : kategoriList) {

                                                                                                                                    if (item.getKatID().equals(items.getUstKat())) {

                                                            
                                                                                                                                         %>
   <ul class="list-group">
                                        <li><a href="urunListeleme.jsp?urunKateID=<%=items.getKatID()%>" class="list-group-item"><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=items.getKatAdi()%></span></a></li>
                                    </ul>
                                    
                                    <%
                                        } }
                                    %>
                                </li>
                                <%
                                    }
}
                                %>
                        
                               
                            </ul>
                        </div>
                    </div>
                
                </aside>
                   <div id="content" class="col-sm-8 col-md-9 col-xs-12">
                    <div class="products-category">
                        
                        <!-- Filters -->
                        <div class="product-filter filters-panel">
                            <div class="row">
                                <div class="col-md-2 hidden-sm hidden-xs">
                                    <div class="view-mode">
                                        <div class="list-view">
                                            <button class="btn btn-default grid active" data-view="grid" data-toggle="tooltip" title="Grid"><i class="fa fa-th"></i></button>
                                            <button class="btn btn-default list " data-view="list" data-toggle="tooltip" title="List"><i class="fa fa-th-list"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="short-by-show form-inline text-right col-md-7 col-sm-8 col-xs-12">
                                    <div class="form-group short-by">
                                        <label class="control-label" for="input-sort">Sort By:</label>
                                        <select id="input-sort" class="form-control" onchange="location = this.value;">
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=p.sort_order&amp;order=ASC" selected="selected">Default</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=pd.name&amp;order=ASC">Name (A - Z)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=pd.name&amp;order=DESC">Name (Z - A)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=p.price&amp;order=ASC">Price (Low &gt; High)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=p.price&amp;order=DESC">Price (High &gt; Low)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=rating&amp;order=DESC">Rating (Highest)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=rating&amp;order=ASC">Rating (Lowest)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=p.model&amp;order=ASC">Model (A - Z)</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;sort=p.model&amp;order=DESC">Model (Z - A)</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="input-limit">Show:</label>
                                        <select id="input-limit" class="form-control" onchange="location = this.value;">
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;limit=9" selected="selected">9</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;limit=25">25</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;limit=50">50</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;limit=75">75</option>
                                            <option value="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;limit=100">100</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="box-pagination col-sm-3 text-right">
                                    <ul class="pagination">
                                        <li class="active"><span>1</span></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">2</a></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">&gt;</a></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">&gt;|</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- //end Filters -->
                        <!--changed listings-->
                        <div class="products-list row grid">
                            
                            <%
                                for(urunler it : urunList) {
                                   if(it.getKatID().equals(urunKategoriID)) 
                                   {
                                     ResultSet rsResim = db.data("urun_fotograflari where urun_id = '"+it.getId()+"' limit 0,1");
                                     if(rsResim.next()) {
                                         
                                     
                            %>
                            
                            <div class="product-layout col-md-4 col-sm-6 col-xs-12 ">
                                <div class="product-item-container">
                                    <div class="left-block">
                                        
                                        
                                        <div class="product-image-container second_img ">
                                            
                                            <img src="http://localhost:8080/imageupload/server/php/files/<%=rsResim.getString("klasor")%>/<%=rsResim.getString("adi")%>" alt="<%=it.getBaslik()%>" title="<%=it.getBaslik()%>" class="img-responsive" />
                                            </div>
                                        <!--countdown box-->
                                        <!--end countdown box-- <!--New Label-->
                                        <!--Sale Label-->
                                        <!--full quick view block--><a class="quickview iframe-link visible-lg" data-fancybox-type="iframe" href="http://localhost:8080/Proje/onYuz/quickView.jsp?view=true&urunID=<%=it.getId()%>&klasor=<%=rsResim.getString("klasor")%>&foto_adi=<%=rsResim.getString("adi")%>"> Quickview</a>
                                        <!--end full quick view block-->
                                    </div>
                                    <!-- end left block -->
                                    
                                    <div class="right-block">
                                        <div class="caption">
                                            <h4><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/product&amp;path=25&amp;product_id=42"><%=it.getBaslik()%></a></h4>
                                            <div class="ratings">
                                                <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star fa-stack-1x"></i><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                            </div>
                                            <div class="price"><span class="price-new"><%=it.getGecerliFiyat()%></span><span class="price-old"><%=it.getPiyasaFiyati()%></span><span class="price-tax">Ex Tax: $60.00</span></div>
                                            <div class="description item-desc ">
                                                <p><%=it.getKisaAciklama()%></p>
                                            </div>
                                        </div>
                                        <div class="button-group">
                                            <button class="addToCart" type="button" data-toggle="tooltip" title="Add to Cart" onclick="cart.add('42', '1');"><i class="fa fa-shopping-cart"></i><span class="hidden-xs">Sepete Ekle</span></button>
                                            <button class="wishlist" type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add('42');"><i class="fa fa-heart"></i></button>
                                            <button class="compare" type="button" data-toggle="tooltip" title="Compare this Product" onclick="compare.add('42');"><i class="fa fa-exchange"></i></button>
                                        </div>
                                    </div>
                                    <!-- right block -->
                                </div>
                            </div>
                            <%
                                } } }
                            %>
                        </div>
                        <!--// End Changed listings-->
                        <!-- Filters -->
                        <div class="product-filter product-filter-bottom filters-panel" style="float: left; width: 100%;">
                            <div class="row">
                                <div class="col-md-2 hidden-sm hidden-xs">
                                    <div class="view-mode">
                                        <div class="list-view">
                                            <button class="btn btn-default grid " data-view="grid"><i class="fa fa-th-large"></i></button>
                                            <button class="btn btn-default list active" data-view="list"><i class="fa fa-th-list"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="short-by-show text-center col-md-7 col-sm-8 col-xs-12">
                                    <div class="form-group" style="margin: 7px 10px">Showing 1 to 9 of 10 (2 Pages)</div>
                                </div>
                                <div class="box-pagination col-md-3 col-sm-4 text-right">
                                    <ul class="pagination">
                                        <li class="active"><span>1</span></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">2</a></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">&gt;</a></li>
                                        <li><a href="http://opencart.magentech.com/themes/so_market/index.php?route=product/category&amp;path=25&amp;page=2">&gt;|</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- //end Filters -->
                        <!--changed listings-->
                        <!--end content-->
                        <script type="text/psajs" pagespeed_orig_type="text/javascript">
                            <!--
                            function display(view) {
                                $('.products-list').removeClass('list grid').addClass(view);
                                $('.list-view .btn').removeClass('active');
                                if (view == 'list') {
                                    $('.products-list .product-layout').addClass('col-lg-12');
                                    $('.products-list .product-layout .left-block').addClass('col-md-4');
                                    $('.products-list .product-layout .right-block').addClass('col-md-8');
                                    $('.products-list .product-layout .item-desc').removeClass('hidden')
                                    $('.list-view .' + view).addClass('active');
                                    $.cookie('display', 'list');
                                } else {
                                    $('.products-list .product-layout').removeClass('col-lg-12');
                                    $('.products-list .product-layout .left-block').removeClass('col-md-4');
                                    $('.products-list .product-layout .right-block').removeClass('col-md-8');
                                    $('.products-list .product-layout .item-desc').addClass('hidden');
                                    $('.list-view .' + view).addClass('active');
                                    $.cookie('display', 'grid');
                                }
                            }

                            $(document).ready(function() {
                                // Check if Cookie exists
                                if ($.cookie('display')) {
                                    view = $.cookie('display');
                                } else {
                                    view = 'grid';
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

                            //-->
                        </script>
                    </div>
                </div>         
                                
            </div>
           
            </div>
  


<%@include file="alt.jsp" %>