
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>

<%
    boolean istek = (request.getParameter("istek") != null);
    String amac = request.getParameter("istek");
    String albumID = request.getParameter("albumId");
    boolean sonuc = false;

    if (amac.equals("galeriSil")) {
        sonuc = db.galeriSil(albumID);
        response.sendRedirect("galeriler.jsp");
    }
    if (amac.equals("fotoSil")) {
        sonuc = db.fotografSil(request.getParameter("fotoId"));
        response.sendRedirect("galeriview.jsp?albumId=" + albumID);
    }
    if (amac.equals("galeriDuzenle")) {
        sonuc = db.galeriDuzenle(request.getParameter("albumId"), request.getParameter("galeriAdi"), request.getParameter("galeriAciklama"), request.getParameter("aktif"));
        response.sendRedirect("galeriler.jsp");
    }
    if (amac.equals("galeriEkle")) {
        sonuc = db.galeriEkle(request.getParameter("galeriAdi"), request.getParameter("galeriAciklama"), request.getParameter("aktif"));
        response.sendRedirect("galeriler.jsp");
    }

%>