<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Duyuru Yönetimi</title>
<%@include file="ust.jsp" %>


<%

   
    boolean IDKontrol  =(request.getParameter("id") != null);
    String id = request.getParameter("id");
    if(IDKontrol){
        try{
            int sonuc = db.st.executeUpdate("delete from duyurular where id = '"+id+"'");
            if(sonuc>0){
                
            }
        }catch(Exception e){
            
        }
    }
%>
<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Duyuru Yönetimi</h1>
        </div>

        <!-- çalışma alanı !-->
        <form action="duyuruEkle.jsp">
            <input class="btn btn-outline btn-success" style="margin: 15px;" type="submit" value="Duyuru Ekle"/>
            
        </form>
        <form action="" method="get">
            <input value="<%=id%>" type="text" class="form-control" style="display: none;" name="ID">
        </form>
        <%
            boolean hataDenetim = (request.getParameter("hata") != null);
            
            if(hataDenetim){%>
        <div class="alert alert-success" style="margin: 15px;">
            <button type="button" name="close" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            Düzenlemeniz Başarıyla Tamamlanmıştır !
            <%
           boolean alertKapa = (request.getParameter("close") != null);
           if(alertKapa){
             out.print("<script>window.location.href = 'duyuru.jsp';</script>"); 
           }
           %>
        </div>
           <%}%>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">

                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table display table-striped table-hover table-condensed table-responsive dataTable no-footer" id="dataTables-example" style=" text-align: center;">
                            <thead>
                                <tr style="text-transform: capitalize;">
                                    <th style="text-align:center;">id</th>
                                    <th style="text-align:center;">durum</th>
                                    <th style="text-align:center;">baslik</th>
                                    <th style="text-align:center;">detay</th>
                                    <th style="text-align:center;">tarih</th>
                                    <th style="text-align:center;">düzenle / Sil</th>

                                </tr>
                            </thead>
                            <tbody>
                                <%
                                    ResultSet rs = db.data("duyurular");
                                    while (rs.next()) {
                                %>
                                <tr class="odd gradeX">
                                    <td><%=rs.getInt("id")%></td>
                                    <td><%=rs.getString("durum")%></td>
                                    <td
                                        <%if (rs.getString("durum").equals("0")) {
                                        %>

                                        style="text-decoration: line-through;"


                                        <%
                            }%>
                                        ><%=rs.getString("baslik")%></td>
                                    <td
                                        <%if (rs.getString("durum").equals("0")) {
                                        %>

                                        style="text-decoration: line-through;"


                                        <%
                            }%>><%=rs.getString("detay")%></td>
                                    <td
                                        <%if (rs.getString("durum").equals("0")) {
                                        %>

                                        style="text-decoration: line-through;"


                                        <%
                                            }%>><%=rs.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="duyuruEkle.jsp?duzenle&id=<%=rs.getString("id")%>&dDurum=<%=rs.getString("durum")%>&dBaslik=<%=rs.getString("baslik")%>&dDetay=<%=rs.getString("detay")%>" class="btn btn-outline btn-warning" style="margin-right: 10px;"><i class="fa fa-pencil"></i></a>
                                        <a href="duyuru.jsp?sil&id=<%=rs.getString("id")%>" class="btn btn-outline btn-danger"><i class="fa fa-times"></i></a>
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

