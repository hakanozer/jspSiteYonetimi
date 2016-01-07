<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Müşteriler</title>
<%@include file="ust.jsp" %>

<%
    // silme işlemi 
    boolean silDurum = (request.getParameter("sil") != null);
    if (silDurum) {
        String id = request.getParameter("musteriID");
        int sDurum = db.st.executeUpdate("DELETE FROM adresler, musteriler USING adresler LEFT JOIN musteriler ON adresler.musteriID = musteriler.musteriID WHERE musteriler.musteriID = '" + id + "'");
       
        if (sDurum > 0 ) {
            out.print("<script>window.location.href = 'musteriler.jsp';</script>");
        }
    }
%>

<div id="page-wrapper" style="min-height: 99px;">
            
    <div class="row">

        <div class="col-lg-12">
            <h1 class="page-header">Müşteri Yönetimi</h1>
        </div>
    </div>    
    <!-- çalışma alanı !-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Müşteriler Tablosu
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <div class="form-group">
                            <form action="musteriEkle.jsp">
                                <input style="float: right; margin-bottom: 5px;" type="submit" name="musteriKaydet" class="btn btn-success" value="Müşteri Ekle">
                            </form>
                        </div>
                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Adı</th>
                                    <th>Soyadı</th>
                                    <th>Mail</th>
                                    <th>Telefon</th>
                                    <th>Ban</th>
                                    <th>Tarih</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("musteriler");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("musteriID")%></td>
                                    <td><%=rs.getString("musteriAdi")%></td>
                                    <td><%=rs.getString("musteriSoyadi")%></td>
                                    <td><%=rs.getString("mail")%></td>
                                    <td><%=rs.getString("telefon")%></td>
                                    <td><%=rs.getString("ban")%></td>
                                    <td><%=rs.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="musteriDuzenle.jsp?duzenle&musteriID=<%=rs.getString("musteriID")%>" class="btn btn-info">Düzenle</a>
                                        <a href="musteriler.jsp?sil&musteriID=<%=rs.getString("musteriID")%>" class="btn btn-danger">Sil</a>
                                        <a href="yeniAdresEkle.jsp?adresEkle&musteriID=<%=rs.getString("musteriID")%>" class="btn btn-success">Adres Ekle</a>
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
</div>

</div>


<%@include file="alt.jsp" %>
