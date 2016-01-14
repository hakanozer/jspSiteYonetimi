/*
Navicat MySQL Data Transfer

Source Server         : MYSQL
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : proje

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-01-14 11:03:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for adresler
-- ----------------------------
DROP TABLE IF EXISTS `adresler`;
CREATE TABLE `adresler` (
  `adresID` int(11) NOT NULL AUTO_INCREMENT,
  `musteriID` int(11) DEFAULT NULL,
  `adresBaslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `adres` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `postaKodu` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `ilce` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `il` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` datetime DEFAULT NULL,
  PRIMARY KEY (`adresID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of adresler
-- ----------------------------
INSERT INTO `adresler` VALUES ('4', '2', 'is', 'Cumhuriyet Mah. Nergis Sk. No:20/11', '34920', 'K.Cekmece', 'Istanbul', '2016-01-06 11:11:13');
INSERT INTO `adresler` VALUES ('11', '8', 'Yeni Adres', 'ist adres', '34450', 'ist', 'Ä°stanbul', '2016-01-11 09:28:35');
INSERT INTO `adresler` VALUES ('12', '10', 'EV', 'kucukcolak Mah', '234110', 'kucucekmece', 'Ä°stanbul', '2016-01-13 13:08:56');
INSERT INTO `adresler` VALUES ('13', '10', 'IS', 'Aslan mah', '566565', 'Kucukcekmece', 'Istanbul', '2016-01-13 13:10:14');

-- ----------------------------
-- Table structure for anket
-- ----------------------------
DROP TABLE IF EXISTS `anket`;
CREATE TABLE `anket` (
  `anket_id` int(11) NOT NULL AUTO_INCREMENT,
  `durum` tinyint(1) NOT NULL,
  `oy` int(11) NOT NULL,
  `tarih` date NOT NULL,
  `title` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  PRIMARY KEY (`anket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of anket
-- ----------------------------
INSERT INTO `anket` VALUES ('17', '0', '0', '2016-01-07', 'Anket Kaydi');
INSERT INTO `anket` VALUES ('20', '1', '0', '2016-01-14', 'Javayı Kaç Yıldır Kullanıyorsunuz ?');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of begeniyonetim
-- ----------------------------
INSERT INTO `begeniyonetim` VALUES ('1', '1', '2', '3', '2016-01-05 12:34:40');
INSERT INTO `begeniyonetim` VALUES ('2', '1', '3', '2', '2016-01-05 12:34:50');
INSERT INTO `begeniyonetim` VALUES ('3', '2', '4', '3', '2016-01-05 12:35:08');
INSERT INTO `begeniyonetim` VALUES ('4', '7', '5', '1', '2016-01-12 13:08:56');
INSERT INTO `begeniyonetim` VALUES ('5', '3', '29', '1', '2016-01-13 11:53:34');
INSERT INTO `begeniyonetim` VALUES ('6', '3', '41', '4', '2016-01-13 12:16:36');
INSERT INTO `begeniyonetim` VALUES ('22', '3', '53', '2', '2016-01-13 13:46:55');
INSERT INTO `begeniyonetim` VALUES ('23', '10', '54', '4', '2016-01-13 13:49:45');
INSERT INTO `begeniyonetim` VALUES ('25', '8', '41', '3', '2016-01-14 09:19:18');

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of galeriler
-- ----------------------------
INSERT INTO `galeriler` VALUES ('46', 'Yeni Nesil 4k', 'Yeni Nesil 4k', '1', '2016-01-08');

-- ----------------------------
-- Table structure for haberkategori
-- ----------------------------
DROP TABLE IF EXISTS `haberkategori`;
CREATE TABLE `haberkategori` (
  `hkatID` int(11) NOT NULL AUTO_INCREMENT,
  `kAdi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  PRIMARY KEY (`hkatID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of haberkategori
-- ----------------------------
INSERT INTO `haberkategori` VALUES ('1', 'java', '2016-01-07');
INSERT INTO `haberkategori` VALUES ('2', 'falan', '2016-01-07');
INSERT INTO `haberkategori` VALUES ('3', 'zero', '2016-01-07');
INSERT INTO `haberkategori` VALUES ('4', 'ligth', '2016-01-07');
INSERT INTO `haberkategori` VALUES ('5', 'spor', '2016-01-08');

-- ----------------------------
-- Table structure for haberler
-- ----------------------------
DROP TABLE IF EXISTS `haberler`;
CREATE TABLE `haberler` (
  `hID` int(11) NOT NULL AUTO_INCREMENT,
  `hBaslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kAciklama` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL,
  `uAciklama` varchar(5000) COLLATE utf8_turkish_ci DEFAULT NULL,
  `AP` varchar(10) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kategori` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  PRIMARY KEY (`hID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of haberler
-- ----------------------------
INSERT INTO `haberler` VALUES ('7', 'tatil', 'bilmez', '<p>bilmez</p>\r\n', 'Aktif', 'zero', '2016-01-07');
INSERT INTO `haberler` VALUES ('8', 'kalem', 'asdasdsad', '<p>bil</p>\r\n', 'Pasif', 'ligth', '2016-01-07');
INSERT INTO `haberler` VALUES ('11', 'derbi', 'fb:0 gs:6', '<p>asdadsa</p>\r\n', 'Aktif', 'zero', '2016-01-07');
INSERT INTO `haberler` VALUES ('13', 'flas flas flas', 'sok', '<p>sadsad</p>\r\n', 'Aktif', 'java', '2016-01-07');
INSERT INTO `haberler` VALUES ('14', 'resim', 'asdsda', '<p>asdsad</p>\r\n', 'Aktif', 'java', '2016-01-07');
INSERT INTO `haberler` VALUES ('15', 'fenerbahçe gs maç? 6-0', 'ac?mak yok', '<p>ma&ccedil; &ccedil;ok heyecanl?yd?,&nbsp;</p>\r\n', 'Aktif', 'spor', '2016-01-08');

-- ----------------------------
-- Table structure for haber_resimleri
-- ----------------------------
DROP TABLE IF EXISTS `haber_resimleri`;
CREATE TABLE `haber_resimleri` (
  `id` int(11) NOT NULL,
  `haber_id` int(11) DEFAULT NULL,
  `adi` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL,
  `klasor` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of haber_resimleri
-- ----------------------------
INSERT INTO `haber_resimleri` VALUES ('10', '13', '13_19478518face_eyes_lion_fur_mane_85403_1920x1080.jpg', '13');

-- ----------------------------
-- Table structure for icerik
-- ----------------------------
DROP TABLE IF EXISTS `icerik`;
CREATE TABLE `icerik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `durum` tinyint(5) DEFAULT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kisaAciklama` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `detay` text COLLATE utf8_turkish_ci,
  `tarih` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of icerik
-- ----------------------------
INSERT INTO `icerik` VALUES ('2', '0', 'Hakkimizda', 'Şirket Hakkında', '<p><strong>Java JSP E-Ticaret</strong>,&nbsp;dizgi ve baskı end&uuml;strisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak &uuml;zere bir yazı galerisini alarak karıştırdığı 1500&#39;lerden beri end&uuml;stri standardı sahte metinler olarak kullanılmıştır. Beşy&uuml;z yıl boyunca varlığını s&uuml;rd&uuml;rmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sı&ccedil;ramıştır.</p>\r\n\r\n<p>1960&#39;larda Lorem Ipsum pasajları da i&ccedil;eren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum s&uuml;r&uuml;mleri i&ccedil;eren masa&uuml;st&uuml; yayıncılık yazılımları ile pop&uuml;ler olmuştur.</p>\r\n', '2016-01-14 11:01:52');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of kategori
-- ----------------------------
INSERT INTO `kategori` VALUES ('48', '0', 'ELEKTRONİK', '2016-01-12 22:50:25');
INSERT INTO `kategori` VALUES ('49', '0', 'EV, YAŞAM, KIRTASİYE, OFİS', '2016-01-12 22:50:48');
INSERT INTO `kategori` VALUES ('50', '0', 'OTO, BAHÇE, YAPI MARKET', '2016-01-12 22:51:05');
INSERT INTO `kategori` VALUES ('51', '0', 'ANNE, BEBEK, OYUNCAK', '2016-01-12 22:51:17');
INSERT INTO `kategori` VALUES ('52', '0', 'SPOR OUTDORR', '2016-01-12 22:51:27');
INSERT INTO `kategori` VALUES ('53', '0', 'KOZMETİK, KİŞİSEL BAKIM', '2016-01-12 22:51:36');
INSERT INTO `kategori` VALUES ('54', '0', 'SÜPERMARKET, PETSHOP', '2016-01-12 22:51:50');
INSERT INTO `kategori` VALUES ('55', '0', 'KİTAP, MÜZİK, FİLM, HOBİ', '2016-01-12 22:52:06');
INSERT INTO `kategori` VALUES ('56', '0', 'GİYİM, TAKI, SAAT', '2016-01-12 22:52:14');
INSERT INTO `kategori` VALUES ('58', '48', 'Bilgisayar/Tablet', '2016-01-12 22:53:31');
INSERT INTO `kategori` VALUES ('59', '48', 'Yazıcılar & Tarayıcılar', '2016-01-12 22:53:52');
INSERT INTO `kategori` VALUES ('60', '48', 'Yazıcılar ve Tarayıcılar', '2016-01-12 22:54:32');
INSERT INTO `kategori` VALUES ('61', '48', 'Telefon', '2016-01-12 22:54:43');
INSERT INTO `kategori` VALUES ('62', '48', 'TV, Görüntü ve Ses Sistemleri', '2016-01-12 22:55:02');
INSERT INTO `kategori` VALUES ('63', '48', 'Beyaz Eşya', '2016-01-12 22:55:18');
INSERT INTO `kategori` VALUES ('64', '48', 'Elektrikli Ev Aletleri', '2016-01-12 22:55:34');
INSERT INTO `kategori` VALUES ('65', '48', 'Foto, Kamera', '2016-01-12 22:56:03');
INSERT INTO `kategori` VALUES ('66', '49', 'Mobilya', '2016-01-12 22:56:18');
INSERT INTO `kategori` VALUES ('67', '49', 'Ev Tekstili', '2016-01-12 22:56:30');
INSERT INTO `kategori` VALUES ('68', '49', 'Ev Dekorasyon', '2016-01-12 22:56:44');
INSERT INTO `kategori` VALUES ('69', '49', 'Elektrik ve Aydınlatma', '2016-01-12 22:57:01');
INSERT INTO `kategori` VALUES ('70', '49', 'Ev ve Mutfak Gereçleri', '2016-01-12 22:57:19');
INSERT INTO `kategori` VALUES ('71', '49', 'Ofis ve Kırtasiye', '2016-01-12 22:57:34');
INSERT INTO `kategori` VALUES ('72', '50', 'Oto Aksesuar', '2016-01-12 22:57:47');
INSERT INTO `kategori` VALUES ('73', '50', 'Elektrikli Alet ve El Aletleri', '2016-01-12 22:58:05');
INSERT INTO `kategori` VALUES ('74', '50', 'Hırdavat', '2016-01-12 22:58:16');
INSERT INTO `kategori` VALUES ('75', '50', 'Güvenlik', '2016-01-12 22:58:21');
INSERT INTO `kategori` VALUES ('76', '50', 'Banyo', '2016-01-12 22:58:27');
INSERT INTO `kategori` VALUES ('77', '50', 'Bahçe', '2016-01-12 22:58:48');
INSERT INTO `kategori` VALUES ('78', '51', 'Bebek Beslenme', '2016-01-12 22:59:18');
INSERT INTO `kategori` VALUES ('79', '51', 'Ana Kucağı ve Oto Kolduğu', '2016-01-12 22:59:41');
INSERT INTO `kategori` VALUES ('80', '51', 'Bebek Arabası ve Puset', '2016-01-12 22:59:53');
INSERT INTO `kategori` VALUES ('81', '51', 'Bebek ve Çocuk Odası', '2016-01-12 23:00:13');
INSERT INTO `kategori` VALUES ('82', '51', 'Enzirme', '2016-01-12 23:00:27');
INSERT INTO `kategori` VALUES ('83', '51', 'Bebek Bezi ve Mendiller', '2016-01-12 23:00:45');
INSERT INTO `kategori` VALUES ('84', '51', 'Bakım, Kozmetik ve Banyo', '2016-01-12 23:01:05');
INSERT INTO `kategori` VALUES ('85', '52', 'Spor Ekipmanları', '2016-01-12 23:01:16');
INSERT INTO `kategori` VALUES ('86', '52', 'Sporcu Besinleri', '2016-01-12 23:01:30');
INSERT INTO `kategori` VALUES ('87', '52', 'Sporcu Sağlığı', '2016-01-12 23:01:40');
INSERT INTO `kategori` VALUES ('88', '52', 'Bisiklet', '2016-01-12 23:01:50');
INSERT INTO `kategori` VALUES ('89', '52', 'Spor ve Outdoor Giyim', '2016-01-12 23:02:11');
INSERT INTO `kategori` VALUES ('90', '52', 'Spor Ayakkabı', '2016-01-12 23:02:23');
INSERT INTO `kategori` VALUES ('91', '53', 'Parfüm ve Deodorant', '2016-01-12 23:02:42');
INSERT INTO `kategori` VALUES ('92', '53', 'Cilt ve Vucut Ürünleri', '2016-01-12 23:02:59');
INSERT INTO `kategori` VALUES ('93', '53', 'Makyaj', '2016-01-12 23:03:10');
INSERT INTO `kategori` VALUES ('94', '53', 'Saç Bakım Ürünleri', '2016-01-12 23:03:21');
INSERT INTO `kategori` VALUES ('95', '53', 'Erkek Bakım Ürünleri', '2016-01-12 23:03:35');
INSERT INTO `kategori` VALUES ('96', '53', 'Kadın Bakım Ürünleri', '2016-01-12 23:03:42');
INSERT INTO `kategori` VALUES ('97', '54', 'Kağıt Ürünler', '2016-01-12 23:03:56');
INSERT INTO `kategori` VALUES ('98', '54', 'Bebek Bezleri ve Alt Açma', '2016-01-12 23:04:15');
INSERT INTO `kategori` VALUES ('99', '54', 'Deterjan ve Temizlik Ürünleri', '2016-01-12 23:04:42');
INSERT INTO `kategori` VALUES ('100', '54', 'Gıda Ürünleri', '2016-01-12 23:04:53');
INSERT INTO `kategori` VALUES ('101', '55', 'Kitap ve Dergi', '2016-01-12 23:05:06');
INSERT INTO `kategori` VALUES ('102', '55', 'Müzik Ensturmanları ve Ekipmanları', '2016-01-12 23:05:25');
INSERT INTO `kategori` VALUES ('103', '55', 'Hobi ve Oyun', '2016-01-12 23:05:39');
INSERT INTO `kategori` VALUES ('104', '55', 'Film', '2016-01-12 23:05:49');
INSERT INTO `kategori` VALUES ('105', '56', 'Kadın', '2016-01-12 23:06:04');
INSERT INTO `kategori` VALUES ('106', '56', 'Erkek', '2016-01-12 23:06:10');
INSERT INTO `kategori` VALUES ('107', '56', 'Çocuk Giyim', '2016-01-12 23:06:26');
INSERT INTO `kategori` VALUES ('108', '56', 'Giyim Aksesuarları', '2016-01-12 23:06:38');
INSERT INTO `kategori` VALUES ('109', '56', 'Saatler', '2016-01-12 23:06:47');
INSERT INTO `kategori` VALUES ('110', '56', 'Güneş Gözlüğü', '2016-01-12 23:06:53');

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
-- Table structure for musteriler
-- ----------------------------
DROP TABLE IF EXISTS `musteriler`;
CREATE TABLE `musteriler` (
  `musteriID` int(11) NOT NULL AUTO_INCREMENT,
  `musteriAdi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `musteriSoyadi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `mail` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `sifre` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `telefon` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `ban` tinyint(5) DEFAULT NULL,
  `tarih` datetime DEFAULT NULL,
  PRIMARY KEY (`musteriID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of musteriler
-- ----------------------------
INSERT INTO `musteriler` VALUES ('2', 'Pinar', 'Ulku', 'pinar@pinar.com', '202cb962ac59075b964b07152d234b70', '5555555', '0', '2016-01-06 11:05:36');
INSERT INTO `musteriler` VALUES ('3', 'Hakan', 'Ozer', 'hakan@hakan.com', '827ccb0eea8a706c4c34a16891f84e7b', '1234567', '0', '2016-01-06 11:22:39');
INSERT INTO `musteriler` VALUES ('5', 'Ertan', 'Cilgin', 'ertancilgin.92@gmail.com', '202cb962ac59075b964b07152d234b70', '+905397665401', '0', '2016-01-08 23:02:07');
INSERT INTO `musteriler` VALUES ('8', 'Ali', 'Bilsin', 'ali@ali.com', '827ccb0eea8a706c4c34a16891f84e7b', '454646', '0', '2016-01-11 09:27:12');
INSERT INTO `musteriler` VALUES ('9', 'Gozde', 'Atasoy', 'a@a.com', '1f32aa4c9a1d2ea010adcf2348166a04', '5325635632', '0', '2016-01-13 10:50:57');
INSERT INTO `musteriler` VALUES ('10', 'Gamze', 'Kucukcolak', 'gamze@gamze.com', '827ccb0eea8a706c4c34a16891f84e7b', '', '0', '2016-01-13 13:07:26');

-- ----------------------------
-- Table structure for reklamlar
-- ----------------------------
DROP TABLE IF EXISTS `reklamlar`;
CREATE TABLE `reklamlar` (
  `reklam_id` int(11) NOT NULL AUTO_INCREMENT,
  `reklam_adi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `reklam_aciklama` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kalan_gosterim` int(11) DEFAULT NULL,
  `yukseklik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `genislik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `konum` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  PRIMARY KEY (`reklam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of reklamlar
-- ----------------------------
INSERT INTO `reklamlar` VALUES ('14', 'iPhone 6', 'qwrqw', '44', '22', '11', '5');
INSERT INTO `reklamlar` VALUES ('15', 'asfna ', 'ads dkl', '111', 'dasd', 'qwd', '5');
INSERT INTO `reklamlar` VALUES ('16', 'vestel', 'vestel', '44', '34', '43', '5');
INSERT INTO `reklamlar` VALUES ('17', 'citroen', 'efendim abi !', '21', '333', '242', '5');
INSERT INTO `reklamlar` VALUES ('18', 'ads', 'asdwq', '11', 'd21', 'dw', '3');

-- ----------------------------
-- Table structure for satis
-- ----------------------------
DROP TABLE IF EXISTS `satis`;
CREATE TABLE `satis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sepetID` int(11) NOT NULL,
  `musteriAd` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `musteriSoyad` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `gidecekAdres` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL,
  `totalFiyat` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `tarih` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of satis
-- ----------------------------
INSERT INTO `satis` VALUES ('1', '1', 'sdga', 'sdf', null, '234', '0000-00-00 00:00:00');
INSERT INTO `satis` VALUES ('2', '1', 'sdga', 'sdf', null, '234', '0000-00-00 00:00:00');
INSERT INTO `satis` VALUES ('3', '1', 'sdga', 'sdf', null, '234', '2016-01-09 22:53:26');
INSERT INTO `satis` VALUES ('4', '1', 'e', 'e', null, '2', '2016-01-09 23:08:51');
INSERT INTO `satis` VALUES ('5', '1', 'e', 'e', null, '2', '2016-01-09 23:21:45');
INSERT INTO `satis` VALUES ('6', '1', 'Ali', 'Bilmem', null, '200', '2016-01-09 23:24:09');
INSERT INTO `satis` VALUES ('7', '1', 'hasan', 'bil', 'dfhsÅ?lkmdfbmÅ?lk', '200', '2016-01-10 00:49:41');
INSERT INTO `satis` VALUES ('8', '1', 'Ali', 'Bilmem', 'Cumhuriyet Mah. Nergis Sk. No:20/11', '200', '2016-01-10 13:32:33');
INSERT INTO `satis` VALUES ('9', '1', 'Ali', 'Bilmem', 'Cumhuriyet Mah. Nergis Sk. No:20/11', '200', '2016-01-10 13:36:08');
INSERT INTO `satis` VALUES ('10', '1', 'hasan', 'bil', 'dfhsÅ?lkmdfbmÅ?lk', '200', '2016-01-10 16:21:59');
INSERT INTO `satis` VALUES ('11', '1', 'Gozde', 'Atasoy', 'sdfsdf', '200', '2016-01-10 18:43:16');
INSERT INTO `satis` VALUES ('12', '1', 'Ali', 'Bilmem', 'Cumhuriyet Mah. Nergis Sk. No:20/11', '200', '2016-01-10 21:08:28');
INSERT INTO `satis` VALUES ('13', '1', 'Gozde', 'Atasoy', 'MAH.', '200', '2016-01-10 23:56:42');
INSERT INTO `satis` VALUES ('14', '1', 'Ali', 'Bilsin', 'ist adres', '200', '2016-01-11 09:31:04');
INSERT INTO `satis` VALUES ('15', '1', 'Gamze', 'Kucukcolak', 'kucukcolak Mah', '200', '2016-01-13 13:11:01');

-- ----------------------------
-- Table structure for secenekler
-- ----------------------------
DROP TABLE IF EXISTS `secenekler`;
CREATE TABLE `secenekler` (
  `secenek_id` int(11) NOT NULL AUTO_INCREMENT,
  `secenek` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `anket_id` int(11) NOT NULL,
  `oy` int(11) NOT NULL,
  PRIMARY KEY (`secenek_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of secenekler
-- ----------------------------
INSERT INTO `secenekler` VALUES ('24', 'Olustu', '17', '0');
INSERT INTO `secenekler` VALUES ('25', 'Olusmadi', '17', '0');
INSERT INTO `secenekler` VALUES ('30', '1', '20', '0');
INSERT INTO `secenekler` VALUES ('31', '2', '20', '0');
INSERT INTO `secenekler` VALUES ('32', '3', '20', '0');
INSERT INTO `secenekler` VALUES ('33', '6', '20', '0');
INSERT INTO `secenekler` VALUES ('34', '7', '20', '0');

-- ----------------------------
-- Table structure for sepet
-- ----------------------------
DROP TABLE IF EXISTS `sepet`;
CREATE TABLE `sepet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sepetID` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `urunID` int(11) NOT NULL,
  `adet` tinyint(4) NOT NULL,
  `tarih` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of sepet
-- ----------------------------
INSERT INTO `sepet` VALUES ('11', '18f33f99:15235c58651:-7fd2', '5', '1', '2016-01-12 16:25:41');
INSERT INTO `sepet` VALUES ('12', '18f33f99:15235c58651:-7fd2', '6', '3', '2016-01-12 16:25:48');
INSERT INTO `sepet` VALUES ('13', '18f33f99:15235c58651:-7fd2', '7', '2', '2016-01-12 16:26:04');
INSERT INTO `sepet` VALUES ('14', '18f33f99:15235c58651:-7fd2', '5', '1', '2016-01-12 16:43:37');
INSERT INTO `sepet` VALUES ('15', '18f33f99:15235c58651:-7fd2', '5', '1', '2016-01-12 16:44:02');
INSERT INTO `sepet` VALUES ('20', '1ed382eb:15239a97438:-7ff5', '5', '1', '2016-01-13 09:02:08');
INSERT INTO `sepet` VALUES ('21', '1ed382eb:15239a97438:-7ff5', '5', '1', '2016-01-13 09:02:13');
INSERT INTO `sepet` VALUES ('22', '-35602cd4:15239d9d91b:-7ff3', '43', '2', '2016-01-13 10:31:43');
INSERT INTO `sepet` VALUES ('24', '-35602cd4:15239d9d91b:-7fbc', '29', '1', '2016-01-13 13:12:46');
INSERT INTO `sepet` VALUES ('25', '-35602cd4:15239d9d91b:-7fbc', '29', '1', '2016-01-13 13:12:58');
INSERT INTO `sepet` VALUES ('26', '-464f7aae:1523ef77934:-7ff7', '47', '1', '2016-01-14 09:21:18');
INSERT INTO `sepet` VALUES ('27', '-464f7aae:1523ef77934:-7fe3', '41', '1', '2016-01-14 10:41:25');

-- ----------------------------
-- Table structure for sirketbilgi
-- ----------------------------
DROP TABLE IF EXISTS `sirketbilgi`;
CREATE TABLE `sirketbilgi` (
  `sirketid` int(11) NOT NULL AUTO_INCREMENT,
  `sirketadi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `sirketadres` varchar(500) COLLATE utf8_turkish_ci NOT NULL,
  `sirkettel` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `sektor` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  PRIMARY KEY (`sirketid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of sirketbilgi
-- ----------------------------
INSERT INTO `sirketbilgi` VALUES ('1', 'xfdgd', ' fgdfg', 'fgdfd', 'Sağlık ve Sosyal Hizmetler');

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of slayt
-- ----------------------------
INSERT INTO `slayt` VALUES ('18', 'Başlık -1', 'Açıklama 1', 'http://www.google.com.tr', '2016-01-11 09:48:36');
INSERT INTO `slayt` VALUES ('19', 'Başlık -2', 'Açıklama 2', 'http://www.google.com.tr', '2016-01-11 09:50:43');
INSERT INTO `slayt` VALUES ('20', 'Başlık -3', 'Açıklama 3', 'http://www.google.com.tr', '2016-01-11 09:51:19');

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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of urunler
-- ----------------------------
INSERT INTO `urunler` VALUES ('14', '91', 'Avon', 'Avon Incandessence vücut spreyi', '0', '0', '0', '<p>detayy</p>\r\n', '16.50', '7.99', '0', '2016-01-13 09:41:50');
INSERT INTO `urunler` VALUES ('15', '58', 'Lenovo G5045 ', 'Lenovo G5045 AMD Dual Core E1 6010 1.35GHz 2GB 500GB 15.6', '0', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<th>Marka</th>\r\n			<td><a href=\"http://www.hepsiburada.com/lenovo\" title=\"Lenovo\">Lenovo</a></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>&nbsp;</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Garanti Tipi</th>\r\n			<td>Resmi Distrib&uuml;t&ouml;r Garantili</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Bağlantı &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Kablosuz İletişim:</th>\r\n			<td>Var</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Bluetooth &Ouml;zelliği</th>\r\n			<td>Yok</td>\r\n		</tr>\r\n		<tr>\r\n			<th>10/100 Ethernet</th>\r\n			<td>Var</td>\r\n		</tr>\r\n		<tr>\r\n			<th>HDMI</th>\r\n			<td>Var</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Kart Okuyucu</th>\r\n			<td>Var</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Bellek &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Ram Tipi</th>\r\n			<td>DDR3</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Sistem Belleği</th>\r\n			<td>2 GB</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Bellek Yuvası</th>\r\n			<td>2</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Maksimum Ram Kapasitesi</th>\r\n			<td>.</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Bellek Hızı</th>\r\n			<td>1600MHz</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Diğer &Ouml;zellikler</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Kimin Se&ccedil;imi</th>\r\n			<td>G&uuml;nl&uuml;k, Eğlence</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Ekran Kartı</th>\r\n			<td>Paylaşımlı</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Klavye</th>\r\n			<td>TR/Q</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Paket İ&ccedil;eriği</th>\r\n			<td>Notebook</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Webcam</th>\r\n			<td>Var</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Oyuncular i&ccedil;in</th>\r\n			<td>Yok</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Disk &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Sabit Disk Kapasitesi</th>\r\n			<td>500 GB</td>\r\n		</tr>\r\n		<tr>\r\n			<th>HDD Hızı</th>\r\n			<td>5400 RPM</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Ekran Kartı &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Ekran Kartı Hafızası</th>\r\n			<td>Paylaşımlı</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Ekran Kartı Tipi</th>\r\n			<td>Dahili Ekran Kartı</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Ekran &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Ekran &Ouml;zelliği</th>\r\n			<td>15.6 &quot; / 1366 x 768 / LED</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Ekran Boyutu</th>\r\n			<td>15.6&quot;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>İşlemci &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>İşlemci Tipi</th>\r\n			<td>AMD E Serisi</td>\r\n		</tr>\r\n		<tr>\r\n			<th>İşlemci Cache</th>\r\n			<td>1 MB cache</td>\r\n		</tr>\r\n		<tr>\r\n			<th>İşlemci Hızı</th>\r\n			<td>1.35 GHz</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>İşletim Sistemi &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>İşletim Sistemi</th>\r\n			<td>Windows&reg; 8.1</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Model Bilgileri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Model</th>\r\n			<td>80E300J9TX</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Seri-</th>\r\n			<td>G5045</td>\r\n		</tr>\r\n		<tr>\r\n			<th>&Uuml;r&uuml;n Modeli</th>\r\n			<td>Notebook</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>S&uuml;r&uuml;c&uuml; &Ouml;zellikleri</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Optik S&uuml;r&uuml;c&uuml;</th>\r\n			<td>DVD Dual Yazıcı</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Diğer</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Garanti S&uuml;resi (Ay)</th>\r\n			<td>24</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Yurtdışına Satış</th>\r\n			<td>Yok</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Stok kodu</th>\r\n			<td>BD601914</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '1349', '849', '0', '2016-01-13 09:42:09');
INSERT INTO `urunler` VALUES ('16', '66', 'Tekli Koltuk Takımı', 'Evdebiz Comfort Yaşam Serisi Köşe Ve Tekli Koltuk Takımı', '0', '0', '0', '<table style=\"line-height:19.6px; width:1160px\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<div id=\"productDescriptionContent\">\r\n			<p><strong>&Uuml;r&uuml;n &Ouml;l&ccedil;&uuml;leri:</strong></p>\r\n\r\n			<p>Oturum Y&uuml;ksekliği: 40 cm</p>\r\n\r\n			<p>Oturum Derinliği: 65 cm</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>K&ouml;şe Koltuk</strong></p>\r\n\r\n			<p>Kanepe: 195x80x65</p>\r\n\r\n			<p>Uzanma: 175x80x65</p>\r\n\r\n			<p>Dıştan Dışa: 275cm x 175 cm</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>Tekli Koltuk</strong></p>\r\n\r\n			<p>75 x 80 x 65 cm</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>&Uuml;r&uuml;n &Ouml;zellikleri:</strong></p>\r\n\r\n			<p>Anmen Keten Kumaş %100 Ş&ouml;nil Polyester.</p>\r\n\r\n			<p>Kullanılan S&uuml;nger /Gri s&uuml;ngerdir.</p>\r\n\r\n			<p>Ahşap iskelet kullanılmıştır. &Ccedil;evre ve &ccedil;ocuk sağlığına uygun malzemeler ile &uuml;retilmiştir.</p>\r\n\r\n			<p>&Uuml;r&uuml;n kutu i&ccedil;erisinde ve toz girmesini &ouml;nleyici ince naylon ile korunmuştur.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>&Uuml;r&uuml;n Değişimi ve İade Koşulları:</strong></p>\r\n\r\n			<p>&Uuml;r&uuml;n&uuml; size g&ouml;nderilen sevk irsaliyesi ile birlikte g&ouml;nderin.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>&Uuml;r&uuml;n iadesinin kabul edilmesi i&ccedil;in;</strong></p>\r\n\r\n			<p>&Uuml;r&uuml;n&uuml;n orijinal kutusu/ambalajı bozulmamış, hasarsız, eksiksiz, tekrar satıla bilirlik &ouml;zelliğini kaybetmemiş olması gerekmektedir. Aksi durumlar i&ccedil;in &uuml;r&uuml;n zarar bedeli satın almış olduğunuz satış platformu yetkilisine bildirilecektir.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>&Uuml;r&uuml;nlerin size sağlam bir şekilde ulaşmasında paketleme standartları &ccedil;ok &ouml;nemlidir. L&uuml;tfen &uuml;r&uuml;n&uuml; iade etmeden &ouml;nce eğer &uuml;r&uuml;n&uuml; paketinden &ccedil;ıkarmışsanız aynı standartta yeniden paketleyiniz. B&uuml;t&uuml;n standart aksesuarları hasarsız ve tam olarak orijinal paketleri ile birlikte g&ouml;nderilmelidir.</p>\r\n\r\n			<p>Kurulum ve montajı yapılan &uuml;r&uuml;nler i&ccedil;in kesinlikle iade işlemi yapılamamaktadır.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>&Ouml;nemli Uyarı:</strong>Siparişinizi teslim alırken l&uuml;tfen kontrol ediniz pakette herhangi bir hasar g&ouml;r&uuml;rseniz kargo g&ouml;revlisine hasar tespit tutanağı tutturunuz. İade ve değişim kuralları gereği hasar tespit tutanağı tutulmadan sipariş iptali yapılan paketlerin iadeleri kabul edilmemektedir.&nbsp;</p>\r\n			</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '1999,90', '1199,89', '0', '2016-01-13 09:42:28');
INSERT INTO `urunler` VALUES ('17', '91', 'Valentino', 'Valentino Donna EDP 100 ml', '0', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:935px\">\r\n				<tbody>\r\n					<tr>\r\n						<td>\r\n						<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"5\" style=\"width:935px\">\r\n							<tbody>\r\n								<tr>\r\n									<td><strong>Burberry My Burberry Edp 90 Ml Kadın Parf&uuml;m&uuml;</strong></td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n					<tr>\r\n						<td>\r\n						<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"5\" style=\"width:935px\">\r\n							<tbody>\r\n								<tr>\r\n									<td><strong>Cilt Tipi</strong><br />\r\n									T&uuml;m cilt tipleri i&ccedil;in uygundur.<br />\r\n									<br />\r\n									<strong>&Uuml;r&uuml;n &Ouml;zellikleri</strong><br />\r\n									My Burberry, yağmur sonrası Londra sokaklarının kokusunu anımsatır.&nbsp;<br />\r\n									&Uuml;st Notalar: Tatlı bezelye ve bergamot.<br />\r\n									Orta Notalar: Sardunya, altın ayva ve frezya.<br />\r\n									Alt Notalar: Şam g&uuml;l&uuml; ve pa&ccedil;uli bulunuyor.<br />\r\n									<br />\r\n									T&uuml;rkiye&#39;de yetiştirilen Şam g&uuml;l&uuml;, yalnızca mayıs ayı boyunca hasat edilebilen bir bitkidir. Mayıs g&uuml;l&uuml; olarak da bilinen Centifolia g&uuml;l&uuml; ise Fransa&rsquo;da yetiştirilir. Mayıs ayında ve yılda sadece bir kez, sabah 4 ile 10 arasında toplanır. Sardunya ise beklenmedik bir kontrast oluştururken bergamot yağı, kokuya ışıltı ve canlılık katıyor. Pa&ccedil;uli ise bu &ouml;zel kokuya ayrı bir sıcaklık getiriyor.<br />\r\n									<br />\r\n									<strong>&Uuml;r&uuml;n Avantajları</strong><br />\r\n									<br />\r\n									My Burberry ile moda ve g&uuml;zellik d&uuml;nyası bir araya getiriliyor. Parf&uuml;m; My Burberry&#39;nin hazır giyim koleksiyonu, aksesuarlarını i&ccedil;inde barındıran kaps&uuml;l koleksiyonu ve ikonik tren&ccedil;kot renk paletinden ilham alan makyaj koleksiyonu ile birlikte tanıtılıyor.<br />\r\n									<br />\r\n									<strong>&Uuml;r&uuml;n Kullanımı</strong><br />\r\n									Temiz tene ve kıyafete g&uuml;n i&ccedil;inde istenilen sıklıkta kullanılır.</td>\r\n								</tr>\r\n								<tr>\r\n									<td>&nbsp;</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			&nbsp;\r\n\r\n			<p>Burberry&rsquo;nin kalitesi ve tarzını yansıtan My Burberry, yağmur sonrası Londra sokaklarının kokusunu size sunuyor. Karakteristik dokunuşları ile My Burberry&rsquo;de, moda ve g&uuml;zelliğin bir araya getirilişini g&ouml;rebilirsiniz. My Burberry&rsquo;nin hazır giyim, aksesuar, makyaj koleksiyonu ve kadın parf&uuml;m&uuml;, kadınların tarzını b&uuml;t&uuml;nleştirmeyi başarıyor. Burberry tarzını benimseyen, Burberry kadınlarının vazge&ccedil;ilemez kokularından biri olarak ortaya &ccedil;ıkan ve onların kimliğini yansıtmaya devam eden eşsiz bir esansa sahip olması ile t&uuml;m kadınların ilgisini &ccedil;ekiyor. Bu eşsiz koku, şişesinden &ccedil;ıkar &ccedil;ıkmaz &uuml;st notalarındaki tatlı bezelye ve bergamotun kokusunu yaymaya başlıyor. Birka&ccedil; saat i&ccedil;inde orta notalar olan Sardunya, altın ayva ve frezya sizi karşılıyor. Alt notaları olan nadir bulunan &ccedil;i&ccedil;ek Şam g&uuml;l&uuml; ve bu eşsiz karışıma sıcaklık katan pa&ccedil;uli sayesinde, saatler s&uuml;ren benzersiz &ccedil;i&ccedil;ek kokuları sizden uzun s&uuml;re ayrılmıyor. Temiz tene ve kıyafete g&uuml;n i&ccedil;inde istediğiniz sıklıkta uygulayabileceğiniz My Burberry parf&uuml;m, sunduğu eşsiz koku ve kalitesi ile sahiplenici bir etki bırakıyor. Doğada az bulunan &ccedil;i&ccedil;eklerin kokusunu teninizde taşımanın verdiği g&uuml;ven, sıcaklık duygusu ile g&uuml;n boyu mutluluğun ve &ccedil;ekici olmanın verdiği hazzı yaşıyorsunuz. G&uuml;nd&uuml;z ve gece, istediğiniz her yerde kullanarak kimliğinizi fark edilir kılmayı başarıyorsunuz. G&uuml;n&uuml;n her anında kullanabileceğiniz ve istediğiniz sıklıkta tazeleyebileceğiniz Burberry My Burberry Edp 90 Ml Kadın Parf&uuml;m&uuml;, T&uuml;rkiye&rsquo;nin kaliteli online alışveriş sitesi hepsiburada.com g&uuml;vencesi ile kapınıza geliyor</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '441.00', '314.00', '0', '2016-01-13 09:43:19');
INSERT INTO `urunler` VALUES ('18', '51', 'Milupa Biberon Mamaları', 'Aptamil 3 Devam Sütü 1200 gr.', '0', '0', '1', '<p>Prebiyotik lif, protein, karbonhidrat, yağ, demir, A-D-E ve K vitaminleri, mineraller</p>\r\n', '54,95', '43,90', '0', '2016-01-13 09:43:22');
INSERT INTO `urunler` VALUES ('21', '91', 'Roberto Cavalli', 'Roberto Cavalli Essenza EDP 75 ml', '0', '0', '0', '<h2>Bvlgari Jasmin Noir Edp 100 Ml Kadın Parf&uuml;m&uuml;</h2>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>Cilt Tipleri</h5>\r\n\r\n<p>T&uuml;m cilt tipleri i&ccedil;in uygundur.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n &Ouml;zellikleri</h5>\r\n\r\n<p>Esans:Oryantal Akşamları &ccedil;i&ccedil;ek yapraklarını kapayan Yasemin&#39;in yoğun ve tensel kokusu. Jasmin Noir b&uuml;y&uuml;leyici d&uuml;alizmi anlatır. Tepe Notası: Parlak Yeşillik &Ouml;zleri, Gardenya Yaprakları, Nil&uuml;fer Kalp Notası: Zambak, Yasemin &Ouml;z&uuml;t&uuml;, Saten Badem Dip Notası: Beyaz Misk, Tonka Tohumu &Ouml;z&uuml;t&uuml;, Kıymetli Odun Harman</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n Avantajları</h5>\r\n\r\n<p>G&uuml;nl&uuml;k kullanıma uygundur.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n Kullanımı</h5>\r\n\r\n<p>Temiz tene ve kıyafete istenilen sıklıkta uygulanır.</p>\r\n', '375.00', '199.99', '0', '2016-01-13 09:44:34');
INSERT INTO `urunler` VALUES ('22', '59', 'HP LaserJet Pro M277n', 'HP LaserJet Pro M277n Faks + Fotokopi + Tarayıcı + Laser Yazıcı B3Q10A', '0', '0', '0', '<p>&Ouml;nemli &ouml;zellikler</p>\r\n\r\n<p>LaserJet</p>\r\n\r\n<p>Siyah</p>\r\n\r\n<p>Kablosuz</p>\r\n\r\n<p>Hayır</p>\r\n\r\n<p>Baskı Hızı</p>\r\n\r\n<p>Dakikada 18 sayfaya kadar Siyah</p>\r\n\r\n<p>Baskı Hızı</p>\r\n\r\n<p>Dakikada 18 sayfaya kadar Renk</p>\r\n\r\n<p>Mobil baskı</p>\r\n\r\n<p>Evet</p>\r\n\r\n<p>Ağ &Uuml;zerinde &Ccedil;alışmaya Hazır</p>\r\n\r\n<p>Hayır</p>\r\n', '1159,11', '1117,65', '0', '2016-01-13 09:45:01');
INSERT INTO `urunler` VALUES ('23', '91', 'Calvin Klein', 'Calvin Klein Euphoria Edp 100 Ml Kadın Parfümü', '0', '0', '0', '<p>Esans:RomantikTurun&ccedil;gil ve odunsu notaların ağırlıklı olduğu kokusu ile zarif ve feminen kadınların vazge&ccedil;ilmezi. Coco Mademoiselle pembe b&uuml;y&uuml;l&uuml; şişesi ve baştan &ccedil;ıkarıcı kokusuyla sizi romantizm ile başbaşa bırakıyor.Tepe Notası: Portakal, Mandalina, Portakal &Ccedil;i&ccedil;eği, BergamotKalp Notası: Yasemin, T&uuml;rk G&uuml;l&uuml;, Ylang Ylang<br />\r\nDip Notası: Tonka Fasulyesi, Pa&ccedil;uli, Vetiver, Misk</p>\r\n', '359.00', '159.00', '0', '2016-01-13 09:46:04');
INSERT INTO `urunler` VALUES ('24', '51', 'Bolenn Hug Oto Koltukları', 'Bolenn Hug Multi Safe ISOFIX/SPS Oto Koltuğu (9-36 kg) / Bej', '0', '1', '1', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<th>Taşıma Kapasitesi</th>\r\n			<td>9-36 Kg</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Ebat</th>\r\n			<td>L*W*H: 51*52*69 cm</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '898,99', '599,00', '0', '2016-01-13 09:47:05');
INSERT INTO `urunler` VALUES ('25', '91', 'Bvlgari Mon', 'Bvlgari Mon Jasmin Noir Edp 75 Ml Kadın Parfümü', '0', '0', '0', '<p>Cilt Tipleri<br />\r\nT&uuml;m cilt tipleri i&ccedil;in uygundur.&Uuml;r&uuml;n &Ouml;zellikleri<br />\r\nEsans: OryantalCoco Chanel, romantik, ne istediğini bilen Chanel kadınını tanımlıyor.Tepe Notası: Mandalina, Portakal &Ccedil;i&ccedil;eğiKalp Notası: Bulgar G&uuml;l&uuml;, Hint Yasemini<br />\r\nDip Notası: Tonka Fasulyesi, Sandal Ağacı, Vanilya&Uuml;r&uuml;n Avantajları<br />\r\nG&uuml;nl&uuml;k kullanıma uygundur.&Uuml;r&uuml;n Kullanımı<br />\r\nTemiz tene ve kıyafete istenilen sıklıkta uygulanır.</p>\r\n', '367.99', '179.99', '0', '2016-01-13 09:47:15');
INSERT INTO `urunler` VALUES ('26', '91', 'Dolce Gabbana', 'Dolce Gabbana The One Desire Edp 75 Ml Kadın Parfümü', '0', '0', '0', '<h2>Dolce Gabbana Light Blue Edt 100 Ml Kadın Parf&uuml;m&uuml;</h2>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>Cilt Tipleri</h5>\r\n\r\n<p>T&uuml;m cilt tipleri i&ccedil;in uygundur.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n &Ouml;zellikleri</h5>\r\n\r\n<p>Esans: Ferah, &Ccedil;i&ccedil;eksi Yaşama zevki gibi b&uuml;y&uuml;leyici, vazge&ccedil;ilmez ve &ccedil;arpıcı. Tepe Notası: Sicilya Limonu, Yeşil Elma, Mavi S&uuml;mb&uuml;l Kalp Notası: Yasemin, Bambu, Taze G&uuml;l Dip Notası: Sedir, Amber, Misk</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n Avantajları</h5>\r\n\r\n<p>G&uuml;nl&uuml;k kullanıma uygundur.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h5>&Uuml;r&uuml;n Kullanımı</h5>\r\n\r\n<p>Temiz tene ve kıyafete istenilen sıklıkta uygulanır.</p>\r\n\r\n<p>&nbsp;</p>\r\n', '406.00', '199.99', '0', '2016-01-13 09:48:20');
INSERT INTO `urunler` VALUES ('27', '51', 'McRae 3 Tekerlekli Bebek Arabaları', 'Mcrae Mc 815 Triple Jogger 3 Tekerlekli Lux Bebek Arabası - Kırmızı', '0', '1', '1', '<table style=\"line-height:19.6px; width:1160px\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<div id=\"productDescriptionContent\">McRae MC 815 Triple Jogger 3 Tekerlekli Lux Bebek Arabası - Kırmızı&nbsp;<br />\r\n			&nbsp;\r\n			<p><strong>&Uuml;r&uuml;n&uuml;m&uuml;z&uuml; alan her m&uuml;şterimize 30 TL değerinde Puset Yağmurluğu Hediyemizdir</strong></p>\r\n			<br />\r\n			&Uuml;r&uuml;n&uuml;n Adı : Triple Jogger<br />\r\n			<br />\r\n			&Uuml;retim Yeri : T&uuml;rkiye<br />\r\n			<br />\r\n			Markanın Ait Olduğu &Uuml;lke : T&uuml;rkiye<br />\r\n			<br />\r\n			&Uuml;r&uuml;n Ağırlığı : 6,9 Kg.&nbsp;<br />\r\n			<br />\r\n			Taşıma Kapasitesi : Eu-15Kg. / Us-25Kg.&nbsp;<br />\r\n			<br />\r\n			Kullanım Zamanı : 0 Aydan İtibaren Eu (48 Ay)&nbsp;<br />\r\n			<br />\r\n			Kalite Belgeleri : Tse 12512 Hizmet G&uuml;vencesiyle<br />\r\n			<br />\r\n			&Uuml;r&uuml;n&uuml;n Renkleri : Kırmızı / Siyah / Mavi / Pembe<br />\r\n			<br />\r\n			1-Kanserojen Kumaş İ&ccedil;ermez<br />\r\n			<br />\r\n			2-Kanserojen Plastik İ&ccedil;ermez.&nbsp;<br />\r\n			<br />\r\n			3-Iso 9001:2008 Uygun &Uuml;retim, Ts En 1888.2007 Sertifikasına Sahiptir.&nbsp;<br />\r\n			<br />\r\n			&Ouml;zellikleri:&nbsp;<br />\r\n			<br />\r\n			&Uuml;r&uuml;n&uuml;m&uuml;z Yeni &Uuml;retilen En Son &Ccedil;ıkan Bebek Arabasıdır.&nbsp;<br />\r\n			<br />\r\n			Ekstra Dayanıklı Ve &Ccedil;ok Hafif &Ouml;zel Alışımlı Dayanıklı &Ccedil;ift Kat Black Metal Kasa (A1 High Performance Black Metal)&nbsp;<br />\r\n			<br />\r\n			Tutma Kolu, Elden Kaymaz &Ouml;zelliktedir.&nbsp;<br />\r\n			<br />\r\n			Otomatik Kapanma Sistemi Sayesinde Tek Elle Kapanabilir.&nbsp;<br />\r\n			<br />\r\n			&Ouml;n Mama Tepsi B&ouml;l&uuml;m&uuml; &Ccedil;ıkarılabilir. Portatif&#39;Tir.&nbsp;<br />\r\n			<br />\r\n			Katlama Mekanizmasında, Kaza İle Katlanma İhtimaline Karşı İkinci Bir Emniyet Sistemi Bulunur.&nbsp;<br />\r\n			<br />\r\n			Ara&ccedil; &Ccedil;ok Hafiftir.S&uuml;r&uuml;ş&uuml; Olduk&ccedil;a Kolay Olan Pratik Bir Bebek Arabasıdır. Bir Başka Deyişle Baston Araba Gibi Bebek Arabasıdır.&nbsp;<br />\r\n			<br />\r\n			Katlandığında En K&uuml;&ccedil;&uuml;k Arabanın Bile Bagajına Rahatlıkla Sığar.&nbsp;<br />\r\n			<br />\r\n			Mcrae&#39; Ye &Ouml;zel Geriye Yatık Dizayn Bebeğinizin Puset İ&ccedil;inde S&uuml;rekli Arkasına Yaslanmasını Sağlamakla Beraber, Bebeğin Ağırlığını T&uuml;m Arabaya Eşit Dağıtır.&nbsp;<br />\r\n			<br />\r\n			Bu Da Size Araba Buzda Kayıyormuş Hissi Yaratır. Sırt Kısmında Bulunan Ortapedik Bel Destek Sistemi Sayesinde Maksimum Rahatlık Sağlar.&nbsp;<br />\r\n			<br />\r\n			Aracın İ&ccedil; Kısmında Bulunan Sırt Ve Oturma Kısımları Yumuşak Dolguludur.&nbsp;<br />\r\n			<br />\r\n			3 Adet ( 1 &Ouml;n 2 Arka ) B&uuml;y&uuml;k Teker. 3 Tekerinde B&uuml;y&uuml;k Olması Sayesinde Ara&ccedil; Yere Daha İyi Oturacaktır. Bu Da S&uuml;r&uuml;ş Kalitesini Artıran &Ouml;nemli Bir Unsurdur.Ayrıca Tekerlerde Bulunan Bilya Sistemi Sayesinde Bebek Arabasının S&uuml;r&uuml;ş&uuml; &Ccedil;ok Rahattır.&nbsp;<br />\r\n			<br />\r\n			T&uuml;m Tekerlerde Bulanan Amortis&ouml;r Sistemi Sayesinde Bebek Arabasının S&uuml;spansiyonu Sağlanmış Olup, Girintili &Ccedil;ıkıntılı Yerlerde Daha Rahat S&uuml;r&uuml;ş İmkanı Sağlar.&nbsp;<br />\r\n			<br />\r\n			&Uuml;r&uuml;n&uuml;n Arka Tekerlerinde Yer Alan Ve Tek Ayak Hareketiyle Devreye Girip &Ccedil;ıkan G&uuml;venli Fren Sistemi Vardır.&nbsp;<br />\r\n			<br />\r\n			&Ouml;n Tekerlek 360 Derece D&ouml;nebilir Ve Tek Hareketle Sabitlenebilir.&nbsp;<br />\r\n			<br />\r\n			Tentede File &Ouml;zelliği. Tenteye Entegre Olan Ve Tek Harekette A&ccedil;abileceğiniz File Sistemi Sayesinde Bebeğinizi G&ouml;rebilirsiniz.&nbsp;<br />\r\n			<br />\r\n			Tentenin Arka Kısmında Bulunan Geniş Malzeme Cebi.&nbsp;<br />\r\n			<br />\r\n			3 Kg Kapasiteli Yerden Y&uuml;ksek Alt Sepet.&nbsp;<br />\r\n			<br />\r\n			Oturma Ve Sırt B&ouml;lgesi 3 Kademe Ayar Pozisyonludur. Bunlar Oturma,Dinlenme.Uyku Posisyonlarıdır. Uyku Pozisyonunda Ara&ccedil; Tam Olarak Yatmaktadır. %100 Yatma &Ouml;zelliğine Sahiptir. Bu &Ouml;zellik Sayesinde Bebeğinizin Omurga Sağlığının Korunması Ama&ccedil;lanır.&nbsp;<br />\r\n			<br />\r\n			Anti Allerjik Terletmez Kumaş Su Ge&ccedil;irmez Malzemeden Yapılmıştır.&nbsp;<br />\r\n			<br />\r\n			Takılması Ve S&ouml;k&uuml;lmesi &Ccedil;ok Hızlı Ve Kolay Olan Sertifikalı 5 Nokta Emniyet Kemer Sistemi İle Maksimum G&uuml;venlik.Bebeğinizi G&ouml;vde Ve Bacaklarından Sabitleyen 5 Noktalı Emniyet Kemeriyle Maksimum G&uuml;venlik Sağlar.Emniyet Kemeri Bebeğin Boyuna G&ouml;re Ve Kilosuna G&ouml;re Ayarlanabilir.&nbsp;</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '250.00', '219,90', '0', '2016-01-13 09:49:11');
INSERT INTO `urunler` VALUES ('28', '85', 'Dambıl', 'Spin Plastik Köşeli Dambıl', '0', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<th>Marka</th>\r\n			<td><a href=\"http://www.hepsiburada.com/spin\" title=\"Spin\">Spin</a></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>&nbsp;</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Malzeme</th>\r\n			<td>Plastik</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '24.78', '17.49', '0', '2016-01-13 09:49:12');
INSERT INTO `urunler` VALUES ('29', '66', 'Lusi Tv Ünitesi', 'Tv Ünitesi', '0', '0', '0', '<table style=\"line-height:19.6px; width:1160px\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<div id=\"productDescriptionContent\">\r\n			<p><strong>&Uuml;r&uuml;n &Ouml;l&ccedil;&uuml;leri</strong>&nbsp;</p>\r\n\r\n			<p>&nbsp;</p>\r\n			* Genişliği:180 cm<br />\r\n			* Y&uuml;kseklik: 40 cm<br />\r\n			* Derinliği: 31,5 cm<br />\r\n			<br />\r\n			<strong>Raf</strong><br />\r\n			* Genişliği:60 cm<br />\r\n			* Y&uuml;kseklik: 15 cm<br />\r\n			* Derinliği: 18,8 cm<br />\r\n			<br />\r\n			<strong>&Uuml;r&uuml;n &Ouml;zellikleri&nbsp;</strong><br />\r\n			* Renk:<strong>&nbsp;Beyaz / Cordoba</strong><br />\r\n			* 18 mm kalınlığında A Kalite yonga levha ve 1. sınıf pvc bant kullanılmıştır.<br />\r\n			* &Ccedil;evre ve &ccedil;ocuk sağlığına uygun malzemeler ile &uuml;retilmiştir.<br />\r\n			* TSE belgeli malzemeler kullanılarak imal edilmiştir.<br />\r\n			<br />\r\n			<strong>Teslimat ve Kurulum Bilgileri</strong><br />\r\n			* &Uuml;r&uuml;n demonte olarak g&ouml;nderilmektedir.Kurulum m&uuml;şteriye aittir.<br />\r\n			* Basit el aletleri ile kolayca kurulum yapabilirsiniz.<br />\r\n			* Hızlı ve hatasız kurulum i&ccedil;in par&ccedil;a &uuml;zerinde kurulum şeması ile uyumlu par&ccedil;a numaraları bulunmaktadır.<br />\r\n			* &Uuml;r&uuml;n&uuml; kargodan teslim alınırken paketler mutlaka kontrol edilmeli, hasarlı paket veya &uuml;r&uuml;nler teslim alınmamalı ve kargo yetkilisine hasar tespit tutanağı hazırlanması doğrultusunda yardım talep etmeniz gerekmektedir.<br />\r\n			<br />\r\n			<strong>Garanti S&uuml;resi</strong><br />\r\n			* 2 Yıl</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '309,75', '154,90', '0', '2016-01-13 09:49:24');
INSERT INTO `urunler` VALUES ('34', '66', 'İdea Yatak Odası Takımı', 'Yatak Odası Takımı', '0', '0', '0', '<p><strong>&Uuml;r&uuml;n &Ouml;l&ccedil;&uuml;leri:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>&Uuml;r&uuml;n Rengi</strong>&nbsp;: Sacramento + Beyaz</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style=\"margin-left:14.2pt\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Dolap</strong>&nbsp;: Genişlik: 210cm&nbsp;&nbsp;&nbsp;&nbsp;<strong>Karyola</strong>&nbsp;:Genişlik: 157cm&nbsp;&nbsp;<strong>Şifonyer</strong>:Genişlik:90cm 2&nbsp;<strong>Komidin</strong>:G:59cm</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&uuml;kseklik:210cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&uuml;kseklik:100cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y&uuml;ksekil:145cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y:41cm</p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derinlik: 58cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uzunluk: 207cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Derinlik:44cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D:40cm</p>\r\n\r\n<p>&nbsp;<br />\r\nUygun yatak &ouml;l&ccedil;&uuml;s&uuml; 150x200 cm&#39;dir.<br />\r\n<br />\r\nYatak koyulması i&ccedil;in yatak altı suntası ve ayakları g&ouml;nderilmektedir.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>&Uuml;r&uuml;n &Ouml;zellikleri:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n	<li>&Ccedil;evreye ve sağlığa zararsız kanserojen madde i&ccedil;ermeyen E1 kalite standartlarında yonga levha ile ,minifix ve kavela bağlantılı, demonte olarak &uuml;retilmektedir.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\r\n	<li>Kullanılan t&uuml;m hammadde ve montoj malzemeleri % 100 T&Uuml;RK MALI ve 1. kalite olarak T&Uuml;RKİYE&#39;de &uuml;retilmektedir.</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><br />\r\n<strong>Montaj:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ul>\r\n	<li>&Uuml;r&uuml;nlerimiz &ouml;zel kargo paketinde demonte olarak teslim edilir.</li>\r\n	<li>Paketlerde gerekli kurulum şeması, t&uuml;m vida ve aksesuarların montaj seması ile uyumlu malzeme torbası,&ccedil;ıkmaktadır.</li>\r\n	<li>Hızlı ve hatasız kurulum i&ccedil;in kurulum şeması bulunmaktadır.</li>\r\n	<li>Yatak dahil değildir.&nbsp;</li>\r\n</ul>\r\n\r\n<p style=\"margin-left:18pt\">&nbsp;</p>\r\n\r\n<p><strong>Garanti S&uuml;resi:</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>5 Yıl fabrikasyon hatalarına karşı tedarik&ccedil;imiz tarafından garanti kapsamındadır.</p>\r\n\r\n<p>M&uuml;şteri kullanım hatalarını kapsamaz.</p>\r\n', '2449,00', '1149,00', '0', '2016-01-13 09:50:40');
INSERT INTO `urunler` VALUES ('36', '51', 'İsme Özel Bebek Kapı Süsleri', 'Küçük Rüyalar Kapı Süsü Kare', '1', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><strong>K&uuml;&ccedil;&uuml;k R&uuml;yalar Kapı S&uuml;s&uuml; Kare</strong></p>\r\n\r\n			<ul>\r\n				<li>Bebeğinizin d&uuml;nyaya gelişinin hemen sonrasında &ouml;nce hastane kapısını daha sonrada yaşamını ge&ccedil;ireceği bebek odası kapısının s&uuml;slenmesi i&ccedil;in &ouml;zel olarak tasarlanmıştır.</li>\r\n				<li>Hoş bir hediye ve &ouml;m&uuml;r boyu saklanaılacak bir hatıradır.</li>\r\n				<li>Bebeğinizin sağlığına zarar vermicek kumaşlardan &uuml;retilmiştir.</li>\r\n				<li>40 x 40 x 3 cm ebatındır.</li>\r\n			</ul>\r\n\r\n			<p><strong>1 ile 3 iş g&uuml;n&uuml; i&ccedil;erisinde kargoya teslim edilmektedir.</strong></p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '34.90', '31,20', '0', '2016-01-13 09:51:33');
INSERT INTO `urunler` VALUES ('39', '66', 'Bestline Norm Kitaplık', 'Bestline Norm Kitaplık + Çalışma Masası + Dolap Seti - Beyaz', '0', '0', '0', '<p><strong>&Uuml;r&uuml;n &Ouml;l&ccedil;&uuml;leri&nbsp;</strong></p>\r\n\r\n<p><br />\r\n&nbsp;<br />\r\n<strong>Masanın &Ouml;l&ccedil;&uuml;leri :&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>\r\n\r\n<p><br />\r\nGenişlik&nbsp;&nbsp;&nbsp;: 141.08 cm&nbsp;<br />\r\nDerinlik&nbsp;&nbsp;&nbsp;&nbsp;: 50.0 cm&nbsp;<br />\r\nY&uuml;kseklik :&nbsp;&nbsp;140.00 cm&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><br />\r\n<strong>&Uuml;r&uuml;n &Ouml;zellikleri</strong></p>\r\n\r\n<p><br />\r\n<strong>Renk:</strong>&nbsp;Beyaz&nbsp;</p>\r\n\r\n<p><br />\r\n&Uuml;r&uuml;nde 18 mm kalınlığında dayanıklı melamin kaplı yonga levhalar kullanılmıştır.<br />\r\nKullanılan kulplar, vidalar ve aksesuarlar, diğer t&uuml;m malzemeler gibi kaliteli olup TSE&#39; ye uygundur. Bu sebepten dolayı uzun yıllar sorunsuz bir şekilde kullanılabilir.</p>\r\n\r\n<p>T&uuml;m &Uuml;r&uuml;nlerimiz kalite kontrolden ge&ccedil;irildikten sonra siz değerli m&uuml;şterilerimize g&ouml;nderilmektedir.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Montaj ve Teslimat</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&Uuml;r&uuml;n, &ouml;zel kargo paketinde stre&ccedil;lenip, straforlanarak demonte halinde, koli i&ccedil;erisinde, teslim edilmektedir.<br />\r\n&Uuml;r&uuml;n demonte olup kurulumu &ccedil;ok kolaydır. Sadece yıldız u&ccedil;lu tornavida yardımıyla ya da şarjlı matkapla, montaj şeması ve montaj sıralaması takip edildiği s&uuml;rece hi&ccedil;bir ustalık gerektirmeden basit&ccedil;e ve defalarca kurulup s&ouml;k&uuml;lebilir. Paketlerde kurulum i&ccedil;in gerekli t&uuml;m malzeme ve aksesuarlar mevcuttur. Kullanılan montaj malzemelerinin kaliteli olmasından dolayı s&ouml;k&uuml;l&uuml;p takılması sırasında hi&ccedil;bir aksaklık yaşanmaz.<br />\r\n<br />\r\nKargodan gelen &uuml;r&uuml;n&uuml;n hasar kontrol&uuml;, kargo g&ouml;revlisi ayrılmadan muhakkak yapılmalıdır. Hasarlı &uuml;r&uuml;n hasar tespit tutanağı tutturularak kargo g&ouml;revlisine iade edilir.&nbsp;<br />\r\nHasarlı ulaşan &uuml;r&uuml;nlerde, kargo şirketine hasar tanzim tutanağı tutturulmayan &uuml;r&uuml;nlerin &uuml;cretsiz iptali ve değişimi yapılamamaktadır.<br />\r\n<br />\r\n<strong>Garanti S&uuml;resi</strong><br />\r\n2 yıl</p>\r\n', '499,90', '349,91', '0', '2016-01-13 09:52:06');
INSERT INTO `urunler` VALUES ('41', '58', 'Samsung Galaxy N920 Note 5', 'Samsung Galaxy N920 Note 5', '0', '0', '0', '<h3>Zarif metal cam g&ouml;vde</h3>\r\n\r\n<p>Samsung Galaxy Note 5 t&uuml;keticiyle buluştu! Yepyeni &ouml;zellikleri ve tasarımıyla serisinin son &uuml;r&uuml;n&uuml; olan Note 5 fiyatıyla da cep telefonu tutkunlarının kalbini fethedecek gibi g&ouml;r&uuml;n&uuml;yor. Tasarımıyla, S Pen&rsquo;iyle, şarj g&uuml;c&uuml;yle, aksesuarlarıyla Samsung Galaxy Note 5, geleceğin akıllı cep telefonu olduğunu ispatlıyor.Galaxy Note 5, b&uuml;y&uuml;leyici bir tasarıma sahip. Daha &ouml;ncekilere g&ouml;re ekstra dayanıklı niteliklere sahip 7000 serisi al&uuml;minyum ve Gorilla Glass 4 prim kombinasyonu sunan Note 5, sınıfının en karizmatik g&ouml;r&uuml;n&uuml;m&uuml;ne sahip. Dayanıklı yapısı ise g&ouml;z kamaştırıyor. &Ouml;zellikle yeni renk se&ccedil;enekleri, onu daha &ccedil;ekici h&acirc;le getiriyor. 5.7&rdquo; Quad HD Super AMOLED ekranla en k&uuml;&ccedil;&uuml;k detaylar bile g&ouml;zden ka&ccedil;mıyor, fotoğraf ve video &ccedil;ekmek bir sanat olayına d&ouml;n&uuml;ş&uuml;yor. Olağan&uuml;st&uuml; multitask deneyimiyle, ona sahip olan herkes cebinde bir teknoloji yıldızı taşıyacak gibi g&ouml;r&uuml;n&uuml;yor.</p>\r\n', '2699', '2298', '0', '2016-01-13 09:52:17');
INSERT INTO `urunler` VALUES ('43', '85', 'Boks Eldiveni', 'Delta Maxima Deluxe Pu Boks Eldiveni', '0', '0', '0', '<table style=\"line-height:19.6px; width:1160px\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<div id=\"productDescriptionContent\">\r\n			<p><strong>Delta Maxima Deluxe PU Boks Eldiveni -&nbsp;</strong></p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>Y&uuml;ksek kalitede suni deri malzemeden &uuml;retilmiş antrenman eldivenidir.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>Kalıbı, elin anatomik yapısına uygun doğal yumruk bi&ccedil;imindedir.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>Avu&ccedil; i&ccedil;i kısmında bulunan nefes alan kumaş eldivenin hava almasını sağlar ve elinizin terlemesini &ouml;nler.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>Bilek &uuml;zerindeki cırt bantlar kolay kullanım avantajı ve vuruşlarınızda maksimum koruma sağlar.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>&Uuml;r&uuml;n kendi orijinal &ccedil;antasında sunulmaktadır.</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>Renkler;</strong></p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p>Kırmızı, Siyah, Fuşya, Mavi</p>\r\n\r\n			<p>&nbsp;</p>\r\n\r\n			<p><strong>Oz;</strong></p>\r\n\r\n			<p>6 oz, 8 oz, 10 oz, 12 oz</p>\r\n			</div>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '89.00', '42.09', '0', '2016-01-13 09:52:58');
INSERT INTO `urunler` VALUES ('46', '58', 'Dark EZCast', 'Dark EZCast Kablosuz HDMI Görüntü Aktarım Kiti (DK-AC-TVEZCASTTV)', '0', '0', '0', '<p><strong>Kablosuz G&ouml;r&uuml;nt&uuml; Aktarımı Şimdi Başlıyor</strong><br />\r\nDark; platform bağımsız olarak Android ve iOS akıllı telefonlardan, Windows ve MAC bilgisayarlardan cihazlarınızdaki t&uuml;m i&ccedil;eriği oturduğunuz yerden TV&#39;nize aktarmanızı sağlayacak yeni nesil kablosuz g&ouml;r&uuml;nt&uuml; ve ses aktarım teknolojisi EZCast&#39;ı sunar. HDMI portuna takılan bir USB bellek boyutundaki Dark EZCast ile akıllı telefon, tablet veya laptop i&ccedil;erisindeki film, m&uuml;zik ve oyun gibi multimedya i&ccedil;eriği kablosuz olarak TV&#39;nize kolayca taşıyabilirsiniz. Kolay kurulumu, y&uuml;ksek performansı ve platform bağımsız &ccedil;alışması ile Dark EZCast televizyonunuzun tamamlayıcısı olacak.<br />\r\n&nbsp;</p>\r\n', '166.10', '108,33', '0', '2016-01-13 09:54:16');
INSERT INTO `urunler` VALUES ('47', '85', 'Protein Tozu', 'Optimum Gold Standard Whey Protein Tozu 2273 gr Double Rich Chocolate', '0', '0', '0', '<p><strong>Optimum Nutrition Gold Standard Whey Protein Tozu</strong></p>\r\n\r\n<p>Optimum Nutrition Gold Standard Whey Protein Tozu Amerika Birleşik Devletleri&#39;nin&nbsp;pop&uuml;ler protein tozlarından biri olarak bilinmektedir.</p>\r\n\r\n<p>&Uuml;&ccedil;&uuml;nc&uuml; nesil yeni form&uuml;l&uuml;<u>Mikrofiltre edilmiş Konsantre Whey proteini ve Iyon-degişim Whey protein izolesi&#39;</u>den oluşmaktadır, bu kombinasyon sayesinde proteinlerin kana karışım hızı normal Whey protein &uuml;r&uuml;nlerine g&ouml;re daha fazladır.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong><u>Optimum Gold Standard Whey Protein Tozu&#39;nun dikkat &ccedil;eken &ouml;zellikleri:</u></strong></p>\r\n\r\n<p>- 1 servisinde 24gram Whey Proteini</p>\r\n\r\n<p>- İyon değişim İzole Whey ve Konsantre Whey protein i&ccedil;eriği</p>\r\n\r\n<p>- 5.5gram BCAA amino asit i&ccedil;eriği</p>\r\n\r\n<p>- 4gram Glutamin ve &ouml;nc&uuml;leri bulunduruyor</p>\r\n\r\n<p>- 1 kutuda 74 servis</p>\r\n\r\n<p>- Fiyat</p>\r\n\r\n<p>Optimum Gold Standard Whey Protein Tozu &uuml;r&uuml;n&uuml;nde topaklanmayı engelleyici suni bileşenler bulunmadığından, mevsimsel sebeplerden dolayı &uuml;r&uuml;n i&ccedil;eriğinde topaklanma olabilmektedir. Bu durum &uuml;r&uuml;n&uuml;n i&ccedil;eriğini hi&ccedil;bir şekilde etkilememektedir. Optimum Gold Standard Whey&#39;in 1 &ouml;l&ccedil;eğini su ya da s&uuml;te karıştırdıktan sonra normal bir şekilde karışacaktır.&nbsp;</p>\r\n', '253', '253', '0', '2016-01-13 09:55:22');
INSERT INTO `urunler` VALUES ('48', '58', 'Canon Eos 700D 18-55 DC DSLR', 'Canon Eos 700D 18-55 DC DSLR Fotoğraf Makinesi', '1', '1', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<th>Marka</th>\r\n			<td><a href=\"http://www.hepsiburada.com/canon\" title=\"Canon\">Canon</a></td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>&nbsp;</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Tipi</th>\r\n			<td>Kit (Objektifli)</td>\r\n		</tr>\r\n		<tr>\r\n			<th>&Ccedil;&ouml;z&uuml;n&uuml;rl&uuml;k (Megapiksel)</th>\r\n			<td>18,0</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Ekran Boyutu</th>\r\n			<td>3.0&quot;</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Video</th>\r\n			<td>1080P</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Hafıza Kartı</th>\r\n			<td>SDHC/SDXC</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Hassaslık</th>\r\n			<td>ISO 6400</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Segment</th>\r\n			<td>Başlangı&ccedil; Seviyesi</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table>\r\n	<caption>Diğer</caption>\r\n	<tbody>\r\n		<tr>\r\n			<th>Garanti S&uuml;resi (Ay)</th>\r\n			<td>24</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Yurtdışına Satış</th>\r\n			<td>Yok</td>\r\n		</tr>\r\n		<tr>\r\n			<th>Stok kodu</th>\r\n			<td>FTSLRCAN700D1855DC</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '2000,01', '1599,01', '0', '2016-01-13 09:57:08');
INSERT INTO `urunler` VALUES ('49', '51', 'Bondigo Oyun Halıları', 'Bondigo Serüven Ormanı Oyun Halısı', '0', '0', '0', '<p>Renkli ve ser&uuml;ven dolu oyun halısı; m&uuml;zik ve sesler ile bebeğinizin isteklerine cevap verirken, gelişimine de destek verir.</p>\r\n\r\n<p>Bebeğiniz halı &uuml;st&uuml;nde yatıp oynayabilir; karın &uuml;st&uuml; yatarak eğlenebilir ve hışırdayan ayaklar ile kuyruğa sahip zebra, peluş papağan, melodiler &ccedil;alan aslan, sevimli kelebek diş kaşıyıcı, b&uuml;y&uuml;k d&ouml;ner &ccedil;ıngıraklı topa sahip fil oyuncakları sayesinde keyifli zaman ge&ccedil;irebilir.</p>\r\n\r\n<p>Halkalara bebeğinizin favori oyuncaklarını asabilir; onun karın &uuml;st&uuml; kalkıp oyuncakları keşfetmesine olanak sağlayabilirsiniz. Yumuşak yastık ise bebeğinizin rahat&ccedil;a uzanmasını sağlar.</p>\r\n\r\n<p>Melodili aslan 2 adet LR44 pil ile &ccedil;alışır.</p>\r\n\r\n<p>&Ouml;zg&uuml;rl&uuml;k!</p>\r\n\r\n<ul>\r\n	<li>Bebekler yuvarlanabilir, kendilerini kaldırabilir ve keşif yapabilirler. B&ouml;ylece motor hareket becerileri gelişir ve fiziksel olarak g&uuml;&ccedil;lendirebilirler.</li>\r\n</ul>\r\n\r\n<p>Keşfet!</p>\r\n\r\n<ul>\r\n	<li>Orman dostları, canlı renkler ve y&uuml;ksek kontrastlı desenler ile g&ouml;rsel becerilerin gelişimi</li>\r\n</ul>\r\n\r\n<p>Kırılmaz ayna &amp; oyuncaklar</p>\r\n\r\n<ul>\r\n	<li>Bebeğin kendini keşfetme becerisini destekleyen ayna ve bebeği eğlendiren oyuncaklar</li>\r\n</ul>\r\n\r\n<p>&Ccedil;ıkarılabilir oyuncaklar</p>\r\n\r\n<ul>\r\n	<li>Oyuncaklar halıya takılabilir veya ayrı olarak da bebekler onlarla oynayabilir.</li>\r\n</ul>\r\n\r\n<p>Pratik kullanım</p>\r\n\r\n<ul>\r\n	<li>Her yerde oynayabilmek i&ccedil;in kolay katlama</li>\r\n</ul>\r\n', '129,89', '89,89', '0', '2016-01-13 09:58:24');
INSERT INTO `urunler` VALUES ('53', '85', 'GS Forma', 'Gs Ss Home Supporters Tee-101-29L Forma 618795 ', '0', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>&nbsp;\r\n			<table>\r\n				<tbody>\r\n					<tr>\r\n						<td>\r\n						<table>\r\n							<caption>&nbsp;</caption>\r\n							<tbody>\r\n								<tr>\r\n									<th>Marka</th>\r\n									<td><a href=\"http://www.hepsiburada.com/gs\" title=\"GS\">GS</a></td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n\r\n						<table>\r\n							<caption>&nbsp;</caption>\r\n							<tbody>\r\n								<tr>\r\n									<th>Cinsiyet</th>\r\n									<td>&Ccedil;ocu</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '60.00', '54.99', '0', '2016-01-13 10:27:38');
INSERT INTO `urunler` VALUES ('54', '85', 'Erkek Ayakkabı', 'Nike 706583-401 Erkek Ayakkabı', '0', '0', '0', '<table>\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p>. Turkuaz<br />\r\n			.&nbsp;Sentetik</p>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', '199.00', '169.00', '0', '2016-01-13 10:30:45');

-- ----------------------------
-- Table structure for urun_fotograflari
-- ----------------------------
DROP TABLE IF EXISTS `urun_fotograflari`;
CREATE TABLE `urun_fotograflari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urun_id` int(11) NOT NULL,
  `adi` varchar(500) COLLATE utf8_bin NOT NULL,
  `klasor` varchar(500) COLLATE utf8_bin NOT NULL,
  `album_adi` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=360 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of urun_fotograflari
-- ----------------------------
INSERT INTO `urun_fotograflari` VALUES ('276', '5', '5_8676955Chrysanthemum.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('275', '20', '20_29026256banner1.jpg', 'slider_20', 'slider');
INSERT INTO `urun_fotograflari` VALUES ('274', '19', '19_22967270OfficeEssentials.jpg', 'slider_19', 'slider');
INSERT INTO `urun_fotograflari` VALUES ('273', '18', '18_100722557.jpg', 'slider_18', 'slider');
INSERT INTO `urun_fotograflari` VALUES ('277', '5', '5_22017409Jellyfish.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('278', '5', '5_9932738Hydrangeas.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('279', '5', '5_6989203Desert.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('280', '5', '5_19880608Koala.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('281', '5', '5_21838851Lighthouse.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('282', '5', '5_6395077Penguins.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('283', '5', '5_8174019Tulips.jpg', 'urunler_5', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('284', '6', '6_16898809Lighthouse.jpg', 'urunler_6', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('285', '6', '6_28210398Penguins.jpg', 'urunler_6', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('286', '6', '6_22167347Tulips.jpg', 'urunler_6', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('287', '7', '7_21354915Koala.jpg', 'urunler_7', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('288', '7', '7_25663752Tulips.jpg', 'urunler_7', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('289', '7', '7_1190514Lighthouse.jpg', 'urunler_7', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('290', '11', '11_20015337Chrysanthemum.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('291', '11', '11_8649942Desert.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('292', '11', '11_25959863Hydrangeas.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('293', '11', '11_29550433Jellyfish.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('294', '11', '11_13414259Koala.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('295', '11', '11_6016382Lighthouse.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('296', '11', '11_29248916Penguins.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('297', '11', '11_17056287Tulips.jpg', 'urunler_11', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('298', '10', '10_16371914Chrysanthemum.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('299', '10', '10_24934176Desert.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('300', '10', '10_8971123Hydrangeas.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('301', '10', '10_1127291Jellyfish.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('302', '10', '10_28793400Koala.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('303', '10', '10_23275365Lighthouse.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('304', '10', '10_7810545Penguins.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('305', '10', '10_21741806Tulips.jpg', 'urunler_10', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('306', '9', '9_5812450Hydrangeas.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('307', '9', '9_29024772Chrysanthemum.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('308', '9', '9_14834195Desert.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('309', '9', '9_18551311Jellyfish.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('310', '9', '9_684558Koala.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('311', '9', '9_15139306Lighthouse.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('312', '9', '9_10066705Penguins.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('313', '9', '9_13023126Tulips.jpg', 'urunler_9', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('314', '8', '8_25686402Desert.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('315', '8', '8_4923114Koala.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('316', '8', '8_20273842Chrysanthemum.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('317', '8', '8_26019308Hydrangeas.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('318', '8', '8_21147744Jellyfish.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('319', '8', '8_24636796Lighthouse.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('320', '8', '8_20511114Penguins.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('321', '8', '8_22900161Tulips.jpg', 'urunler_8', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('322', '12', '12_11601309Penguins.jpg', 'urunler_12', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('323', '12', '12_19395176Tulips.jpg', 'urunler_12', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('324', '13', '13_2094932Koala.jpg', 'urunler_13', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('325', '13', '13_12168297Desert.jpg', 'urunler_13', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('353', '46', '46_1319810darkez.jpg', 'urunler_46', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('327', '28', '28_17063806dambil.jpg', 'urunler_28', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('345', '23', '23_25248161ressim.jpg', 'urunler_23', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('329', '18', '18_1072190aptamil.jpg', 'urunler_18', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('330', '39', '39_3764121Mobilya_6857263.jpg', 'urunler_39', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('331', '24', '24_1285864bebek koltugu2.jpg', 'urunler_24', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('332', '43', '43_16681141boks eldiveni.jpg', 'urunler_43', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('349', '36', '36_17153602kapi susu4.jpg', 'urunler_36', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('348', '27', '27_939515bebek arabasi3.jpg', 'urunler_27', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('336', '16', '16_18962757Mobilya_8481353.jpg', 'urunler_16', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('337', '14', '14_25935186resim2.jpg', 'urunler_14', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('338', '17', '17_6674920resim3.jpg', 'urunler_17', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('339', '29', '29_1880668Mobilya_5160384.jpg', 'urunler_29', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('340', '21', '21_26117025resim4.jpg', 'urunler_21', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('341', '34', '34_28443232Mobilya_4220209.jpg', 'urunler_34', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('343', '47', '47_3883829protein tozu.jpg', 'urunler_47', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('344', '25', '25_26856288resim5.jpg', 'urunler_25', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('346', '49', '49_2931269oyuncak5.jpg', 'urunler_49', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('347', '15', '15_21441872lenovo.jpg', 'urunler_15', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('350', '22', '22_14319636hp.jpg', 'urunler_22', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('351', '41', '41_27052204samsung.jpg', 'urunler_41', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('354', '20', '20_20804312kosubandi.jpg', 'urunler_20', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('355', '48', '48_2718798canon.jpg', 'urunler_48', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('356', '52', '52_16920078Spor_4042055.jpg', 'urunler_52', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('357', '53', '53_21908693Spor_3935706.jpg', 'urunler_53', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('358', '54', '54_26671551Spor_7936787.jpg', 'urunler_54', 'urunler');
INSERT INTO `urun_fotograflari` VALUES ('359', '41', '41_22273741samsung_mobile.jpg', 'urunler_41', 'urunler');

-- ----------------------------
-- Table structure for videolar
-- ----------------------------
DROP TABLE IF EXISTS `videolar`;
CREATE TABLE `videolar` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `video_iFrame` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `video_kategori` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `video_detay` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of videolar
-- ----------------------------
INSERT INTO `videolar` VALUES ('8', 'Berker', '<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/2fu8gqFN3XE\" frameborder=\"0\" allowfullscreen></iframe>', 'korku', '<p>G&uuml;zel şarkı</p>\r\n');
INSERT INTO `videolar` VALUES ('9', 'Fenerbahçe', '<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/t95D9k8R64s\" frameborder=\"0\" allowfullscreen></iframe>', 'korku', '<p>&Ouml;ğrenilmiş &Ccedil;aresizlik</p>\r\n');
INSERT INTO `videolar` VALUES ('10', '6-0 Koydular', '<iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/oF4WVn567U0\" frameborder=\"0\" allowfullscreen></iframe>', 'Komedi', '<p>yetmedi 6-0 koydular</p>\r\n');
INSERT INTO `videolar` VALUES ('11', 'Pepee Balık Tutuyor', '<iframe frameborder=\"0\" width=\"480\" height=\"270\" src=\"//www.dailymotion.com/embed/video/x2iieb4\" allowfullscreen></iframe>', 'Çocuk', '<p>pepee sakın izlemeyin</p>\r\n');

-- ----------------------------
-- Table structure for video_kategori
-- ----------------------------
DROP TABLE IF EXISTS `video_kategori`;
CREATE TABLE `video_kategori` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `kategoriAdi` varchar(111) CHARACTER SET utf8 NOT NULL,
  `kategoriAciklama` varchar(111) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- ----------------------------
-- Records of video_kategori
-- ----------------------------
INSERT INTO `video_kategori` VALUES ('24', 'Spor', 'Spor videolar');
INSERT INTO `video_kategori` VALUES ('27', 'Korku', 'gerilim');
INSERT INTO `video_kategori` VALUES ('28', 'Komedi', 'komik');
INSERT INTO `video_kategori` VALUES ('29', 'Macera', 'Soluksuz izlenecek videolar.');
INSERT INTO `video_kategori` VALUES ('30', 'Çocuk', 'Pepee');
