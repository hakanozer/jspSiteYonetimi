<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Yerleşim Tablosu</title>
<%@include file="ust.jsp" %>

<%
    boolean dGun = (request.getParameter("duzenleGun") != null);
    if (dGun) {
        String gun = request.getParameter("gun");
        String id = request.getParameter("urunID");
        try {
            if (gun.equals("0")) {
                db.st.executeUpdate("update urunler set gununUrunu='1' where id='" + id + "' ");
                // response.sendRedirect("yerlesimDuzeni.jsp");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp'</script>");
            } else {
                db.st.executeUpdate("update urunler set gununUrunu='0' where id='" + id + "' ");
                // response.sendRedirect("#");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp';</script>");

            }
        } catch (Exception e) {
            out.print("hata: " + e);
        }
    }
%>

<%
    boolean dHafta = (request.getParameter("duzenleHafta") != null);
    if (dHafta) {
        String hafta = request.getParameter("hafta");
        String id = request.getParameter("urunID");
        try {
            if (hafta.equals("0")) {
                db.st.executeUpdate("update urunler set haftaninUrunu='1' where id='" + id + "' ");
                // response.sendRedirect("yerlesimDuzeni.jsp");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp'</script>");
            } else {
                db.st.executeUpdate("update urunler set haftaninUrunu='0' where id='" + id + "' ");
                // response.sendRedirect("#");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp';</script>");

            }
        } catch (Exception e) {
            out.print("hata: " + e);
        }
    }
%>

<%
    boolean dKampanya = (request.getParameter("duzenleKampanya") != null);

    if (dKampanya) {
        String kampanya = request.getParameter("kampanya");
        String id = request.getParameter("urunID");
        try {
            if (kampanya.equals("0")) {
                db.st.executeUpdate("update urunler set kampanyaliUrun='1' where id='" + id + "' ");
                // response.sendRedirect("#");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp';</script>");
            } else {
                db.st.executeUpdate("update urunler set kampanyaliUrun='0' where id='" + id + "' ");
                // response.sendRedirect("#");
                out.print("<script>window.location.href='yerlesimDuzeni.jsp';</script>");

            }
        } catch (Exception e) {
            out.print("hata: " + e);
        }
    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Yerleşim Tablosu</h1>
        </div>
        <!-- çalışma alanı !-->
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
                                    <th>Başlık</th>
                                    <th>Günün Ürünü</th>
                                    <th>Haftanın Ürünü</th>
                                    <th>Kampanyalı Ürün</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("kategori k inner join urunler u on k.katID=u.katID");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("katAdi")%>---<%=rs.getString("baslik")%></td>
                                    <td style="text-align: center;">
                                        <%
                                            if (rs.getString("gununUrunu").equals("0")) {
                                        %>
                                        <a href="yerlesimDuzeni.jsp?duzenleGun&urunID=<%=rs.getString("id")%>&gun=<%=rs.getString("gununUrunu")%>" title="Günün Ürünü Yap" class="btn btn-info">Aktif Yap</a>
                                        <%
                                        } else if (rs.getString("gununUrunu").equals("1")) {
                                        %>
                                        <a href="yerlesimDuzeni.jsp?duzenleGun&urunID=<%=rs.getString("id")%>&gun=<%=rs.getString("gununUrunu")%>" title="Günün Ürünü Yapma" class="btn btn-success">Pasif Yap</a>
                                        <%
                                            }
                                        %>
                                    </td>
                                    <!-- ------------------------------------------------------------ -->
                                    <td style="text-align: center;">
                                        <%
                                            if (rs.getString("haftaninUrunu").equals("0")) {
                                        %>
                                        <a href="yerlesimDuzeni.jsp?duzenleHafta&urunID=<%=rs.getString("id")%>&hafta=<%=rs.getString("haftaninUrunu")%>" title="Haftanın Ürünü Yap" class="btn btn-info">Aktif Yap</a>


                                        <%
                                        } else if (rs.getString("haftaninUrunu").equals("1")) {
                                        %>
                                        <a href="yerlesimDuzeni.jsp?duzenleHafta&urunID=<%=rs.getString("id")%>&hafta=gun=<%=rs.getString("haftaninUrunu")%>" title="Haftanın Ürünü Yapma" class="btn btn-success">Pasif Yap</a>

                                        <%
                                            }
                                        %>
                                    </td>
                                    <!-- ------------------------------------------------------------ -->
                                    <td style="text-align: center;">
                                        <%
                                            if (rs.getString("kampanyaliUrun").equals("0")) {
                                        %>
                                        <a href="yerlesimDuzeni.jsp?duzenleKampanya&urunID=<%=rs.getString("id")%>&kampanya=<%=rs.getString("kampanyaliUrun")%>" class="btn btn-info" title="Kampanyalı Yap">Aktif Yap</a>
                                        <%
                                        } else if (rs.getString("kampanyaliUrun").equals("1")) {
                                        %>

                                        <a href="yerlesimDuzeni.jsp?duzenleKampanya&urunID=<%=rs.getString("id")%>&kampanya=<%=rs.getString("kampanyaliUrun")%>" class="btn btn-success" title="Kampanyasız Yap">Pasif Yap</a>

                                        <%
                                            }
                                        %>
                                    </td>
                                    <!-- ------------------------------------------------------------ -->

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