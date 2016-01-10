<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>


<%
    String sorular = "";

    ResultSet rs = db.data("icerik where baslik = 'Sorular'");
    while (rs.next()) {
      
        sorular = rs.getString("detay");
    }

%>


<div class="container">
    <ul class="breadcrumb">
        <li>
            <a href="index.jsp">
                <i class="fa fa-home">

                </i>
            </a>
        </li>
        <li>
            <a href="hakkimizda.jsp">Sık Sorulan Sorular</a>
        </li>
    </ul>
</div>
<div class="">
    <div id="content" class="">
        <div class="container">
            <h3>Sık Sorulan Sorular</h3>
            <p><%=sorular%></p>
        </div>
    </div>
</div>



<%@include file="alt.jsp" %>
