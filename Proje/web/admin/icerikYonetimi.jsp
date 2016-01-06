<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>


<%
// silme işlemi 
    boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String id = request.getParameter("id");
        int sDurum = db.st.executeUpdate("delete from icerik where id = '" + id + "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'icerikYonetimi.jsp';</script>");
        }
    }

%>

<%    boolean aktif = (request.getParameter("aktif") != null);
    String durum = "2";
    if (aktif) {

        durum = request.getParameter("durum");

    }
%>


<div id="page-wrapper" style="min-height: 99px;">

    <div class="text-right" style="margin-bottom: 25px">
        <a href="./" class="btn btn-primary"><i class="glyphicon glyphicon-backward"> </i> Geri Dön</a>
    </div>

    <section>
        <div class="row">


            <div class="col-md-5" style="padding-bottom: 15px">
                <a href="icerikEkle.jsp" class="btn btn-primary">İcerik Ekle</a>
            </div>
            <div class="col-md-2">
            </div>

            <form action="icerikYonetimi.jsp">
                <%--<input name="link" type="hidden" value="icerik">--%>
                <div class="col-md-4">
                    <select name="durum" class="form-control" >

                        <%if (durum.equals("1")) {%>
                        <option value="2">-- Hepsi</option>
                        <option selected = "selected" value="1">Aktif İçerikler</option>
                        <option value="0">Pasif İçerikler</option>
                        <%} else if (durum.equals("0")) {%>
                        <option value="2">-- Hepsi</option>
                        <option value="1">Aktif İçerikler</option>
                        <option selected = "selected" value="0">Pasif İçerikler</option>
                        <%} else {%>
                        <option selected = "selected" value="2">-- Hepsi</option>
                        <option value="1">Aktif İçerikler</option>
                        <option value="0">Pasif İçerikler</option>
                        <%}%>
                    </select>
                </div>
                <div class="form-group col-md-1">
                    <input class="btn btn-primary" type="submit" name="aktif" value="SEÇ">
                </div>
            </form>
        </div>
        <hr>



        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Ürünler Tablosu
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="dataTable_wrapper">
                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DURUM</th>
                                        <th>BAŞLIK</th>
                                        <th>KISA AÇIKLAMA</th>
                                        <th>DETAY</th>
                                        <th>TARİH</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <%
                                        if (durum.equals("2")) {
                                            ResultSet rs = db.data("icerik");
                                            while (rs.next()) {
                                    %>

                                    <tr class="odd gradeX">
                                        <td><%=rs.getString("id")%></td>
                                        <td><%=rs.getString("durum")%></td>
                                        <td><%=rs.getString("baslik")%></td>
                                        <td><%=rs.getString("kisaAciklama")%></td>
                                        <td><%=rs.getString("detay")%></td>
                                        <td><%=rs.getString("tarih")%></td>
                                        <td style="text-align: center;">
                                            <a href="icerikDuzenle.jsp?duzenle&id=<%=rs.getString("id")%>&durum=<%=rs.getString("durum")%>&baslik=<%=rs.getString("baslik")%>&kisaAciklama=<%=rs.getString("kisaAciklama")%>&detay=<%=rs.getString("detay")%>
                                               " class="btn btn-info">Düzenle</a>
                                            <a href="icerikYonetimi.jsp?sil&id=<%=rs.getString("id")%>" class="btn btn-danger">Sil</a>
                                        </td>
                                    </tr>
                                    <%}
                                    } else if (durum.equals("1")) {
                                        ResultSet rs = db.data("icerik where durum = 1");
                                        while (rs.next()) {%>

                                    <tr class="odd gradeX">
                                        <td><%=rs.getString("id")%></td>
                                        <td><%=rs.getString("durum")%></td>
                                        <td><%=rs.getString("baslik")%></td>
                                        <td><%=rs.getString("kisaAciklama")%></td>
                                        <td><%=rs.getString("detay")%></td>
                                        <td><%=rs.getString("tarih")%></td>
                                        <td style="text-align: center;">
                                            <a href="icerikDuzenle.jsp?duzenle&id=<%=rs.getString("id")%>&durum=<%=rs.getString("durum")%>&baslik=<%=rs.getString("baslik")%>&kisaAciklama=<%=rs.getString("kisaAciklama")%>&detay=<%=rs.getString("detay")%>
                                               " class="btn btn-info">Düzenle</a>
                                            <a href="icerikYonetimi.jsp?sil&id=<%=rs.getString("id")%>" class="btn btn-danger">Sil</a>
                                        </td>
                                    </tr>



                                    <%}
                                    } else {
                                        ResultSet rs = db.data("icerik where durum = 0");
                                        while (rs.next()) {%>

                                    <tr class="odd gradeX">
                                        <td><%=rs.getString("id")%></td>
                                        <td><%=rs.getString("durum")%></td>
                                        <td><%=rs.getString("baslik")%></td>
                                        <td><%=rs.getString("kisaAciklama")%></td>
                                        <td><%=rs.getString("detay")%></td>
                                        <td><%=rs.getString("tarih")%></td>
                                        <td style="text-align: center;">
                                            <a href="icerikDuzenle.jsp?duzenle&id=<%=rs.getString("id")%>&durum=<%=rs.getString("durum")%>&baslik=<%=rs.getString("baslik")%>&kisaAciklama=<%=rs.getString("kisaAciklama")%>&detay=<%=rs.getString("detay")%>
                                               " class="btn btn-info">Düzenle</a>
                                            <a href="icerikYonetimi.jsp?sil&id=<%=rs.getString("id")%>" class="btn btn-danger">Sil</a>
                                        </td>
                                    </tr>


                                    <%}
                                        }%>


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




    </section>

</div>
<%@include file="alt.jsp" %>



