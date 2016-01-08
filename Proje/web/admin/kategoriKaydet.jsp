<%@page import="sinif.DB" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="ust.jsp" %>
<%@include file="oturumDenetim.jsp" %>
<%
    //kaydetme işlemi
   boolean dkaydet = (request.getParameter("bKaydet") != null);
  if(dkaydet){
    String kAdi=request.getParameter("videokategori");
    String kAciklama=request.getParameter("videokategoriarea");
    out.println(kAdi +"" +kAciklama);
    String q = "insert into video_kategori values (null,'"+kAdi+"','"+kAciklama+"')";
    db.query(q);
    out.print("<script>window.location.href = 'video.jsp';</script>");
   }
  

    
    
%>
<%
   boolean dsil = (request.getParameter("sil") != null);
    if (dsil) {
        String id = request.getParameter("idsi");
        int sDurum = db.st.executeUpdate("delete from video_kategori where id = '" + id+ "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'video.jsp';</script>");
        }
    }
  %>
  <%@include file="alt.jsp" %>