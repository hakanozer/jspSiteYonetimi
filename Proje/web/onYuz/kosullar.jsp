<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>


<%
    String kosullar = "";

    ResultSet rs = db.data("icerik where baslik = 'Kosullar'");
    while (rs.next()) {
      
        kosullar = rs.getString("detay");
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
            <a href="hakkimizda.jsp">Kullanım Koşulları</a>
        </li>
    </ul>
</div>
<div class="">
    <div id="content" class="">
        <div class="container">
            <h3>Kullanım Koşulları</h3>
            <p><%=kosullar%></p>
        </div>
    </div>
</div>



<%@include file="alt.jsp" %>
