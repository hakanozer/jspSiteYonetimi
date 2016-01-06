<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Beğeniler</title>
<%@include file="ust.jsp" %>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Beğeniler</h1>
        </div>


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Bütün Beğeniler
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>Müşteri ID</th>
                                    <th>Ürün ID</th>
                                    <th>Ürün Adı</th>
                                    <th>Puan</th>
                                    <th>Tarih</th>
                                    <th>Ürünü Gör</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                
                                    String baslik = "";
                                    ResultSet rs = db.dataGtr("SELECT urunler.baslik,begeniyonetim.musteri_id, begeniyonetim.puan,begeniyonetim.tarih, urunler.id, begeniyonetim.urun_id from begeniyonetim LEFT JOIN urunler on urunler.id = begeniyonetim.urun_id");
                                    while (rs.next()) {
                              
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("musteri_id")%></td>
                                    <td><%=rs.getString("urun_id")%></td>
                                    <td><%=rs.getString("baslik")%></td>
                                    <td><%=rs.getString("puan")%></td>
                                    <td><%=rs.getString("tarih")%></td>
                                    <td>
                                        <a href="urunSyf.jsp?duzenle&urunID=<%=rs.getString("id")%>"  class="btn btn-info">Ürünü Gör</a>
                                    </td>
                                </tr>
                                <%}  %>

                            </tbody>
                        </table>
                    </div>

                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Ürünlerin Toplam Beğenileri
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>Ürün ID</th>
                                    <th>Ürün Adı</th>
                                    <th>Puan</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rss = db.dataGtr("Select begeniyonetim.urun_id, Sum(puan) as toplam, urunler.baslik From begeniyonetim LEFT JOIN urunler on begeniyonetim.urun_id = urunler.id group by urun_id");
                                    while (rss.next()) {
                                        
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rss.getString("urun_id")%></td>
                                    <td><%=rss.getString("baslik")%></td>
                                    <td><%=rss.getString("toplam")%></td>
                                </tr>
                                <%}%>

                            </tbody>
                        </table>
                    </div>

                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>

</div>
<%@include file="alt.jsp" %>
