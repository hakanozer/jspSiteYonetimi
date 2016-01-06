<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Kategoriler</title>
<%@include file="ust.jsp" %>

<%
    request.setCharacterEncoding("utf-8");
    // kaydet işlemi
    boolean dkaydet = (request.getParameter("kaydet") != null);
    boolean hata = false;
    if (dkaydet) {
        String katAdi = request.getParameter("katAdi").trim();
        String ustKatID = request.getParameter("ustKatID");
        try {
            db.st.executeUpdate("insert into kategori values(null, '"+ustKatID+"' ,'" + katAdi + "', now())");
            out.print("<script>window.location.href = 'kategoriler.jsp';</script>");
        } catch (Exception ex) {
            hata = true;
        }

    }

    // silme işlemi 
    boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String id = request.getParameter("katID");
        int sDurum = db.st.executeUpdate("delete from kategori where katID = '" + id + "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'kategoriler.jsp';</script>");
        }
    }

    // düzenle - data
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String dKatAdi = "";
    String dkatID = "";
    String ustkatID = "";
    if (dDuzenle) {
        dKatAdi = request.getParameter("adi");
        dkatID = request.getParameter("katID");
        ustkatID = request.getParameter("ustkatID");
    }

    // duzenle kaydet
    boolean dduzenleBtn = (request.getParameter("duzenleBtn") != null);
    if (dduzenleBtn) {
        String dKatAdii = request.getParameter("katAdi");
        String dkatIDi = request.getParameter("dkatID");
        String ustkatIDi = request.getParameter("ustKatID");
        int sonuc = db.st.executeUpdate("update kategori set katAdi = '" + dKatAdii + "', ustKat = '"+ustkatIDi+"' where katID = '" + dkatIDi + "' ");
        if (sonuc > 0) {
            // başarılı
            out.print("<script>window.location.href = 'kategoriler.jsp';</script>");

        }
    }


%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Kategoriler</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Yeni Kategori Ekle
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
                                                ResultSet rss = db.data("kategori where ustKat = '0'");
                                                while (rss.next()) {
                                                    if(rss.getString("katID").equals(ustkatID)) {
                                                
                                            %>
                                            <option selected="selected" value="<%=rss.getString("katID")%>"><%=rss.getString("katAdi")%></option>
                                            <%}else{%>
                                                <option value="<%=rss.getString("katID")%>"><%=rss.getString("katAdi")%></option>
                                            <%}}%>
                                        </select>
                                    </div>


                                    <label for="katAdi">Kategori Adı</label>
                                    <input name="katAdi" value="<%=dKatAdi%>" id="katAdi" class="form-control" placeholder="Kategori Adı">
                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="kaydet" value="Kaydet"/>

                                    <% if (dDuzenle) {%>
                                    <input name="dkatID" style="display: none;" value="<%=dkatID%>" />
                                    <input class="btn btn-info" style="margin-top: 5px;" type="submit" name="duzenleBtn" value="Düzenle"/>
                                    <%}%>
                                </div>

                                <%if (hata) {%>
                                <div class="alert alert-danger alert-dismissable">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                    Kategori İsimleri Aynı Olamaz !
                                </div>
                                <%}%>

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
                                    <th>katID</th>
                                    <th>ustKatID</th>
                                    <th>katAdi</th>
                                    <th>katTarih</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("kategori");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("katID")%></td>
                                    <td><%=rs.getString("ustKat")%></td>
                                    <td><%=rs.getString("katAdi")%></td>
                                    <td><%=rs.getString("katTarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="kategoriler.jsp?duzenle&katID=<%=rs.getString("katID")%>&adi=<%=rs.getString("katAdi")%>&ustkatID=<%=rs.getString("ustKat")%>" class="btn btn-info">Düzenle</a>
                                        <a href="kategoriler.jsp?sil&katID=<%=rs.getString("katID")%>" class="btn btn-danger">Sil</a>
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



