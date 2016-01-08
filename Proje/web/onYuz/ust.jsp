<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@page import="sinif.DB" %>
<% DB db = new DB();  %>
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
                    <a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=checkout/checkout" class="top-link-checkout" title="Checkout">Checkout</a></li>
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
            if(musteriGiris){
                if(!adi.equals("")){
            %>
            <label>Hoşgeldiniz <%=adi%> <%=soyadi%> </label>
            <%}}%>
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
                                            <div><span></span><span></span><span></span></div> All Categories <i class="fa fa-chevron-circle-down pull-right arrow-circle"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="navbar-header">
                                <button type="button" id="show-verticalmenu" data-toggle="collapse" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                            </div>
                            <div class="vertical-wrapper"><span id="remove-verticalmenu" class="fa fa-times"></span>
                                <div class="megamenu-pattern">
                                    <div class="container">
                                        <ul class="megamenu">
                                            <li class="home"><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=common/home"><span><strong>Home</strong></span></a></li>
                                            <li class="item-vertical style1 with-sub-menu hover">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33" class="clearfix"><span><strong><i class="icon icon1"></i> Automotive &amp; Motocrycle </strong></span><span class="label"></span></a>
                                                <div class="sub-menu" data-subwidth="100" style="width: 727px;">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="row">
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=78" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=78';" class="main-menu">Apparel</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_47" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_47';">Accessories for Tablet PC</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_44" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_44';">Accessories for i Pad</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_43" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34_43';">Accessories for iPhone</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17';">Bags, Holiday Supplies</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_61" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_61';">Car Alarms and Security</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_62" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_62';">Car Audio &amp; Speakers</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=77" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=77';" class="main-menu">Cables &amp; Connectors</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=82" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=82';">Cameras &amp; Photo</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18';">Electronics</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28';">Outdoor &amp; Traveling</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_35" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_35';" class="main-menu">Camping &amp; Hiking</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76';">Earings</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_65" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_65';">Shaving &amp; Hair Removal</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_67" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_67';">Salon &amp; Spa Equipment</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34';" class="main-menu">Smartphone &amp; Tablets</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25';">Sports &amp; Outdoors</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64';">Bath &amp; Body</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63';">Gadgets &amp; Auto Parts</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17';" class="main-menu">Bags, Holiday Supplies</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_46" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_46';">Battereries &amp; Chargers</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64';">Bath &amp; Body</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45';">Headphones, Headsets</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30';">Home Audio</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25" class="clearfix"><span><strong><i class="icon icon2"></i> Electronic </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical with-sub-menu hover">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25" class="clearfix"><span><strong><i class="icon icon3"></i> Sports &amp; Outdoors </strong></span><span class="label"></span></a>
                                                <div class="sub-menu" data-subwidth="60" style="width: 436.2px;">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="row">
                                                                    <div class="col-sm-12 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=81" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=81';" class="main-menu">Mobile Accessories</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63';">Gadgets &amp; Auto Parts</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_64';">Bath &amp; Body</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17';">Bags, Holiday Supplies</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_46" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_46';" class="main-menu">Battereries &amp; Chargers</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28';">Outdoor &amp; Traveling</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=80" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=80';">Flashlights &amp; Lamps</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_66" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_66';">Fragrances</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_31" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_31';" class="main-menu">Fishing</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_73" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_73';">FPV System &amp; Parts</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18';">Electronics</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76';">Earings</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_60" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_60';">More Car Accessories</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="row banner">
                                                                    <a href="#"><img src="image/menu_bg2.jpg" alt="banner1"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="item-vertical with-sub-menu hover">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24" class="clearfix"><span><strong><i class="icon icon5"></i> Health &amp; Beauty </strong></span><span class="label"></span></a>
                                                <div class="sub-menu" data-subwidth="100" style="width: 727px;">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="row">
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_61" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_61';" class="main-menu">Car Alarms and Security</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_62" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_62';">Car Audio &amp; Speakers</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63';">Gadgets &amp; Auto Parts</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63';">Gadgets &amp; Auto Parts</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45';">Headphones, Headsets</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24';" class="main-menu">Health &amp; Beauty</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30';">Home Audio</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75';">Helicopters &amp; Parts</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_28';">Outdoor &amp; Traveling</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57';">Toys &amp; Hobbies</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18';" class="main-menu">Electronics</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_76';">Earings</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_67" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_67';">Salon &amp; Spa Equipment</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_65" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_65';">Shaving &amp; Hair Removal</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34';">Smartphone &amp; Tablets</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25';" class="main-menu">Sports &amp; Outdoors</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=80" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=80';">Flashlights &amp; Lamps</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_66" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24_66';">Fragrances</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_31" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=25_31';">Fishing</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_73" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_73';">FPV System &amp; Parts</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-4 static-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_60" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_60';" class="main-menu">More Car Accessories</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_71" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_71';">Lighter &amp; Cigar Supplies</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_32" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_32';">Mp3 Players &amp; Accessories</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_27" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20_27';">Men Watches</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=81" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=81';">Mobile Accessories</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=33_63';" class="main-menu">Gadgets &amp; Auto Parts</a>
                                                                                    <ul>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_68" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_68';">Gift &amp; Lifestyle Gadgets</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_69" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_69';">Gift for Man</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_70" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_70';">Gift for Woman</a></li>
                                                                                        <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_70" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17_70';">Gift for Woman</a></li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="item-vertical with-sub-menu hover">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34" class="clearfix"><span><strong><i class="icon icon4"></i> Smartphone &amp; Tablets </strong></span><span class="label"></span></a>
                                                <div class="sub-menu" data-subwidth="30" style="width: 218.1px;">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="row">
                                                                    <div class="col-sm-12 hover-menu">
                                                                        <div class="menu">
                                                                            <ul>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_45';" class="main-menu">Headphones, Headsets</a></li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=18_30';" class="main-menu">Home Audio</a></li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24';" class="main-menu">Health &amp; Beauty</a></li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75';" class="main-menu">Helicopters &amp; Parts</a></li>
                                                                                <li><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75" onClick="window.location = 'http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57_75';" class="main-menu">Helicopters &amp; Parts</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=80" class="clearfix"><span><strong><i class=" icon icon6"></i> Flashlights &amp; Lamps </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=82" class="clearfix"><span><strong><i class="icon icon8"></i> Camera &amp; Photo </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=34" class="clearfix"><span><strong><i class="icon icon13"></i> Smartphone &amp; Tablets </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=72" class="clearfix"><span><strong><i class="icon icon9"></i> Outdoor &amp; Traveling Supplies </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=24" class="clearfix"><span><strong><i class="icon icon10"></i> Health &amp; Beauty </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=57" class="clearfix"><span><strong><i class="icon icon11"></i> Toys &amp; Hobbies </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=20" class="clearfix"><span><strong><i class="icon icon12"></i> Jewelry &amp; Watches </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=17" class="clearfix"><span><strong><i class="icon icon7"></i> Bags, Holiday Supplies </strong></span><span class="label"></span></a></li>
                                            <li class="item-vertical" style="display: none;">
                                                <p class="close-menu"></p><a href="http://opencart.magentech.com/themes/so_market/layout4/index.php?route=product/category&amp;path=60" class="clearfix"><span><strong><i class=""></i> More Car Accessories </strong></span><span class="label"></span></a></li>
                                            <li class="loadmore"><i class="fa fa-plus-square-o"></i><span class="more-view"> More Categories</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <script type="text/javascript">
                $(document).ready(function() {
                    var itemver = 13;
                    if (itemver <= $(".vertical ul.megamenu >li").length)
                        $('.vertical ul.megamenu').append('<li class="loadmore"><i class="fa fa-plus-square-o"></i><span class="more-view"> More Categories</span></li>');
                    $('.horizontal ul.megamenu li.loadmore').remove();

                    var show_itemver = itemver - 1;
                    $('ul.megamenu > li.item-vertical').each(function(i) {
                        if (i > show_itemver) {
                            $(this).css('display', 'none');
                        }
                    });
                    $(".vertical .megamenu .loadmore").click(function() {
                        if ($(this).hasClass('open')) {
                            $('ul.megamenu li.item-vertical').each(function(i) {
                                if (i > show_itemver) {
                                    $(this).slideUp(200);
                                    $(this).css('display', 'none');
                                }
                            });
                            $(this).removeClass('open');
                            $('.vertical .megamenu .loadmore').html('<i class="fa fa-plus-square-o"></i><span class="more-view">More Categories</span>');
                        } else {
                            $('.vertical ul.megamenu li.item-vertical').each(function(i) {
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
                <form method="GET" action="index.php">
                    <div id="search0" class="search input-group">
                        <div class="select_category filter_type icon-select">
                            <select class="no-border" name="category_id">
                                <option value="0">All Categories</option>
                                <option value="78">Apparel</option>
                                <option value="77">Cables &amp; Connectors</option>
                                <option value="82">Cameras &amp; Photo</option>
                                <option value="80">Flashlights &amp; Lamps</option>
                                <option value="81">Mobile Accessories</option>
                                <option value="79">Video Games</option>
                                <option value="20">Jewelry &amp; Watches</option>
                                <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>
                                <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>
                                <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>
                                <option value="18">Electronics</option>
                                <option value="46">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Battereries &amp; Chargers</option>
                                <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Headphones, Headsets</option>
                                <option value="30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home Audio</option>
                                <option value="32">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mp3 Players &amp; Accessories</option>
                                <option value="25">Sports &amp; Outdoors</option>
                                <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Camping &amp; Hiking</option>
                                <option value="31">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fishing</option>
                                <option value="29">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Golf Supplies</option>
                                <option value="28">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor &amp; Traveling</option>
                                <option value="57">Toys &amp; Hobbies</option>
                                <option value="73">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FPV System &amp; Parts</option>
                                <option value="75">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Helicopters &amp; Parts</option>
                                <option value="74">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RC Cars &amp; Parts</option>
                                <option value="72">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Walkera</option>
                                <option value="17">Bags, Holiday Supplies</option>
                                <option value="68">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gift &amp; Lifestyle Gadgets</option>
                                <option value="69">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gift for Man</option>
                                <option value="70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gift for Woman</option>
                                <option value="71">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lighter &amp; Cigar Supplies</option>
                                <option value="24">Health &amp; Beauty</option>
                                <option value="64">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bath &amp; Body</option>
                                <option value="66">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fragrances</option>
                                <option value="67">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salon &amp; Spa Equipment</option>
                                <option value="65">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shaving &amp; Hair Removal</option>
                                <option value="33">Automotive</option>
                                <option value="61">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Car Alarms and Security</option>
                                <option value="62">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Car Audio &amp; Speakers</option>
                                <option value="63">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gadgets &amp; Auto Parts</option>
                                <option value="60">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More Car Accessories</option>
                                <option value="34">Smartphone &amp; Tablets</option>
                                <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories for i Pad</option>
                                <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories for iPhone</option>
                                <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories for Tablet PC</option>
                            </select>
                        </div>
                        <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Search" name="search">
                        <ul class="dropdown-menu"></ul><span class="input-group-btn"><button type="submit" class="button-search btn btn-default btn-lg" name="submit_search"><i class="fa fa-search"></i></button></span></div>
                    <input type="hidden" name="route" value="product/search">
                </form>
            </div>
            <script type="text/javascript">
                // Autocomplete */
                (function($) {
                    $.fn.Soautocomplete = function(option) {
                        return this.each(function() {
                            this.timer = null;
                            this.items = new Array();

                            $.extend(this, option);

                            $(this).attr('autocomplete', 'off');

                            // Focus
                            $(this).on('focus', function() {
                                this.request();
                            });

                            // Blur
                            $(this).on('blur', function() {
                                setTimeout(function(object) {
                                    (typeof object !== 'undefined') ? object.hide(): '';
                                }, 200, this);
                            });

                            // Keydown
                            $(this).on('keydown', function(event) {
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
                            this.click = function(event) {
                                event.preventDefault();

                                value = $(event.target).parent().attr('data-value');

                                if (value && this.items[value]) {
                                    this.select(this.items[value]);
                                }
                            }

                            // Show
                            this.show = function() {
                                var pos = $(this).position();

                                $(this).siblings('ul.dropdown-menu').css({
                                    top: pos.top + $(this).outerHeight(),
                                    left: pos.left
                                });

                                $(this).siblings('ul.dropdown-menu').show();
                            }

                            // Hide
                            this.hide = function() {
                                $(this).siblings('ul.dropdown-menu').hide();
                            }

                            // Request
                            this.request = function() {
                                clearTimeout(this.timer);

                                this.timer = setTimeout(function(object) {
                                    (typeof object !== 'undefined') ? object.source($(object).val(), $.proxy(object.response, object)): '';
                                }, 200, this);
                            }

                            // Response
                            this.response = function(json) {
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
                                                    html += '<span class="price">Price : ' + json[i]['price'] + '</span>';;
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

                $(document).ready(function() {
                    var selector = '#search0';
                    var total = 0;
                    var showimage = 0;
                    var showprice = 0;
                    var character = 1;
                    var height = 100;
                    var width = 100;


                    $(selector).find('input[name=\'search\']').Soautocomplete({
                        delay: 500,
                        source: function(request, response) {
                            var category_id = $(".select_category select[name=\"category_id\"]").first().val();
                            if (typeof(category_id) == 'undefined')
                                category_id = 0;
                            var limit = 10;
                            if (request.length >= character) {
                                $.ajax({
                                    url: 'index.php?route=module/so_searchpro/autocomplete&filter_category_id=' + category_id + '&limit=' + limit + '&width=' + width + '&height=' + height + '&filter_name=' + encodeURIComponent(request),
                                    dataType: 'json',
                                    success: function(json) {
                                        response($.map(json, function(item) {
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
          