<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Slayt Düzenle / Sil</title>
<%@include file="ust.jsp" %>

<%
    // kaydet işlemi
    boolean dkaydet = (request.getParameter("kaydet") != null);
    if (dkaydet) {
        String baslik = request.getParameter("baslik");
        String aciklama = request.getParameter("aciklama");
        String link = request.getParameter("link");

        try {
            db.st.executeUpdate("insert into slayt values(null, '" + baslik + "' ,'" + aciklama + "','" + link + "', now())");
            out.print("<script>window.location.href = 'slayt.jsp';</script>");
        } catch (Exception ex) {
            out.print("hata: " + ex);
        }

    }
%>

<%
    // silme işlemı
    boolean dSil = (request.getParameter("sil") != null);
    if (dSil) {
        String id = request.getParameter("slaytID");

        try {
            db.st.executeUpdate("delete from slayt where id='" + id + "'");
            db.st.executeUpdate("delete from slayt_resimleri where slaytID='" + id + "'");
            // response.sendRedirect("slayt.jsp");
            out.print("<script>window.location.href = 'slayt.jsp';</script>");
        } catch (Exception ex) {
            out.print("hata: " + ex);
        }
    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Düzenle / Sil</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Yeni Slayt Ekle
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">
                                    <label for="baslik">Başlık</label>
                                    <input name="baslik" id="baslik" class="form-control" required placeholder="Başlık">
                                        <label for="aciklama">Açıklama</label>
                                        <input name="aciklama" id="aciklama" class="form-control" required placeholder="Açıklama">
                                            <label for="link">Link</label>
                                            <input name="link" id="link" class="form-control" required placeholder="Link">         
                                                <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="kaydet" value="Kaydet"/>
                                                </div>
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
                                                                                <th>Açıklama</th>
                                                                                <th>İşlemler</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                            <%
                                                                                ResultSet rs = db.data("slayt");
                                                                                while (rs.next()) {
                                                                            %>

                                                                            <tr class="odd gradeX">
                                                                                <td><%=rs.getString("aciklama")%></td>
                                                                                <td style="text-align: center;">
                                                                                    <a href="slaytDuzenle.jsp?duzenle&slaytID=<%=rs.getString("id")%>" class="btn btn-info">Düzenle</a>
                                                                                    <a href="slayt.jsp?sil&slaytID=<%=rs.getString("id")%>" class="btn btn-danger">Sil</a>
                                                                                    <a href="sliderResimYukle.jsp?resim_id=<%=rs.getString("id")%>" class="btn btn-danger">Resim Ekle</a>
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
