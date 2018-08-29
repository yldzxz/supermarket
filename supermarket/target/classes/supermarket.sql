/*
Navicat MySQL Data Transfer

Source Server         : yuyang
Source Server Version : 50130
Source Host           : localhost:3306
Source Database       : db_supermarket

Target Server Type    : MYSQL
Target Server Version : 50130
File Encoding         : 65001

Date: 2017-03-21 21:32:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tb_admin`
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_account` varchar(25) NOT NULL UNIQUE,
  `admin_password` varchar(50) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_admin
-- ----------------------------
INSERT INTO `tb_admin` VALUES ('1', 'huangkangzhi', 'huangkangzhi','huangkangzhi@hkz.com');
INSERT INTO `tb_admin` VALUES ('2', 'lufei', 'lufei','lufei@kk.com');
INSERT INTO `tb_admin` VALUES ('3', 'xuesui', 'xuesui','xuesui@sui.com');
INSERT INTO `tb_admin` VALUES ('4', 'admin', 'admin','admin@admin.com');

-- ----------------------------
-- Table structure for `tb_depart`
-- ----------------------------
DROP TABLE IF EXISTS `tb_depart`;
CREATE TABLE `tb_depart`(
	`depart_id` int(11) not null AUTO_INCREMENT,
	`depart_number` varchar(20) not null,
	`depart_name` varchar(100) not null,
	PRIMARY KEY (`depart_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_depart`
-- ----------------------------
INSERT INTO `tb_depart` VALUES('1','d1','超市1');
INSERT INTO `tb_depart` VALUES('2','d2','超市2');


-- ----------------------------
-- Table structure for `tb_user`
-- ----------------------------
DROP table if exists `tb_user`;
CREATE TABLE `tb_user`(
	`user_id` int(11) not null AUTO_INCREMENT,
	`user_account` varchar(25) not null UNIQUE,
	`user_password` varchar(25) not null,
	`user_email` varchar(25) not null,
	`user_age` int(3) not null,
	`user_sex` varchar(10) not null,
	`user_salary` varchar(10) not null,
	`user_depart_id` varchar(20) not null,
	PRIMARY KEY(`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('1', 'zhoujielun', 'zhoujielun','zhoujielun@163.com',30,'男',"50000",'d1');
INSERT INTO `tb_user` VALUES ('2', 'nami', 'nami','nami@zjl.com',16,'女',"6000",'d2');
INSERT INTO `tb_user` VALUES ('3', 'liangsi', 'liangsi','liangsi@163.com',11,'男',"5000",'d1');
INSERT INTO `tb_user` VALUES ('4', 'hkz', 'hkz','7413869@qq.com',22,'男',"5000",'d2');


-- ----------------------------
-- Table structure for `tb_vip`
-- ----------------------------
DROP TABLE IF EXISTS `tb_vip`;
CREATE TABLE `tb_vip`(
	`vip_id` int(11) not null AUTO_INCREMENT,
	`vip_account` varchar(25) not null UNIQUE,
	`vip_name` varchar(25) not null,
	`vip_uses_money` decimal(18,2) NOT NULL DEFAULT 0 ,
	`vip_code` int(10) not null DEFAULT 0,
	`vip_date` varchar(30) ,
	`vip_phone` varchar(11),
	PRIMARY KEY (`vip_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_vip`
-- ----------------------------
INSERT INTO `tb_vip` VALUES('1' ,'2017032211100','黄康志',100,0,'2017-3-22 02:00:00','13122222222');
INSERT INTO `tb_vip` VALUES('2' ,'2017032222100','山治',100,0,'2017-3-23 2:00:01','13122222223');
INSERT INTO `tb_vip` VALUES('3' ,'2017032233100','唐吉可德',100,0,'2017-3-22 2:00:02','13122222224');

-- ----------------------------
-- Table structure for `tb_commodity`
-- ----------------------------
DROP TABLE IF EXISTS `tb_commodity`;
CREATE TABLE `tb_commodity`(
	`commodity_id` int(11) not null AUTO_INCREMENT,
	`commodity_code` varchar(25) not null comment '编码',
	`commodity_barCode` varchar(100) not null comment '条形码',
	`commodity_name` varchar(100) not null comment '商品名',
	`commodity_now_num` double(18,2) not null comment '现存数量',
	`commodity_warn_num` double(18,2) not  null comment '警告数量',
	`commodity_type` varchar(25) not null comment '类型',
	`commodity_purchase_price` decimal(18,2) not null comment '进货价格',
	`commodity_selling_price` decimal(18,2) not null comment '销售价格',
	`commodity_allow_sell` int(2) not null DEFAULT 0 comment '允许销售 1允许销售 2不允许',
	`commodity_key_hot` int(10) not null DEFAULT 0 comment '商品热度',
	`commodity_manufacturer` varchar(100) not null comment '厂商名',
	`commodity_super` varchar(100) not null comment '供应商',
	PRIMARY KEY (`commodity_id`),
	KEY `fk_commodity_code`(`commodity_code`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_commodity`
-- ----------------------------
INSERT INTO `tb_commodity` VALUES('1','111111','/imgs/commodity/1111.png','天堂伞',100,50,'日常品',20,30,1,0,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('2','111112','/imgs/commodity/1112.png','海天酱油',100,50,'日常品',20,30,1,0,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('3','111113','/imgs/commodity/1113.png','番茄酱',100,50,'日常品',20,30,1,0,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('4','111114','/imgs/commodity/1114.png','奥利奥',100,50,'零食',20,30,1,1,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('5','111115','/imgs/commodity/1115.png','薯片',100,50,'零食',20,30,1,2,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('6','111116','/imgs/commodity/1116.png','大米',100,50,'日常品',20,30,1,3,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('7','111117','/imgs/commodity/1117.png','面条',100,50,'日常品',3,5,1,4,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('8','111118','/imgs/commodity/1118.png','电脑',100,50,'高级品',2000,3000,1,5,'肥仔有限公司','肥仔妹');
INSERT INTO `tb_commodity` VALUES('9','111119','/imgs/commodity/1119.png','火影忍者',100,50,'日常品',20,30,1,6,'肥仔有限公司','肥仔妹');

-- ----------------------------
-- Table structure for `tb_sell`
-- ----------------------------
DROP TABLE IF EXISTS `tb_sell`;
CREATE TABLE `tb_sell`(
	`sell_id` int(11) NOT NULL AUTO_INCREMENT,
	`sell_order_number` varchar(25) not null ,
	`sell_deal_number` varchar(25) not null,
	`sell_vip_id` varchar(25) not null DEFAULT '0' comment "普通用户使用0 vip用户使用卡号", 
	`sell_commodity_code` varchar(100) NOT NULL,
	`sell_commodity_name` varchar(100) NOT NULL,
	`sell_num` double(4,2) NOT NULL,
	`sell_price` decimal(18,2) not null,
	`sell_money` decimal(18,2) not null,
	`sell_date` TIMESTAMP NOT NULL default now(),
	PRIMARY KEY(`sell_id`,`sell_order_number`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_sell`
-- ----------------------------
INSERT INTO `tb_sell` VALUES('1','000120170322192100','20170322192100','2017032233100','111118','电脑',1,3000,3000,"2017-3-22 2:01:02");
INSERT INTO `tb_sell` VALUES('2','000120170322192101','20170322192102','2017032233100','111118','电脑',2,3000,6000,"2017-3-22 2:02:02");
INSERT INTO `tb_sell` VALUES('3','000120170322192102','20170322192103','2017032233100','111115','薯片',1,30,30,"2017-3-22 2:00:02");
INSERT INTO `tb_sell` VALUES('4','000120170322192103','20170322192104','0','111117','面条',2,5,10,"2017-3-22 2:20:02");
INSERT INTO `tb_sell` VALUES('5','000120170322192103','20170322192105','0','111112','酱油',1,30,30,"2017-3-22 2:20:02");
INSERT INTO `tb_sell` VALUES('6','000120170322192103','20170322192106','0','111115','薯片',1,30,30,"2017-3-22 2:10:02");

-- ----------------------------
-- Table structure for `tb_deal`
-- ----------------------------
DROP TABLE IF EXISTS `tb_deal`;
CREATE TABLE `tb_deal`(
	`deal_id` int(11)  NOT NULL AUTO_INCREMENT,
	`deal_order_number` varchar(25) NOT NULL,
	`deal_money` decimal(18,2) not null,
	`deal_user_number` varchar(25) not null DEFAULT '0',
	`deal_date` varchar(30) NOT NULL,
	PRIMARY KEY (`deal_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_deal`
-- ----------------------------
INSERT INTO `tb_deal` VALUES('1','000120170322192100',3000,'2017032233100','2017-3-22 2:10:02');
INSERT INTO `tb_deal` VALUES('2','000120170322192101',6000,'2017032233100','2017-3-22 2:30:02');
INSERT INTO `tb_deal` VALUES('3','000120170322192102',30,'2017032233100','2017-3-22 2:20:02');
INSERT INTO `tb_deal` VALUES('4','000120170322192103',65,'0','2017-3-22 4:00:02');

-- ----------------------------
-- Table structure for `tb_inbound`
-- 入库表
-- ----------------------------
DROP TABLE IF EXISTS `tb_inbound` ;
CREATE TABLE `tb_inbound`(
	`inbound_id` int(11) NOT NULL AUTO_INCREMENT,
	`inbound_order_number`  VARCHAR(25) NOT NULL ,
	`inbound_commodity_id` VARCHAR(25) NOT NULL ,
	`inbound_commodity_name` VARCHAR(100) NOT NULL ,
	`inbound_commodity_num` double(18,2) NOT NULL,
	`inbound_commodity_price` decimal(18,2) NOT NULL,	
	`inbound_money` decimal(18,2) NOT NULL,
	`inbound_date` varchar(30) NOT NULL,
	`inbound_super_id` varchar(25) NOT NULL,
	PRIMARY KEY (`inbound_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_inbound`
-- ----------------------------
INSERT INTO `tb_inbound` VALUES('1','00032017032211','111118','电脑',1,2000,2000,'2017-03-22 12:00:02','肥仔妹');
INSERT INTO `tb_inbound` VALUES('2','00032017032212','111117','面条',2,3,6,'2017-03-22 12:00:12','肥仔妹');
INSERT INTO `tb_inbound` VALUES('3','00032017032213','111115','薯片',1,20,20,'2017-03-22 12:01:02','肥仔妹');
INSERT INTO `tb_inbound` VALUES('4','00032017032214','111116','大米',1,20,20,'2017-03-22 12:20:02','肥仔妹');
INSERT INTO `tb_inbound` VALUES('5','00032017032215','111118','电脑',1,2000,2000,'2017-03-22 13:30:02','肥仔妹');

-- ----------------------------
-- Table structure for `tb_outbound`
-- 退货表
-- ----------------------------
DROP TABLE IF EXISTS `tb_outbound` ;
CREATE TABLE `tb_outbound`(
	`outbound_id` int(11) NOT NULL AUTO_INCREMENT,
	`outbound_order_number`  VARCHAR(25) NOT NULL ,
	`outbound_commodity_id` VARCHAR(25) NOT NULL ,
	`outbound_commodity_name` VARCHAR(100) NOT NULL ,
	`outbound_commodity_num` double(18,2) NOT NULL,
	`outbound_commodity_price` decimal(18,2) NOT NULL,
	`outbound_money` decimal(18,2) NOT NULL,
	`outbound_date` varchar(25) NOT NULL,
	PRIMARY KEY(`outbound_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_outbound`
-- ----------------------------
INSERT INTO `tb_outbound` VALUES('1','00042017032211','111118','电脑',1,2000,2000,'2017-03-22 14:10:12');
INSERT INTO `tb_outbound` VALUES('2','00042017032212','111117','面条',2,3,6,'2017-03-22 15:00:02');


-- ----------------------------
-- Table structure for `tb_outmoney`
-- 支出表
-- ----------------------------
DROP TABLE IF EXISTS `tb_outmoney`;
CREATE TABLE `tb_outMoney`(
	`outmoney_id` int(11) NOT NULL AUTO_INCREMENT,
	`outmoney_inbound_number` varchar(25) NOT NULL DEFAULT '0',
	`outmoney_type` varchar(20) NOT NULL,	
	`outmoney_get` DECIMAL(18,2) NOT NULL,
	`outmoney_time` timestamp  NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`outmoney_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_outmoney`
-- ----------------------------
INSERT INTO `tb_outmoney` VALUES('1','00032017032211','入库支出',2000,NOW());
INSERT INTO `tb_outmoney` VALUES('2','00032017032212','入库支出',6,NOW());
INSERT INTO `tb_outmoney` VALUES('3','00032017032213','入库支出',20,NOW());
INSERT INTO `tb_outmoney` VALUES('4','00032017032214','入库支出',20,NOW());
INSERT INTO `tb_outmoney` VALUES('5','00032017032215','入库支出',2000,NOW());
INSERT INTO `tb_outmoney` VALUES('6','00042017032211','退货支出',2000,NOW());
INSERT INTO `tb_outmoney` VALUES('7','00042017032212','退货支出',6,NOW());

-- ----------------------------
-- Table structure for `tb_inputmoney`
-- 收入表
-- ----------------------------

DROP TABLE IF EXISTS `tb_inputmoney`;
CREATE TABLE `tb_inputmoney`(
	`inputmoney_id` int(11) NOT NULL AUTO_INCREMENT,
	`inputmoney_deal_number` varchar(25) NOT NULL,
	`inputmoney_type` varchar(20) NOT NULL,	
	`inputmoney_get` DECIMAL(18,2) NOT NULL,
	`inputmoney_time` timestamp  NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`inputmoney_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_outmoney`
-- ----------------------------
INSERT INTO `tb_inputmoney` VALUES('1','000120170322192100','出售收入',3000,NOW());
INSERT INTO `tb_inputmoney` VALUES('2','000120170322192101','出售收入',6000,NOW());
INSERT INTO `tb_inputmoney` VALUES('3','000120170322192102','出售收入',30,NOW());
INSERT INTO `tb_inputmoney` VALUES('4','000120170322192103','出售收入',65,NOW());

-- ----------------------------
-- Table structure for `tb_manufacturer`
-- 厂商表
-- ----------------------------
DROP TABLE IF EXISTS `tb_manufacturer`;
CREATE TABLE `tb_manufacturer` (
	`manufacturer_id` int(11) NOT NULL AUTO_INCREMENT,
	`manufacturer_name` varchar(100) NOT NULL , 
	`manufacturer_location` varchar(100) NOT NULL,
	`manufacturer_phone` varchar(12),
	PRIMARY KEY (`manufacturer_id` )
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_manufacturer`
-- ----------------------------
INSERT INTO `tb_manufacturer` VALUES('1','肥仔有限公司','广州',11111111111);
INSERT INTO `tb_manufacturer` VALUES('2','大家好有限公司','广州',11111111112);

-- ----------------------------
-- Table structure for `tb_supers`
-- 供应商表
-- ----------------------------
DROP TABLE IF EXISTS `tb_supers`;
CREATE TABLE `tb_supers` (
	`supers_id` int(11) NOT NULL AUTO_INCREMENT,
	`supers_name` varchar(100) NOT NULL , 
	`supers_location` varchar(100) NOT NULL,
	`supers_phone` varchar(11),
	PRIMARY KEY (`supers_id`)
)ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of `tb_supers`
-- ----------------------------
INSERT INTO `tb_supers` VALUES('1','肥仔妹','广州',11111111211);
INSERT INTO `tb_supers` VALUES('2','大家好','广州',11111111212);






























































































