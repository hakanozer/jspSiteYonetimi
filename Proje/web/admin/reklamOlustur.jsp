<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@page import="sinif.DB" %>
<%@include file="ust.jsp" %>

<div id="page-wrapper" style="min-height: 99px;">
    <%boolean silbasildi=request.getParameter("reklami_sil")!=null;
    if(silbasildi){
          String id =request.getParameter("reklam_idsi");
          boolean sonuc =db.reklamSil(id);
          if(sonuc){
               out.print("<script>window.location.href = 'reklamOlustur.jsp';</script>"); 
          }
    }
    boolean vazgecbtn_basildi=request.getParameter("vazgec_btn")!=null;
    if(vazgecbtn_basildi){
         out.print("<script>window.location.href = 'reklamOlustur.jsp';</script>"); 
    }
    boolean kaydetbynbasili=request.getParameter("kaydet_btn")!=null;
    if(kaydetbynbasili){
        String id =request.getParameter("idtutar");
        String ad=request.getParameter("ad_reklam");
        String aciklama=request.getParameter("aciklama_reklam");
        String gosterim=request.getParameter("gosterim_kalan");
        String yuk=request.getParameter("resim_yukseklik");
        String gen=request.getParameter("resim_genislik");
        String konum=request.getParameter("konumlar");
        boolean sonuc =db.reklamDuzenle(id,ad, aciklama, gosterim, yuk, gen, konum);
        if(sonuc){
            out.print("<script>window.location.href = 'reklamOlustur.jsp';</script>");  
        }
    }
          %>
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Reklam</h1>
                    </div>
                    
               <!-- çalışma alanı !-->
                    
                <%
                boolean altbilgileri__duzenlebtn_basildi=request.getParameter("altbilgileri_duzenle")!=null;
                if(altbilgileri__duzenlebtn_basildi){
                    String reklam_id=request.getParameter("reklam_idsi");
                     ResultSet rsduzenle=db.data("reklamlar where reklam_id="+reklam_id);
                while(rsduzenle.next()){
                   
                
                %>    
                </div>
       
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="page-header">Reklam Düzenleme </h2>
                    </div>
                    <div class="panel">
                        <div class="panel-body" style="width: 300px;">
                            <form  method="get">
                                 <div class="form-group">
                                 <label for="ad_reklam">Reklam Adı</label>
                                 <input name="ad_reklam" class="form-control" value="<%=rsduzenle.getString("reklam_adi")%>">
                                       <input name="idtutar" value="<%=reklam_id%>" style="display: none" >
                                        </div>
                                           <div class="form-group">
                                 <label for="aciklama_reklam">Reklam Açıklama</label>
                                 <input name="aciklama_reklam" class="form-control" value="<%=rsduzenle.getString("reklam_aciklama")%>">
                                      
                                        </div>
                             <div class="form-group">
                                 <label for="gosterim_kalan">Kalan Gösterim</label>
                                 <input name="gosterim_kalan" class="form-control" value="<%=rsduzenle.getString("kalan_gosterim")%>">
                                      
                                        </div>
                             <div class="form-group">
                                 <label for="resim_yukseklik">Yukseklik</label>
                                 <input name="resim_yukseklik" class="form-control" value="<%=rsduzenle.getString("yukseklik")%>">
                                      
                                        </div>
                             <div class="form-group">
                                 <label for="resim_genislik">Genişlik</label>
                                 <input name="resim_genislik" class="form-control" value="<%=rsduzenle.getString("genislik")%>">
                                      
                                        </div>
                             <div class="form-group">
                                 <label for="resim_konum">konum</label>
                                 <select class="form-control " name="konumlar" >
                                     <%
                                     int i=1;
                                     for(i=1;i<9;i++){
                                         int a =0;
                                     
                                         if(rsduzenle.getString("konum").equals(String.valueOf(i))){
                                             a=i;
                                             %>
                                              <option selected="selected" value="<%=i%>"><%=i%>.konum</option>
                                              
                                         <%}else{%>
                                     
                                     %>
                                     <option value="<%=i%>"><%=i%>.konum</option>
                                                <%}}%>
                                            </select>
                                              <div class="form-group">
                                                  <br>
                                <button type="submit" name="kaydet_btn"class="btn btn-success">Kaydet</button>
                                <button type="submit" name="vazgec_btn"class="btn btn-warning">Vazgeç</button>
                            </div>
                                      <%}%>
                                        </div>
                          
                            
                    
                            </form>
                            
                    <%}%>
                </div>
                <form action="reklamEkle.jsp" method="get">
               
                     <button type="submit" name="yenireklambtn"class="btn btn-success">Yeni reklam oluştur</button>
     <hr>
                </form>
    
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                                    <thead>
                                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column ascending" style="width: 80px;">Görsel</th>
                                            <th>Reklam Adı</th>
                                           <th>Reklam Açıklaması</th>
                                           <th>Kalan Gösterim</th>
                                           <th>Yükseklik</th>
                                           <th>Genişlik</th>
                                           <th>Konumu</th>
                                           <th>Düzenle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <%
                                            ResultSet rs =db.data("reklamlar left join urun_fotograflari on reklamlar.reklam_id=urun_fotograflari.urun_id WHERE reklamlar.kalan_gosterim>0 GROUP BY reklam_id");
                                           while(rs.next()){
                                               
                                          
                     %>                             
                                    <tr class="gradeU odd" role="row">
                                        <td class=""><img src="<%=resimFile%>/<%=rs.getString("klasor")%>/thumbnail/<%=rs.getString("adi")%>" alt="" title="<%=rs.getString("reklam_adi")%> görseli"/> </td>
                                        
                                            <td class="center"><%=rs.getString("reklam_adi")%></td>
                                            <td class="sorting_1"><%=rs.getString("reklam_aciklama")%></td>
                                            <td class="center"><%=rs.getString("kalan_gosterim")%></td>
                                            <td class="center"><%=rs.getString("yukseklik")%></td>
                                            <td class="center"><%=rs.getString("genislik")%></td>
                                            <td class="center"><%=rs.getString("konum")%>.konum</td>
                                            <td style="text-align: center;">
                                                <a href="reklamOlustur.jsp?altbilgileri_duzenle&reklam_idsi=<%=rs.getString("reklam_id")%>"  class="btn btn-primary btn-circle" title="Bilgileri düzenle "><i class="fa fa-list"></i></a>
                                        <a href="reklamOlustur.jsp?reklami_sil&reklam_idsi=<%=rs.getString("reklam_id")%>"class="btn btn-warning btn-circle" title="sil"><i class="fa fa-times"></i></a>
                                        <a href="reklamResmiEkle.jsp?resimduzenle&reklam_idsi=<%=rs.getString("reklam_id")%>" class="btn btn-danger">Resimleri Düzenle</a>
                                    </td>
                                        </tr>
                                        <%}%>
                                    </tbody>
                                </table>
                                  
        </div>
    </div>
        </div>
<%@include file="alt.jsp" %>