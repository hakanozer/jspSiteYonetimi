<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>

<%
    request.setCharacterEncoding("utf-8");
    // kaydet işlemi
    boolean dkaydet = (request.getParameter("hKatEkle") != null);
    boolean hata = false;
    if (dkaydet) {
        String katAdi = request.getParameter("hkatAdi").trim();
        
        try {
            db.st.executeUpdate("insert into haberKategori values(null,'" + katAdi + "', now())");
            out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
        } catch (Exception ex) {
            hata = true;
        }

    }
    //iptal
     boolean diptal = (request.getParameter("iptal") != null);
    if (diptal) {
    out.print("<script>window.location.href = 'haberYonetimi.jsp';</script>");
    }
    
        
    
    
    
%>


<title>JSP Admin Panel - Haber Kategori Ekle</title>
<%@include file="ust.jsp" %>



<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Kategori Ekle</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                <h3 style="color :#0088cc; "> Yeni Kategori Ekle </h3>   
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">
                                    <label>Kategori</label>
                                        <select class="form-control" name="kategori">
                                            <option value="0">Kategoriler</option>
                                    <%  
                                        ResultSet rss=db.data(" haberKategori");
                                        while(rss.next()){
                                    %>       
                                    <option  value="<%=rss.getString("kAdi") %>"> <%= rss.getString("kAdi") %></option>                                            
                                            
                                       <% } %>  
                                            
                                        </select>
                                    <label for="hkatAdi">Kategori Adı</label>
                                    <input name="hkatAdi" value="" id="hkatAdi" class="form-control" >
                                                                                                                                               
                                    </div>
                                        
                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="hKatEkle" value="Ekle"/>

                                   
                                    
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



