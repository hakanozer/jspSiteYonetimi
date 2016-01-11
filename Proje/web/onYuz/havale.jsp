<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>


<%
    String havale = "";

    ResultSet rs = db.data("icerik where baslik = 'Havale'");
    while (rs.next()) {
      
        havale = rs.getString("detay");
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
            <a href="hakkimizda.jsp">Havale Bilgileri</a>
        </li>
    </ul>
</div>
<div class="">
    <div id="content" class="">
        <div class="container">
            <h3>Havale Bilgileri</h3>
            <p><%=havale%></p>
        </div>
    </div>
</div>



<%@include file="alt.jsp" %>
