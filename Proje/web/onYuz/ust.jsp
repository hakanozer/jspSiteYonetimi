<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@page import="sinif.DB" %>
<% DB db = new DB();  %>
<%
    UID cruUID = new UID();
session.setAttribute("SepetID", cruUID.toString());
%>
<<<<<<< HEAD
<%
// kategori data
    ArrayList<kategori> ktl = new ArrayList();
    
    ResultSet rskll = db.data("kategori");
    while (rskll.next()) {
        kategori kt = new kategori();
        kt.setKatID(rskll.getString("katID"));
        kt.setUstKat(rskll.getString("ustKat"));
        kt.setKatAdi(rskll.getString("katAdi"));
        ktl.add(kt);
    }
=======

<% ArrayList<kategori> kategoriLs = new ArrayList();
try{
    ResultSet rskl = db.data("kategori");
    while (rskl.next()) {
        kategori kt = new kategori();
        kt.setKatID(rskl.getString("katID"));
        kt.setUstKat(rskl.getString("ustKat"));
        kt.setKatAdi(rskl.getString("katAdi"));
        kategoriLs.add(kt);
    }

} catch(Exception ex) {
    
}
    

>>>>>>> origin/master
%>
<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]>
<html dir="ltr" lang="1" class="ie8">
    <![endif]-->
<!--[if IE 9 ]><html dir="ltr" lang="1" class="ie9">
<![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="ltr">
    <!--<![endif]-->

    <head>

    <title>SO Market - Responsive Multipurpose OpenCart Theme</title>
    <script src="js/tum_script.js" type="text/javascript"></script>
    <link href="css/cpanel.css" rel="stylesheet" type="text/css" />
    <link href="css/css.css" rel="stylesheet" type="text/css" />
    <link href="css/ie9-and-up.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" />
    <link href="css/theme.css" rel="stylesheet" type="text/css" />
    <link href="css/index.php.css" rel="stylesheet" type="text/css" />
    <meta charset="UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
        <style type="text/css">
            body {
                font-family: Open Sans, sans-serif
            }
        </style>
        <link href='' rel='stylesheet' type='text/css'>
            <link href='' rel='stylesheet' type='text/css'>
                <style type="text/css">
                    body {
                        background-color: inherit;
                    }
                </style>
                </head>

                <body class="common-home ltr res layout-1 no-bgbody no_msie ">
                <div id="wrapper" class="wrapper-full">
                    <header style="margin-bottom: -50px;" id="header" class=" variantleft">
                        <!-- Header Top -->
                        <section class="header-top compact-hidden">
                            <div class="container">
                                <div class="row">
                                    <div class="header-top-left col-md-8 col-sm-6">
                                        <div class="col-md-6 col-sm-12 navbar-welcome hidden-xs"> Welcome to market <a href="index.php?route=account/register"><strong>Join Free</strong></a> or <a href="index.php?route=account/login"><strong>Sign in</strong></a></div>
                                        <div class="col-sm-6 navbar-phone hidden-sm hidden-xs"> Call us tell free: <b>+91 98989898</b></div>
                                    </div>
                                    <div class="header-top-right col-md-4 col-sm-6">
                                        <ul class="top-link list-inline">
                                            <li class="account" id="my_account">
                                                <a href="hesap.jsp" title="Hesabım" class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                                                    <span>Hesabım</span>
                                                    <span class="fa fa-angle-down"></span></a>
                                                <ul class="dropdown-menu ">
                                                    <li>
                                                        <a href="kayit.jsp">
                                                            <i class="fa fa-user">

                                                            </i> Kayıt </a>
                                                    </li>

                                                    <li>
                                                        <a href="giris.jsp">
                                                            <i class="fa fa-pencil-square-o">

                                                            </i> Giriş </a>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li class="login">
                                                <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/cart" title="Shopping Cart">
                                                    <span>Shopping Cart</span>
                                                </a>
                                            </li>
                                            <li class="checkout">
                                                <a href="odemeSayfasi.jsp" class="top-link-checkout" title="Checkout">Checkout</a></li>
                                            <li >
                                                <a href="guvenliCikis.jsp" class="top-link-checkout" title="Çıkış" style="
                                                   background-color: red;
                                                   color: white;
                                                   font-variant: small-caps;
                                                   font-weight: bold;
                                                   " >Güvenli Çıkış</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- container for top line of header -->
                        <section class="header-center left">
                            <div class="container">
                                <div class="row">
                                    <!--header variant center-->
                                    <!-- Logo -->
                                    <div class="navbar-logo col-md-3 col-sm-12 col-xs-12">
                                        <a href="index.jsp"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/catalog/theme_logo.png" title="SO Market - Layout 4" alt="SO Market - Layout 4"></a>
                                    </div>
                                    <!-- //end Logo -->
                                    <div class="header-center-right col-md-9 col-sm-8 col-xs-12 compact-hidden">
                                        <%
                                            boolean musteriGiris = (session.getAttribute("musterininAdi") != null);
                                            if (musteriGiris) {
                                                if (!adi.equals("")) {
                                        %>
                                        <label>Hoşgeldiniz <%=adi%> <%=soyadi%> </label>
                                        <%}
                }%>
                                        <ul class="links">
                                            <li class="wishlist"><a href="" id="wishlist-total" class="top-link-wishlist" title="Wish List (0)"><i class="fa fa-heart"></i></a></li>
                                            <li class="wishlist"><a href="index.php?route=product/compare" id="comapre-total" class="top-link-wishlist" title="Compare"><i class="fa fa-bar-chart-o"></i></a></li>
                                        </ul>
                                    </div>
                                    <nav id="menu" class="navbar col-lg-7 col-md-7 col-sm-12 col-xs-12 hidden">
                                        <div class="navbar-header"><span class="visible-xs visible-sm"><i class="fa fa-bars"></i>Menu</span></div>
                                        <div class="collapse navbar-collapse ">
                                            <ul class="nav navbar-nav ">
                                                <li class="categories_defu dropdown sub"><a class="dropdown-toggle" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20">Jewelry &amp; Watches</a><span class="submore"></span>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76">Earings</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_26">Wedding Rings</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_27">Men Watches</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="categories_defu dropdown sub"><a class="dropdown-toggle" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18">Electronics</a><span class="submore"></span>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_46">Battereries &amp; Chargers</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45">Headphones, Headsets</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30">Home Audio</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_32">Mp3 Players &amp; Accessories</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="categories_defu dropdown sub"><a class="dropdown-toggle" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17">Bags, Holiday Supplies</a><span class="submore"></span>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_68">Gift &amp; Lifestyle Gadgets</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_69">Gift for Man</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_70">Gift for Woman</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_71">Lighter &amp; Cigar Supplies</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li class="categories_defu dropdown sub"><a class="dropdown-toggle" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33">Automotive</a><span class="submore"></span>
                                                    <div class="dropdown-menu">
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_61">Car Alarms and Security</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_62">Car Audio &amp; Speakers</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63">Gadgets &amp; Auto Parts</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_60">More Car Accessories</a>
                                                                <!--sublevel 2-->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                    <!-- //end Navbar -->
                                </div>
                            </div>
                        </section>
                        <!-- end container for top line of header -->
                        <!-- Header Bottom -->
                        <section class="header-bottom">
                            <div class="container">



                                <div class="row">
                                            <div class="sidebar-menu col-md-3 col-sm-4 col-xs-12">
                                                <div class="responsive so-megamenu">
                                                    <div class="so-vertical-menu no-gutter">
                                                        <nav class="navbar-default">
                                                            <div class=" container-megamenu container vertical ">
                                                                <div id="menuHeading">
                                                                    <div class="megamenuToogle-wrapper">
                                                                        <div class="megamenuToogle-pattern">
                                                                            <div class="container">
                                                                                <div>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                    <span></span>
                                                                                </div> Kategoriler <i class="fa fa-chevron-circle-down pull-right arrow-circle"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="navbar-header">
                                                                    <button type="button" id="show-verticalmenu" data-toggle="collapse" class="navbar-toggle">
                                                                        <span class="icon-bar"></span>
                                                                        <span class="icon-bar"></span>
                                                                        <span class="icon-bar"></span>
                                                                    </button>
                                                                </div>
                                                                <div class="vertical-wrapper">
                                                                    <span id="remove-verticalmenu" class="fa fa-times"></span>
                                                                    <div class="megamenu-pattern">
                                                                        <div class="container">
                                                                            <ul class="megamenu">
                                                                                <li class="home">
                                                                                    <a href="index.jsp">
                                                                                        <span><strong>Home</strong></span>
                                                                                    </a>
                                                                                </li>
                                                                                
                                                                        <%    for (kategori item : kategoriLs) {

                                                                                                                            if (item.getUstKat().equals("0")) {

                                                                                                                    %>
                                                                                                                    <li class="item-vertical style1 with-sub-menu hover">
                                                                                                                        <p class="close-menu"></p>

                                                                                                                        <a href="urunListeleme.jsp?urunKateID=<%=item.getKatID()%>" class="clearfix">
                                                                                                                            <span>                                                                                                                   
                                                                                                                                <strong> <%=item.getKatAdi()%> </strong>                                                                                                                   
                                                                                                                            </span>                                                                                                                     
                                                                                                                            <span class="label"></span>
                                                                                                                        </a>  
                                                                                                                    </li> <%

                                                                                                                                for (kategori items : kategoriLs) {

                                                                                                                                    if (item.getKatID().equals(items.getUstKat())) {

                                                            
                                                                                                                                         %>
                                                                                                                    <li class="item-vertical style1 with-sub-menu hover">
                                                                                                                        <p class="close-menu"></p>

                                                                                                                        <a href="urunListeleme.jsp?urunKateID=<%=items.getKatID()%>" class="clearfix">
                                                                                                                            <span>                                                                                                                   
                                                                                                                                <strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=items.getKatAdi()%> </strong>                                                                                                                   
                                                                                                                            </span>                                                                                                                     
                                                                                                                            <span class="label"></span>
                                                                                                                        </a>  
                                                                                                                    </li> <%

                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }

                                                                                                                        }

                                                                                                                    %>
                                                                        
                                                                                
                                                                                <li class="loadmore"><i class="fa fa-plus-square-o"></i>
                                                                                            <span class="more-view"> More Categories</span>
                                                                                        </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                </div>
                                        <script type="text/javascript">
                                            $(document).ready(function () {
                                                var itemver = 13;
                                                if (itemver <= $(".vertical ul.megamenu >li").length)
                                                    $('.vertical ul.megamenu').append('<li class="loadmore"><i class="fa fa-plus-square-o"></i><span class="more-view"> More Categories</span></li>');
                                                $('.horizontal ul.megamenu li.loadmore').remove();

                                                var show_itemver = itemver - 1;
                                                $('ul.megamenu > li.item-vertical').each(function (i) {
                                                    if (i > show_itemver) {
                                                        $(this).css('display', 'none');
                                                    }
                                                });
                                                $(".vertical .megamenu .loadmore").click(function () {
                                                    if ($(this).hasClass('open')) {
                                                        $('ul.megamenu li.item-vertical').each(function (i) {
                                                            if (i > show_itemver) {
                                                                $(this).slideUp(200);
                                                                $(this).css('display', 'none');
                                                            }
                                                        });
                                                        $(this).removeClass('open');
                                                        $('.vertical .megamenu .loadmore').html('<i class="fa fa-plus-square-o"></i><span class="more-view">More Categories</span>');
                                                    } else {
                                                        $('.vertical ul.megamenu li.item-vertical').each(function (i) {
                                                            if (i > show_itemver) {
                                                                $(this).slideDown(200);
                                                            }
                                                        });
                                                        $(this).addClass('open');
                                                        $('.vertical .megamenu .loadmore').html('<i class="fa fa-minus-square-o"></i><span class="more-view">Close Categories</span>');
                                                    }
                                                });
                                            });
                                            transition = 'slide';
                                            animation_time = 500;
                                        </script>
                                    </div>
                                    <!-- Main menu -->
                                    <div class="header-bottom-right col-md-9 col-sm-8 col-xs-12 ">
                                        <!-- Search -->
                                        <div id="sosearchpro" class="sosearchpro-wrapper so-search search-pro ">
                                            <form method="GET" action="urunSearch.jsp">
                    <div id="search0" class="search input-group">
                        <div class="select_category filter_type icon-select">
                            <select class="no-border" name="category_id">
                                <option value="0">Tüm Kategoriler</option>
                             <%    
                                 String dseckatID = "";
                                 for (kategori item : ktl) {

                                                if (item.getUstKat().equals("0")) {
                                                    if (dseckatID.equals(item.getKatID())) {
                                                        out.print("<option selected=\"selected\" name=\""+item.getKatID()+"\" value=\""+item.getKatID()+"\">"+item.getKatAdi()+"</option>");
                                                    } else {
                                                        out.print("<option name=\""+item.getKatID()+"\" value=\""+item.getKatID()+"\">"+item.getKatAdi()+"</option>");
                                                    }

                                                    for (kategori items : ktl) {
                                                        if (item.getKatID().equals(items.getUstKat())) {

                                                            if (dseckatID.equals(items.getKatID())) {
                                                                out.print("<option selected=\"selected\" value=\""+items.getKatID()+"\"> &nbsp;&nbsp; "+items.getKatAdi()+"</option>");
                                                            } else {
                                                                out.print("<option value=\""+items.getKatID()+"\"> &nbsp;&nbsp; "+items.getKatAdi()+"</option>");
                                                            }
                                                        }
                                                    }
                                                }

                                            }

                                        %>

                            </select>
                        </div>
                        <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Arama" name="search">
                        <ul class="dropdown-menu"></ul><span class="input-group-btn"><button type="submit" class="button-search btn btn-default btn-lg" name="submit_search"><i class="fa fa-search"></i></button></span></div>
                   <!-- <input type="hidden" name="route" value="product/search"> -->
                </form>
                                        </div>
                                        <script type="text/javascript">
                                            // Autocomplete */
                                            (function ($) {
                                                $.fn.Soautocomplete = function (option) {
                                                    return this.each(function () {
                                                        this.timer = null;
                                                        this.items = new Array();

                                                        $.extend(this, option);

                                                        $(this).attr('autocomplete', 'off');

                                                        // Focus
                                                        $(this).on('focus', function () {
                                                            this.request();
                                                        });

                                                        // Blur
                                                        $(this).on('blur', function () {
                                                            setTimeout(function (object) {
                                                                (typeof object !== 'undefined') ? object.hide() : '';
                                                            }, 200, this);
                                                        });

                                                        // Keydown
                                                        $(this).on('keydown', function (event) {
                                                            switch (event.keyCode) {
                                                                case 27: // escape
                                                                    this.hide();
                                                                    break;
                                                                default:
                                                                    this.request();
                                                                    break;
                                                            }
                                                        });

                                                        // Click
                                                        this.click = function (event) {
                                                            event.preventDefault();

                                                            value = $(event.target).parent().attr('data-value');

                                                            if (value && this.items[value]) {
                                                                this.select(this.items[value]);
                                                            }
                                                        }

                                                        // Show
                                                        this.show = function () {
                                                            var pos = $(this).position();

                                                            $(this).siblings('ul.dropdown-menu').css({
                                                                top: pos.top + $(this).outerHeight(),
                                                                left: pos.left
                                                            });

                                                            $(this).siblings('ul.dropdown-menu').show();
                                                        }

                                                        // Hide
                                                        this.hide = function () {
                                                            $(this).siblings('ul.dropdown-menu').hide();
                                                        }

                                                        // Request
                                                        this.request = function () {
                                                            clearTimeout(this.timer);

                                                            this.timer = setTimeout(function (object) {
                                                                (typeof object !== 'undefined') ? object.source($(object).val(), $.proxy(object.response, object)) : '';
                                                            }, 200, this);
                                                        }

                                                        // Response
                                                        this.response = function (json) {
                                                            html = '';

                                                            if (json.length) {
                                                                for (i = 0; i < json.length; i++) {
                                                                    this.items[json[i]['value']] = json[i];
                                                                }

                                                                for (i = 0; i < json.length; i++) {
                                                                    if (!json[i]['category']) {
                                                                        html += '<li class="media" data-value="' + json[i]['value'] + '">';
                                                                        if (json[i]['image'] && json[i]['show_image'] && json[i]['show_image'] == 1) {
                                                                            html += '    <a class="media-left" href="' + json[i]['link'] + '"><img class="pull-left" src="' + json[i]['image'] + '"></a>';
                                                                        }

                                                                        html += '<div class="media-body">';
                                                                        html += '<a href="' + json[i]['link'] + '"><span>' + json[i]['label'] + '</span></a>';
                                                                        if (json[i]['price'] && json[i]['show_price'] && json[i]['show_price'] == 1) {
                                                                            html += '    <div class="price">';
                                                                            if (!json[i]['special']) {
                                                                                html += '<span class="price">Price : ' + json[i]['price'] + '</span>';
                                                                                ;
                                                                            } else {
                                                                                html += '<span class="price-old">' + json[i]['price'] + '</span><span class="price-new">' + json[i]['special'] + '</span>';
                                                                            }
                                                                            if (json[i]['tax']) {
                                                                                html += '<br />';
                                                                                html += '<span class="price-tax">Tax : ' + json[i]['tax'] + '</span>';
                                                                            }
                                                                            html += '    </div>';
                                                                        }

                                                                        if (json[i]['show_addtocart'] || json[i]['show_addtowishlist'] || json[i]['show_addtocompare']) {
                                                                            html += '<div class="button-group">';
                                                                            if (json[i]['show_addtocart'])
                                                                                html += '<button type="button" onclick="cart.add(' + json[i]['value'] + ',' + json[i]['minimum'] + ');"><span class="hidden-xs hidden-sm hidden-md">Add to Cart</span> <i class="fa fa-shopping-cart"></i></button>';
                                                                            if (json[i]['show_addtowishlist'])
                                                                                html += '<button type="button" data-toggle="tooltip" title="Add to Wish List" onclick="wishlist.add(' + json[i]['value'] + ');"><i class="fa fa-heart"></i></button>';
                                                                            if (json[i]['show_addtocompare'])
                                                                                html += '<button type="button" data-toggle="tooltip" title="Add to Compare" onclick="compare.add(' + json[i]['value'] + ');"><i class="fa fa-exchange"></i></button>';
                                                                            html += '</div>';
                                                                        }
                                                                        html += '</div></li>';
                                                                        html += '<li class="clearfix"></li>';
                                                                    }
                                                                }

                                                                // Get all the ones with a categories
                                                                var category = new Array();

                                                                for (i = 0; i < json.length; i++) {
                                                                    if (json[i]['category']) {
                                                                        if (!category[json[i]['category']]) {
                                                                            category[json[i]['category']] = new Array();
                                                                            category[json[i]['category']]['name'] = json[i]['category'];
                                                                            category[json[i]['category']]['item'] = new Array();
                                                                        }

                                                                        category[json[i]['category']]['item'].push(json[i]);
                                                                    }
                                                                }

                                                                for (i in category) {
                                                                    html += '<li class="dropdown-header">' + category[i]['name'] + '</li>';

                                                                    for (j = 0; j < category[i]['item'].length; j++) {
                                                                        html += '<li data-value="' + category[i]['item'][j]['value'] + '"><a href="#">&nbsp;&nbsp;&nbsp;' + category[i]['item'][j]['label'] + '</a></li>';
                                                                    }
                                                                }
                                                            }

                                                            if (html) {
                                                                this.show();
                                                            } else {
                                                                this.hide();
                                                            }

                                                            $(this).siblings('ul.dropdown-menu').html(html);
                                                        }

                                                        $(this).after('<ul class="dropdown-menu"></ul>');

                                                    });
                                                }
                                            })(window.jQuery);

                                            $(document).ready(function () {
                                                var selector = '#search0';
                                                var total = 0;
                                                var showimage = 0;
                                                var showprice = 0;
                                                var character = 1;
                                                var height = 100;
                                                var width = 100;


                                                $(selector).find('input[name=\'search\']').Soautocomplete({
                                                    delay: 500,
                                                    source: function (request, response) {
                                                        var category_id = $(".select_category select[name=\"category_id\"]").first().val();
                                                        if (typeof (category_id) == 'undefined')
                                                            category_id = 0;
                                                        var limit = 10;
                                                        if (request.length >= character) {
                                                            $.ajax({
                                                                url: 'index.php?route=module/so_searchpro/autocomplete&filter_category_id=' + category_id + '&limit=' + limit + '&width=' + width + '&height=' + height + '&filter_name=' + encodeURIComponent(request),
                                                                dataType: 'json',
                                                                success: function (json) {
                                                                    response($.map(json, function (item) {
                                                                        total = 0;
                                                                        if (item.total) {
                                                                            total = item.total;
                                                                        }

                                                                        return {
                                                                            price: item.price,
                                                                            speical: item.special,
                                                                            tax: item.tax,
                                                                            label: item.name,
                                                                            image: item.image,
                                                                            link: item.link,
                                                                            minimum: item.minimum,
                                                                            show_price: showprice,
                                                                            show_image: showimage,
                                                                            value: item.product_id,
                                                                        }
                                                                    }));
                                                                }
                                                            });
                                                        }
                                                    },
                                                });
                                            });
                                        </script>
                                        <!-- //end Search -->

                                        <!-- Secondary menu -->
                                        <div class="shopping_cart pull-right">
                                            <!--cart desktop-->
                                            <div id="cart" class="cart_module cart_desktop nav-item item-04 cart btn-group btn-shopping-cart">
                                                <a data-loading-text="Loading..." class="top_cart btn btn-xs btn-default77 dropdown-toggle77" data-toggle="dropdown">
                                                    <div class="shopcart"><span class="handle pull-left"></span><span class="title">My cart</span>
                                                        <p class=" text-shopping-cart cart-total-full"> 0 item(s) - $0.00 </p>
                                                    </div>
                                                </a>
                                                <ul class="tab-content content dropdown-menu pull-right shoppingcart-box" role="menu">
                                                    <%-- Eğer alışveiriş yapılmamışsa AHMET --%>
                                                    <li>
                                                        <p class="text-center">Your shopping cart is empty!</p>
                                                    </li>


                                                    <%-- //Eğer alışveiriş yapılmışsa  --%>
                                                    <li>
                                                        <table class="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="text-center" width="70px">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=57"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/m1-74x74.jpg" alt="Cisi Chicken" title="Cisi Chicken" class="preview"></a>
                                                                    </td>
                                                                    <td class="text-left"><a class="cart_product_name" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=57">Cisi Chicken</a></td>
                                                                    <td class="text-center"> x1 </td>
                                                                    <td class="text-center"> $59.00 </td>
                                                                    <td class="text-right">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=57" class="fa fa-edit"></a>
                                                                    </td>
                                                                    <td class="text-right">
                                                                        <a onclick="cart.remove('802');" class="fa fa-times fa-delete"></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center" width="70px">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=52"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/W1-74x74.jpg" alt="Dail Lulpa" title="Dail Lulpa" class="preview"></a>
                                                                    </td>
                                                                    <td class="text-left"><a class="cart_product_name" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=52">Dail Lulpa</a></td>
                                                                    <td class="text-center"> x1 </td>
                                                                    <td class="text-center"> $78.00 </td>
                                                                    <td class="text-right">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=52" class="fa fa-edit"></a>
                                                                    </td>
                                                                    <td class="text-right">
                                                                        <a onclick="cart.remove('803');" class="fa fa-times fa-delete"></a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center" width="70px">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=48"><img src="http://opencart.magentech.com/themes/so_market/layout4/image/cache/catalog/product/B10-74x74.jpg" alt="Cupim Bris" title="Cupim Bris" class="preview"></a>
                                                                    </td>
                                                                    <td class="text-left"><a class="cart_product_name" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=48">Cupim Bris</a></td>
                                                                    <td class="text-center"> x1 </td>
                                                                    <td class="text-center"> $40.00 </td>
                                                                    <td class="text-right">
                                                                        <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/product&amp;product_id=48" class="fa fa-edit"></a>
                                                                    </td>
                                                                    <td class="text-right">
                                                                        <a onclick="cart.remove('801');" class="fa fa-times fa-delete"></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <</table>
                                                    </li>
                                                    <%--  ürünler sonu     --%>
                                                    <div>
                                                        <table class="table table-bordered">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="text-left"><strong>Sub-Total</strong></td>
                                                                    <td class="text-right">$177.00</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-left"><strong>Total</strong></td>
                                                                    <td class="text-right">$177.00</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p class="text-right"><a class="btn view-cart" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/cart"><i class="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/checkout"><i class="fa fa-share"></i>Checkout</a></p>
                                                    </div>
                                                </ul>
                                            </div>
                                            <!--//cart-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Navbar switcher -->
                        <!-- //end Navbar switcher -->
                    </header>
                    <section class="so-spotlight1">
                        <div class="container">





                        </div>


                    </section>
