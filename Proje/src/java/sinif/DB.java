package sinif;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public final class DB {

    String driver = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost/";
    String DBName = "proje";
    String kulAdi = "root";
    String sifre = "";

    Connection conn = null;
   public Statement st;

    public DB() {
        baglan();
    }

    public DB(String DBName, String kulAdi, String sifre ) {
        this.DBName = DBName;
        this.kulAdi = kulAdi;
        this.sifre = sifre;
        baglan();
    }
    
    // bağlantı aç
    public void baglan(){
        try {
            if(conn == null || conn.isClosed()) {
                Class.forName(driver);
                conn = DriverManager.getConnection(url+DBName, kulAdi, sifre);
                st = conn.createStatement();
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.err.println("Hata : " + e);
        }
    }
    
    // bağlantıyı kapat
    public void kapat(){
        try {
            if(!conn.isClosed()){
                conn.close();
            }
        } catch (Exception e) {
            System.err.println("Bağlantı Kapatma Hatası");
        }
    }
    
    
    // data getir
    public ResultSet data(String tableName) {
        ResultSet rs = null;
        try {
            rs = st.executeQuery("select *from " + tableName);
        } catch (Exception e) {
            System.err.println("Data Getirme Hatası : " + e);
        }
        return rs;
    }

   
    public Boolean galeriSil(String galeriID)
    {
        boolean sonuc=false;
        try {
            sonuc=st.execute("DELETE FROM galeriler WHERE galeriID='"+galeriID+"'");
        } catch (Exception e) {
        }
    
    return sonuc;
    }
    
    public Boolean fotografSil(String fotografID)
    {
        boolean sonuc=false;
        try {
            sonuc=st.execute("DELETE FROM urun_resimleri WHERE id='"+fotografID+"'");
        } catch (Exception e) {
        }
    
    return sonuc;
    }
    
    public Boolean galeriDuzenle(String galeriID,String galeriAdi,String galeriAciklamasi,String galeriDurumu)
    {
        boolean sonuc=false;
        try {
            sonuc=st.execute("UPDATE galeriler SET galeriAdi='"+galeriAdi+"', galeriAciklamasi='"+galeriAciklamasi+"', galeriDurumu='"+galeriDurumu+"' WHERE galeriID='"+galeriID+"'");
        } catch (Exception e) {
        }
    
    return sonuc;
    }
    
    public Boolean galeriEkle(String galeriAdi,String galeriAciklamasi,String galeriDurumu)
    {
        boolean sonuc=false;
        try {
            sonuc=st.execute("INSERT INTO galeriler VALUES(null,'"+galeriAdi+"','"+galeriAciklamasi+"','"+galeriDurumu+"',now())");
        } catch (Exception e) {
        }
    
    return sonuc;
    }
    
    
   // md5 fonk 
   public String MD5(String md5) {
   try {
        java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
        byte[] array = md.digest(md5.getBytes());
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < array.length; ++i) {
          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
       }
        return sb.toString();
    } catch (java.security.NoSuchAlgorithmException e) {
    }
    return null;
}
    
}
