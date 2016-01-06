<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Slayt Düzenle / Sil</title>
<%@include file="ust.jsp" %>

<%
    //duzenle - dataGetır
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String id = "";
    String baslik = "";
    String aciklama = "";
    String link = "";
    if (dDuzenle) {
        id = request.getParameter("slaytID");
        ResultSet rs = db.data("slayt where id='" + id + "'");
        rs.next();
        baslik = rs.getString("baslik");
        aciklama = rs.getString("aciklama");
        link = rs.getString("link");
    }
%>

<%
    //guncelleme - kayıt işlemı
    boolean dGuncelle = (request.getParameter("bDuzenle") != null);
    if (dGuncelle) {

        String slaytId = request.getParameter("id");
        String Gbaslik = request.getParameter("baslik");
        String Gaciklama = request.getParameter("aciklama");
        String Glink = request.getParameter("link");
        try {
            db.st.executeUpdate("update slayt set baslik='" + Gbaslik + "',aciklama='" + Gaciklama + "',link='" + Glink + "' where id='" + slaytId + "'");
            //   response.sendRedirect("./");
            out.print("<script>window.location.href='slayt.jsp'</script>");
        } catch (Exception e) {
            out.print("hata: " + e);
        }
    }

%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Düzenle</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Slayt Düzenle
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">
                                    <input name="id" value="<%=id%>" style="display: none">
                                        <label for="baslik">Başlık</label>
                                        <input name="baslik" value="<%=baslik%>" id="baslik" class="form-control" required placeholder="Başlık">
                                            <label for="aciklama">Açıklama</label>
                                            <input name="aciklama" value="<%=aciklama%>" id="aciklama" class="form-control" required placeholder="Açıklama">
                                                <label for="link">Link</label>
                                                <input name="link" value="<%=link%>" id="link" class="form-control" required placeholder="Link"><br>

                                                    <table>
                                                        <tr>
                                                            <td><label>Resim</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> 
                                                            <td><a href="sliderResimYukle.jsp?resim_id=<%=id%>" class="btn btn-danger">Resim Düzenle</a></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                        <br>

                                                    <%
                                                        ResultSet rs = db.data("slayt_resimleri where slaytID='" + id + "'");
                                                        while (rs.next()) {
                                                    %>
                                                    <img src="<%=sliderResimFile%><%=rs.getString("slaytID")%>/<%=rs.getString("adi")%>"/><br>
                                                    <br>
                                                    <%
                                                        }
                                                    %>
                                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="bDuzenle" value="Düzenle Kaydet"/>

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

                                                    </div>
                                                    <%@include file="alt.jsp" %>
