
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>

<%
    String hakkimizda = "";

    ResultSet rs = db.data("icerik where baslik = 'Hakkimizda'");
    while (rs.next()) {
      
        hakkimizda = rs.getString("detay");
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
            <a href="hakkimizda.jsp">Hakkımızda</a>
        </li>
    </ul>
</div>
<div class="">
    <div id="content" class="">
        <div class="container">
            <div class="about-us about-demo-1">
                <div class="row">
                    <div class="col-lg-5 col-md-5 about-image">
                        <img src="image/catalog/about/wellcometoshop.png" alt="Hakkımızda">
                    </div>
                    <div class="col-lg-7 col-md-7 about-info">
                        <h2 class="about-title">
                            <span>Hakkımızda</span>
                        </h2>
                        <div class="about-text">
                            <p><%=hakkimizda%></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<%@include file="alt.jsp" %>
