<%@page import="java.util.TimerTask"%>
<%@page import="java.util.Timer"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>

<script type="text/javascript" src="js/e698801f02ebddc5550bd513d2ac2399b6228af1.js?1450361526"></script>
<script type="text/javascript" src="-js/libcode1_noajax.js"></script>
<link rel="stylesheet" href="css/13d7b55dc9a1c4b8b401518802b4e8b800564d96.css?1449216247" type="text/css" />
<link rel="stylesheet" href="css/3be7a54979243c13e24c838b23171215d73bbc1f.css?1441886309" type="text/css" />
<link rel="stylesheet" href="css/c631773c58c9c891c02e1c03f37140cbe35d1544.css?1449216247" type="text/css" />


<script>

    <%
        String clock = request.getParameter("clock");
        if (clock == null) {
            clock = "11";
        }
    %>
    var timeout = <%=clock%>;
    function timer()
    {
        if (--timeout > 0)
        {
            document.forma.clock.value = timeout;
            window.setTimeout("timer()", 1000);
        }
        else
        {
            document.forma.clock.value = "";
            window.location.href = 'index.jsp';
        }
    }
</script>




<div class="container" style=" margin-top: 3%;">

    <div class="panel-group" id="accordion">


        <div class="alert alert-success" style="margin-left: 11%;width: 60%;margin-bottom: auto;margin-top: 20;font-weight: bold;">
            Başarıyla Ödemeniz Gerçekleştirilmiştir !
            <a href="index.jsp" style="text-decoration: underline;">Anasayfaya Dön</a>
            <form action="<%=request.getRequestURL()%>" name="forma">
                <input type="text" class="form-control" disabled name="clock" value="<%=clock%>" style="border:0px solid antiquewhite; width: 47px;background-color: antiquewhite;border-width: thick;float: left;">
                <Label style="margin-top: 10px;" > Saniye Sonra Anasayfaya Yönlendirileceksiniz...</Label>

            </form>
            <script>
               timer();
            </script>
        </div>
    </div>
</div>


