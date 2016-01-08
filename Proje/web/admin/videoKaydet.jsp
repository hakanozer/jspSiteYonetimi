<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@include file="ust.jsp" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Video Kaydet</title>

</head>
<body>

    <form action="videoKaydet2.jsp" method="get">


        <div id="page-wrapper" style="min-height: 99px; padding-top: 40px">
            <h1 class="page-header">Video Kaydı</h1>

            <table width="900" border="0" align="center" >
                <tbody><tr>
                        <td></td>
                        <td><label for="baslik_turkce"></label>
                <input required name="baslik_turkce" type="text" name="baslik_turkce" size="50" placeholder="Lütfen Başlık Giriniz"></td>
                    </tr>
                    <tr>
                        <td style="width: 100px;">Ana Kategori</td>
                        <td>
                    <div style="margin: 10px auto;">
                        <select name="anakatlar" >
                    </div>
                    <%
                        ResultSet rs = db.data("video_kategori");
                        while (rs.next()) {
                            String kategoriAd = rs.getString(2);

                    %>
                    <option value="<%=kategoriAd%>" selected="selected"><%=kategoriAd%></option>
                    <% }%>

                    </select>
                    </td>
                    </tr>


                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>   
                            <textarea required name="iframe_kodu" style="width: 640px;height: 384px;" name="iframe_kodu" placeholder="Lütfen iFrame Kodunu Giriniz..."></textarea> 

                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>AÇIKLAMA</td>
                        <td>
                    <script type="text/javascript" src="ckeditor/ckeditor.js" ></script>
                    <textarea name="detay" id="detay" class="ckeditor"></textarea>
                    <script type="text/javascript">
                        CKEDITOR.replace('detay');
                    </script>
                    </tr>
                    <tr>
                        <td align="left">

                        </td>
                    </tr>
                </tbody></table>



    </form>
<div style="margin: 10px auto;" align="center">
    <input type="submit" name="button2" id="button2" value="Kaydet" class="btn btn-info">

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
                                <th>videoID</th>
                                <th>videoBaslik</th>
                                <th>video</th>
                                <th>videoKategori</th>
                                <th>videoDetay</th>
                            </tr>
                        </thead>
                        <tbody>

                            <%
                                ResultSet rssp = db.data("videolar");
                                while (rssp.next()) {
                            %>

                            <tr class="odd gradeX">
                                <td><%=rssp.getString("video_id")%></td>
                                <td><%=rssp.getString("video_baslik")%></td>
                                <td><%=rssp.getString("video_iFrame")%></td>
                                <td><%=rssp.getString("video_kategori")%></td>
                                <td><%=rssp.getString("video_detay")%></td>
                                <td style="text-align: center;">

                                    <a href="videoKaydet2.jsp?sil&idsi=<%=rssp.getString("video_id")%>" class="btn btn-danger">Sil</a>
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
</body>
</html>
<%@include file="alt.jsp" %>
