<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Fotoğraf Ekle - Sil<?php echo "metin bağcı denemesidi"; dsadsad ?></h1>
        </div>

 <iframe src="<%=urunResimUrl%>indexgaleri.php?resim_id=<%=request.getParameter("albumId")%>" frameborder="0" scrolling="yes" style="height:100%; width:95%;"></iframe>
 
    </div>

</div>
<%@include file="alt.jsp" %>



