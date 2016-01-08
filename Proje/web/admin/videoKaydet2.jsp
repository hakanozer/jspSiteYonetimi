<%@page import="sinif.DB" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="oturumDenetim.jsp" %>
<%@include file="ust.jsp" %>
<%
request.setCharacterEncoding("utf-8");
//video kaydetme işlemi
    boolean vkaydet = (request.getParameter("button2") != null);
    if(vkaydet){
    String vBaslik=request.getParameter("baslik_turkce");
    String vIframe=request.getParameter("iframe_kodu");
    String vkat=request.getParameter("anakatlar");
    String vDetay=request.getParameter("detay");
    out.println(vBaslik + "  " +vIframe);
    String query = "insert into videolar values(null, '"+vBaslik+"','"+vIframe+"','"+vkat+"','"+vDetay+"')";
    db.query(query);
    out.print("<script>window.location.href = 'videoKaydet.jsp';</script>");
    
    }
%>
<%
   boolean vsil = (request.getParameter("sil") != null);
    if (vsil) {
        String id = request.getParameter("idsi");
        int sDurum = db.st.executeUpdate("delete from videolar where video_id = '" + id+ "'");
        if (sDurum > 0) {
            out.print("<script>window.location.href = 'videoKaydet.jsp';</script>");
        }
    }
  %>
  <%@include file="alt.jsp" %>