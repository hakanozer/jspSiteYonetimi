
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>
<%@page import="sinif.DB" %>
<div id="page-wrapper" style="min-height: 99px;">
   
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Üretici Bilgileri</h1>
                       
                    </div>
                     <%
             boolean vazgecbtn_basildi=request.getParameter("vazgecbtn")!=null;
            if(vazgecbtn_basildi){
                 out.print("<script>window.location.href = 'ureticiBilgileri.jsp';</script>"); 
            }
            boolean kaydetbtn_basildi=request.getParameter("kaydet")!=null;
            if(kaydetbtn_basildi){
                String ureticinin_adi=request.getParameter("uretici_ad");
                boolean sonuc =db.ureticiEkle(ureticinin_adi);
                if(sonuc){
                   out.print("<script>window.location.href = 'ureticiBilgileri.jsp';</script>"); 
                }
            }
            boolean duzenleBasildi=request.getParameter("Duzenle")!=null;
            if(duzenleBasildi){
            String adi =request.getParameter("uretici_ad");
            String id =request.getParameter("idtutar");
                boolean sonuc =db.ureticiDuzenle(adi,id);
                if(sonuc){
                     out.print("<script>window.location.href = 'ureticiBilgileri.jsp';</script>"); 
                }
            }
            boolean sil_basildi=request.getParameter("sil")!=null;
            if(sil_basildi){
             String id =request.getParameter("idsi");
                boolean sonuc =db.ureticiSil(id);
                if(sonuc){
                     out.print("<script>window.location.href = 'ureticiBilgileri.jsp';</script>"); 
                }
                        
            }
            boolean altduzenleBasildi =request.getParameter("altduzenle")!=null;
            boolean yeniekle_basildi=request.getParameter("yeni")!=null;
                        if(altduzenleBasildi || yeniekle_basildi){
                        String id =request.getParameter("idsi");
                        String adi=request.getParameter("adi");
                       String s = altduzenleBasildi? adi :"Yeni Üretici Ekle";
                       String butonismi=altduzenleBasildi?"Duzenle":"kaydet";
                        %>
                        <div class="col-lg-12">
                        <h3 class="page-header">Üretici Bilgilerini Düzenle</h3>
                    </div>
                        <form method="get">
                            
                            <div class="form-group">
                        <label for="uretici_ad">Üretici Adı</label>
                        <input name="uretici_ad" class="form-control" placeholder="<%=s%>">
                            <input name="idtutar" value="<%=id%>" style="display: none" >                    
                                        </div>
                        <div class="form-group">
                            <button type="submit"  name="<%=butonismi%>" class="btn btn-success"><%=butonismi%></button>
                            <button type="submit" name="vazgecbtn" class="btn btn-warning">Vazgeç</button>
                        </div>
            
                        </form>
                    
                    <%}%>
                        <div class="row">
        <div class="col-sm-12">
            <table class="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                                    <thead>
                                        <tr role="row"><th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column ascending" style="width: 80px;">ID</th>
                                            <th>Üretici Adı</th>
                                           <th>Eklenme Tarihi</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <%ResultSet rs =db.data("ureticiler");
                                        while(rs.next()){
                     %>
                                    <tr class="gradeU odd" role="row">
                                            <td class=""><%=rs.getString("id")%></td>
                                            <td class="center"><%=rs.getString("uretici_adi")%></td>
                                            <td class="sorting_1"><%=rs.getString("tarih")%></td>
                                          
                                            <td style="text-align: center;">
                                                
                                        <a href="ureticiBilgileri.jsp?altduzenle&idsi=<%=rs.getString("id")%>&adi=<%=rs.getString("uretici_adi")%>"  class="btn btn-primary btn-circle" title="Bilgileri düzenle "><i class="fa fa-list"></i></a>
                                        <a href="ureticiBilgileri.jsp?sil&idsi=<%=rs.getString("id")%>" class="btn btn-warning btn-circle" title="sil"><i class="fa fa-times"></i></a>
                                      
                                    </td>
                               
                                   
                                    
                                        </tr>
                                        <%}%>
                                    </tbody>
                                </table>
        </div>
    </div>
                                      <a href="ureticiBilgileri.jsp?yeni" class="btn btn-success" title="Yeni üretici ekle">Yeni</a>
                </div>

        </div>
<%@include file="alt.jsp" %>



