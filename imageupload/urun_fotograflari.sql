/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : proje

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2016-01-07 11:59:01
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=MyISAM AUTO_INCREMENT=158 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of urun_fotograflari
-- ----------------------------
INSERT INTO `urun_fotograflari` VALUES ('146', '2341', '2341_49136991 (1).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('147', '2341', '2341_165984751 (3).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('148', '2341', '2341_145858491 (2).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('149', '2341', '2341_35477861 (4).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('150', '2341', '2341_260629341 (5).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('151', '2341', '2341_158970311 (6).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('152', '2341', '2341_63759241 (7).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('153', '2341', '2341_184875861 (8).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('154', '2341', '2341_71350201 (9).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('155', '2341', '2341_170786571 (10).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('156', '2341', '2341_18587481 (11).jpg', 'metin_2341', 'metin');
INSERT INTO `urun_fotograflari` VALUES ('157', '2341', '2341_187217561 (12).jpg', 'metin_2341', 'metin');
