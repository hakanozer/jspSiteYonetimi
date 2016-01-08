
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Haber Yönetimi</title>
<%@include file="ust.jsp" %>


<%
    //haber silme işlemi
    boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String Hid = request.getParameter("hID");
        int sDurum = db.st.executeUpdate("delete from haberler where hID = '" + Hid + "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
        }
    }
    // düzenle - data
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String hdID = "";
    String Hbaslik = "";
    String kaciklama = "";
    String detay = "";
    String resim = "";
    String ap = "";
    String hKategori = "";
    if (dDuzenle) {
        hdID = request.getParameter("hID");;
        Hbaslik = request.getParameter("hBaslik");
        kaciklama = request.getParameter("kisAciklama");
        detay = request.getParameter("uAciklama");
        ap = request.getParameter("AP");
        hKategori = request.getParameter("Hkategori");
    }

    // duzenle kaydet
    boolean dduzenleBtn = (request.getParameter("duzenleBtn") != null);
    if (dduzenleBtn) {
        String dHbaslik = request.getParameter("hbaslik");
        String dkaciklama = request.getParameter("kisaAciklama");
        String ddetay = request.getParameter("detay");
        String dap = request.getParameter("aP");
        String dKategori = request.getParameter("hkategori");
        int sonuc = db.st.executeUpdate("update haberler set hBaslik = '" + dHbaslik + "', kAciklama = '" + dkaciklama + "',uAciklama = '" + ddetay + "',AP = '" + dap + "',kategori = '" + dKategori + "' where hID = '" + hdID + "' ");
        if (sonuc > 0) {
            // başarılı
            out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");

        }
    }
    //iptal
    boolean diptal = (request.getParameter("iptal") != null);
    if (diptal) {
    out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
    }




%>
<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Haber Yönetimi</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">

                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">

                                    <a href="haberEkle.jsp" class="btn btn-primary">Haber Ekle</a>
                                    <a href="haberKategoriEkle.jsp" class="btn btn-primary">Kategori Ekle</a>
                                    <input name="dkatID" style="display: none;" value="" />

                                </div>                                                                                            
                            </form>
                        </div>
                        <!--     <div class="form-group col-md-2">
                                 <select class="form-control" name="durum" id="">
                                     <option value="0">-- Hepsi</option>
                                     <option value="1">Aktif</option>
                                     <option value="2">Pasif</option>
                                 </select>
                             </div>
                             <div class="form-group col-md-4">
                                 <select name="kategori_id" class="form-control" style="width: 75%; "id="">
                                     <option value="0">-- Bütün Kategoriler</option>
                                                                 <option value="10">aa</option>
                                                                 <option value="22">aaa</option>
                                                                 <option value="21">aaaaaaa</option>
                                                                 <option value="15">asas</option>
                                                                 <option value="14">br</option>
                                                                 <option value="13">falan</option>
                                                                 <option value="12">falan</option>
                                                                 <option value="16">fsagdfj</option>
                                                                 <option value="17">gsfdhs</option>
                                                                 <option value="18">java</option>
                                                                 <option value="20">kkss</option>
                                                                 <option value="19">se</option>
                                 </select>
                             </div>
                        <div class="form-group col-md-1" style="position: absolute;right: 20px;">
                            <input class="btn btn-primary" type="submit" name="yolla" value="SEÇ"/>
                        </div>-->
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
    <%if (dDuzenle) {%>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading" >
                    <h3 style="color :#0088cc;">Haber Düzenleme</h3>  
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">




                                    <label for="hbaslik">Haber Başlık</label>
                                    <input name="hbaslik" value="<%=Hbaslik%>" id="hbaslik" class="form-control" >
                                    <label for="kisaAciklama">Kısa Açıklama</label>
                                    <input name="kisaAciklama" value="<%=kaciklama%>" id="kisaAciklama" class="form-control" >
                                    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                                    <label for="detay">Uzun Açıklama</label>
                                    <textarea name="detay"  id="detay" class="ckeditor"><%=detay%></textarea>
                                    <script type="text/javascript">
                                        CKEDITOR.replace('detay');
                                    </script>

                                    <div class="form-group">
                                        <label>Aktif/Pasif</label>
                                        <select class="form-control" name="aP" >
                                            
                                            <option value="Aktif"<%=ap.equals("Aktif")?"selected":""%>>Aktif</option>
                                            <option value="Pasif"<%=ap.equals("Pasif")?"selected":""%>>Pasif</option> 
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Kategori</label>
                                        <select class="form-control" name="hkategori" >                                            
                                            <%
                                                ResultSet rss = db.data("haberKategori");
                                                while (rss.next()) {
                                                if(rss.getString("kAdi").equals(hKategori)){
                                            %>
                                            
                                            <option value="<%=rss.getString("kAdi")%>" selected="selected" > <%= rss.getString("kAdi")%></option>                                            

                                            <% }
                                                else{%>
                                                <option  value="<%=rss.getString("kAdi")%>"> <%= rss.getString("kAdi")%></option>
                                              <%  }  
                                              }  
    
                                            %>  

                                        </select>
                                        <br>
                                        
                                    </div>

                                    <input class="btn btn-primary" style="margin-top: 5px;" type="submit" name="duzenleBtn" value="Düzenle"/>


                                    <input name="dkatID" style="display: none;" value="" />
                                    <input class="btn btn-danger" style="margin-top: 5px;" type="submit" name="iptal" value="İptal"/>

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
    <%}%>


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
                                    <th>Haberler</th>
                                    <th>Kategori</th>
                                    <th>Aktif/Pasif</th>                                    
                                    <th>Ekleme Tarihi</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("haberler");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("hBaslik")%></td>
                                    <td><%=rs.getString("kategori")%></td>
                                    <td><%=rs.getString("AP")%></td>                                    
                                    <td><%=rs.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                        <a href="haberYonetimi.jsp?duzenle&hID=<%=rs.getString("hID")%>&hBaslik=<%=rs.getString("hBaslik")%>&kisAciklama=<%=rs.getString("kAciklama")%>&uAciklama=<%=rs.getString("uAciklama")%>&AP=<%=rs.getString("AP")%>&Hkategori=<%=rs.getString("kategori")%>" class="btn btn-info">Düzenle</a>
                                        <a href="haberYonetimi.jsp?sil&hID=<%=rs.getString("hID")%>" class="btn btn-danger">Sil</a>
                                        <a href="haberResimYukle.jsp?resim_id=<%=rs.getString("hID")%>" class="btn btn-danger">Resim Ekle</a>
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



