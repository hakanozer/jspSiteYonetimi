<%@page import="beans.kategori"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Ürünler</title>
<%@include file="ust.jsp" %>

<%
    request.setCharacterEncoding("utf-8");

    // kategori data
    ArrayList<kategori> ktl = new ArrayList();
    ResultSet rskl = db.data("kategori");
    while (rskl.next()) {
        kategori kt = new kategori();
        kt.setKatID(rskl.getString("katID"));
        kt.setUstKat(rskl.getString("ustKat"));
        kt.setKatAdi(rskl.getString("katAdi"));
        ktl.add(kt);
    }

    // kaydet işlemi
    boolean dkaydet = (request.getParameter("kaydet") != null);

    if (dkaydet) {
        String urunAdi = request.getParameter("urunAdi");
        String kisaAcik = request.getParameter("kisaAcik");
        String detay = request.getParameter("detay");
        String piyasaFyt = request.getParameter("piyasaFyt");
        String siteFyt = request.getParameter("siteFyt");
        String seckatID = request.getParameter("seckatID");
        try {
            db.st.executeUpdate("insert into urunler values(null,'" + seckatID + "' ,'" + urunAdi + "' ,'" + kisaAcik + "' ,'" + detay + "' ,'" + piyasaFyt + "' , '" + siteFyt + "' ,'0', now())");
            out.print("<script>window.location.href = 'urunSyf.jsp';</script>");
        } catch (Exception ex) {

        }

    }

    // silme işlemi 
    boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String id = request.getParameter("urunID");
        int sDurum = db.st.executeUpdate("delete from urunler where id = '" + id + "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'urunSyf.jsp';</script>");
        }
    }

    // düzenle - data
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String durunAdi = "";
    String durunID = "";
    String dkisaAcik = "";
    String ddetay = "";
    String dpiyasaFyt = "";
    String dsiteFyt = "";
    String dseckatID = "";
    if (dDuzenle) {
        durunID = request.getParameter("urunID");

        ResultSet rss = db.data("urunler where id = '" + durunID + "' ");
        rss.next();
        durunAdi = rss.getString("baslik");
        dkisaAcik = rss.getString("kisaAciklama");
        ddetay = rss.getString("detay");
        dpiyasaFyt = rss.getString("piyasaFiyati");
        dsiteFyt = rss.getString("gecerliFiyat");
        dseckatID = rss.getString("katID");

    }

    // duzenle kaydet
    boolean dduzenleBtn = (request.getParameter("duzenleBtn") != null);
    if (dduzenleBtn) {

        String dUrunID = request.getParameter("durunID");
        String dSeckatID = request.getParameter("seckatID");
        String dUrunAd = request.getParameter("urunAdi");
        String dkisaAciklama = request.getParameter("kisaAcik");
        String dDetay = request.getParameter("detay");
        String dPiyasaFyt = request.getParameter("piyasaFyt");
        String dSiteFyt = request.getParameter("siteFyt");

        int sonuc = db.st.executeUpdate("update urunler set katID = '" + dSeckatID + "', baslik = '" + dUrunAd + "', kisaAciklama = '" + dkisaAciklama + "', detay = '" + dDetay + "', piyasaFiyati = '" + dPiyasaFyt + "', gecerliFiyat = '" + dSiteFyt + "' where id = '" + dUrunID + "' ");
        if (sonuc > 0) {
        }
        // başarılı
        out.print("<script>window.location.href = 'urunSyf.jsp';</script>");

    }


%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Kategoriler</h1>
        </div>

        <!-- çalışma alanı !-->


    </div>


    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Yeni Kategori Ekle
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <form action="" method="post">

                                <div class="form-group">

                                    <div class="form-group">
                                        <label>Üst Kat</label>



                                        <select class="form-control" name="seckatID">
                                            <option value="0">Kategori Seç</option>
                                            
                                                                                    <%    for (kategori item : ktl) {

                                                if (item.getUstKat().equals("0")) {
                                                    if (dseckatID.equals(item.getKatID())) {
                                                        out.print("<option selected=\"selected\" value=\""+item.getKatID()+"\">"+item.getKatAdi()+"</option>");
                                                    } else {
                                                        out.print("<option  value=\""+item.getKatID()+"\">"+item.getKatAdi()+"</option>");
                                                    }

                                                    for (kategori items : ktl) {
                                                        if (item.getKatID().equals(items.getUstKat())) {

                                                            if (dseckatID.equals(items.getKatID())) {
                                                                out.print("<option selected=\"selected\" value=\""+items.getKatID()+"\"> &nbsp;&nbsp; "+items.getKatAdi()+"</option>");
                                                            } else {
                                                                out.print("<option value=\""+items.getKatID()+"\"> &nbsp;&nbsp; "+items.getKatAdi()+"</option>");
                                                            }
                                                        }
                                                    }
                                                }

                                            }

                                        %>

                                            
                                            
                                        </select>
                                    </div>


                                    <label for="urunAdi">Ürün Adı</label>
                                    <input name="urunAdi" value="<%=durunAdi%>" id="urunAdi" class="form-control" placeholder="Ürün Adı">
                                    <label for="kisaAcik">Kısa Açıklama</label>
                                    <input name="kisaAcik" value="<%=dkisaAcik%>" id="kisaAcik" class="form-control" placeholder="Kısa Açıklama">
                                    <label for="detay">Detay</label>


                                    <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
                                    <textarea name="detay" id="detay" class="ckeditor"><%=ddetay%></textarea>
                                    <script type="text/javascript">
                                        CKEDITOR.replace('detay');
                                    </script>


                                    <label for="piyasaFyt">Piyasa Fiyatı</label>
                                    <input name="piyasaFyt" value="<%=dpiyasaFyt%>" id="piyasaFyt" class="form-control" placeholder="Piyasa Fiyatı">
                                    <label for="siteFyt">Site Fiyatı</label>
                                    <input name="siteFyt" value="<%=dsiteFyt%>" id="siteFyt" class="form-control" placeholder="Site Fiyatı">
                                    <input class="btn btn-success" style="margin-top: 5px;" type="submit" name="kaydet" value="Kaydet"/>

                                    <% if (dDuzenle) {%>
                                    <input name="durunID" style="display: none;" value="<%=durunID%>" />
                                    <input class="btn btn-info" style="margin-top: 5px;" type="submit" name="duzenleBtn" value="Düzenle"/>
                                    <%}%>
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
                                    <th>id</th>
                                    <th>katID</th>
                                    <th>baslik</th>
                                    <th>kisaAciklama</th>
                                    <th>detay</th>
                                    <th>piyasaFiyati</th>
                                    <th>gecerliFiyat</th>
                                    <th>gosterim</th>
                                    <th>tarih</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>

                                <%
                                    ResultSet rs = db.data("urunler");
                                    while (rs.next()) {
                                %>

                                <tr class="odd gradeX">
                                    <td><%=rs.getString("id")%></td>
                                    <td><%=rs.getString("katID")%></td>
                                    <td><%=rs.getString("baslik")%></td>
                                    <td><%=rs.getString("kisaAciklama")%></td>
                                    <td><%=rs.getString("detay")%></td>
                                    <td><%=rs.getString("piyasaFiyati")%></td>
                                    <td><%=rs.getString("gecerliFiyat")%></td>
                                    <td><%=rs.getString("gosterim")%></td>
                                    <td><%=rs.getString("tarih")%></td>
                                    <td style="text-align: center;">
                                        <!--<a href="urunSyf.jsp?duzenle&urunID=<%=rs.getString("id")%>&urunAdi=<%=rs.getString("baslik")%>&seckatID=<%=rs.getString("katID")%>&kisaAciklama=<%=rs.getString("kisaAciklama")%>&detayi=<%=rs.getString("detay")%>&piyasaFiyat=<%=rs.getString("piyasaFiyati")%>&siteFiyat=<%=rs.getString("gecerliFiyat")%>" class="btn btn-info">Düzenle</a>!-->
                                        <a href="urunSyf.jsp?duzenle&urunID=<%=rs.getString("id")%>"  class="btn btn-info">Düzenle</a>
                                        <a href="urunSyf.jsp?sil&urunID=<%=rs.getString("id")%>" class="btn btn-danger">Sil</a>
                                        <a href="resimYukle.jsp?resim_id=<%=rs.getString("id")%>" class="btn btn-danger">Resim Ekle</a>
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



