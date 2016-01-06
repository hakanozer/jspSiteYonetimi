/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : proje

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-01-06 23:17:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for begeniyonetim
-- ----------------------------
DROP TABLE IF EXISTS `begeniyonetim`;
CREATE TABLE `begeniyonetim` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `musteri_id` int(11) DEFAULT NULL,
  `urun_id` int(11) DEFAULT NULL,
  `puan` int(11) DEFAULT NULL,
  `tarih` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `urun_ID` (`urun_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of begeniyonetim
-- ----------------------------
INSERT INTO `begeniyonetim` VALUES ('1', '1', '2', '3', '2016-01-05 12:34:40');
INSERT INTO `begeniyonetim` VALUES ('2', '1', '3', '2', '2016-01-05 12:34:50');
INSERT INTO `begeniyonetim` VALUES ('3', '2', '4', '3', '2016-01-05 12:35:08');

-- ----------------------------
-- Table structure for duyurular
-- ----------------------------
DROP TABLE IF EXISTS `duyurular`;
CREATE TABLE `duyurular` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `durum` tinyint(1) NOT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `detay` text COLLATE utf8_turkish_ci NOT NULL,
  `tarih` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `baslik` (`baslik`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of duyurular
-- ----------------------------
INSERT INTO `duyurular` VALUES ('34', '1', 'Yeni Sezon Indirimi Basladi', '<p>Lorem Ipsum</p>\r\n', '2016-01-06 16:02:29');
INSERT INTO `duyurular` VALUES ('35', '1', 'Tüm Magazalarimizda SR-5645 Nolu Urun Satilmaya Baslanacaktir', '<p>Lorem Ipsum</p>\r\n', '2016-01-06 16:04:18');
INSERT INTO `duyurular` VALUES ('36', '0', '1 Ocak Tatil Edilmistir', '<p>Lorem Ipsum</p>\r\n', '2016-01-06 16:05:01');

-- ----------------------------
-- Table structure for galeriler
-- ----------------------------
DROP TABLE IF EXISTS `galeriler`;
CREATE TABLE `galeriler` (
  `galeriID` int(11) NOT NULL AUTO_INCREMENT,
  `galeriAdi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `galeriAciklamasi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `galeriDurumu` tinyint(1) DEFAULT NULL,
  `olusturulmaTarihi` date DEFAULT NULL,
  PRIMARY KEY (`galeriID`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of galeriler
-- ----------------------------
INSERT INTO `galeriler` VALUES ('36', 'utyu', 'utyut', '1', '2016-01-06');
INSERT INTO `galeriler` VALUES ('38', 'Bursa', 'Bursa Tarhi', '0', '2016-01-06');

-- ----------------------------
-- Table structure for kargo
-- ----------------------------
DROP TABLE IF EXISTS `kargo`;
CREATE TABLE `kargo` (
  `kargo_id` int(11) NOT NULL AUTO_INCREMENT,
  `kargo_adi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `ucreti` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` datetime DEFAULT NULL,
  PRIMARY KEY (`kargo_id`),
  UNIQUE KEY `kargoAd` (`kargo_adi`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of kargo
-- ----------------------------
INSERT INTO `kargo` VALUES ('1', 'MNG Kargo', '4.00', '2016-01-06 13:13:51');
INSERT INTO `kargo` VALUES ('2', 'Aras Kargo', '6.00', '2016-01-06 13:14:07');
INSERT INTO `kargo` VALUES ('6', 'Yurtici Kargo', '4.00', '2016-01-06 21:50:18');
INSERT INTO `kargo` VALUES ('9', 'Surat Kargo', '5.00', '2016-01-06 21:57:00');

-- ----------------------------
-- Table structure for kategori
-- ----------------------------
DROP TABLE IF EXISTS `kategori`;
CREATE TABLE `kategori` (
  `katID` int(11) NOT NULL AUTO_INCREMENT,
  `ustKat` int(11) NOT NULL,
  `katAdi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `katTarih` datetime NOT NULL,
  PRIMARY KEY (`katID`),
  UNIQUE KEY `katAdi` (`katAdi`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of kategori
-- ----------------------------
INSERT INTO `kategori` VALUES ('1', '0', 'Beyaz Eşya', '2016-01-04 06:12:24');
INSERT INTO `kategori` VALUES ('2', '0', 'Tekstil', '2016-01-04 06:12:24');
INSERT INTO `kategori` VALUES ('3', '0', 'Çocuk', '2016-01-04 10:37:52');
INSERT INTO `kategori` VALUES ('42', '0', 'Ayakkabi', '2016-01-04 11:51:10');
INSERT INTO `kategori` VALUES ('44', '1', 'Televizyon', '2016-01-04 12:43:23');
INSERT INTO `kategori` VALUES ('45', '2', 'Kazak', '2016-01-04 12:57:30');

-- ----------------------------
-- Table structure for kullanici
-- ----------------------------
DROP TABLE IF EXISTS `kullanici`;
CREATE TABLE `kullanici` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `sifre` varchar(32) COLLATE utf8_turkish_ci NOT NULL,
  `seviye` varchar(32) COLLATE utf8_turkish_ci NOT NULL COMMENT '0 ise kullanici, 1 ise admin',
  `adi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `soyadi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `tarih` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of kullanici
-- ----------------------------
INSERT INTO `kullanici` VALUES ('1', 'admin@admin.com', '827ccb0eea8a706c4c34a16891f84e7b', 'c4ca4238a0b923820dcc509a6f75849b', 'Ayşe', 'Bilmem', '2015-12-30 05:21:26');

-- ----------------------------
-- Table structure for slayt
-- ----------------------------
DROP TABLE IF EXISTS `slayt`;
CREATE TABLE `slayt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `aciklama` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` varchar(32) COLLATE utf8_turkish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of slayt
-- ----------------------------
INSERT INTO `slayt` VALUES ('1', 'a', 'dfsaf', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 12:47:41');
INSERT INTO `slayt` VALUES ('7', 'c', 'd', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:16:38');
INSERT INTO `slayt` VALUES ('8', 'e', 'r', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:17:01');
INSERT INTO `slayt` VALUES ('9', 't', 'y', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:17:09');
INSERT INTO `slayt` VALUES ('10', 'h', 'h', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:36:14');
INSERT INTO `slayt` VALUES ('11', 'zcvcz', 'e', 'v', '2016-01-05 17:16:55');
INSERT INTO `slayt` VALUES ('12', 'dene', 'deneme aciklama', 'https://www.google.com.tr/?gws_rd=ssl', '2016-01-06 09:20:31');

-- ----------------------------
-- Table structure for slayt_resimleri
-- ----------------------------
DROP TABLE IF EXISTS `slayt_resimleri`;
CREATE TABLE `slayt_resimleri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slaytID` int(11) DEFAULT NULL,
  `adi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `klasor` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of slayt_resimleri
-- ----------------------------
INSERT INTO `slayt_resimleri` VALUES ('2', '1', '1_8676137resim1.jpg', '1');
INSERT INTO `slayt_resimleri` VALUES ('6', '7', '7_16735346resim2.jpg', '7');
INSERT INTO `slayt_resimleri` VALUES ('7', '8', '8_18107779resim3.jpg', '8');
INSERT INTO `slayt_resimleri` VALUES ('8', '9', '9_17435866resim4.jpg', '9');
INSERT INTO `slayt_resimleri` VALUES ('9', '10', '10_22689506resim5.jpg', '10');
INSERT INTO `slayt_resimleri` VALUES ('10', '7', '7_11001627resim1.jpg', '7');
INSERT INTO `slayt_resimleri` VALUES ('11', '11', '11_16187572resim3.jpg', '11');
INSERT INTO `slayt_resimleri` VALUES ('12', '12', '12_1526785504.jpg', '12');

-- ----------------------------
-- Table structure for urunler
-- ----------------------------
DROP TABLE IF EXISTS `urunler`;
CREATE TABLE `urunler` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `katID` int(11) NOT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `kisaAciklama` varchar(500) COLLATE utf8_turkish_ci NOT NULL,
  `gununUrunu` tinyint(255) DEFAULT NULL,
  `haftaninUrunu` tinyint(255) DEFAULT NULL,
  `kampanyaliUrun` tinyint(255) DEFAULT NULL,
  `detay` text COLLATE utf8_turkish_ci NOT NULL,
  `piyasaFiyati` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gecerliFiyat` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gosterim` tinyint(4) NOT NULL,
  `tarih` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `baslik` (`baslik`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of urunler
-- ----------------------------
INSERT INTO `urunler` VALUES ('4', '45', 'sadfsdf', 'sdfs', '0', '0', '0', '<p style=\"text-align:center\">fdfg<em><strong>dfgd fg</strong></em>dfgd</p>\r\n\r\n<p>aksljdaks jdaksd klasj dkals</p>\r\n', '12', '21', '0', '2016-01-05 09:56:55');
INSERT INTO `urunler` VALUES ('5', '1', 'televizyon', 'tele aç?klama', '0', '0', '0', '<p>televizyon</p>\r\n', '3100', '2999', '0', '2016-01-05 10:32:42');

-- ----------------------------
-- Table structure for urun_resimleri
-- ----------------------------
DROP TABLE IF EXISTS `urun_resimleri`;
CREATE TABLE `urun_resimleri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urun_id` int(11) NOT NULL,
  `adi` varchar(500) COLLATE utf8_bin NOT NULL,
  `klasor` varchar(500) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of urun_resimleri
-- ----------------------------
INSERT INTO `urun_resimleri` VALUES ('17', '4', '4_994706Tulips.jpg', '4');
INSERT INTO `urun_resimleri` VALUES ('18', '4', '4_3092407Koala.jpg', '4');
INSERT INTO `urun_resimleri` VALUES ('19', '4', '4_21216073Penguins.jpg', '4');
INSERT INTO `urun_resimleri` VALUES ('20', '5', '5_17674658Desert.jpg', '5');
INSERT INTO `urun_resimleri` VALUES ('21', '5', '5_22817309Chrysanthemum.jpg', '5');
