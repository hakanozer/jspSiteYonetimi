<%@page import="javafx.scene.control.Alert"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>

<%
    request.setCharacterEncoding("UTF-8");

//kayıt işlemi


//düzenle butonuyla veri çekme
    boolean dzDuzenle = (request.getParameter("duzenle") != null);
    String kID = "";
    String kAdi = "";
    String kSoyadi = "";
    String kMail = "";
    if (dzDuzenle) {
        kID = request.getParameter("dzKulID");
        kAdi = request.getParameter("dzAdi");
        kSoyadi = request.getParameter("dzSoyadi");
        kMail = request.getParameter("dzMail");
    }

//düzenlemeyi kaydetme işlemi
    boolean dDuzenle = (request.getParameter("kaydet") != null);

    if (dDuzenle) {
        
        String kulIDi = request.getParameter("dzKulID");
        String kulAdii = request.getParameter("kulAdi");
        String kulSoyadii = request.getParameter("kulSoyadi");
        String kulMaili = request.getParameter("kulMail");
        try {
            int sonuc = db.st.executeUpdate("UPDATE kullanici SET adi = '" + kulAdii + "', soyadi = '" + kulSoyadii + "', mail = '" + kulMaili + "' WHERE id = '" + kulIDi + "'");
            if (sonuc > 0) {
                //düzenleme başarılı
                out.print("<script>window.location.href = 'kullaniciDuzenle.jsp';</script>");

            }
          
                
            
            
        } catch (Exception e) {

        }
    }
      boolean ssil= (request.getParameter("sil")!=null );
            if(ssil){
                String sid= request.getParameter("skulID");
                    int sonuc = db.st.executeUpdate("delete from kullanici where id='" + sid + "'");
            if (sonuc > 0) {
                //düzenleme başarılı
                out.print("<script>window.location.href = 'kullaniciDuzenle.jsp';</script>");

            }    
            }
%>
<div id="page-wrapper" style="min-height: 99px;">

    <% if (dzDuzenle) {%>
    <div class="row" style="padding: 40px 0px">

        <div class="col-md-8 col-md-offset-2">

            <div class="panel panel-primary">

                <div class="panel-heading text-center">
                    <h3>Kullanıcı Düzenleme</h3>
                </div>

                <div class="panel-body">


                    <form action="#" method="post">
                        <input name="fId" type="hidden" value="20">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="kulAdi">Adınız:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" type="text" name="kulAdi" id="kulAdi" value="<%=kAdi%>" required >
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="kulSoyadi">Soyadınız:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" type="text" name="kulSoyadi" id="kulSoyadi" value="<%=kSoyadi%>" required >
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="kulMail">Mailiniz:</label>
                                </div>
                                <div class="col-md-9">
                                    <input class="form-control" type="email" name="kulMail" id="kulMail" value="<%=kMail%>" required >
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-9 col-md-offset-3">
                                    <input class="btn btn-default btn-sm btn-primary" type="submit" name="kaydet" value="Kaydet">
                                    <a href="kullaniciDuzenle.jsp" class="btn btn-sm btn-danger">İptal</a>
                                    <a class="btn btn-warning btn-sm" href="kullaniciSifreDuzenle.jsp?id=<%=kID%>">Şifre Değiştir</a>
                                </div>
                            </div>
                        </div>
                    </form>





                </div>

            </div>

        </div>

    </div>
    <%}%>



    <!--kullanıcılar tablosu -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Kayıtlı Kullanıcılar
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                            <thead>
                                <tr role="row">
                                    <th class="sorting_asc" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="ID: activate to sort column descending" style="width: 20px;">ID</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Adı: activate to sort column ascending" style="width: 207px;">Adı</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Soyadı: activate to sort column ascending" style="width: 188px;">Soyadı</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Mail: activate to sort column ascending" style="width: 207px;">Mail</th>
                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Tarih: activate to sort column ascending" style="width: 200px;">Tarih</th>
                                    <th tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="İşlem: activate to sort column ascending" style="width: 100px;">İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <%
                                    ResultSet rstr = db.data("kullanici");
                                    while (rstr.next()) {
                                %>
                                <tr class="gradeA odd" role="row">
                                    <td class="sorting_1"><%=rstr.getString("id")%></td>
                                    <td><%=rstr.getString("adi")%></td>
                                    <td><%=rstr.getString("soyadi")%></td>
                                    <td><%=rstr.getString("mail")%></td>
                                    <td><%=rstr.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="kullaniciDuzenle.jsp?duzenle&dzKulID=<%=rstr.getString("id")%>&dzAdi=<%=rstr.getString("adi")%>&dzSoyadi=<%=rstr.getString("soyadi")%>&dzMail=<%=rstr.getString("mail")%>" class="btn btn-info">Düzenle</a>
                                        <a href="kullaniciDuzenle.jsp?sil&skulID=<%=rstr.getString("id")%>" class="btn btn-danger">Sil</a>
                                    </td>
                                </tr>
                                <%}%>
                            </tbody>
                        </table></div></div><div class="row"><div class="col-sm-6"><div class="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-6"><div class="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="dataTables-example" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">5</a></li><li class="paginate_button " aria-controls="dataTables-example" tabindex="0"><a href="#">6</a></li><li class="paginate_button next" aria-controls="dataTables-example" tabindex="0" id="dataTables-example_next"><a href="#">Next</a></li></ul></div></div></div></div>
        </div>
        <!-- /.table-responsive -->
    </div>
    <!-- /.panel-body -->

    <!-- tablo bitti-->


</div>
<%@include file="alt.jsp" %>



