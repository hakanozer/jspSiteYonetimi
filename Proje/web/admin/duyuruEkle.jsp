
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - DuyuruEkle</title>
<%@include file="ust.jsp" %>
<%  
    String id ="";
    String dID="";
    String hata = "";
    String baslik;
    String detay;
    String durumu;
    String dBaslik ="";
    String dDetay="";
    String dDurumu="";
    String yaz="";
    String yazi="";
    
    String sql="";
    
    
    boolean durumKayit = (request.getParameter("Ekle") != null);
    if(durumKayit){
    baslik = request.getParameter("basligi"); 
    durumu = request.getParameter("durum");
    detay = request.getParameter("detay");
    try{
        
        sql="insert into duyurular values(null,'" + durumu + "' ,'" + baslik + "' ,'" + detay + "',now())";
        
        int sonuc = db.st.executeUpdate(sql); 
        if(sonuc<0){
           hata = "var";
           dBaslik = baslik;
           dDetay = detay;
           dDurumu = durumu;
        }else{
            
        hata="yok";
      //  out.print("<script>window.location.href = 'duyuruEkle.jsp';</script>");  
        }
        
    }catch(Exception e){
        hata = "var";   
    }
    }
   
   
    boolean duzenleKontrol = (request.getParameter("id") != null);
    if(duzenleKontrol){
       
    dDurumu = request.getParameter("dDurum");
    dBaslik = request.getParameter("dBaslik");
    dDetay = request.getParameter("dDetay");
     id = request.getParameter("id");
    
    
     }
    boolean durumUpdate = (request.getParameter("Kaydet") != null);
    if(durumUpdate){
    baslik = request.getParameter("basligi"); 
    durumu = request.getParameter("durum");
    detay = request.getParameter("detay");
    dID = request.getParameter("ID");
    
    try{
       
        sql= "UPDATE duyurular SET durum='" + durumu + "', baslik='" + baslik + "',detay='" + detay + "' WHERE id = '" + dID + "' ";
        
        int sonuc = db.st.executeUpdate(sql); 
        if(sonuc<0){
           hata = "duzenleHata";
           
        }else{
            
        
         out.print("<script>window.location.href = 'duyuru.jsp?hata=yok';</script>");  
        }
        
    }catch(Exception e){
        hata = "duzenleHata";   
    }
    
    }
    
    
%>
<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header" >Duyuru Ekle</h1>

            <a href="duyuru.jsp" class="btn btn-primary" style="margin-bottom:20px; float: right;"><i class="fa fa-angle-double-left"></i> Geri Dön</a>
        </div>

        <!-- çalışma alanı !-->
        

    </div>
    <%if(hata.equals("var")){%>
        <div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            Duyuru Başlıkları Farklı Olmalıdır !
           
        </div>
    <%}
    if(hata.equals("yok")){%>
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            Kaydınız Başarı ile Tamamlanmıştır !
           
        </div>
    <%}
    if(hata.equals("duzenleHata")){%>
        <div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            Düzenleme Sırasında Bir Sorun Oluştu !
           
        </div>
    <%}%>
    <div class="panel panel-red" style=" ">
        <div class="panel-heading">
            Duyuru Ekle

        </div> 
        <form action="" method="get">
        <div class="panel-body">
                      
                            <label>Duyuru Başlığı</label>
                            <input value="<%=dBaslik%>" type="text" class="form-control" name="basligi" placeholder="Duyuru Başlığı Giriniz..." required autofocus = "autofocus" ><br>
                                <label>Duyuru Detayı</label><br>
                           <input value="<%=id%>" type="text" class="form-control" style="display: none;" name="ID">
                               
                            
                            <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                            <textarea  name="detay" id="detay" class="ckeditor"><%=dDetay%></textarea>
                            <script type="text/javascript">
                                CKEDITOR.replace('detay');
                            </script><br>

                            
                            
                            <label>Duyuru Durumu</label>
                            <select class="form-control" name="durum">
                                
                                <%if(!dDurumu.equals("")){
                                if(dDurumu.equals("1")){
                                    
                                    dDurumu="1";
                                    yaz = "Aktif";
                                    yazi= "Pasif";
                                    
                                
                                %>
                                
                                <option selected="selected" value="1">Aktif</option> 
                                <option  value="0">Pasif</option> 
                                
                                <%
                                }else{
                                    dDurumu="0";
                                    yaz = "Pasif";
                                    yazi = "Aktif";
                                  
                                %>
                                 
                                   <option selected="selected" value="0">Pasif</option> 
                                   <option  value="1">Aktif</option> 
                                   
                                <%  }}else{%>
                                <option value="1">Aktif</option>
                                <option value="0">Pasif</option>
                                <%}%>
                              
                              
                            </select>

        </div>
                    <div style="text-align: right; margin-right: 15px; ">
                       
                       <%if(duzenleKontrol){%>
                       <input  class="btn btn-warning" type="submit" name="Kaydet" value="Düzenle"/>
                       <%}else{%>
                       <input  class="btn btn-success" type="submit" name="Ekle" value="Ekle"/>
                       <%}%>
                    </div> 
        </form>
                </div>
        </div>

<%@include file="alt.jsp" %>