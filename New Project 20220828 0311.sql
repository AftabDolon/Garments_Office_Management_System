-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.22-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema rest_api
--

CREATE DATABASE IF NOT EXISTS rest_api;
USE rest_api;

--
-- Definition of table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
CREATE TABLE `attendance` (
  `id` int(11) NOT NULL auto_increment,
  `employee_id` int(50) default NULL,
  `date` date default NULL,
  `punch_in` varchar(100) default NULL,
  `punch_out` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` (`id`,`employee_id`,`date`,`punch_in`,`punch_out`) VALUES 
 (1,1266359,'2022-08-26','02:19:52','02:21:51'),
 (2,123456,'2022-08-26','03:11:38','03:24:53'),
 (3,1266359,'2022-08-26','03:25:31','03:25:44'),
 (5,1267939,'2022-08-27','23:02:40','23:02:47'),
 (6,1266861,'2022-08-27','23:03:39','23:03:55'),
 (7,1265959,'2022-08-28','01:39:13','01:39:31');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;


--
-- Definition of table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL auto_increment,
  `employee_id` varchar(50) default NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `title` varchar(50) default NULL,
  `department` varchar(100) default NULL,
  `status` varchar(50) default NULL,
  `role` varchar(50) default NULL,
  `image` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`,`employee_id`,`fullname`,`email`,`mobile`,`password`,`title`,`department`,`status`,`role`,`image`) VALUES 
 (1,'1266359','Helal Uddin','helaluddin@gmail.com','01938392893','1234','Web Designer','Web Dev','Inactive','user','Image of Helal.jpg'),
 (2,'123456','Admin','admin@gmail.com','0193393393','admin','admin','System','Inactive','admin','admin.jpg'),
 (3,'1267682','MD Aftab Ibne Halim','aftabdolon47@gmail.com','01846125306','123456','Java Developer','Web Dev','Inactive','user','Image of Aftab.jpg'),
 (4,'1267939','Shahid Ullah','baharkhan870@gmail.com','01836934445','123456','Web Designer','Web Dev','Inactive','user','image.jpg'),
 (5,'1266861','Juwel Rana','juwelrana@gmail.com','01562727262','123456','Backend Designer','Web Dev','Inactive','user','Image of Rana.jpg'),
 (6,'1267341','Arafat Rimon','rimonarafat@gmail.com','01937328277','123456','Officer','HR','Inactive','user','Image of Rimon.jpg'),
 (7,'1265959','MD Nesar Uddin','nesaruddin@gmail.com','01947337283','123456','System Designer','Web Dev','Inactive','user','Image of Nesar.jpg'),
 (8,'1267413','MD Sadiqur Rahman','sadikurrahman@gmail.com','01539393832','123456','Senior Officer','HR','Inactive','user','Image of Sadik.jpg'),
 (9,'1268205','Nur Islam','info.nurislamrajib@gmail.com','01539393901','123456','Backend Designer','Web Dev','Inactive','user','Image of Rajib.jpeg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


--
-- Definition of table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL auto_increment,
  `employee_id` varchar(50) default NULL,
  `fullname` varchar(100) default NULL,
  `email` varchar(100) default NULL,
  `login_time` varchar(100) default NULL,
  `logout_time` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` (`id`,`employee_id`,`fullname`,`email`,`login_time`,`logout_time`) VALUES 
 (2,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 01:45:55','2022-08-28 02:37:44'),
 (9,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 02:15:31','2022-08-28 02:37:44'),
 (11,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 02:18:11','2022-08-28 02:37:44'),
 (14,'123456','Admin','admin@gmail.com','2022-08-27 02:38:33','2022-08-28 03:09:23'),
 (16,'123456','Admin','admin@gmail.com','2022-08-27 02:42:32','2022-08-28 03:09:23'),
 (17,'123456','Admin','admin@gmail.com','2022-08-27 02:43:06','2022-08-28 03:09:23'),
 (19,'123456','Admin','admin@gmail.com','2022-08-27 02:52:54','2022-08-28 03:09:23'),
 (20,'123456','Admin','admin@gmail.com','2022-08-27 03:07:24','2022-08-28 03:09:23'),
 (22,'123456','Admin','admin@gmail.com','2022-08-27 03:28:40','2022-08-28 03:09:23'),
 (24,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 03:30:55','2022-08-28 02:37:44'),
 (26,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 04:21:39','2022-08-28 02:37:44'),
 (28,'1266359','Helal Uddin','helaluddin@gmail.com','2022-08-27 11:59:44','2022-08-28 02:37:44'),
 (31,'123456','Admin','admin@gmail.com','2022-08-27 15:49:51','2022-08-28 03:09:23'),
 (34,'123456','Admin','admin@gmail.com','2022-08-27 18:14:03','2022-08-28 03:09:23'),
 (38,'123456','Admin','admin@gmail.com','2022-08-27 21:59:54','2022-08-28 03:09:23'),
 (43,'1267939','Shahid Ullah','baharkhan870@gmail.com','2022-08-27 22:57:13','2022-08-28 02:46:26'),
 (44,'123456','Admin','admin@gmail.com','2022-08-27 23:02:12','2022-08-28 03:09:23'),
 (48,'1267939','Shahid Ullah','baharkhan870@gmail.com','2022-08-28 02:37:27','2022-08-28 02:46:26');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;


--
-- Definition of table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(90) default NULL,
  `email` varchar(100) default NULL,
  `crated` datetime NOT NULL,
  `password` varchar(100) NOT NULL,
  `mobile` varchar(20) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`,`name`,`email`,`crated`,`password`,`mobile`) VALUES 
 (1,'john','john@g.co','2019-02-28 13:20:20','e10adc3949ba59abbe56e057f20f883e',NULL),
 (2,'Test','test@g.co','2019-02-28 13:20:20','',NULL),
 (3,'Shahid Ullah','baharkhan870@gmail.com','2022-08-20 02:05:21','e10adc3949ba59abbe56e057f20f883e','01836934445');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
