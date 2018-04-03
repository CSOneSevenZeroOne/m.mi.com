/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.20-log : Database - xiaomi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`xiaomi` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `xiaomi`;

/*Table structure for table `productlike` */

DROP TABLE IF EXISTS `productlike`;

CREATE TABLE `productlike` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_url` varchar(300) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `product_desc` varchar(200) DEFAULT NULL,
  `path` varchar(50) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

/*Data for the table `productlike` */

insert  into `productlike`(`id`,`image_url`,`name`,`product_desc`,`path`,`type`) values (25,'//i8.mifile.cn/v1/a1/6b5bba6d-00e7-3b6d-9b8e-5ef5a4dd4fe0.webp','米家运动鞋 男款',NULL,'6520','product'),(26,'//i8.mifile.cn/v1/a1/2daed8c9-5c8b-6565-72a4-16f467e6cdc6.webp','小米Note 3 128GB',NULL,'6704','product'),(27,'//i8.mifile.cn/v1/a1/a09eac36-c1e1-e8b0-5ef7-b5c7e2c2009b.webp','小米6',NULL,'7147','product'),(28,'//i8.mifile.cn/v1/a1/010cd93e-3d15-979b-ff69-14f6e29931ec.webp','小米MIX 2 128GB',NULL,'6699','product'),(29,'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6473d20b8c0f0ae9d1453de69eee4296.jpg','70迈 智能记录仪',NULL,'7689','product'),(30,'//i8.mifile.cn/v1/a1/112b155e-7681-2419-ca34-cad1283a8939.webp','小米影视会员卡',NULL,'4983','product'),(31,'//i8.mifile.cn/v1/a1/0518c80c-a1a5-af45-0898-a4e07b3d5a9f.webp','小米AI音箱',NULL,'6334','product'),(32,'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/806866db7cfac7efdb561e9d796b4a33.jpg','米兔指尖积木',NULL,'7244','product'),(33,'//i8.mifile.cn/v1/a1/f7efa66b-555f-8900-0649-7c2acc99fc80.webp','红米5 Plus 64GB',NULL,'7359','product'),(34,'//i8.mifile.cn/v1/a1/07d8908a-7819-c734-0652-eb0f8e202333.webp','保温杯',NULL,'7403','product'),(35,'//i8.mifile.cn/v1/a1/cad503c1-828b-6ffd-59f8-7f5850af43dc.webp','Free Tie 真皮板鞋 男款',NULL,'6518','product'),(36,'//i8.mifile.cn/v1/a1/8ef6df34-51d2-a7ef-1dd7-1fcf049259f1.webp','米粉卡日租卡',NULL,'6009','product'),(37,'//i8.mifile.cn/v1/a1/b71d2160-35e0-7feb-f465-54b921fe2bc7.webp','90分轻商务登机箱 ',NULL,'7140','product'),(38,'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00db10bf30e2328c8024be9be48b692f.jpg','自动折叠伞',NULL,'6124','product'),(39,'//i8.mifile.cn/v1/a1/f0ea0c6b-96b5-c85b-d2b4-e4aeaabea277.webp','小米5X 4GB+64GB',NULL,'6259','product'),(40,'//i8.mifile.cn/v1/a1/5aafa8a4-5808-bd0d-85e5-9e7ab5de337c.webp','红米4A ',NULL,'4795','product'),(41,'//i8.mifile.cn/v1/a1/a0dc5c15-15dc-e184-7412-969bc0b2f9dd.webp','贝医生巴氏牙刷',NULL,'6904','product'),(42,'//i8.mifile.cn/v1/a1/f9fc5c06-e57f-c77d-17cd-3bcd73a8abe8.webp','米家金属签字笔',NULL,'5483','product'),(43,'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb5b9e4caecb5699b1fba79dd601d8c3.jpg','小米3L软壳风衣',NULL,'7060','product'),(44,'//i8.mifile.cn/v1/a1/06cb725b-0a15-e51a-a50d-a4f89da6dd22.webp','红米5A 16GB',NULL,'6874','product');

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(200) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `services` */

insert  into `services`(`id`,`img_url`,`title`) values (10,'http://i8.mifile.cn/v1/a1/30bc2339-742e-bb1d-e502-0ae28daeed25.png','售后服务'),(11,'http://i8.mifile.cn/v1/a1/df270244-1d4e-08f5-407b-9e76b02df338.png','售后政策'),(12,'http://i8.mifile.cn/v1/a1/0d35b4ac-8735-6e0f-dab8-cfb1248387d6.png','服务网点'),(13,'http://i8.mifile.cn/v1/a1/4f075e4e-23db-1bd7-23f9-50eb1fa55b21.png','故障排除'),(14,'http://i8.mifile.cn/b2c-mimall-media/1c6b29ff6f55ca6dde01036d4a83a086.jpg','付费服务'),(15,'http://i8.mifile.cn/v1/a1/a71febf3-e4dd-25f9-af6d-7503888f97c4.png','维修价格'),(16,'http://i8.mifile.cn/v1/a1/043f196f-3ef0-48ce-3c7e-9ac9b706d90c.png','真伪查询'),(17,'http://i8.mifile.cn/v1/a1/f6c78ec3-59be-131d-0c48-ebbdc4dc5d29.png','以旧换新');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
