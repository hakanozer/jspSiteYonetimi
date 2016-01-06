<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>

<%
// kaydet işlemi
    boolean dkaydet = (request.getParameter("havale") != null);
    boolean hata = false;

    String id = "";
    String info = "";
    if (dkaydet) {

        id = request.getParameter("id");
        info = request.getParameter("info");
        
        try {
            int sonuc = db.st.executeUpdate("update havale set id = '" + id + "', info = '" + info + "' where id = '" + id + "' ");
            out.print("<script>window.location.href = 'havale.jsp';</script>");
            
        } catch (Exception ex) {
            hata = true;
        }

    }
%>



<div id="page-wrapper" style="min-height: 99px;">

    <div class="text-right" style="margin-bottom: 25px">
        <a href="./" class="btn btn-primary"><i class="glyphicon glyphicon-backward"> </i> Geri Dön</a>
    </div>


    <section>

        <div class="panel panel-primary" style="width: 75%; margin: 0 auto; margin-bottom: 50px">

            <div class="panel-heading">
                <h4 class="panel-title text-center">Havale Bilgileri</h4>
            </div>

            <div class="panel-body">

                <p class="text-center">Havale bilgilerinizi aşağıda girebilirsiniz.</p>
                <hr>
                <form class="form-horizontal" action="havale.jsp" method="get" style="width: 90%; margin: 0 auto;">

                    <%ResultSet rs = db.data("havale");
                        String havale = "";
                        String id2 = "";
                        if (rs.next()) {
                            havale = rs.getString("info");
                            id2 = rs.getString("id");
                        }
                        db.st.close();
                        rs.close();
                    %>

                    <input class="form-control" style="display: none" value="<%=id2%>" name="id">
                    <br>

                    <!-- Detay -->
                    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                    <textarea name="info" id="detay" class="ckeditor"><%=havale%></textarea>
                    <script type="text/javascript">
                        CKEDITOR.replace('detay');
                    </script>
                    <!-- Durum -->
                    <br>


                    <%if (hata) {%>
                    <div class="alert alert-danger alert-dismissable">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        Havale bilgilerini eklemede hata oldu !
                    </div>
                    <%}%>

                    <!-- Buton -->
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-3"> </div>
                            <div class="col-md-9 text-right">
                                <input type="submit" name="havale" class="btn btn-primary">

                            </div>
                        </div>
                    </div>
                </form>

            </div>

            <div class="panel-footer"></div>
        </div>

    </section>



</div>
<%@include file="alt.jsp" %>