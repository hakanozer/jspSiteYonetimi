
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<title>Hata</title>
<%@include file="ust.jsp" %>


<div class="row">
    <div id="content" class="container error-page">
        <div class="wrapper_404page">
            <div class="col-lg-7 col-md-7">
                <div class="content-404page">
                    <p class="top-text"></p>
                    <p class="img-404"><img src="catalog/view/theme/so-market4/images/404-img-text.png" alt=""></p>
                    <p class="bottom-text">Sayfa bulunamıyor veya bir sorun meydana geldi. Lütfen Anasayfa ya da bir önceki sayfaya dönünüz. </p>
                    <div class="button-404"><a href="javascript:void(0);" onclick="goBack()" class="btn-404 prev-page-btn" title="PREVIOUS PAGE">Önceki Sayfaya Dön</a>
                        <a href="index.jsp" class="btn-404 back2home" title="BACK TO HOMEPAGE">Anasayfaya Dön</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5">
                <div class="img-right-404"><img src="catalog/view/theme/so-market4/images/404-image.png" alt=""></div>
            </div>
        </div>
    </div>
</div>

<%@include file="alt.jsp" %>