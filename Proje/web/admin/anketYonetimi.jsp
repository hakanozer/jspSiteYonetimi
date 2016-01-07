

<%@page import="java.sql.Statement"%>
<link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
<link href="bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="dist/css/sb-admin-2.css" rel="stylesheet">
<%@include file="ust.jsp" %>
<%@include file="oturumDenetim.jsp" %>

<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<%
    boolean dDuzenle = (request.getParameter("duzenle") != null);
    String anketID = "";
    String title = "";
    String dDurum = null;
    String tarih = "";
    ArrayList secenekler = new ArrayList();
    if (dDuzenle) {
        anketID = request.getParameter("anketID");
        title = request.getParameter("title");
        dDurum = request.getParameter("durum").toString();

        ResultSet rss = db.data("secenekler where anket_id=" + anketID);
        while (rss.next()) {
            secenekler.add(rss.getString("secenek"));
        }

    }
    boolean dSil=(request.getParameter("sil")!=null);
    if(dSil){
        anketID = request.getParameter("anketID");
        db.st.executeUpdate("DELETE FROM anket WHERE anket_id='"+anketID+"'");
        db.st.cancel();
       int a1= db.st.executeUpdate("DELETE FROM secenekler WHERE anket_id='"+anketID+"'");
       if(a1>0){
         out.print("<script>window.location.href = 'anketYonetimi.jsp';</script>");
       }
    }

%>

<%    boolean dYeniSecenek = (request.getParameter("yeniSecenek") != null);
    boolean dSecenekEkle = (request.getParameter("secenekEkle") != null);
    if (dSecenekEkle) {
        String secenek = request.getParameter("txtSecenek");
        int a = db.st.executeUpdate("insert into secenekler values(null,'" + secenek + "'," + anketID + "," + 0 + ")");
        if (a > 0) {
            out.print("<script>window.location.href = 'anketYonetimi.jsp';</script>");

        }
    }
    boolean dAnketEkle = (request.getParameter("anketEkle") != null);
    boolean dEkle = (request.getParameter("ekle") != null);
    int optionNumber = 0;

    boolean dAnketDurum = false;
    if (dAnketEkle) {
        optionNumber = Integer.valueOf(request.getParameter("txtSecenekNo").toString());

    }
int ekleOK=0;
    boolean hata = false;
    if (dEkle) {
        ArrayList<String> secenekSon = new ArrayList<String>();
        String soru = request.getParameter("txtTitleGiris");
        String anketDurum = request.getParameter("cBoxDurum");
        int number = Integer.valueOf((request.getParameter("optionNumber")).toString());
        String secenekGir = "";

        for (int i = 0; i < number; i++) {

            secenekGir = (request.getParameter("txtSecenekGiris" + (i + 1)).toString());
            secenekSon.add(secenekGir);

        }

        if (anketDurum.equals("true")) {
            dAnketDurum = true;
        } else {
            dAnketDurum = false;
        }
        int id = 0;
        try {
            db.st.executeUpdate("insert into anket values(null," + dAnketDurum + "," + 0 + ",now(),'" + soru + "')", com.mysql.jdbc.Statement.RETURN_GENERATED_KEYS);
            db.st.cancel();
            ResultSet rs = db.st.executeQuery("select LAST_INSERT_ID()");
            while (rs.next()) {
                id = rs.getInt(1);
            }
            for (int i = 0; i < number; i++) {

             ekleOK= db.st.executeUpdate("insert into secenekler values(null,'" + secenekSon.get(i).toString() + "','" + id + "','" + 0 + "')");

            }
            out.print("<script>window.location.href = 'anketYonetimi.jsp';</script>");

        } catch (Exception ex) {
            hata = true;
            out.print(ex);
        }

    }

    boolean dGuncelle = (request.getParameter("anketGuncelle") != null);
    if (dGuncelle) {
        String gTitle = request.getParameter("txtTitle");
        boolean gDurum = Boolean.valueOf(request.getParameter("cBoxGDurum"));

        int x = db.st.executeUpdate("update anket set title='" + gTitle + "',durum=" + gDurum + " where anket_id=" + anketID);
        if (x > 0) {
            out.print("<script>window.location.href = 'anketYonetimi.jsp';</script>");

        }
    }


%>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Anket Yönetimi</title>

    </head>
    <body>

        <div id="page-wrapper" style="min-height: 99px;">

            <div class="row">

                <div class="col-lg-12">
                    <h1 class="page-header">Anket Yönetimi</h1>


                </div>

                
                <!-- çalışma alanı !-->


            </div>

            <br>
            <%
                if(ekleOK>0){
             %>
                <div class="alert alert-success alert-dismissable">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                Anket kaydı başarılı bir şekilde oluşturulmuştur .
                  </div>
             <%   
                }
            %>
            <div class="row">

                <div class="col-lg-2">
                    <form method="post">
                        <label>Seçenek Sayısı Girin</label>
                        <input class="form-control" id="txtSecenekNo" name="txtSecenekNo" value=""> 
                        <input class="btn btn-sm btn-success" style="margin-top: 5px;" type="submit" name="anketEkle" value="Yeni Anket Girişi" />
                    </form>
                </div>
            </div>
            <br>
            <%                if (dAnketEkle) {

            %>
            <div class="row">

                <div class="col-lg-12">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            Anket Ekle
                        </div>
                        <div class="panel-body">

                            <form method="post">
                                <input class="form-control" id="txtTitle" name="txtTitleGiris" value="" placeholder="Anket Sorusu Girin">
                                <label>Durum</label>
                                <select class="form-control" id="cBoxDurum" name="cBoxDurum" >

                                    <option value="true">Aktif</option>
                                    <option value="false">Pasif</option>
                                </select>
                                <%                                for (int i = 0; i < optionNumber; i++) {


                                %>
                                <input type="hidden" name="optionNumber" value="<%=optionNumber%>"/>
                                <label>Secenek <%=i + 1%></label>
                                <input class="form-control" id="txtSecenekGiris" name="txtSecenekGiris<%=i + 1%>" value="">
                                <%
                                    }
                                %>
                                <input class="btn btn-sm btn-success" style="margin-top: 5px;" type="submit" name="ekle" value="Ekle" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <%
                }
            %>


            <div class="row">

                <div class="col-lg-12">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            Anketler
                        </div>
                        <div class="panel-body">

                            <div id="dataTables-example_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"> 
                          
                                <div class="row"><div class="col-sm-12"><table class="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                                            <thead
                                                <tr role="row">
                                                    <th class="sorting_asc" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-sort="ascending"  style="width: 172px;">Anket Başlığı</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1"  style="width: 204px;">Durum</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1"  style="width: 185px;">Oy</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" style="width: 149px;">Tarih</th>
                                                    <th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1"  style="width: 110px;">İşlem</th>
                                                </tr>
                                            </thead>
                                            <tbody>
    <%
                                                ResultSet rs = db.data("anket");
                                                while (rs.next()) {
                                                    //    an.setTitle(rs.getString("title"));
                                                    //    an.setAnketID(rs.getInt("anket_id"));
                                                    //    anketList.add(an);
%>
                                            <tr class="odd gradeX">

                                                <td><%=rs.getString("title")%></td>
                                                <td><%=rs.getBoolean("durum")%></td>
                                                <td><%=rs.getInt("oy")%></td>
                                                <td><%=rs.getString("tarih")%></td>

                                                <td style="text-align: center;">

                                                    <a href="anketYonetimi.jsp?duzenle&anketID=<%=rs.getString("anket_id")%>&title=<%=rs.getString("title")%>&durum=<%=rs.getBoolean("durum")%>"  class="btn btn-outline btn-warning">Düzenle</a>
                                                    <a href="anketYonetimi.jsp?sil&anketID=<%=rs.getString("anket_id")%>" class="btn btn-outline btn-danger">Sil</a>

                                                </td>

                                            </tr>
                                            <%}%>

                                                </tbody>
                                        </table></div></div>
                                
                    </div>
                    <br>
                    <%
                        if (dDuzenle) {


                    %>
                    <div class="panel panel-default">

                        <div class="panel-body">
                            <div class="form-group">
                                <form method="post">
                                    <label for="txtTitle">Anket Sorusu</label>

                                    <input class="form-control" id="txtTitle" name="txtTitle" value="<%=title%>">
                                    <label>Durum</label>
                                    <select class="form-control" id="cBoxGDurum" name="cBoxGDurum" >
                                        <option selected="selected" value="<%=dDurum%>"
                                    <option value="true">Aktif</option>
                                    <option value="false">Pasif</option>
                                </select>
                                <%
                                    int a = 0;
                                    for (int i = 0; i < secenekler.size(); i++) {
                                        String secenek = secenekler.get(i).toString();

                                %>
                                <label>Secenek <%=i + 1%></label>
                                <input class="form-control" id="txtSecenek" name="txtSecenek<%=i + 1%>" value="<%=secenek%>" disabled>
                                <%   a++;
                                    }%>

                                <%

                                    if (dYeniSecenek) {

                                %>
                                <label>Secenek <%=a + 1%></label>
                                <input class="form-control" id="txtSecenek" name="txtSecenek" value="">
                                <input class="btn btn-sm btn-warning" style="margin-top: 5px;" type="submit" name="secenekEkle" value="Secenek Ekle"/>
                                <%
                                    }
                                %>
                                <input class="btn btn-sm btn-warning" style="margin-top: 5px;" type="submit" name="yeniSecenek" value="Yeni Seçenek Gir"/>
                                <input class="btn btn-sm btn-warning" style="margin-top: 5px;" type="submit" name="anketGuncelle" value="Güncelle"/>

                            </form>
                        </div>
                    </div>
                </div>
                <%
                    }
                %>



            </div>

        </div>
</body>
</html>
<%@include file="alt.jsp" %>