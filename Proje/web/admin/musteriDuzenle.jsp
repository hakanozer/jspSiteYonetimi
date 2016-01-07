<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Müşteriler</title>
<%@include file="ust.jsp" %>

<%
    // silme işlemi 
    boolean dsil = (request.getParameter("silAdres") != null);
    if (dsil) {
        String id = request.getParameter("adresID");
        int sDurum = db.st.executeUpdate("delete from adresler where adresID = '" + id + "'");
        
            out.print("<script>window.location.href = 'musteriler.jsp';</script>");
        
    }

    
    String musteriID = null;
    boolean duzenleDurum = (request.getParameter("duzenle") != null);
    if (duzenleDurum) {
        musteriID = request.getParameter("musteriID");
    } else {
        response.sendRedirect("musteriler.jsp");
    }

    // düzenle - data
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String adi = "";
    String soyadi = "";
    String mail = "";
    String sifre ="";
    String telefon = "";
    String ban = "";

    if (dDuzenle) {
        musteriID = request.getParameter("musteriID");

        ResultSet rss = db.data("musteriler where musteriID = '" + musteriID + "' ");
        rss.next();
        adi = rss.getString("musteriAdi");
        soyadi = rss.getString("musteriSoyadi");
        mail = rss.getString("mail");
        telefon = rss.getString("telefon");
        ban = rss.getString("ban");
    }

// duzenle kaydet
    boolean mDuzenleDurum = (request.getParameter("mDuzenle") != null);
    if (mDuzenleDurum) {

        musteriID = request.getParameter("musteriID");
        String mAdi = request.getParameter("adi");
        String mSoyadi = request.getParameter("soyadi");
        String mMail = request.getParameter("mail");
        String mSifre = db.MD5(request.getParameter("sifre"));
        String mTelefon = request.getParameter("telefon");
        String mBan = request.getParameter("ban");

        int sonuc = db.st.executeUpdate("update musteriler set musteriAdi = '" + mAdi + "', musteriSoyadi = '" + mSoyadi + "', mail = '" + mMail + "', sifre = '"+ mSifre +"', telefon = '" + mTelefon + "', ban = '" + mBan + "' where musteriID = '" + musteriID + "' ");
        if (sonuc > 0) {
        }
        // başarılı
        out.print("<script>window.location.href = 'musteriler.jsp';</script>");

    }
    

%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Müşteri Düzenleme</h1>
        </div>

        <!-- çalışma alanı !-->

        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Adresler
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="dataTable_wrapper">
                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>adresID</th>
                                        <th>musteriID</th>
                                        <th>adresBaslik</th>
                                        <th>adres</th>
                                        <th>postaKodu</th>
                                        <th>ilce</th>
                                        <th>il</th>
                                        <th>tarih</th>
                                        <th>İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <%                                    
                                        ResultSet rs = db.data("adresler where musteriID ='" + musteriID + "'");
                                        while (rs.next()) {
                                    %>

                                    <tr class="odd gradeX">
                                        <td><%=rs.getString("adresID")%></td>
                                        <td><%=rs.getString("musteriID")%></td>
                                        <td><%=rs.getString("adresBaslik")%></td>
                                        <td><%=rs.getString("adres")%></td>
                                        <td><%=rs.getString("postaKodu")%></td>
                                        <td><%=rs.getString("ilce")%></td>
                                        <td><%=rs.getString("il")%></td>
                                        <td><%=rs.getString("tarih")%></td>
                                        <td style="text-align: center;">
                                            <a href="adresDuzenle.jsp?adresDuzenle&adresID=<%=rs.getString("adresID")%>&musteriID=<%=rs.getString("musteriID")%>&adresBaslik=<%=rs.getString("adresBaslik")%>&adres=<%=rs.getString("adres")%>&postaKodu=<%=rs.getString("postaKodu")%>&ilce=<%=rs.getString("ilce")%>&il=<%=rs.getString("il")%>&tarih=<%=rs.getString("tarih")%>" class="btn btn-info">Düzenle</a>
                                            <a href="musteriDuzenle.jsp?silAdres&adresID=<%=rs.getString("adresID")%>" class="btn btn-danger">Sil</a>

                                        </td>
                                    </tr>
                                    <%}%>

                                </tbody>
                            </table>
                        </div>
                    </div>                
                </div>      
            </div>
        </div>
        <!-- /.panel-body -->
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Müşteri Bilgileri
                    </div>
                    <div class="panel-body">
                        <div class="dataTable_wrapper">
                            <div class="col-lg-6">
                                <form action="" method="post">
                                    <div class="form-group">
                                        <label>Adı</label>
                                        <input name="adi" class="form-control" placeholder="Adı" required value="<%=adi%>">
                                    </div>
                                    <div class="form-group">
                                        <label>Soyadı</label>
                                        <input name="soyadi" class="form-control" placeholder="Soyadı"  required value="<%=soyadi%>">
                                    </div>
                                    <div class="form-group">
                                        <label>Mail</label>
                                        <input name="mail" class="form-control" placeholder="Mail"required value="<%=mail%>">
                                    </div>
                                    <div class="form-group">
                                        <label>Şifre</label>
                                        <input name="sifre" class="form-control" placeholder="Şifre" required value="">
                                    </div>
                                    <div class="form-group">
                                        <label>Telefon</label>
                                        <input name="telefon" class="form-control" placeholder="Telefon" required value="<%=telefon%>">
                                    </div>
                                    <div class="form-group">
                                        <label>Ban</label>
                                        <input name="ban" class="form-control"  required placeholder="Banlanan kullanıcı için 1, diğerleri için 0 giriniz." value="<%=ban%>">
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="mDuzenle" class="btn btn-success" value="Düzenle">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- /.panel -->
    </div>
        <!-- /.col-lg-12 -->
</div>


</div>
</div>

</div>


<%@include file="alt.jsp" %>


