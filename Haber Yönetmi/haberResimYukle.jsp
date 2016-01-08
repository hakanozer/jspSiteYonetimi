<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Resim  Yükleme</title>
<%@include file="ust.jsp" %>

<% 
    boolean resim_idD = (request.getParameter("resim_id") != null);
    String resim_id = "";
    if (resim_idD) {
        resim_id = request.getParameter("resim_id");
    }else {
        response.sendRedirect("./");
        return;
    }
%>

<div id="page-wrapper" style="min-height: 99px;">
            
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Haber Resim Yükle</h1>
                    </div>
                    
                    <iframe src="http://localhost:8095/haberResim/index.php?resim_id=<%=resim_id%>" frameborder="0" scrolling="no" style="width: 100%; height: 50%;"></iframe>
                    
                    
                </div>

        </div>
<%@include file="alt.jsp" %>



