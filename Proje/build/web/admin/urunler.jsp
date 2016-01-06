
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Kategoriler</title>
<%@include file="ust.jsp" %>


<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Ürünler</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Yeni Ürün Ekle
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">

                                    <div class="form-group">
                                        <label>Üst Kat</label>
                                        <select class="form-control" name="ustKatID">
                                            <option value="0">Üst Kat Yap</option>
                                            <% 
                                               /* ResultSet rss = db.data("kategori where ustKat = '0'");
                                                while (rss.next()) {
                                                    
                                                */
                                            %>
                                            <option selected="selected" value="<%=//rss.getString("katID")%>"><%=//rss.getString("katAdi")%></option>
                                            
                                                <option value="<%=//rss.getString("katID")%>"><%=//rss.getString("katAdi")%></option>
                                            <%//}%>
                                        </select>
                                    </div>


                                    <label for="urunAdi">Ürün Adı</label>
                                    <input name="urunAdi" value="<%=%>" id="urunAdi" class="form-control" placeholder="Ürün Adı">
                                    <label for="kisaAcik">Kısa Açıklama</label>
                                    <input name="kisaAcik" value="<%=%>" id="kisaAcik" class="form-control" placeholder="Kısa Açıklama">
                                    <label for="detay">Detay</label>
                                    <input name="detay" value="<%=%>" id="detay" class="form-control" placeholder="Detay">
                                    <label for="piyasaFyt">Piyasa Fiyatı</label>
                                    <input name="piyasaFyt" value="<%=%>" id="piyasaFyt" class="form-control" placeholder="Piyasa Fiyatı">
                                    <label for="siteFyt">Site Fiyatı</label>
                                    <input name="siteFyt" value="<%=%>" id="siteFyt" class="form-control" placeholder="Site Fiyatı">
                                        
                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="kaydet" value="Kaydet"/>

                                    <% //if (dDuzenle) {%>
                                    <input name="dkatID" style="display: none;" value="<%=//dkatID%>" />
                                    <input class="btn btn-info" style="margin-top: 5px;" type="submit" name="duzenleBtn" value="Düzenle"/>
                                    <%//}%>
                                </div>

                                <%//if (hata) {%>
                                <div class="alert alert-danger alert-dismissable">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                    Kategori İsimleri Aynı Olamaz !
                                </div>
                                <%//}%>

                            </form>
                        </div>
                        <!-- /.col-lg-6 (nested) -->
                    </div>
                    <!-- /.row (nested) -->
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
                    DataTables Advanced Tables
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>katID</th>
                                    <th>baslik</th>
                                    <th>kisaAciklama</th>
                                    <th>detay</th>
                                    <th>piyasaFiyati</th>
                                    <th>gecerliFiyat</th>
                                    <th>gosterim</th>
                                    <th>tarih</th>
                                </tr>
                            </thead>
                            <tbody>

                               <%
                                    ResultSet rs = db.data("kategori");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=//rs.getString("katID")%></td>
                                    <td><%=//rs.getString("ustKat")%></td>
                                    <td><%=//rs.getString("katAdi")%></td>
                                    <td><%=//rs.getString("katTarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="kategoriler.jsp?duzenle&katID=<%=//rs.getString("katID")%>&adi=<%=//rs.getString("katAdi")%>&ustkatID=<%=//rs.getString("ustKat")%>" class="btn btn-info">Düzenle</a>
                                        <a href="kategoriler.jsp?sil&katID=<%=//rs.getString("katID")%>" class="btn btn-danger">Sil</a>
                                    </td>
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



