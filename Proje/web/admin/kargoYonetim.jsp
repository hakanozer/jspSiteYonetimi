<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Kargo İşlemleri</title>
<%@include file="ust.jsp" %>


<%
// silme işlemi 
    boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String id = request.getParameter("kargoID");
        int sDurum = db.st.executeUpdate("delete from kargo where kargo_id = '" + id + "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'kargoYonetim.jsp';</script>");
        }
    }

%>

<div id="page-wrapper" style="min-height: 99px;">
            
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Kargo İşlemleri</h1>
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
                   
                
                <form action="kargoEkle.jsp" method="post"> 
                        <div class="col-md-5" style="padding-bottom: 15px"> 
                            <input class="btn btn-success" style="float:right;" type="submit" name="kaydet" value="Kargo Ekle"/>
                        </div>
                    </form>
           
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Kargo Adı</th>
                                    <th>Ücreti</th>
                                    <th>Tarih</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("kargo");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("kargo_id")%></td>
                                    <td><%=rs.getString("kargo_adi")%></td>
                                    <td><%=rs.getString("ucreti")%></td>
                                    <td><%=rs.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                       
                                        <a href="kargoEkle.jsp?duzenle&kargoID=<%=rs.getString("kargo_id")%>&kargo_AD=<%=rs.getString("kargo_adi")%>&ucret=<%=rs.getString("ucreti")%>"  class="btn btn-info">Düzenle</a>
                                        <a href="kargoYonetim.jsp?sil&kargoID=<%=rs.getString("kargo_id")%>" class="btn btn-danger">Sil</a>
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




