<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="sinif.DB" %>
<%@page import="java.sql.ResultSet" %>

<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/jssor.slider.mini.js"></script>
<!-- use jssor.slider.debug.js instead for debug -->

<script>
    jQuery(document).ready(function ($) {

        var jssor_1_SlideoTransitions = [
            [{b: 5500.0, d: 3000.0, o: -1.0, r: 240.0, e: {r: 2.0}}],
            [{b: -1.0, d: 1.0, o: -1.0, c: {x: 51.0, t: -51.0}}, {b: 0.0, d: 1000.0, o: 1.0, c: {x: -51.0, t: 51.0}, e: {o: 7.0, c: {x: 7.0, t: 7.0}}}],
            [{b: -1.0, d: 1.0, o: -1.0, sX: 9.0, sY: 9.0}, {b: 1000.0, d: 1000.0, o: 1.0, sX: -9.0, sY: -9.0, e: {sX: 2.0, sY: 2.0}}],
            [{b: -1.0, d: 1.0, o: -1.0, r: -180.0, sX: 9.0, sY: 9.0}, {b: 2000.0, d: 1000.0, o: 1.0, r: 180.0, sX: -9.0, sY: -9.0, e: {r: 2.0, sX: 2.0, sY: 2.0}}],
            [{b: -1.0, d: 1.0, o: -1.0}, {b: 3000.0, d: 2000.0, y: 180.0, o: 1.0, e: {y: 16.0}}],
            [{b: -1.0, d: 1.0, o: -1.0, r: -150.0}, {b: 7500.0, d: 1600.0, o: 1.0, r: 150.0, e: {r: 3.0}}],
            [{b: 10000.0, d: 2000.0, x: -379.0, e: {x: 7.0}}],
            [{b: 10000.0, d: 2000.0, x: -379.0, e: {x: 7.0}}],
            [{b: -1.0, d: 1.0, o: -1.0, r: 288.0, sX: 9.0, sY: 9.0}, {b: 9100.0, d: 900.0, x: -1400.0, y: -660.0, o: 1.0, r: -288.0, sX: -9.0, sY: -9.0, e: {r: 6.0}}, {b: 10000.0, d: 1600.0, x: -200.0, o: -1.0, e: {x: 16.0}}]
        ];

        var jssor_1_options = {
            $AutoPlay: true,
            $SlideDuration: 800,
            $SlideEasing: $Jease$.$OutQuint,
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizing
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
            if (refSize) {
                refSize = Math.min(refSize, 1920);
                jssor_1_slider.$ScaleWidth(refSize);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
    });
</script>
<style>

    /* jssor slider bullet navigator skin 05 css */
    /*
    .jssorb05 div           (normal)
    .jssorb05 div:hover     (normal mouseover)
    .jssorb05 .av           (active)
    .jssorb05 .av:hover     (active mouseover)
    .jssorb05 .dn           (mousedown)
    */
    .jssorb05 {
        position: absolute;
    }
    .jssorb05 div, .jssorb05 div:hover, .jssorb05 .av {
        position: absolute;
        /* size of bullet elment */
        width: 16px;
        height: 16px;
        background: url('img/b05.png') no-repeat;
        overflow: hidden;
        cursor: pointer;
    }
    .jssorb05 div { background-position: -7px -7px; }
    .jssorb05 div:hover, .jssorb05 .av:hover { background-position: -37px -7px; }
    .jssorb05 .av { background-position: -67px -7px; }
    .jssorb05 .dn, .jssorb05 .dn:hover { background-position: -97px -7px; }

    /* jssor slider arrow navigator skin 22 css */
    /*
    .jssora22l                  (normal)
    .jssora22r                  (normal)
    .jssora22l:hover            (normal mouseover)
    .jssora22r:hover            (normal mouseover)
    .jssora22l.jssora22ldn      (mousedown)
    .jssora22r.jssora22rdn      (mousedown)
    */
    .jssora22l, .jssora22r {
        display: block;
        position: absolute;
        /* size of arrow element */
        width: 40px;
        height: 58px;
        cursor: pointer;
        background: url('img/a22.png') center center no-repeat;
        overflow: hidden;
    }
    .jssora22l { background-position: -10px -31px; }
    .jssora22r { background-position: -70px -31px; }
    .jssora22l:hover { background-position: -130px -31px; }
    .jssora22r:hover { background-position: -190px -31px; }
    .jssora22l.jssora22ldn { background-position: -250px -31px; }
    .jssora22r.jssora22rdn { background-position: -310px -31px; }
</style>



<div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1300px; height: 500px; overflow: hidden; visibility: hidden;">
    <!-- Loading Screen -->
    <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
        <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
        <div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
    </div>

    <!--------------------------------Baslangic ------------------------------->

    <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 1300px; height: 500px; overflow: hidden;">

        <%
            DB db = new DB();
            ResultSet rs = db.data("slayt s inner join urun_fotograflari u on s.id=u.urun_id");
            while (rs.next()) {
                if (rs.getString("album_adi").equals("slider")) {
        %>

        <!-------------------------------- ------------------------------->
        <div data-p="225.00" style="display: none;">
            <!-- Resimler -->  
            <img data-u="image" src="http://localhost:8181/imageupload/server/php/files/<%=rs.getString("klasor")%>/<%=rs.getString("adi")%>"/>

            <div style="position: absolute; top: 30px; left: 30px; width: 480px; height: 120px; font-size: 50px; color: #ffffff; line-height: 60px;"><%=rs.getString("baslik")%></div>
            <div style="position: absolute; top: 300px; left: 30px; width: 480px; height: 120px; font-size: 30px; color: #ffffff; line-height: 38px;"><%=rs.getString("aciklama")%></div>
           
        </div>

        <!-------------------------------- ------------------------------->

        <%
                }
            }
        %>
    </div>

    <!-------------------------------- Son ------------------------------->

    <!-- Bullet Navigator -->
    <div data-u="navigator" class="jssorb05" style="bottom:16px;right:16px;" data-autocenter="1">
        <!-- bullet navigator item prototype -->
        <div data-u="prototype" style="width:16px;height:16px;"></div>
    </div>
    <!-- Arrow Navigator -->
    <span data-u="arrowleft" class="jssora22l" style="top:0px;left:12px;width:40px;height:58px;" data-autocenter="2"></span>
    <span data-u="arrowright" class="jssora22r" style="top:0px;right:12px;width:40px;height:58px;" data-autocenter="2"></span>
    <a href="http://www.jssor.com" style="display:none">Bootstrap Carousel</a>
</div>
