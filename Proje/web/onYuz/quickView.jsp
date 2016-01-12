<%@page import="java.sql.ResultSet"%>
<%@page import="sinif.DB"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% 
    String urunId = "";
    String urunBaslik = "";
    String urunDetay = "";
    String gecerliFiyat = "";
    String piyasaFiyati = "";
    String gununUrunu = "";
    String haftaninUrunu = "";
    String kampanyaliUrun = "";
    String gosterim= "";
    String klasor = "";
    String foto_adi = "";
    boolean quickViewDurum = (request.getParameter("view") != null);
    if(quickViewDurum) {
        urunId = request.getParameter("urunID");
        klasor = request.getParameter("klasor");
        foto_adi = request.getParameter("foto_adi");
        try{
        DB dbQv = new DB();
        ResultSet rsQv = dbQv.data("urunler where id = '"+ urunId +"'");
        while(rsQv.next()) {
            urunBaslik = rsQv.getString("baslik");
            urunDetay = rsQv.getString("detay");
            gecerliFiyat = rsQv.getString("gecerliFiyat");
            piyasaFiyati = rsQv.getString("piyasaFiyati");
            gununUrunu = rsQv.getString("gununUrunu");
            haftaninUrunu = rsQv.getString("haftaninUrunu");
            kampanyaliUrun = rsQv.getString("kampanyaliUrun");
            gosterim = rsQv.getString("gosterim");
        }
        } catch (Exception e) {
            System.out.println("Hata: " + e);
        }
    }
%>


<!DOCTYPE html>
<!--[if IE]><![endif]--><!--[if IE 8 ]>
<html dir="ltr" lang="1" class="ie8">
                        <![endif]-->
<!--[if IE 9 ]><html dir="ltr" lang="1" class="ie9">
<![endif]--><!--[if (gt IE 9)|!(IE)]><!--><html dir="ltr">
<!--<![endif]--><head>
<title>SO Market - Responsive Multipurpose OpenCart Theme</title>
<script src="js/tum_script.js" type="text/javascript"></script>
<link href="css/cpanel.css" rel="stylesheet" type="text/css"/>
<link href="css/css.css" rel="stylesheet" type="text/css"/>
<link href="css/ie9-and-up.css" rel="stylesheet" type="text/css"/>
<link href="css/responsive.css" rel="stylesheet" type="text/css"/>
<link href="css/theme.css" rel="stylesheet" type="text/css"/>
<link href="css/index.php.css" rel="stylesheet" type="text/css"/>
<meta charset="UTF-8" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'><style type="text/css"> body{font-family:Open Sans, sans-serif } </style><link href='' rel='stylesheet' type='text/css'><link href='' rel='stylesheet' type='text/css'><style type="text/css"> body { background-color:inherit; } </style>

<link href="css/font-awesome.css" rel="stylesheet" type="text/css"/>
<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<title>QuickView</title>
</head>

<div class="container product-detail" style="margin-top: 3%;">
    <div class="row">
        <div id="content" class="col-sm-12">
            <div class="product-view row">
                <div class="left-content-product col-lg-10 col-xs-12">
                    <div class="row">
                        <div class="content-product-left col-sm-6 col-xs-12 ">
                            <div class="large-image "><img itemprop="image" class="product-image-zoom" src="http://localhost:8080/imageupload/server/php/files/<%=klasor%>/<%=foto_adi%>" data-zoom-image="http://localhost:8080/imageupload/server/php/files/<%=klasor%>/<%=foto_adi%>" title="<%=urunBaslik%>" alt="<%=urunBaslik%>">
                                <!--New Label-->
                                <!--Sale Label--><span class="label label-sale"></span></div> 
                         
                            <script type="text/javascript">
                                
                                $(document).ready(function() {
                                    var $nav = $("#thumb-slider");
                                    $nav.each(function() {
                                        $(this).owlCarousel2({
                                            nav: true,
                                            dots: false,
                                            slideBy: 1,
                                            margin: 10,
                                            responsive: {
                                                0: {
                                                    items: 2
                                                },
                                                600: {
                                                    items: 3
                                                },
                                                1000: {
                                                    items: 3
                                                }
                                            }
                                        });
                                    })

                                });
                                
                            </script>
                        </div>
                        <div class="content-product-right col-sm-6 col-xs-12">
                            <div class="title-product">
                                <h1><%=urunBaslik%></h1></div>
                            <!-- Review ---->
                            <div class="box-review">
                                <div class="ratings">
                                    <div class="rating-box"><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span><span class="fa fa-stack"><i class="fa fa-star-o fa-stack-1x"></i></span></div>
                                </div><a class="reviews_button" href="" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"></a>  <a class="write_review_button" href="" onclick="$('a[href=\'#tab-review\']').trigger('click'); return false;"></a></div>
                            <div class="product-label">
                                <div class="product_page_price price" itemprop="offerDetails" itemscope="" itemtype="http://data-vocabulary.org/Offer"><span class="price-old"><%=piyasaFiyati%> TL</span><span class="price-new" itemprop="price"><%=gecerliFiyat%> TL</span>
                                    <div class="discount"></div>
                                </div>
                               
                            </div>
                          
                            <div id="product">
                                <div class="form-group box-info-product">
                                    <div class="option quantity">
                                        <div class="input-group quantity-control"  style="">
                                            <label>Adet</label>
                                            <input class="form-control" type="text" name="quantity" value="1">
                                            <input type="hidden" name="product_id" value="48"><span class="input-group-addon product_quantity_down">−</span><span class="input-group-addon product_quantity_up">+</span></div>
                                    </div>
                                    <div class="cart">
                                        <input type="button" data-toggle="tooltip" title="" value="Sepete Ekle" data-loading-text="Loading..." id="button-cart" class="btn btn-mega btn-lg" data-original-title="Add to Cart">
                                    </div>
                                   
                                </div>
                                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                              <!--  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4f89a9d74637536f"></script> -->
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
                    
                    <div class="tab-content col-lg-10 col-sm-9 col-xs-12">
                        <div id="tab-1" class="tab-pane fade active in">
                            <div class="cpt_product_description ">
                                <div>
                                    <h3>DETAY</h3>
                                    <p><%=urunDetay%></p>
                                </div>
                            </div>
                            <!-- cpt_container_end -->
                        </div>
                        
                        <div id="tab-4" class="tab-pane fade"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/search&amp;tag=iPod">iPod</a></div>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                <!--
                $(document).ready(function() {
                    $('.owl2-item').magnificPopup({
                        items: [{
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B10-600x600.jpg'
                        }, {
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B10-600x600.jpg'
                        }, {
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B9-600x600.jpg'
                        }, {
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B11-600x600.jpg'
                        }, {
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B8-600x600.jpg'
                        }, {
                            src: 'http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B5-600x600.jpg'
                        }, ],
                        gallery: {
                            enabled: true,
                            preload: [0, 2]
                        },
                        type: 'image',
                        mainClass: 'mfp-fade',
                        callbacks: {
                            open: function() {
                                $cur = this.st.el;
                                var activeIndex = parseInt($cur.children(".thumbnail").attr('data-index'));
                                var magnificPopup = $.magnificPopup.instance;
                                magnificPopup.goTo(activeIndex);
                            }
                        }
                    });
                });

                //-->
            </script>
            <script type="text/javascript">
                // <![CDATA[
                jQuery(document).ready(function($) {
                    $('.releate-products').owlCarousel2({
                        pagination: false,
                        center: false,
                        nav: true,
                        dots: false,
                        loop: true,
                        margin: 25,
                        navText: ['prev', 'next'],
                        slideBy: 1,
                        autoplay: false,
                        autoplayTimeout: 2500,
                        autoplayHoverPause: true,
                        autoplaySpeed: 800,
                        startPosition: 0,
                        responsive: {
                            0: {
                                items: 1
                            },
                            480: {
                                items: 2
                            },
                            768: {
                                items: 3
                            },
                            1200: {
                                items: 4
                            }
                        }
                    });
                });
                // ]]>
            </script>
        </div>
    </div>
</div>
    