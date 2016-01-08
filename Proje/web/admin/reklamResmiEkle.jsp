<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>

<%
    boolean resimIDKontrol = (request.getParameter("resimduzenle") != null);
    String id="";
    if(resimIDKontrol){
      id =request.getParameter("reklam_idsi");
      
    }


%>
<div id="page-wrapper" style="min-height: 99px;">
            
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Reklam resim ekleme</h1>
                    </div>
<iframe src="<%=resimUrl%>index.php?resim_id=<%=id%>&album=reklam" frameborder="0" scrolling="no" style="width: 100%; height: 50%;"></iframe>                    
                    
                </div>
    <form method="post">
        <input name="ID" value="" style="display: none;"></input>
        
    </form>
        </div>
<%@include file="alt.jsp" %>
