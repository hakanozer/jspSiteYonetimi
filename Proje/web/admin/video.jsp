<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@include file="ust.jsp" %>
 
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Video</title>
    <style>
    .kategori
    {
        padding: 20px;
        
    }    
    .videokategoriarea
    {
        padding-top: 20px;
    }
    </style>
    
</head>
<body>
    <form action="kategoriKaydet.jsp" method="get">
    <div id="page-wrapper" style="min-height: 99px;">

        
            <div class="row">
            <div class="col-md-12">
            <h1 class="page-header">Video Kategori Kaydı</h1>
            </div>
             <div class="row">
            <div class="col-md-8" align="center">
                <input id="videokategori" name="videokategori" required class="videokategori" type="text" placeholder="Kategori Giriniz.." />
            </div>
            <div class="col-md-4" align="center">
            </div>
            </div>   
                </br>
            <div class="row">
            <div class="col-md-8" align="center">
                <textarea required rows="4" cols="50" name="videokategoriarea" id="videokategoriarea" class="videokategoriarea" placeholder="Açıklama Giriniz"></textarea>
            </div>
            <div class="col-md-4" align="center">
            </div>
            </div>
                </br>
             <div class="row">
            <div class="col-md-8" align="center" style="margin: 10px auto;">
                <button name="bKaydet" placeholder="" class="btn btn-info" >Kaydet</button>
               
            </div>
            <div class="col-md-4" align="center">
                
            </div>
            </div>   
    </div>
    
  </form>
    
    
</body>
</html>

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
                                    <th>kategoriID</th>
                                    <th>kategoriAdi</th>
                                    <th>kategoriAciklama</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rssp = db.data("video_kategori");
                                    while (rssp.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rssp.getString("id")%></td>
                                    <td><%=rssp.getString("kategoriAdi")%></td>
                                    <td><%=rssp.getString("kategoriAciklama")%></td>
                                    <td style="text-align: center;">
                                        
                                        <a href="kategoriKaydet.jsp?sil&idsi=<%=rssp.getString("id")%>" class="btn btn-danger">Sil</a>
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
<%@include file="alt.jsp" %>