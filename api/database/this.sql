/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.21-MariaDB : Database - crisptechllc
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `brands` */

DROP TABLE IF EXISTS `brands`;

CREATE TABLE `brands` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `brands_name_index` (`name`),
  KEY `brands_slug_index` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `brands` */

insert  into `brands`(`id`,`name`,`slug`,`created_at`,`updated_at`) values 
(1,'HTC','htc','2022-03-04 10:28:35','2022-03-04 10:28:35');

/*Table structure for table `cart_items` */

DROP TABLE IF EXISTS `cart_items`;

CREATE TABLE `cart_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `rowtotal` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `variation_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cart_items` */

insert  into `cart_items`(`id`,`cart_id`,`product_id`,`quantity`,`rowtotal`,`created_at`,`updated_at`,`variation_id`) values 
(3,1,6,5,2500.00,'2022-02-23 23:56:37','2022-02-23 23:56:37',0),
(5,1,5,5,250.00,'2022-02-23 23:57:21','2022-02-23 23:57:21',0),
(6,1,4,5,250.00,'2022-02-23 23:57:39','2022-02-23 23:57:39',0);

/*Table structure for table `carts` */

DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `coupon_id` int(11) NOT NULL DEFAULT 0,
  `total` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `carts` */

insert  into `carts`(`id`,`user_id`,`coupon_id`,`total`,`created_at`,`updated_at`) values 
(1,0,0,2750.00,'2022-02-23 23:53:15','2022-02-23 23:57:22');

/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `categories_parent_id_index` (`parent_id`),
  KEY `categories_name_index` (`name`),
  KEY `categories_slug_index` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `categories` */

insert  into `categories`(`id`,`parent_id`,`name`,`slug`,`short_description`,`description`,`created_at`,`updated_at`,`is_featured`,`level`) values 
(30,0,'Hard Drives','hard-drives',NULL,NULL,'2022-03-04 09:28:35','2022-03-04 09:28:35',0,0),
(31,30,'ATA - IDE','ata---ide',NULL,NULL,'2022-03-04 09:29:03','2022-03-04 09:29:03',0,1),
(32,30,'FIBRE CHANNEL','fibre-channel',NULL,NULL,'2022-03-04 09:29:20','2022-03-04 09:29:20',0,1),
(33,30,'NOTEBOOK DRIVES','notebook-drives',NULL,NULL,'2022-03-04 09:29:28','2022-03-04 09:29:28',0,1),
(34,30,'SAS','sas',NULL,NULL,'2022-03-04 09:29:38','2022-03-04 09:29:38',0,1),
(35,31,'120GB-7200RPM','120gb-7200rpm',NULL,NULL,'2022-03-04 09:29:55','2022-03-04 09:29:55',0,2),
(36,31,'160GB-5400RPM','160gb-5400rpm',NULL,NULL,'2022-03-04 09:30:11','2022-03-04 09:30:11',0,2),
(37,31,'160GB-7200RPM','160gb-7200rpm',NULL,NULL,'2022-03-04 09:30:20','2022-03-04 09:44:36',0,2),
(38,31,'180GB-7200RPM','180gb-7200rpm',NULL,NULL,'2022-03-04 09:30:31','2022-03-04 09:30:31',0,2);

/*Table structure for table `coupons` */

DROP TABLE IF EXISTS `coupons`;

CREATE TABLE `coupons` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_type` tinyint(4) NOT NULL DEFAULT 0,
  `discount` double(8,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `minimum_cart_value` double(8,2) NOT NULL DEFAULT 0.00,
  `maximum_cart_value` double(8,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `coupons` */

insert  into `coupons`(`id`,`code`,`discount_type`,`discount`,`created_at`,`updated_at`,`minimum_cart_value`,`maximum_cart_value`) values 
(2,'test',0,10.00,'2022-02-23 22:42:36','2022-02-23 22:42:36',0.00,0.00),
(3,'testss',0,5.00,'2022-02-23 22:42:45','2022-03-01 03:23:36',0.00,0.00);

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `faqs` */

DROP TABLE IF EXISTS `faqs`;

CREATE TABLE `faqs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `faqs` */

insert  into `faqs`(`id`,`question`,`description`,`created_at`,`updated_at`) values 
(2,'test','test','2022-02-23 22:46:07','2022-02-23 22:46:07'),
(3,'test','test','2022-02-23 22:46:08','2022-02-23 22:46:08');

/*Table structure for table `files` */

DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(555) NOT NULL,
  `fileable_id` int(11) NOT NULL,
  `fileable_type` varchar(255) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fileable_id_type_index` (`fileable_id`,`fileable_type`,`table_name`)
) ENGINE=InnoDB AUTO_INCREMENT=227 DEFAULT CHARSET=utf8mb4;

/*Data for the table `files` */

insert  into `files`(`id`,`url`,`fileable_id`,`fileable_type`,`table_name`,`created_at`,`updated_at`) values 
(179,'event_gallery/SeIoACvS02t4FxcCjBVY6VOpUSkjFe0VVh0y4ZV0.jpg',5,'App\\Models\\EventGallery','event_gallery','2022-01-26 06:07:11','2022-01-26 06:07:11'),
(180,'event_gallery_thumb/KoWtjO9gWkl88jwfHXcnVXmy6Ra9y4HEMo447YLr.png',5,'App\\Models\\EventGalleryThumb','event_gallery_thumb','2022-01-26 06:45:58','2022-01-26 06:45:58'),
(181,'video_thumb/dPIXbv2VGIk79nsEmJLfGJwMKnImIzQrSbfrWXyR.jpg',2,'App\\Models\\VideoThumb','video_thumb','2022-01-26 21:40:43','2022-01-26 21:40:43'),
(182,'video_thumb/gErZW3U04gKz2zQ7pqvLWLcypPLVmPrX2wSXvMM9.jpg',3,'App\\Models\\VideoThumb','video_thumb','2022-01-26 21:42:14','2022-01-26 21:42:14'),
(183,'videos/08Zdt1zO1oGmEHPjegqT5m8DIzfxhp6LgDQqDdJp.jpg',3,'App\\Models\\Video','videos','2022-01-26 21:42:14','2022-01-26 21:42:14'),
(184,'videos/9PSn7z0RXXYSFi28uIxuTvGyn69UJVggJVncXIpZ.jpg',2,'App\\Models\\Video','videos','2022-01-26 21:47:59','2022-01-26 21:47:59'),
(185,'advertisements/1TfifMsN0nTl1iEiod2wn2xuii7jBdQdKmW6zhEk.jpg',1,'App\\Models\\Advertisement','advertisements','2022-01-26 22:20:57','2022-01-26 22:20:57'),
(186,'advertisement_thumb/FvpQ3ifcGvDKwyEpyCvQTNp2DBKnne36S9gfZ7pY.png',1,'App\\Models\\AdvertisementThumb','advertisement_thumb','2022-01-26 22:20:57','2022-01-26 22:20:57'),
(187,'events/Ehd0Iz6BUQIqdysQ4FirM9zcdBBuzBdvda0Swoxz.jpg',3,'App\\Models\\Event','events','2022-01-26 23:49:56','2022-01-26 23:49:56'),
(189,'products/cX0SEuqD1GggJm6wYQexlXADvlOuy8V1HF0WL38m.png',6,'App\\Models\\Product','products','2022-01-27 02:45:21','2022-01-27 02:45:21'),
(191,'users/C9tiJvXqTxcj9b3XTEr8QMVxY4d3uyk2pwXq7YJS.jpg',54,'App\\Models\\User','users','2022-01-28 02:08:50','2022-01-28 02:08:50'),
(194,'albums/RGhf1NyhyWvJVWspovxFgBpmoSGINGt8F5z7D6MA.jpg',2,'App\\Models\\Album','albums','2022-01-28 06:10:47','2022-01-28 06:10:47'),
(195,'album_songs/pJ3WAQ0HZnpsyi59sAvldCZuN07O4HnWUGqp9gvy.jpg',0,'App\\Models\\AlbumSong','album_songs','2022-01-29 04:13:17','2022-01-29 04:13:17'),
(196,'album_songs/opeicsO9LC1p3p4h9jSHQcJ3XcmGD5MvyDkbbXGV.jpg',0,'App\\Models\\AlbumSong','album_songs','2022-01-29 04:14:03','2022-01-29 04:14:03'),
(197,'album_songs/btKvc5rgTzwMyeCJf5Cnybfm6PCPF5czs7JWaIXf.jpg',0,'App\\Models\\AlbumSong','album_songs','2022-01-29 04:25:11','2022-01-29 04:25:11'),
(198,'album_songs/e1UCjRTCm6RnB8gZ0bzOY4t9Veu6d5i2bEqGDXZ0.jpg',0,'App\\Models\\AlbumSong','album_songs','2022-01-29 04:25:35','2022-01-29 04:25:35'),
(199,'album_songs/JBH5nx60xuNVpTZIgVjdKml6WZX16JVQot5mtdCH.jpg',0,'App\\Models\\AlbumSong','album_songs','2022-01-29 04:25:52','2022-01-29 04:25:52'),
(200,'advertisements/YzRY8NMlRufYInxml8vKtGqd9Hft6zANI906oZSJ.png',2,'App\\Models\\Advertisement','advertisements','2022-02-05 00:39:43','2022-02-05 00:39:43'),
(201,'advertisement_thumb/t37gWxHRmRN7NpnkBAJMZH3JsQENtxU929tTC6uG.png',2,'App\\Models\\AdvertisementThumb','advertisement_thumb','2022-02-05 00:39:43','2022-02-05 00:39:43'),
(202,'products/fKTFLQ7nScQD9Ahcu19FBZK9ti1uDbnC5vmrbFaS.png',9,'App\\Models\\Product','products','2022-03-01 10:20:41','2022-03-01 10:20:41'),
(203,'categories/9h88IfWDN8268ImNqrp9eJC4tSawP49p8vN04qw6.png',2,'App\\Models\\Category','categories','2022-03-01 10:43:48','2022-03-01 10:43:48'),
(204,'categories/6he6TadtHPB56y2Z0LRI20YJ47HMhNr11nBBKj9b.png',3,'App\\Models\\Category','categories','2022-03-01 10:44:05','2022-03-01 10:44:05'),
(205,'categories/iA3siDdYXSIkFwIFq8W88OtH7CTVew2l1hulLmzv.png',4,'App\\Models\\Category','categories','2022-03-01 10:47:11','2022-03-01 10:47:11'),
(206,'categories/3wyeK87ASAOrle6fuvX1TMfZv0rxCxnrCVEXa0p5.png',5,'App\\Models\\Category','categories','2022-03-01 10:47:27','2022-03-01 10:47:27'),
(207,'categories/5ZRsjEmBTSJ7vMCgVaXiwat1fQcarASu5kotOSvi.png',6,'App\\Models\\Category','categories','2022-03-01 10:47:39','2022-03-01 10:47:39'),
(208,'categories/mpUQjNm4mApWbUnRkg9fCRQ9OAN0bEBcBdzrZVH9.png',7,'App\\Models\\Category','categories','2022-03-01 11:50:29','2022-03-01 11:50:29'),
(209,'categories/Hi9VQORmKbFtby2q3rdSG7TCFDz4jKGQvERZVurZ.png',11,'App\\Models\\Category','categories','2022-03-01 12:24:49','2022-03-01 12:24:49'),
(210,'categories/T3fu81EGxMYO9WCW3bOxYlENeKaFG0el6aydyx8U.png',12,'App\\Models\\Category','categories','2022-03-01 12:25:21','2022-03-01 12:25:21'),
(211,'categories/0GvDezyFHVsTVG7nc4EFtLQuoUByKxBjUPpsCm54.png',13,'App\\Models\\Category','categories','2022-03-01 12:25:35','2022-03-01 12:25:35'),
(212,'categories/rEzSYMa6eCcyIiU4iWnR1xyjsx4DgpyN4ikZ8vTQ.png',15,'App\\Models\\Category','categories','2022-03-01 12:26:04','2022-03-01 12:26:04'),
(213,'categories/P9AsKYA0DlC9rohZSdII25x1q3upgCK6j2Ft5cvV.png',16,'App\\Models\\Category','categories','2022-03-01 12:26:21','2022-03-01 12:26:21'),
(214,'categories/B6ZbyZHs1bvWWfqg9jYhreJ1wyjaGbsSPPiNCseX.png',17,'App\\Models\\Category','categories','2022-03-01 12:36:13','2022-03-01 12:36:13'),
(215,'categories/Rn53fLSq10AHksaZ6BBKlb1yarwfBpMFerWB5Ori.png',18,'App\\Models\\Category','categories','2022-03-01 12:36:40','2022-03-01 12:36:40'),
(216,'categories/4TOnKpyDDlYKrW6bik68kdguNmUPaWKzylFTqJ5k.png',19,'App\\Models\\Category','categories','2022-03-01 12:37:23','2022-03-01 12:37:23'),
(217,'categories/8y8qQ7qpaLCaXZGiMLW29SFi8M1bvtREk6wh7fTH.png',20,'App\\Models\\Category','categories','2022-03-01 12:37:36','2022-03-01 12:37:36'),
(218,'categories/NXagvyjH9aO8qwRNrKWW30ENf9PHn6OXfJgmXXWG.png',21,'App\\Models\\Category','categories','2022-03-01 12:37:50','2022-03-01 12:37:50'),
(219,'categories/80JWCKlJgG4ybawMVPBhqBwd8Yq7mnoWRWJBHvfb.png',22,'App\\Models\\Category','categories','2022-03-01 12:38:13','2022-03-01 12:38:13'),
(220,'categories/yk8I0xFiWLrWoPjYOVlyIq2AiYDF16JaiMnUECWU.png',23,'App\\Models\\Category','categories','2022-03-01 12:38:34','2022-03-01 12:38:34'),
(221,'categories/gglUCGy224DPC1KKKlilxHeAJImvbQtMhiINL3iN.png',24,'App\\Models\\Category','categories','2022-03-01 12:38:51','2022-03-01 12:38:51'),
(222,'categories/zGESMh4H0sgovI0viTvCKBJuq8VsS5TbbNGg5IGQ.png',25,'App\\Models\\Category','categories','2022-03-01 12:39:17','2022-03-01 12:39:17'),
(223,'products/FIbFBpsiljQR9KLwqVDpgVaFMvQFwSjL1FBMXNRN.png',10,'App\\Models\\Product','products','2022-03-01 13:41:19','2022-03-01 13:41:19'),
(224,'products/dLmaxDoJf8eEZ2UC2eE3h6nlyCnSN0QH7rlWW44g.png',11,'App\\Models\\Product','products','2022-03-01 13:51:53','2022-03-01 13:51:53'),
(226,'brands/tPzFMtaMgCxobNMuGJPpHQAjwkSvGoqKfhKD4VU4.png',1,'App\\Models\\Brand','brands','2022-03-04 10:30:21','2022-03-04 10:30:21');

/*Table structure for table `inquiries` */

DROP TABLE IF EXISTS `inquiries`;

CREATE TABLE `inquiries` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `inquiries` */

insert  into `inquiries`(`id`,`first_name`,`last_name`,`email`,`phone`,`message`,`created_at`,`updated_at`) values 
(2,'test','testte','test@gmail.com','123123','test','2022-02-23 22:48:15','2022-02-23 22:48:15'),
(3,'test','testte','test@gmail.com','123123','test','2022-02-23 22:48:16','2022-02-23 22:48:16');

/*Table structure for table `logs` */

DROP TABLE IF EXISTS `logs`;

CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` text DEFAULT NULL,
  `logable_id` int(11) DEFAULT NULL,
  `logable_type` varchar(255) DEFAULT NULL,
  `table_name` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `logs` */

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(9,'2014_10_12_100000_create_password_resets_table',1),
(10,'2016_06_01_000001_create_oauth_auth_codes_table',1),
(11,'2016_06_01_000002_create_oauth_access_tokens_table',1),
(12,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
(13,'2016_06_01_000004_create_oauth_clients_table',1),
(14,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
(15,'2019_08_19_000000_create_failed_jobs_table',1),
(16,'2019_12_14_000001_create_personal_access_tokens_table',1),
(17,'2021_12_04_014853_create_notifications_table',2),
(18,'2022_01_22_061249_add_lead_type_column_in_lead_tbl',3),
(19,'2022_01_26_052540_create_event_gallery',4),
(20,'2022_01_26_064635_create_newsletters',5),
(21,'2022_01_26_070558_create_videos',6),
(22,'2022_01_26_215029_create_advertisements',7),
(23,'2022_01_26_222334_create_events',8),
(24,'2022_01_26_235533_create_products',9),
(25,'2022_01_26_235816_create_related_products',9),
(26,'2022_01_28_023214_craete_albums',10),
(27,'2022_01_28_023458_create_album_songs',11),
(28,'2022_01_28_032702_alter_albums_add_column',12),
(29,'2022_01_29_043612_alter_table_album_songs_add_song_file_id',13),
(30,'2022_01_29_054416_create_dj_schedules',14),
(31,'2022_02_11_201357_create_orders_table',15),
(32,'2022_02_22_012125_create_cart_table',16),
(33,'2022_02_23_192738_alter_cart_item_table',16),
(34,'2022_02_23_204605_craete_coupon_table',17),
(35,'2022_02_23_211102_create_faq_table',18),
(36,'2022_02_23_212111_create_inquiry_table',19),
(37,'2022_02_23_214920_wishlists',20),
(38,'2022_02_23_224036_alter_coupons_table',21),
(39,'2022_03_01_033240_craete_category_table',22),
(40,'2022_03_01_033451_alter_products_table',23),
(41,'2022_03_01_100811_add_column_in_products',24),
(42,'2022_03_01_103159_alter_categories_table',25),
(43,'2022_03_01_104442_alter_category_table',26),
(44,'2022_03_01_121534_add_column_in_categories',27),
(45,'2022_03_04_095538_add_discount_in_products',28),
(46,'2022_03_04_101006_brands_table',29),
(47,'2022_03_04_105225_add_columns_in_products',30),
(48,'2022_03_04_132733_add_columns_in_products_627',31),
(50,'2022_03_04_141534_create_product_quotes_table',32);

/*Table structure for table `notifications` */

DROP TABLE IF EXISTS `notifications`;

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `notifications` */

/*Table structure for table `oauth_access_tokens` */

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_access_tokens` */

insert  into `oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values 
('066440cf25be03d62efdffef8bd458baaa6496a937211c42964dc828c58460a519c47d12ce165a21',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-03-04 09:18:10','2022-03-04 09:18:10','2022-09-04 09:18:09'),
('11a1948451843113b1d8e208c7a5da1104f9fadff2dfe0f619e14c3c58b362b9a66d28f4e1756ce3',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-01-26 00:46:15','2022-01-26 00:46:15','2022-07-26 00:46:15'),
('32010d3aa0c1b570e607dea4a1e082828372d97c8f7bf682d33fda5877edbd014286d93553380968',56,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 22:30:26','2022-02-23 22:30:26','2022-08-23 22:30:26'),
('4b28a0e3cdfa8e291ff12697934c8fcc60b7c865a3d4bb12968185d0bf6ac5916123a12cee4383cb',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 22:33:00','2022-02-23 22:33:00','2022-08-23 22:33:00'),
('633acaecb9a01a12c5e921936e9ad4f696e87c8794e5d1fe37181adab6be0cfa5b6cd8628cf45efd',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-11 18:03:04','2022-02-11 18:03:04','2022-08-11 18:03:03'),
('63b7c7c71c80400b6fe36cc064bdf00dc74c88e270a44ac3c54fc1139f16e91f2023fab03a5a266e',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-03-02 21:00:53','2022-03-02 21:00:53','2022-09-02 21:00:52'),
('805f19031c4ed00a889b34b510ead6b29ad23db60da02351c8ef011c4d29fdf1ea22fcb1384e19bb',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-01-26 07:03:52','2022-01-26 07:03:52','2022-07-26 07:03:52'),
('82ed14e0b4596a02ce70a6b6cf91d1b4ecf97d97398463ca5600e45afe6f93bb5997f5f6f4d9d105',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-04 23:10:25','2022-02-04 23:10:25','2022-08-04 23:10:24'),
('9c47e3d13e096960f99b4cdca1698b404a3ce7c0c2cff430d03d92c82cf39f31de8a3049be60de40',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 22:31:30','2022-02-23 22:31:30','2022-08-23 22:31:30'),
('a7f4ab10a4e80e1325f6143735f542956f320b2d5eb984d50bffcdd54dec6d978de6f053acb15532',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 22:33:38','2022-02-23 22:33:38','2022-08-23 22:33:37'),
('b1e60c1d332e335ee28b15d7adb28c421bd5e5ab14f49b9f060f7af4b48570f54ffc7dddda551f36',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 20:54:50','2022-02-23 20:54:50','2022-08-23 20:54:49'),
('c8b7a03d162ea79ed4b38ef4b7aa2e7000dd80bceb80fcc7538e08ff09a8107894195f70699dc907',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-01 13:36:08','2022-02-01 13:36:08','2022-08-01 13:36:07'),
('d2f8e789e5fd0b6a151d5d61f6d460e8bc12288828eb56aa7510ca7cf4022f16913b8b35ae02164f',56,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 22:30:39','2022-02-23 22:30:39','2022-08-23 22:30:39'),
('d7dad7b9d96300b2453503caa014f82568408fb119e104b6c7cb26520d321bbc6932bb141314baf3',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-03-01 07:47:50','2022-03-01 07:47:50','2022-09-01 07:47:50'),
('f622205cd4e96a0c7ee93aca07c75c987ae3b4d3c9cd584eaaa54223c55c7a986a4c807edb27a442',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-02-23 21:11:40','2022-02-23 21:11:40','2022-08-23 21:11:40'),
('fac326583e18b7d3560c5d63e772c6f84309572bd086b792413af8f62756b1932d53cab8ae5365b0',52,'9571556e-51fa-41f1-a907-f0c4d8654ea3','Laravel Password Grant Client','[]',0,'2022-03-01 02:25:34','2022-03-01 02:25:34','2022-09-01 02:25:33');

/*Table structure for table `oauth_auth_codes` */

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_auth_codes` */

/*Table structure for table `oauth_clients` */

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_clients` */

insert  into `oauth_clients`(`id`,`user_id`,`name`,`secret`,`provider`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values 
('9571556e-51fa-41f1-a907-f0c4d8654ea3',NULL,'Obsession Digital Radio Api Personal Access Client','MmkS21q5fisiqbLV3gtIUJoEvxrI4kNkO6lUrKTb',NULL,'http://localhost',1,0,0,'2022-01-26 00:46:11','2022-01-26 00:46:11'),
('9571556e-5c62-49b3-b079-fe6292e97ee5',NULL,'Obsession Digital Radio Api Password Grant Client','KI6rGT2tq4XeNH0knSHdaBbGZO9IFiYZh3BoGehQ','users','http://localhost',0,1,0,'2022-01-26 00:46:11','2022-01-26 00:46:11');

/*Table structure for table `oauth_personal_access_clients` */

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_personal_access_clients` */

insert  into `oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values 
(2,'9571556e-51fa-41f1-a907-f0c4d8654ea3','2022-01-26 00:46:11','2022-01-26 00:46:11');

/*Table structure for table `oauth_refresh_tokens` */

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_refresh_tokens` */

/*Table structure for table `order_products` */

DROP TABLE IF EXISTS `order_products`;

CREATE TABLE `order_products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `rowtotal` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `order_products` */

insert  into `order_products`(`id`,`order_id`,`product_id`,`quantity`,`rowtotal`,`created_at`,`updated_at`) values 
(1,4,6,5,2500.00,'2022-02-14 19:17:40','2022-02-14 19:17:40'),
(2,5,6,5,2500.00,'2022-02-14 20:25:43','2022-02-14 20:25:43'),
(3,6,6,5,2500.00,'2022-02-14 20:26:36','2022-02-14 20:26:36'),
(4,7,11,18,9000.00,'2022-03-01 15:43:17','2022-03-01 15:43:17'),
(5,8,11,18,9000.00,'2022-03-01 15:45:02','2022-03-01 15:45:02'),
(6,9,11,18,9000.00,'2022-03-01 15:46:23','2022-03-01 15:46:23'),
(7,10,10,4,2000.00,'2022-03-01 15:48:11','2022-03-01 15:48:11'),
(8,11,10,4,2000.00,'2022-03-01 15:48:55','2022-03-01 15:48:55'),
(9,12,10,4,2000.00,'2022-03-01 15:50:39','2022-03-01 15:50:39');

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `billing_first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_address_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_zip` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `billing_notes` varchar(555) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_address_2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_city` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_zip` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtotal` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `orders` */

insert  into `orders`(`id`,`billing_first_name`,`billing_last_name`,`billing_address`,`billing_address_2`,`billing_city`,`billing_zip`,`billing_phone`,`billing_email`,`billing_notes`,`shipping_first_name`,`shipping_last_name`,`shipping_address`,`shipping_address_2`,`shipping_city`,`shipping_zip`,`shipping_phone`,`subtotal`,`total`,`created_at`,`updated_at`) values 
(1,'','','','','','','','','','','','','','','','',0.00,0.00,'2022-02-12 00:51:09','2022-02-12 00:51:09'),
(2,'123123123123','123123','123','123','123','123123','123123','123','123123','','','','','','','',0.00,0.00,'2022-02-12 00:52:54','2022-02-12 00:52:54'),
(3,'123','123','123','123','123','123','0123123','123123@gmail.com','123123123','123','123','123','123','123','123','0123123',0.00,0.00,'2022-02-14 19:14:15','2022-02-14 19:14:15'),
(4,'123','123','123','123','123','123','0123123','123123@gmail.com','123123123','123','123','123','123','123','123','0123123',0.00,0.00,'2022-02-14 19:17:40','2022-02-14 19:17:40'),
(5,'123','123','123','123','123','123','0123123','123123@gmail.com','123123123','123','123','123','123','123','123','0123123',0.00,0.00,'2022-02-14 20:25:43','2022-02-14 20:25:43'),
(6,'test','123','123','123','123','123','0123123','123123@gmail.com','123123123','test','123','123','123','123','123','0123123',0.00,0.00,'2022-02-14 20:26:36','2022-02-14 20:26:36'),
(7,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:43:17','2022-03-01 15:43:17'),
(8,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:45:02','2022-03-01 15:45:02'),
(9,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:46:23','2022-03-01 15:46:23'),
(10,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:48:11','2022-03-01 15:48:11'),
(11,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:48:55','2022-03-01 15:48:55'),
(12,'123','123','123','123','123','123','0123123','123123@gmail.com','','123','123','123','123','123','123','0123123',0.00,0.00,'2022-03-01 15:50:39','2022-03-01 15:50:39');

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `permissions` */

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4;

/*Data for the table `permissions` */

insert  into `permissions`(`id`,`name`,`title`,`updated_at`,`created_at`) values 
(1,'users-list','Users Listing','2022-01-26 00:17:41','2021-10-12 17:36:14'),
(2,'users-create','Users Create','2022-01-26 00:17:47','2021-10-12 17:36:14'),
(3,'users-edit','Users Edit','2022-01-26 00:17:53','2021-10-12 17:36:38'),
(4,'users-delete','Users Delete','2022-01-26 00:17:58','2021-10-12 17:36:38'),
(5,'users-view','Users View','2022-01-26 00:18:03','2021-10-12 17:36:59'),
(56,'role-list','Role List','2022-01-26 02:33:06','2022-01-26 02:33:06'),
(57,'role-create','Role Create','2022-01-26 02:33:12','2022-01-26 02:33:09'),
(58,'role-edit','Role Edit','2022-01-26 02:33:18','2022-01-26 02:33:15'),
(59,'role-delete','Role Delete','2022-01-26 02:33:26','2022-01-26 02:33:22'),
(60,'role-view','Role View','2022-01-26 02:33:33','2022-01-26 02:33:30'),
(61,'permission-list','Permission List','2022-01-26 04:02:08','2022-01-26 04:02:08'),
(62,'permission-create','Permission Create','2022-01-26 04:02:20','2022-01-26 04:02:12'),
(63,'permission-edit','Permission Edit','2022-01-26 04:02:27','2022-01-26 04:02:23'),
(64,'permission-delete','Permission Delete','2022-01-26 04:02:34','2022-01-26 04:02:29'),
(65,'permission-view','Permission View','2022-01-26 04:30:13','2022-01-26 04:02:36'),
(93,'product-list','Product List','2022-01-27 00:02:49','2022-01-27 00:02:49'),
(94,'product-view','Product View','2022-01-27 00:02:59','2022-01-27 00:02:59'),
(95,'product-create','Product Create','2022-01-27 00:03:10','2022-01-27 00:03:10'),
(96,'product-edit','Product Edit','2022-01-27 00:03:16','2022-01-27 00:03:16'),
(97,'product-delete','Product Delete','2022-01-27 00:03:26','2022-01-27 00:03:26'),
(113,'coupon-list','Coupon List','2022-02-23 20:59:08','2022-02-23 20:59:08'),
(114,'coupon-create','Coupon Create','2022-02-23 20:59:27','2022-02-23 20:59:27'),
(115,'coupon-edit','Coupon Edit','2022-02-23 20:59:38','2022-02-23 20:59:38'),
(116,'coupon-delete','Coupon Delete','2022-02-23 20:59:47','2022-02-23 20:59:47'),
(117,'coupon-view','Coupon View','2022-02-23 20:59:59','2022-02-23 20:59:59'),
(128,'wishlistlist','WishlistList','2022-02-23 21:50:57','2022-02-23 21:50:57'),
(129,'wishlistview','WishlistView','2022-02-23 21:50:58','2022-02-23 21:50:58'),
(130,'wishlistcreate','WishlistCreate','2022-02-23 21:50:58','2022-02-23 21:50:58'),
(131,'wishlistedit','WishlistEdit','2022-02-23 21:50:58','2022-02-23 21:50:58'),
(132,'wishlistdelete','WishlistDelete','2022-02-23 21:50:58','2022-02-23 21:50:58'),
(133,'category-list','Category List','2022-03-01 05:24:46','2022-03-01 05:24:46'),
(134,'category-view','Category View','2022-03-01 05:24:46','2022-03-01 05:24:46'),
(135,'category-create','Category Create','2022-03-01 05:24:46','2022-03-01 05:24:46'),
(136,'category-edit','Category Edit','2022-03-01 05:24:46','2022-03-01 05:24:46'),
(137,'category-delete','Category Delete','2022-03-01 05:24:46','2022-03-01 05:24:46'),
(138,'brand-list','Brand List','2022-03-04 10:13:10','2022-03-04 10:13:10'),
(139,'brand-view','Brand View','2022-03-04 10:13:10','2022-03-04 10:13:10'),
(140,'brand-create','Brand Create','2022-03-04 10:13:10','2022-03-04 10:13:10'),
(141,'brand-edit','Brand Edit','2022-03-04 10:13:10','2022-03-04 10:13:10'),
(142,'brand-delete','Brand Delete','2022-03-04 10:13:10','2022-03-04 10:13:10'),
(143,'productquote-list','ProductQuote List','2022-03-04 14:17:54','2022-03-04 14:17:54'),
(144,'productquote-view','ProductQuote View','2022-03-04 14:17:54','2022-03-04 14:17:54'),
(147,'productquote-delete','ProductQuote Delete','2022-03-04 14:17:54','2022-03-04 14:17:54');

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

/*Table structure for table `product_quotes` */

DROP TABLE IF EXISTS `product_quotes`;

CREATE TABLE `product_quotes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL DEFAULT 0,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `is_new` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_quotes_product_id_foreign` (`product_id`),
  CONSTRAINT `product_quotes_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `product_quotes` */

insert  into `product_quotes`(`id`,`email`,`qty`,`message`,`product_id`,`is_new`,`created_at`,`updated_at`) values 
(1,'test@gmail.com',4,'asdasdasd',19,0,NULL,'2022-03-04 18:57:55'),
(2,'test@gmail.com',4,'asdasdasd',19,0,NULL,'2022-03-04 18:57:51'),
(3,'test@gmail.com',4,'asdasdasd',19,0,NULL,'2022-03-04 18:57:45');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint(20) unsigned NOT NULL,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0,
  `discount` double(8,2) NOT NULL DEFAULT 0.00,
  `brand_id` bigint(20) unsigned NOT NULL,
  `crawl_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `crawl_site` enum('esiso','esaitech','techbuyer','serversupply','tigerdirect','mkbtechnology','globalonetechnology','manual') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'manual',
  `in_stock` tinyint(4) NOT NULL DEFAULT 1,
  `manage_stock` tinyint(4) NOT NULL DEFAULT 0,
  `stock_qty` int(11) DEFAULT 0,
  `part_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `condition` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_slug_unique` (`slug`),
  UNIQUE KEY `products_sku_unique` (`sku`),
  KEY `products_category_id_foreign` (`category_id`),
  KEY `products_brand_id_foreign` (`brand_id`),
  KEY `products_condition_index` (`condition`),
  CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`slug`,`short_description`,`description`,`price`,`created_at`,`updated_at`,`category_id`,`is_featured`,`discount`,`brand_id`,`crawl_url`,`crawl_site`,`in_stock`,`manage_stock`,`stock_qty`,`part_number`,`condition`,`sku`) values 
(18,'test','test','test','<p>test</p>',500.00,'2022-03-04 11:05:05','2022-03-04 14:11:28',35,0,20.00,1,NULL,'manual',1,0,500,'test','Refurbished','testf'),
(19,'test','test-2','test','<p>test</p>',250.00,'2022-03-04 17:29:34','2022-03-04 17:29:34',38,1,20.00,1,NULL,'manual',1,0,0,'test','Refurbished','test');

/*Table structure for table `related_products` */

DROP TABLE IF EXISTS `related_products`;

CREATE TABLE `related_products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `reference_product` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `related_products_product_id_foreign` (`product_id`),
  KEY `related_products_reference_product_foreign` (`reference_product`),
  CONSTRAINT `related_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `related_products_reference_product_foreign` FOREIGN KEY (`reference_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `related_products` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`title`,`created_at`,`updated_at`) values 
(1,'superadmin','Super Admin','2021-10-12 17:35:14','2021-10-12 17:35:14'),
(13,'Customer','Customer','2022-02-23 22:30:10','2022-02-23 22:30:10');

/*Table structure for table `roles_permissions` */

DROP TABLE IF EXISTS `roles_permissions`;

CREATE TABLE `roles_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `rp_permission_id` (`permission_id`),
  KEY `rp_role_id` (`role_id`) USING BTREE,
  CONSTRAINT `roles_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `roles_permissions_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1112 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles_permissions` */

insert  into `roles_permissions`(`id`,`role_id`,`permission_id`,`created_at`,`updated_at`) values 
(1069,1,56,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1070,1,57,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1071,1,58,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1072,1,59,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1073,1,60,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1074,1,1,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1075,1,2,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1076,1,3,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1077,1,4,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1078,1,5,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1079,1,61,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1080,1,62,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1081,1,63,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1082,1,64,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1083,1,65,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1084,1,93,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1085,1,94,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1086,1,95,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1087,1,96,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1088,1,97,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1089,1,113,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1090,1,114,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1091,1,115,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1092,1,116,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1093,1,117,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1094,1,128,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1095,1,129,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1096,1,130,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1097,1,131,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1098,1,132,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1099,1,133,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1100,1,134,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1101,1,135,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1102,1,136,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1103,1,137,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1104,1,138,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1105,1,139,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1106,1,140,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1107,1,141,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1108,1,142,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1109,1,143,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1110,1,144,'2022-03-04 17:46:09','2022-03-04 17:46:09'),
(1111,1,147,'2022-03-04 17:46:09','2022-03-04 17:46:09');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role_id` int(11) NOT NULL DEFAULT 0,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_role_id_index` (`role_id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`created_at`,`updated_at`,`role_id`,`country`,`city`,`state`,`phone`,`remember_token`,`email_verified_at`) values 
(52,'Admin','admin@project.com','$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa','2022-01-26 00:15:07','2022-01-26 00:15:07',1,NULL,NULL,NULL,NULL,NULL,'2022-01-26 00:15:06'),
(53,'S Admin','sadmin@project.com','$2y$10$8IIKJKPSwUaBqpyJOMlUi.guQEHZgPGMZejuVx4CSk.CEjjTQvMju','2022-01-26 03:48:58','2022-01-26 03:49:24',1,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `wishlists` */

DROP TABLE IF EXISTS `wishlists`;

CREATE TABLE `wishlists` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variation_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wishlists_user_id_index` (`user_id`),
  KEY `wishlists_product_id_index` (`product_id`),
  KEY `wishlists_variation_id_index` (`variation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `wishlists` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
