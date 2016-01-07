<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Galeri Yönetimi</title>
<%@include file="ust.jsp" %>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Galeri Yönetimi</h1>
        </div>

        <section>
            <div class="container-fluid">

                <div class="row">

                    <div class="col-md-6">
                        <div class="row">

                            <!--Gösterim Galeriler-->
                            <%
                            String adi="";
                            String aciklama="";
                            String durum="";
                                try {
                                    //inner join urun_resimleri on galeriler.galeriID=urun_resimleri.urun_id
                                    ResultSet rs = db.data("galeriler");
                                   // ResultSet rsResim=db.data("urun_resimleri WHERE urun_id=");
                                    while (rs.next()) { 
                             if(rs.getString("galeriID").equals(request.getParameter("albumId")))
                            {
                            
                               adi=rs.getString("galeriAdi");
                               aciklama=rs.getString("galeriAciklamasi"); 
                               durum=rs.getString("galeriDurumu"); 
                            }
                            %>
                                       <div class="col-md-6 col-xs-12">
                                <div class="thumb">
                                    <a href="galeriview.jsp?albumId=<%=rs.getString("galeriID")%>">
                                        <img src="images/1/MTE=_20150617195626.jpg" class="full" alt="<%=rs.getString("galeriAciklamasi")%>"></a>

                                    <a href="galeriview.jsp?albumId=<%=rs.getString("galeriID")%>">
                                        <div class="hover">
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </a>
                                </div>
                                <h5 class="title">
                                    <a href="galeriview.jsp?albumId=<%=rs.getString("galeriID")%>"><%=rs.getString("galeriAdi")%></a>
                                    <a title="Albümü Kaldır" class="pull-right" href="galeriislemleri.jsp?istek=galeriSil&albumId=<%=rs.getString("galeriID")%>"><i class="fa fa-trash-o"></i></a>
                        &nbsp;&nbsp;<a title="Albümü Düzenle" class="pull-right" href="galeriler.jsp?albumId=<%=rs.getString("galeriID")%>"><i class="fa fa-edit">&nbsp;&nbsp;</i></a>
                                  
                                    
                                </h5>
                            </div>  

                                    <%}
                                } catch (Exception ex) {
                                }
                           %>
                           

                        </div>
                    </div>

                    <div class="col-md-6">

  <%
                        if(!adi.equals(""))
                        {
                        %>
                        <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h4 class="panel-title">Galeriyi Düzenle</h4>
                        </div>
                        <div class="panel-body">


                            <form class="form-horizontal" action="galeriislemleri.jsp" method="post">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="text" name="galeriAdi" class="form-control" value="<%=adi %>">
                                    </div>
                                </div>
                                    <input type="hidden" name="istek" value="galeriDuzenle"/>   
                                    <input type="hidden" name="albumId" value="<%=request.getParameter("albumId") %>"/>   
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="text" name="galeriAciklama" class="form-control" value="<%=aciklama %>">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12">

                                        <div class="radio">
                                            <label><input type="radio" name="aktif" value="1" <% if(durum.equals("1")){ out.print("checked");} %>>Aktif</label>
                                        </div>

                                        <div class="radio">
                                            <label><input type="radio" name="aktif" value="0"  <% if(durum.equals("0")){ out.print("checked");} %>>Pasif</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-primary" value="Galeriyi Düzenle">
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                        <%
                        }
                        %>
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h4 class="panel-title">Yeni Galeri Oluştur</h4>
                            </div>
                            <div class="panel-body">
                                <form class="form-horizontal" action="galeriislemleri.jsp" method="post">
                                    <input type="hidden" name="istek" value="galeriEkle"/>          
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <input type="text" name="galeriAdi" class="form-control" placeholder="Galerinin Adı" required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <input type="text" name="galeriAciklama" class="form-control" required placeholder="Galeri Açıklaması">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">

                                            <div class="radio">
                                                <label><input type="radio" name="aktif" value="1" checked="">Aktif</label>
                                            </div>

                                            <div class="radio">
                                                <label><input type="radio" name="aktif" value="0">Pasif</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <input type="submit" class="btn btn-primary" value="Galeri Oluştur">
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                 
                      
                    </div>
                </div>
            </div>
        </section>


    </div>

</div>
<%@include file="alt.jsp" %>



