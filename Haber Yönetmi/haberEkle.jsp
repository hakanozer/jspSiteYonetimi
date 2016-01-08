<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Haber Ekleme</title>
<%@include file="ust.jsp" %>
<%

    request.setCharacterEncoding("utf-8");
    // kaydet işlemi
    boolean dkaydet = (request.getParameter("ekle") != null);
    boolean hata = false;
    if (dkaydet) {
        String hbaslik = request.getParameter("hbaslik").trim();
        String kAciklama = request.getParameter("kısaAcıklama");
        String UAciklama = request.getParameter("detay");
        //String Resim = request.getParameter("resAdi");
        String AP = request.getParameter("AP");
        String Hkat=request.getParameter("kategori");
        try {
            db.st.executeUpdate("insert into haberler values(null, '"+hbaslik+"' ,'" + kAciklama + "','"+UAciklama+"','"+AP+"','"+Hkat+"',now())");
            out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
        } catch (Exception ex) {
            hata = true;
        }
    }
    
    boolean diptal = (request.getParameter("iptal") != null);
    if (diptal) {
    out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
    }
    
    
    
%>


<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Haber Ekle</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 style="color :#0088cc; "> Yeni Haber Ekle </h3>    
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">

                                    


                                    <label for="hbaslik">Haber Başlık</label>
                                    <input name="hbaslik" value="" id="hbaslik" class="form-control" >
                                    <label for="kısaAcıklama">Kısa Açıklama</label>
                                    <input name="kısaAcıklama" value="" id="kısaAcıklama" class="form-control" >
                                    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                                    <label for="detay">Uzun Açıklama</label>
                                    <textarea name="detay" id="detay" class="ckeditor"></textarea>
                                    <script type="text/javascript">
                                        CKEDITOR.replace('detay');
                                    </script>
                                    
                                    <div class="form-group">
                                        <label>Aktif/Pasif</label>
                                        <select class="form-control" name="AP">
                                            <option value="0"> Seç</option>
                                            <option value="Aktif">Aktif</option>
                                            
                                            <option value="Pasif">Pasif</option>                                                                                                                                        
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Kategori</label>
                                        <select class="form-control" name="kategori">
                                            <option value="0">Kategori Seç</option>
                                            <%  
                                        ResultSet rss=db.data(" haberKategori");
                                        while(rss.next()){
                                    %>       
                                    <option  value="<%=rss.getString("kAdi") %>"> <%= rss.getString("kAdi") %></option>                                            
                                            
                                       <% } %>  
                                            
                                        </select>
                                        <br>
                                    
                                    </div>
                                    </div>
                                        
                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="ekle" value="Ekle"/>

                                   
                                   <!-- <input name="dkatID" style="display: none;" value="" /> -->                                    
                                    <input class="btn btn-danger" style="margin-top: 5px;" type="submit" name="iptal" value="İptal"/>

                               
                                
                               

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



