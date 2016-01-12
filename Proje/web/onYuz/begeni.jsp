<%@page import="java.sql.ResultSet"%>
<%@page import="sinif.DB"%>
<% DB dbb = new DB();
   String urun_id="";
   String musteriID ="";
   int id =0;
   boolean durumID = (request.getParameter("urun_id")!= null);
   if(durumID){
       urun_id=request.getParameter("urun_id");
       id = Integer.valueOf(urun_id);
       musteriID = request.getParameter("musteri_id");
   try{
       ResultSet rs = dbb.st.executeQuery("select * from begeniyonetim where urun_id="+urun_id);
       if(rs.next()){
          
                int i = dbb.st.executeUpdate("update begeniyonetim set puan ="+(rs.getInt("puan") +1)+" where urun_id="+urun_id);
                if(i>0){
                    response.sendRedirect("urunDetayi.jsp?&id="+urun_id+"&begeni=1");
                }else{
                    response.sendRedirect("urunDetayi.jsp?&id="+urun_id+"hataUpdate");
                }
           }else{
               int a = dbb.st.executeUpdate("insert into begeniyonetim values(null,'"+musteriID+"','"+id+"','1',now()) ");
           if(a>0){
                    response.sendRedirect("urunDetayi.jsp?&id="+urun_id+"&begeni=1");
                }else{
                    response.sendRedirect("urunDetayi.jsp?&id="+urun_id+"hataInsert");
                }
           
           }
       
       
   }catch(Exception e){
       response.sendRedirect("urunDetayi.jsp?catch");
   }
   }









%>