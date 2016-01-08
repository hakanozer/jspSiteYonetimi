<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<title>JSP Admin Panel - Anasayfa</title>
<%@include file="ust.jsp" %>
<%
    boolean vazgecBasildi = request.getParameter("vazgec_btn") != null;
    if (vazgecBasildi) {
        out.print("<script>window.location.href = 'reklamOlustur.jsp';</script>");
    }
    boolean kaydetBasildi = request.getParameter("kaydet_btn") != null;
      String adi;
      String aciklamasi;
       String gosterimi ;
        String yuk ;
         String gen ;
          String konum;
    if (kaydetBasildi) {
     adi  = request.getParameter("ad");
      aciklamasi   = request.getParameter("aciklama");
       gosterimi= request.getParameter("gosterim");
      yuk = request.getParameter("yuk");
     gen  = request.getParameter("gen");
      konum  = request.getParameter("konumlar");

        boolean sonuc = db.reklamEkle(adi, aciklamasi, gosterimi, yuk, gen, konum);
        if (sonuc) {
           response.sendRedirect("reklamOlustur.jsp");
        }

    }
%>

<div id="page-wrapper" style="min-height: 99px;">

    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Anasayfa</h1>
        </div>
        <form method="get">

            <div class="form-group" style="width: 300px" >
                <label>Reklam ismi</label>
                <input name="ad" class="form-control">
                    <label>Reklam açıklaması</label>
                    <input name="aciklama" class="form-control">
                        <label>Kalan gösterim sayısı</label>
                        <input name="gosterim" class="form-control">
                            <label>Yükseklik</label>
                            <input name="yuk" class="form-control">
                                <label>Genişliki</label>
                                <input name="gen" class="form-control">
                                    <label>Konum</label>
                                    <select class="form-control" name="konumlar">

                                        <%
                                            int i = 1;
                                            for (i = 1; i < 9; i++) {
                                        %>
                                        <option value="<%=i%>"><%=i%>.konum</option>
                                        <%}%>
                                    </select>
                                    <br>
                                    <button type="submit" name="kaydet_btn"class="btn btn-success">Kaydet</button>
                                    <button type="submit" name="vazgec_btn"class="btn btn-warning">Vazgeç</button>
                                    </div>
                                    </form>


                                    </div>

                                    </div>
                                    <%@include file="alt.jsp" %>



