-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 06, 2016 at 08:51 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `proje`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `katID` int(11) NOT NULL,
  `ustKat` int(11) NOT NULL,
  `katAdi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `katTarih` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`katID`, `ustKat`, `katAdi`, `katTarih`) VALUES
(1, 0, 'Beyaz Eşya', '2016-01-04 06:12:24'),
(2, 0, 'Tekstil', '2016-01-04 06:12:24'),
(3, 0, 'Çocuk', '2016-01-04 10:37:52'),
(42, 0, 'Ayakkabi', '2016-01-04 11:51:10'),
(44, 1, 'Televizyon', '2016-01-04 12:43:23'),
(45, 2, 'Kazak', '2016-01-04 12:57:30');

-- --------------------------------------------------------

--
-- Table structure for table `kullanici`
--

CREATE TABLE IF NOT EXISTS `kullanici` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `sifre` varchar(32) COLLATE utf8_turkish_ci NOT NULL,
  `seviye` varchar(32) COLLATE utf8_turkish_ci NOT NULL COMMENT '0 ise kullanici, 1 ise admin',
  `adi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `soyadi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `tarih` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `kullanici`
--

INSERT INTO `kullanici` (`id`, `mail`, `sifre`, `seviye`, `adi`, `soyadi`, `tarih`) VALUES
(1, 'admin@admin.com', '827ccb0eea8a706c4c34a16891f84e7b', 'c4ca4238a0b923820dcc509a6f75849b', 'Ayşe', 'Bilmem', '2015-12-30 05:21:26');

-- --------------------------------------------------------

--
-- Table structure for table `slayt`
--

CREATE TABLE IF NOT EXISTS `slayt` (
  `id` int(11) NOT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `aciklama` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` varchar(32) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `slayt`
--

INSERT INTO `slayt` (`id`, `baslik`, `aciklama`, `link`, `tarih`) VALUES
(1, 'a', 'dfsaf', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 12:47:41'),
(7, 'c', 'd', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:16:38'),
(8, 'e', 'r', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:17:01'),
(9, 't', 'y', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:17:09'),
(10, 'h', 'h', 'http://localhost:8080/Proje/admin/slayt.jsp', '2016-01-05 16:36:14'),
(11, 'zcvcz', 'e', 'v', '2016-01-05 17:16:55'),
(12, 'dene', 'deneme aciklama', 'https://www.google.com.tr/?gws_rd=ssl', '2016-01-06 09:20:31');

-- --------------------------------------------------------

--
-- Table structure for table `slayt_resimleri`
--

CREATE TABLE IF NOT EXISTS `slayt_resimleri` (
  `id` int(11) NOT NULL,
  `slaytID` int(11) DEFAULT NULL,
  `adi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `klasor` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `slayt_resimleri`
--

INSERT INTO `slayt_resimleri` (`id`, `slaytID`, `adi`, `klasor`) VALUES
(2, 1, '1_8676137resim1.jpg', '1'),
(6, 7, '7_16735346resim2.jpg', '7'),
(7, 8, '8_18107779resim3.jpg', '8'),
(8, 9, '9_17435866resim4.jpg', '9'),
(9, 10, '10_22689506resim5.jpg', '10'),
(10, 7, '7_11001627resim1.jpg', '7'),
(11, 11, '11_16187572resim3.jpg', '11'),
(12, 12, '12_1526785504.jpg', '12');

-- --------------------------------------------------------

--
-- Table structure for table `urunler`
--

CREATE TABLE IF NOT EXISTS `urunler` (
  `id` int(11) NOT NULL,
  `katID` int(11) NOT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `kisaAciklama` varchar(500) COLLATE utf8_turkish_ci NOT NULL,
  `detay` text COLLATE utf8_turkish_ci NOT NULL,
  `piyasaFiyati` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gecerliFiyat` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gosterim` tinyint(4) NOT NULL,
  `tarih` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Dumping data for table `urunler`
--

INSERT INTO `urunler` (`id`, `katID`, `baslik`, `kisaAciklama`, `detay`, `piyasaFiyati`, `gecerliFiyat`, `gosterim`, `tarih`) VALUES
(4, 45, 'sadfsdf', 'sdfs', '<p style="text-align:center">fdfg<em><strong>dfgd fg</strong></em>dfgd</p>\r\n\r\n<p>aksljdaks jdaksd klasj dkals</p>\r\n', '12', '21', 0, '2016-01-05 09:56:55'),
(5, 1, 'televizyon', 'tele aç?klama', '<p>televizyon</p>\r\n', '3100', '2999', 0, '2016-01-05 10:32:42');

-- --------------------------------------------------------

--
-- Table structure for table `urun_resimleri`
--

CREATE TABLE IF NOT EXISTS `urun_resimleri` (
  `id` int(11) NOT NULL,
  `urun_id` int(11) NOT NULL,
  `adi` varchar(500) COLLATE utf8_bin NOT NULL,
  `klasor` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `urun_resimleri`
--

INSERT INTO `urun_resimleri` (`id`, `urun_id`, `adi`, `klasor`) VALUES
(17, 4, '4_994706Tulips.jpg', '4'),
(18, 4, '4_3092407Koala.jpg', '4'),
(19, 4, '4_21216073Penguins.jpg', '4'),
(20, 5, '5_17674658Desert.jpg', '5'),
(21, 5, '5_22817309Chrysanthemum.jpg', '5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`katID`), ADD UNIQUE KEY `katAdi` (`katAdi`);

--
-- Indexes for table `kullanici`
--
ALTER TABLE `kullanici`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `mail` (`mail`);

--
-- Indexes for table `slayt`
--
ALTER TABLE `slayt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slayt_resimleri`
--
ALTER TABLE `slayt_resimleri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `urunler`
--
ALTER TABLE `urunler`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `baslik` (`baslik`);

--
-- Indexes for table `urun_resimleri`
--
ALTER TABLE `urun_resimleri`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `katID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `kullanici`
--
ALTER TABLE `kullanici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `slayt`
--
ALTER TABLE `slayt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `slayt_resimleri`
--
ALTER TABLE `slayt_resimleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `urunler`
--
ALTER TABLE `urunler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `urun_resimleri`
--
ALTER TABLE `urun_resimleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
