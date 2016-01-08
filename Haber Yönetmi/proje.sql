-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 07 Oca 2016, 22:53:25
-- Sunucu sürümü: 10.0.17-MariaDB
-- PHP Sürümü: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `proje`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `haberkategori`
--

CREATE TABLE `haberkategori` (
  `hkatID` int(11) NOT NULL,
  `kAdi` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `haberkategori`
--

INSERT INTO `haberkategori` (`hkatID`, `kAdi`, `tarih`) VALUES
(1, 'java', '2016-01-07'),
(2, 'falan', '2016-01-07'),
(3, 'zero', '2016-01-07'),
(4, 'ligth', '2016-01-07');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `haberler`
--

CREATE TABLE `haberler` (
  `hID` int(11) NOT NULL,
  `hBaslik` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kAciklama` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL,
  `uAciklama` varchar(5000) COLLATE utf8_turkish_ci DEFAULT NULL,
  `AP` varchar(10) COLLATE utf8_turkish_ci DEFAULT NULL,
  `kategori` varchar(255) COLLATE utf8_turkish_ci DEFAULT NULL,
  `tarih` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `haberler`
--

INSERT INTO `haberler` (`hID`, `hBaslik`, `kAciklama`, `uAciklama`, `AP`, `kategori`, `tarih`) VALUES
(7, 'tatil', 'bilmez', '<p>bilmez</p>\r\n', 'Aktif', 'zero', '2016-01-07'),
(8, 'kalem', 'asdasdsad', '<p>bil</p>\r\n', 'Pasif', 'ligth', '2016-01-07'),
(10, 'çevre', 'sa?ldksa', '<p>saddsa</p>\r\n', 'Pasif', 'java', '2016-01-07'),
(11, 'derbi', 'fb:0 gs:6', '<p>asdadsa</p>\r\n', 'Aktif', 'zero', '2016-01-07'),
(13, 'flas flas flas', 'sok', '<p>sadsad</p>\r\n', 'Aktif', 'java', '2016-01-07'),
(14, 'resim', 'asdsda', '<p>asdsad</p>\r\n', 'Aktif', 'java', '2016-01-07');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `haber_resimleri`
--

CREATE TABLE `haber_resimleri` (
  `id` int(11) NOT NULL,
  `haber_id` int(11) DEFAULT NULL,
  `adi` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL,
  `klasor` varchar(500) COLLATE utf8_turkish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `haber_resimleri`
--

INSERT INTO `haber_resimleri` (`id`, `haber_id`, `adi`, `klasor`) VALUES
(10, 13, '13_19478518face_eyes_lion_fur_mane_85403_1920x1080.jpg', '13');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kategori`
--

CREATE TABLE `kategori` (
  `katID` int(11) NOT NULL,
  `ustKat` int(11) NOT NULL,
  `katAdi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `katTarih` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `kategori`
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
-- Tablo için tablo yapısı `kullanici`
--

CREATE TABLE `kullanici` (
  `id` int(11) NOT NULL,
  `mail` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `sifre` varchar(32) COLLATE utf8_turkish_ci NOT NULL,
  `seviye` varchar(32) COLLATE utf8_turkish_ci NOT NULL COMMENT '0 ise kullanici, 1 ise admin',
  `adi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `soyadi` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `tarih` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `kullanici`
--

INSERT INTO `kullanici` (`id`, `mail`, `sifre`, `seviye`, `adi`, `soyadi`, `tarih`) VALUES
(1, 'admin@admin.com', '827ccb0eea8a706c4c34a16891f84e7b', 'c4ca4238a0b923820dcc509a6f75849b', 'Ayşe', 'Bilmem', '2015-12-30 05:21:26');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `urunler`
--

CREATE TABLE `urunler` (
  `id` int(11) NOT NULL,
  `katID` int(11) NOT NULL,
  `baslik` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `kisaAciklama` varchar(500) COLLATE utf8_turkish_ci NOT NULL,
  `detay` text COLLATE utf8_turkish_ci NOT NULL,
  `piyasaFiyati` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gecerliFiyat` varchar(50) COLLATE utf8_turkish_ci NOT NULL,
  `gosterim` tinyint(4) NOT NULL,
  `tarih` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `urunler`
--

INSERT INTO `urunler` (`id`, `katID`, `baslik`, `kisaAciklama`, `detay`, `piyasaFiyati`, `gecerliFiyat`, `gosterim`, `tarih`) VALUES
(4, 45, 'sadfsdf', 'sdfs', '<p style="text-align:center">fdfg<em><strong>dfgd fg</strong></em>dfgd</p>\r\n\r\n<p>aksljdaks jdaksd klasj dkals</p>\r\n', '12', '21', 0, '2016-01-05 09:56:55'),
(5, 1, 'televizyon', 'tele aç?klama', '<p>televizyon</p>\r\n', '3100', '2999', 0, '2016-01-05 10:32:42');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `urun_resimleri`
--

CREATE TABLE `urun_resimleri` (
  `id` int(11) NOT NULL,
  `urun_id` int(11) NOT NULL,
  `adi` varchar(500) COLLATE utf8_bin NOT NULL,
  `klasor` varchar(500) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Tablo döküm verisi `urun_resimleri`
--

INSERT INTO `urun_resimleri` (`id`, `urun_id`, `adi`, `klasor`) VALUES
(24, 4, '4_2973848indir.jpg', '4'),
(18, 4, '4_3092407Koala.jpg', '4'),
(19, 4, '4_21216073Penguins.jpg', '4'),
(20, 5, '5_17674658Desert.jpg', '5'),
(21, 5, '5_22817309Chrysanthemum.jpg', '5'),
(23, 2147483647, '_16407383Java-logo-008.jpg', '160107081019'),
(25, 5, '5_28395008indir.jpg', '5');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `haberkategori`
--
ALTER TABLE `haberkategori`
  ADD PRIMARY KEY (`hkatID`);

--
-- Tablo için indeksler `haberler`
--
ALTER TABLE `haberler`
  ADD PRIMARY KEY (`hID`);

--
-- Tablo için indeksler `haber_resimleri`
--
ALTER TABLE `haber_resimleri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`katID`),
  ADD UNIQUE KEY `katAdi` (`katAdi`);

--
-- Tablo için indeksler `kullanici`
--
ALTER TABLE `kullanici`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- Tablo için indeksler `urunler`
--
ALTER TABLE `urunler`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `baslik` (`baslik`);

--
-- Tablo için indeksler `urun_resimleri`
--
ALTER TABLE `urun_resimleri`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `haberkategori`
--
ALTER TABLE `haberkategori`
  MODIFY `hkatID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Tablo için AUTO_INCREMENT değeri `haberler`
--
ALTER TABLE `haberler`
  MODIFY `hID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Tablo için AUTO_INCREMENT değeri `haber_resimleri`
--
ALTER TABLE `haber_resimleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Tablo için AUTO_INCREMENT değeri `kategori`
--
ALTER TABLE `kategori`
  MODIFY `katID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- Tablo için AUTO_INCREMENT değeri `kullanici`
--
ALTER TABLE `kullanici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Tablo için AUTO_INCREMENT değeri `urunler`
--
ALTER TABLE `urunler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Tablo için AUTO_INCREMENT değeri `urun_resimleri`
--
ALTER TABLE `urun_resimleri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
