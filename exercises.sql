-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: jobAppDB29
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `jobAppDB29`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `all_exercises` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `all_exercises`;

--
-- Table structure for table `basicDetails`
--

DROP TABLE IF EXISTS `basicDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basicDetails` (
  `AplicantId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `gender` varchar(12) DEFAULT NULL,
  `Designation` varchar(30) NOT NULL,
  `address1` varchar(30) DEFAULT NULL,
  `address2` varchar(300) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `emailId` varchar(50) DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `zipCode` varchar(30) DEFAULT NULL,
  `relationshipStatus` varchar(10) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  PRIMARY KEY (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basicDetails`
--

LOCK TABLES `basicDetails` WRITE;
/*!40000 ALTER TABLE `basicDetails` DISABLE KEYS */;
INSERT INTO `basicDetails` VALUES (5,'rajnikumar','Tank','male','Developer','Vesugam','Varachha','mumbai','ram@gmail.com',9989088098,'Maharashtra','458923','single','2001-08-22'),(37,'krishna','Tank','female','Sales Person','Varachha','Amroli','Palanpur','krishnatank@gmail.com',9899883232,'Gujarat','3423434','single','2002-03-23');
/*!40000 ALTER TABLE `basicDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(100) NOT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_relates_to_state` (`state_id`),
  CONSTRAINT `city_relates_to_state` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1508 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Kolhapur',21),(2,'Port Blair',1),(3,'Adilabad',2),(4,'Adoni',2),(5,'Amadalavalasa',2),(6,'Amalapuram',2),(7,'Anakapalle',2),(8,'Anantapur',2),(9,'Badepalle',2),(10,'Banganapalle',2),(11,'Bapatla',2),(12,'Bellampalle',2),(13,'Bethamcherla',2),(14,'Bhadrachalam',2),(15,'Bhainsa',2),(16,'Bheemunipatnam',2),(17,'Bhimavaram',2),(18,'Bhongir',2),(19,'Bobbili',2),(20,'Bodhan',2),(21,'Chilakaluripet',2),(22,'Chirala',2),(23,'Chittoor',2),(24,'Cuddapah',2),(25,'Devarakonda',2),(26,'Dharmavaram',2),(27,'Eluru',2),(28,'Farooqnagar',2),(29,'Gadwal',2),(30,'Gooty',2),(31,'Gudivada',2),(32,'Gudur',2),(33,'Guntakal',2),(34,'Guntur',2),(35,'Hanuman Junction',2),(36,'Hindupur',2),(37,'Hyderabad',2),(38,'Ichchapuram',2),(39,'Jaggaiahpet',2),(40,'Jagtial',2),(41,'Jammalamadugu',2),(42,'Jangaon',2),(43,'Kadapa',2),(44,'Kadiri',2),(45,'Kagaznagar',2),(46,'Kakinada',2),(47,'Kalyandurg',2),(48,'Kamareddy',2),(49,'Kandukur',2),(50,'Karimnagar',2),(51,'Kavali',2),(52,'Khammam',2),(53,'Koratla',2),(54,'Kothagudem',2),(55,'Kothapeta',2),(56,'Kovvur',2),(57,'Kurnool',2),(58,'Kyathampalle',2),(59,'Macherla',2),(60,'Machilipatnam',2),(61,'Madanapalle',2),(62,'Mahbubnagar',2),(63,'Mancherial',2),(64,'Mandamarri',2),(65,'Mandapeta',2),(66,'Manuguru',2),(67,'Markapur',2),(68,'Medak',2),(69,'Miryalaguda',2),(70,'Mogalthur',2),(71,'Nagari',2),(72,'Nagarkurnool',2),(73,'Nandyal',2),(74,'Narasapur',2),(75,'Narasaraopet',2),(76,'Narayanpet',2),(77,'Narsipatnam',2),(78,'Nellore',2),(79,'Nidadavole',2),(80,'Nirmal',2),(81,'Nizamabad',2),(82,'Nuzvid',2),(83,'Ongole',2),(84,'Palacole',2),(85,'Palasa Kasibugga',2),(86,'Palwancha',2),(87,'Parvathipuram',2),(88,'Pedana',2),(89,'Peddapuram',2),(90,'Pithapuram',2),(91,'Pondur',2),(92,'Ponnur',2),(93,'Proddatur',2),(94,'Punganur',2),(95,'Puttur',2),(96,'Rajahmundry',2),(97,'Rajam',2),(98,'Ramachandrapuram',2),(99,'Ramagundam',2),(100,'Rayachoti',2),(101,'Rayadurg',2),(102,'Renigunta',2),(103,'Repalle',2),(104,'Sadasivpet',2),(105,'Salur',2),(106,'Samalkot',2),(107,'Sangareddy',2),(108,'Sattenapalle',2),(109,'Siddipet',2),(110,'Singapur',2),(111,'Sircilla',2),(112,'Srikakulam',2),(113,'Srikalahasti',2),(115,'Suryapet',2),(116,'Tadepalligudem',2),(117,'Tadpatri',2),(118,'Tandur',2),(119,'Tanuku',2),(120,'Tenali',2),(121,'Tirupati',2),(122,'Tuni',2),(123,'Uravakonda',2),(124,'Venkatagiri',2),(125,'Vicarabad',2),(126,'Vijayawada',2),(127,'Vinukonda',2),(128,'Visakhapatnam',2),(129,'Vizianagaram',2),(130,'Wanaparthy',2),(131,'Warangal',2),(132,'Yellandu',2),(133,'Yemmiganur',2),(134,'Yerraguntla',2),(135,'Zahirabad',2),(136,'Rajampet',2),(137,'Along',3),(138,'Bomdila',3),(139,'Itanagar',3),(140,'Naharlagun',3),(141,'Pasighat',3),(142,'Abhayapuri',4),(143,'Amguri',4),(144,'Anandnagaar',4),(145,'Barpeta',4),(146,'Barpeta Road',4),(147,'Bilasipara',4),(148,'Bongaigaon',4),(149,'Dhekiajuli',4),(150,'Dhubri',4),(151,'Dibrugarh',4),(152,'Digboi',4),(153,'Diphu',4),(154,'Dispur',4),(156,'Gauripur',4),(157,'Goalpara',4),(158,'Golaghat',4),(159,'Guwahati',4),(160,'Haflong',4),(161,'Hailakandi',4),(162,'Hojai',4),(163,'Jorhat',4),(164,'Karimganj',4),(165,'Kokrajhar',4),(166,'Lanka',4),(167,'Lumding',4),(168,'Mangaldoi',4),(169,'Mankachar',4),(170,'Margherita',4),(171,'Mariani',4),(172,'Marigaon',4),(173,'Nagaon',4),(174,'Nalbari',4),(175,'North Lakhimpur',4),(176,'Rangia',4),(177,'Sibsagar',4),(178,'Silapathar',4),(179,'Silchar',4),(180,'Tezpur',4),(181,'Tinsukia',4),(182,'Amarpur',5),(183,'Araria',5),(184,'Areraj',5),(185,'Arrah',5),(186,'Asarganj',5),(187,'Aurangabad',5),(188,'Bagaha',5),(189,'Bahadurganj',5),(190,'Bairgania',5),(191,'Bakhtiarpur',5),(192,'Banka',5),(193,'Banmankhi Bazar',5),(194,'Barahiya',5),(195,'Barauli',5),(196,'Barbigha',5),(197,'Barh',5),(198,'Begusarai',5),(199,'Behea',5),(200,'Bettiah',5),(201,'Bhabua',5),(202,'Bhagalpur',5),(203,'Bihar Sharif',5),(204,'Bikramganj',5),(205,'Bodh Gaya',5),(206,'Buxar',5),(207,'Chandan Bara',5),(208,'Chanpatia',5),(209,'Chhapra',5),(210,'Colgong',5),(211,'Dalsinghsarai',5),(212,'Darbhanga',5),(213,'Daudnagar',5),(214,'Dehri-on-Sone',5),(215,'Dhaka',5),(216,'Dighwara',5),(217,'Dumraon',5),(218,'Fatwah',5),(219,'Forbesganj',5),(220,'Gaya',5),(221,'Gogri Jamalpur',5),(222,'Gopalganj',5),(223,'Hajipur',5),(224,'Hilsa',5),(225,'Hisua',5),(226,'Islampur',5),(227,'Jagdispur',5),(228,'Jamalpur',5),(229,'Jamui',5),(230,'Jehanabad',5),(231,'Jhajha',5),(232,'Jhanjharpur',5),(233,'Jogabani',5),(234,'Kanti',5),(235,'Katihar',5),(236,'Khagaria',5),(237,'Kharagpur',5),(238,'Kishanganj',5),(239,'Lakhisarai',5),(240,'Lalganj',5),(241,'Madhepura',5),(242,'Madhubani',5),(243,'Maharajganj',5),(244,'Mahnar Bazar',5),(245,'Makhdumpur',5),(246,'Maner',5),(247,'Manihari',5),(248,'Marhaura',5),(249,'Masaurhi',5),(250,'Mirganj',5),(251,'Mokameh',5),(252,'Motihari',5),(253,'Motipur',5),(254,'Munger',5),(255,'Murliganj',5),(256,'Muzaffarpur',5),(257,'Narkatiaganj',5),(258,'Naugachhia',5),(259,'Nawada',5),(260,'Nokha',5),(261,'Patna',5),(262,'Piro',5),(263,'Purnia',5),(264,'Rafiganj',5),(265,'Rajgir',5),(266,'Ramnagar',5),(267,'Raxaul Bazar',5),(268,'Revelganj',5),(269,'Rosera',5),(270,'Saharsa',5),(271,'Samastipur',5),(272,'Sasaram',5),(273,'Sheikhpura',5),(274,'Sheohar',5),(275,'Sherghati',5),(276,'Silao',5),(277,'Sitamarhi',5),(278,'Siwan',5),(279,'Sonepur',5),(280,'Sugauli',5),(281,'Sultanganj',5),(282,'Supaul',5),(283,'Warisaliganj',5),(284,'Ahiwara',7),(285,'Akaltara',7),(286,'Ambagarh Chowki',7),(287,'Ambikapur',7),(288,'Arang',7),(289,'Bade Bacheli',7),(290,'Balod',7),(291,'Baloda Bazar',7),(292,'Bemetra',7),(293,'Bhatapara',7),(294,'Bilaspur',7),(295,'Birgaon',7),(296,'Champa',7),(297,'Chirmiri',7),(298,'Dalli-Rajhara',7),(299,'Dhamtari',7),(300,'Dipka',7),(301,'Dongargarh',7),(302,'Durg-Bhilai Nagar',7),(303,'Gobranawapara',7),(304,'Jagdalpur',7),(305,'Janjgir',7),(306,'Jashpurnagar',7),(307,'Kanker',7),(308,'Kawardha',7),(309,'Kondagaon',7),(310,'Korba',7),(311,'Mahasamund',7),(312,'Mahendragarh',7),(313,'Mungeli',7),(314,'Naila Janjgir',7),(315,'Raigarh',7),(316,'Raipur',7),(317,'Rajnandgaon',7),(318,'Sakti',7),(319,'Tilda Newra',7),(320,'Amli',8),(321,'Silvassa',8),(322,'Daman and Diu',9),(323,'Daman and Diu',9),(324,'Asola',10),(325,'Delhi',10),(326,'Aldona',11),(327,'Curchorem Cacora',11),(328,'Madgaon',11),(329,'Mapusa',11),(330,'Margao',11),(331,'Marmagao',11),(332,'Panaji',11),(333,'Ahmedabad',12),(334,'Amreli',12),(335,'Anand',12),(336,'Ankleshwar',12),(337,'Bharuch',12),(338,'Bhavnagar',12),(339,'Bhuj',12),(340,'Cambay',12),(341,'Dahod',12),(342,'Deesa',12),(344,'Dholka',12),(345,'Gandhinagar',12),(346,'Godhra',12),(347,'Himatnagar',12),(348,'Idar',12),(349,'Jamnagar',12),(350,'Junagadh',12),(351,'Kadi',12),(352,'Kalavad',12),(353,'Kalol',12),(354,'Kapadvanj',12),(355,'Karjan',12),(356,'Keshod',12),(357,'Khambhalia',12),(358,'Khambhat',12),(359,'Kheda',12),(360,'Khedbrahma',12),(361,'Kheralu',12),(362,'Kodinar',12),(363,'Lathi',12),(364,'Limbdi',12),(365,'Lunawada',12),(366,'Mahesana',12),(367,'Mahuva',12),(368,'Manavadar',12),(369,'Mandvi',12),(370,'Mangrol',12),(371,'Mansa',12),(372,'Mehmedabad',12),(373,'Modasa',12),(374,'Morvi',12),(375,'Nadiad',12),(376,'Navsari',12),(377,'Padra',12),(378,'Palanpur',12),(379,'Palitana',12),(380,'Pardi',12),(381,'Patan',12),(382,'Petlad',12),(383,'Porbandar',12),(384,'Radhanpur',12),(385,'Rajkot',12),(386,'Rajpipla',12),(387,'Rajula',12),(388,'Ranavav',12),(389,'Rapar',12),(390,'Salaya',12),(391,'Sanand',12),(392,'Savarkundla',12),(393,'Sidhpur',12),(394,'Sihor',12),(395,'Songadh',12),(396,'Surat',12),(397,'Talaja',12),(398,'Thangadh',12),(399,'Tharad',12),(400,'Umbergaon',12),(401,'Umreth',12),(402,'Una',12),(403,'Unjha',12),(404,'Upleta',12),(405,'Vadnagar',12),(406,'Vadodara',12),(407,'Valsad',12),(408,'Vapi',12),(409,'Vapi',12),(410,'Veraval',12),(411,'Vijapur',12),(412,'Viramgam',12),(413,'Visnagar',12),(414,'Vyara',12),(415,'Wadhwan',12),(416,'Wankaner',12),(417,'Adalaj',12),(418,'Adityana',12),(419,'Alang',12),(420,'Ambaji',12),(421,'Ambaliyasan',12),(422,'Andada',12),(423,'Anjar',12),(424,'Anklav',12),(425,'Antaliya',12),(426,'Arambhada',12),(427,'Atul',12),(428,'Ballabhgarh',13),(429,'Ambala',13),(430,'Ambala',13),(431,'Asankhurd',13),(432,'Assandh',13),(433,'Ateli',13),(434,'Babiyal',13),(435,'Bahadurgarh',13),(436,'Barwala',13),(437,'Bhiwani',13),(438,'Charkhi Dadri',13),(439,'Cheeka',13),(440,'Ellenabad 2',13),(441,'Faridabad',13),(442,'Fatehabad',13),(443,'Ganaur',13),(444,'Gharaunda',13),(445,'Gohana',13),(446,'Gurgaon',13),(447,'Haibat(Yamuna Nagar)',13),(448,'Hansi',13),(449,'Hisar',13),(450,'Hodal',13),(451,'Jhajjar',13),(452,'Jind',13),(453,'Kaithal',13),(454,'Kalan Wali',13),(455,'Kalka',13),(456,'Karnal',13),(457,'Ladwa',13),(458,'Mahendragarh',13),(459,'Mandi Dabwali',13),(460,'Narnaul',13),(461,'Narwana',13),(462,'Palwal',13),(463,'Panchkula',13),(464,'Panipat',13),(465,'Pehowa',13),(466,'Pinjore',13),(467,'Rania',13),(468,'Ratia',13),(469,'Rewari',13),(470,'Rohtak',13),(471,'Safidon',13),(472,'Samalkha',13),(473,'Shahbad',13),(474,'Sirsa',13),(475,'Sohna',13),(476,'Sonipat',13),(477,'Taraori',13),(478,'Thanesar',13),(479,'Tohana',13),(480,'Yamunanagar',13),(481,'Arki',14),(482,'Baddi',14),(483,'Bilaspur',14),(484,'Chamba',14),(485,'Dalhousie',14),(486,'Dharamsala',14),(487,'Hamirpur',14),(488,'Mandi',14),(489,'Nahan',14),(490,'Shimla',14),(491,'Solan',14),(492,'Sundarnagar',14),(493,'Jammu',15),(494,'Achabbal',15),(495,'Akhnoor',15),(496,'Anantnag',15),(497,'Arnia',15),(498,'Awantipora',15),(499,'Bandipore',15),(500,'Baramula',15),(501,'Kathua',15),(502,'Leh',15),(503,'Punch',15),(504,'Rajauri',15),(505,'Sopore',15),(506,'Srinagar',15),(507,'Udhampur',15),(508,'Amlabad',16),(509,'Ara',16),(510,'Barughutu',16),(511,'Bokaro Steel City',16),(512,'Chaibasa',16),(513,'Chakradharpur',16),(514,'Chandrapura',16),(515,'Chatra',16),(516,'Chirkunda',16),(517,'Churi',16),(518,'Daltonganj',16),(519,'Deoghar',16),(520,'Dhanbad',16),(521,'Dumka',16),(522,'Garhwa',16),(523,'Ghatshila',16),(524,'Giridih',16),(525,'Godda',16),(526,'Gomoh',16),(527,'Gumia',16),(528,'Gumla',16),(529,'Hazaribag',16),(530,'Hussainabad',16),(531,'Jamshedpur',16),(532,'Jamtara',16),(533,'Jhumri Tilaiya',16),(534,'Khunti',16),(535,'Lohardaga',16),(536,'Madhupur',16),(537,'Mihijam',16),(538,'Musabani',16),(539,'Pakaur',16),(540,'Patratu',16),(541,'Phusro',16),(542,'Ramngarh',16),(543,'Ranchi',16),(544,'Sahibganj',16),(545,'Saunda',16),(546,'Simdega',16),(547,'Tenu Dam-cum- Kathhara',16),(548,'Arasikere',17),(549,'Bangalore',17),(550,'Belgaum',17),(551,'Bellary',17),(552,'Chamrajnagar',17),(553,'Chikkaballapur',17),(554,'Chintamani',17),(555,'Chitradurga',17),(556,'Gulbarga',17),(557,'Gundlupet',17),(558,'Hassan',17),(559,'Hospet',17),(560,'Hubli',17),(561,'Karkala',17),(562,'Karwar',17),(563,'Kolar',17),(564,'Kota',17),(565,'Lakshmeshwar',17),(566,'Lingsugur',17),(567,'Maddur',17),(568,'Madhugiri',17),(569,'Madikeri',17),(570,'Magadi',17),(571,'Mahalingpur',17),(572,'Malavalli',17),(573,'Malur',17),(574,'Mandya',17),(575,'Mangalore',17),(576,'Manvi',17),(577,'Mudalgi',17),(578,'Mudbidri',17),(579,'Muddebihal',17),(580,'Mudhol',17),(581,'Mulbagal',17),(582,'Mundargi',17),(583,'Mysore',17),(584,'Nanjangud',17),(585,'Pavagada',17),(586,'Puttur',17),(587,'Rabkavi Banhatti',17),(588,'Raichur',17),(589,'Ramanagaram',17),(590,'Ramdurg',17),(591,'Ranibennur',17),(592,'Robertson Pet',17),(593,'Ron',17),(594,'Sadalgi',17),(595,'Sagar',17),(596,'Sakleshpur',17),(597,'Sandur',17),(598,'Sankeshwar',17),(599,'Saundatti-Yellamma',17),(600,'Savanur',17),(601,'Sedam',17),(602,'Shahabad',17),(603,'Shahpur',17),(604,'Shiggaon',17),(605,'Shikapur',17),(606,'Shimoga',17),(607,'Shorapur',17),(608,'Shrirangapattana',17),(609,'Sidlaghatta',17),(610,'Sindgi',17),(611,'Sindhnur',17),(612,'Sira',17),(613,'Sirsi',17),(614,'Siruguppa',17),(615,'Srinivaspur',17),(616,'Talikota',17),(617,'Tarikere',17),(618,'Tekkalakota',17),(619,'Terdal',17),(620,'Tiptur',17),(621,'Tumkur',17),(622,'Udupi',17),(623,'Vijayapura',17),(624,'Wadi',17),(625,'Yadgir',17),(626,'Adoor',18),(627,'Akathiyoor',18),(628,'Alappuzha',18),(629,'Ancharakandy',18),(630,'Aroor',18),(631,'Ashtamichira',18),(632,'Attingal',18),(633,'Avinissery',18),(634,'Chalakudy',18),(635,'Changanassery',18),(636,'Chendamangalam',18),(637,'Chengannur',18),(638,'Cherthala',18),(639,'Cheruthazham',18),(640,'Chittur-Thathamangalam',18),(641,'Chockli',18),(642,'Erattupetta',18),(643,'Guruvayoor',18),(644,'Irinjalakuda',18),(645,'Kadirur',18),(646,'Kalliasseri',18),(647,'Kalpetta',18),(648,'Kanhangad',18),(649,'Kanjikkuzhi',18),(650,'Kannur',18),(651,'Kasaragod',18),(652,'Kayamkulam',18),(653,'Kochi',18),(654,'Kodungallur',18),(655,'Kollam',18),(656,'Koothuparamba',18),(657,'Kothamangalam',18),(658,'Kottayam',18),(659,'Kozhikode',18),(660,'Kunnamkulam',18),(661,'Malappuram',18),(662,'Mattannur',18),(663,'Mavelikkara',18),(664,'Mavoor',18),(665,'Muvattupuzha',18),(666,'Nedumangad',18),(667,'Neyyattinkara',18),(668,'Ottappalam',18),(669,'Palai',18),(670,'Palakkad',18),(671,'Panniyannur',18),(672,'Pappinisseri',18),(673,'Paravoor',18),(674,'Pathanamthitta',18),(675,'Payyannur',18),(676,'Peringathur',18),(677,'Perinthalmanna',18),(678,'Perumbavoor',18),(679,'Ponnani',18),(680,'Punalur',18),(681,'Quilandy',18),(682,'Shoranur',18),(683,'Taliparamba',18),(684,'Thiruvalla',18),(685,'Thiruvananthapuram',18),(686,'Thodupuzha',18),(687,'Thrissur',18),(688,'Tirur',18),(689,'Vadakara',18),(690,'Vaikom',18),(691,'Varkala',18),(692,'Kavaratti',19),(693,'Ashok Nagar',20),(694,'Balaghat',20),(695,'Betul',20),(696,'Bhopal',20),(697,'Burhanpur',20),(698,'Chhatarpur',20),(699,'Dabra',20),(700,'Datia',20),(701,'Dewas',20),(702,'Dhar',20),(703,'Fatehabad',20),(704,'Gwalior',20),(705,'Indore',20),(706,'Itarsi',20),(707,'Jabalpur',20),(708,'Katni',20),(709,'Kotma',20),(710,'Lahar',20),(711,'Lundi',20),(712,'Maharajpur',20),(713,'Mahidpur',20),(714,'Maihar',20),(715,'Malajkhand',20),(716,'Manasa',20),(717,'Manawar',20),(718,'Mandideep',20),(719,'Mandla',20),(720,'Mandsaur',20),(721,'Mauganj',20),(722,'Mhow Cantonment',20),(723,'Mhowgaon',20),(724,'Morena',20),(725,'Multai',20),(726,'Murwara',20),(727,'Nagda',20),(728,'Nainpur',20),(729,'Narsinghgarh',20),(730,'Narsinghgarh',20),(731,'Neemuch',20),(732,'Nepanagar',20),(733,'Niwari',20),(734,'Nowgong',20),(735,'Nowrozabad',20),(736,'Pachore',20),(737,'Pali',20),(738,'Panagar',20),(739,'Pandhurna',20),(740,'Panna',20),(741,'Pasan',20),(742,'Pipariya',20),(743,'Pithampur',20),(744,'Porsa',20),(745,'Prithvipur',20),(746,'Raghogarh-Vijaypur',20),(747,'Rahatgarh',20),(748,'Raisen',20),(749,'Rajgarh',20),(750,'Ratlam',20),(751,'Rau',20),(752,'Rehli',20),(753,'Rewa',20),(754,'Sabalgarh',20),(755,'Sagar',20),(756,'Sanawad',20),(757,'Sarangpur',20),(758,'Sarni',20),(759,'Satna',20),(760,'Sausar',20),(761,'Sehore',20),(762,'Sendhwa',20),(763,'Seoni',20),(764,'Seoni-Malwa',20),(765,'Shahdol',20),(766,'Shajapur',20),(767,'Shamgarh',20),(768,'Sheopur',20),(769,'Shivpuri',20),(770,'Shujalpur',20),(771,'Sidhi',20),(772,'Sihora',20),(773,'Singrauli',20),(774,'Sironj',20),(775,'Sohagpur',20),(776,'Tarana',20),(777,'Tikamgarh',20),(778,'Ujhani',20),(779,'Ujjain',20),(780,'Umaria',20),(781,'Vidisha',20),(782,'Wara Seoni',20),(783,'Ahmednagar',21),(784,'Akola',21),(785,'Amravati',21),(786,'Aurangabad',21),(787,'Baramati',21),(788,'Chalisgaon',21),(789,'Chinchani',21),(790,'Devgarh',21),(791,'Dhule',21),(792,'Dombivli',21),(793,'Durgapur',21),(794,'Ichalkaranji',21),(795,'Jalna',21),(796,'Kalyan',21),(797,'Latur',21),(798,'Loha',21),(799,'Lonar',21),(800,'Lonavla',21),(801,'Mahad',21),(802,'Mahuli',21),(803,'Malegaon',21),(804,'Malkapur',21),(805,'Manchar',21),(806,'Mangalvedhe',21),(807,'Mangrulpir',21),(808,'Manjlegaon',21),(809,'Manmad',21),(810,'Manwath',21),(811,'Mehkar',21),(812,'Mhaswad',21),(813,'Miraj',21),(814,'Morshi',21),(815,'Mukhed',21),(816,'Mul',21),(817,'Mumbai',21),(818,'Murtijapur',21),(819,'Nagpur',21),(820,'Nalasopara',21),(821,'Nanded-Waghala',21),(822,'Nandgaon',21),(823,'Nandura',21),(824,'Nandurbar',21),(825,'Narkhed',21),(826,'Nashik',21),(827,'Navi Mumbai',21),(828,'Nawapur',21),(829,'Nilanga',21),(830,'Osmanabad',21),(831,'Ozar',21),(832,'Pachora',21),(833,'Paithan',21),(834,'Palghar',21),(835,'Pandharkaoda',21),(836,'Pandharpur',21),(837,'Panvel',21),(838,'Parbhani',21),(839,'Parli',21),(840,'Parola',21),(841,'Partur',21),(842,'Pathardi',21),(843,'Pathri',21),(844,'Patur',21),(845,'Pauni',21),(846,'Pen',21),(847,'Phaltan',21),(848,'Pulgaon',21),(849,'Pune',21),(850,'Purna',21),(851,'Pusad',21),(852,'Rahuri',21),(853,'Rajura',21),(854,'Ramtek',21),(855,'Ratnagiri',21),(856,'Raver',21),(857,'Risod',21),(858,'Sailu',21),(859,'Sangamner',21),(860,'Sangli',21),(861,'Sangole',21),(862,'Sasvad',21),(863,'Satana',21),(864,'Satara',21),(865,'Savner',21),(866,'Sawantwadi',21),(867,'Shahade',21),(868,'Shegaon',21),(869,'Shendurjana',21),(870,'Shirdi',21),(871,'Shirpur-Warwade',21),(872,'Shirur',21),(873,'Shrigonda',21),(874,'Shrirampur',21),(875,'Sillod',21),(876,'Sinnar',21),(877,'Solapur',21),(878,'Soyagaon',21),(879,'Talegaon Dabhade',21),(880,'Talode',21),(881,'Tasgaon',21),(882,'Tirora',21),(883,'Tuljapur',21),(884,'Tumsar',21),(885,'Uran',21),(886,'Uran Islampur',21),(887,'Wadgaon Road',21),(888,'Wai',21),(889,'Wani',21),(890,'Wardha',21),(891,'Warora',21),(892,'Warud',21),(893,'Washim',21),(894,'Yevla',21),(895,'Uchgaon',21),(896,'Udgir',21),(897,'Umarga',21),(898,'Umarkhed',21),(899,'Umred',21),(900,'Vadgaon Kasba',21),(901,'Vaijapur',21),(902,'Vasai',21),(903,'Virar',21),(904,'Vita',21),(905,'Yavatmal',21),(906,'Yawal',21),(907,'Imphal',22),(908,'Kakching',22),(909,'Lilong',22),(910,'Mayang Imphal',22),(911,'Thoubal',22),(912,'Jowai',23),(913,'Nongstoin',23),(914,'Shillong',23),(915,'Tura',23),(916,'Aizawl',24),(917,'Champhai',24),(918,'Lunglei',24),(919,'Saiha',24),(920,'Dimapur',25),(921,'Kohima',25),(922,'Mokokchung',25),(923,'Tuensang',25),(924,'Wokha',25),(925,'Zunheboto',25),(950,'Anandapur',26),(951,'Anugul',26),(952,'Asika',26),(953,'Balangir',26),(954,'Balasore',26),(955,'Baleshwar',26),(956,'Bamra',26),(957,'Barbil',26),(958,'Bargarh',26),(959,'Bargarh',26),(960,'Baripada',26),(961,'Basudebpur',26),(962,'Belpahar',26),(963,'Bhadrak',26),(964,'Bhawanipatna',26),(965,'Bhuban',26),(966,'Bhubaneswar',26),(967,'Biramitrapur',26),(968,'Brahmapur',26),(969,'Brajrajnagar',26),(970,'Byasanagar',26),(971,'Cuttack',26),(972,'Debagarh',26),(973,'Dhenkanal',26),(974,'Gunupur',26),(975,'Hinjilicut',26),(976,'Jagatsinghapur',26),(977,'Jajapur',26),(978,'Jaleswar',26),(979,'Jatani',26),(980,'Jeypur',26),(981,'Jharsuguda',26),(982,'Joda',26),(983,'Kantabanji',26),(984,'Karanjia',26),(985,'Kendrapara',26),(986,'Kendujhar',26),(987,'Khordha',26),(988,'Koraput',26),(989,'Malkangiri',26),(990,'Nabarangapur',26),(991,'Paradip',26),(992,'Parlakhemundi',26),(993,'Pattamundai',26),(994,'Phulabani',26),(995,'Puri',26),(996,'Rairangpur',26),(997,'Rajagangapur',26),(998,'Raurkela',26),(999,'Rayagada',26),(1000,'Sambalpur',26),(1001,'Soro',26),(1002,'Sunabeda',26),(1003,'Sundargarh',26),(1004,'Talcher',26),(1005,'Titlagarh',26),(1006,'Umarkote',26),(1007,'Karaikal',27),(1008,'Mahe',27),(1009,'Puducherry',27),(1010,'Yanam',27),(1011,'Ahmedgarh',28),(1012,'Amritsar',28),(1013,'Barnala',28),(1014,'Batala',28),(1015,'Bathinda',28),(1016,'Bhagha Purana',28),(1017,'Budhlada',28),(1018,'Chandigarh',28),(1019,'Dasua',28),(1020,'Dhuri',28),(1021,'Dinanagar',28),(1022,'Faridkot',28),(1023,'Fazilka',28),(1024,'Firozpur',28),(1025,'Firozpur Cantt.',28),(1026,'Giddarbaha',28),(1027,'Gobindgarh',28),(1028,'Gurdaspur',28),(1029,'Hoshiarpur',28),(1030,'Jagraon',28),(1031,'Jaitu',28),(1032,'Jalalabad',28),(1033,'Jalandhar',28),(1034,'Jalandhar Cantt.',28),(1035,'Jandiala',28),(1036,'Kapurthala',28),(1037,'Karoran',28),(1038,'Kartarpur',28),(1039,'Khanna',28),(1040,'Kharar',28),(1041,'Kot Kapura',28),(1042,'Kurali',28),(1043,'Longowal',28),(1044,'Ludhiana',28),(1045,'Malerkotla',28),(1046,'Malout',28),(1047,'Mansa',28),(1048,'Maur',28),(1049,'Moga',28),(1050,'Mohali',28),(1051,'Morinda',28),(1052,'Mukerian',28),(1053,'Muktsar',28),(1054,'Nabha',28),(1055,'Nakodar',28),(1056,'Nangal',28),(1057,'Nawanshahr',28),(1058,'Pathankot',28),(1059,'Patiala',28),(1060,'Patran',28),(1061,'Patti',28),(1062,'Phagwara',28),(1063,'Phillaur',28),(1064,'Qadian',28),(1065,'Raikot',28),(1066,'Rajpura',28),(1067,'Rampura Phul',28),(1068,'Rupnagar',28),(1069,'Samana',28),(1070,'Sangrur',28),(1071,'Sirhind Fatehgarh Sahib',28),(1072,'Sujanpur',28),(1073,'Sunam',28),(1074,'Talwara',28),(1075,'Tarn Taran',28),(1076,'Urmar Tanda',28),(1077,'Zira',28),(1078,'Zirakpur',28),(1079,'Bali',29),(1080,'Banswara',29),(1081,'Ajmer',29),(1082,'Alwar',29),(1083,'Bandikui',29),(1084,'Baran',29),(1085,'Barmer',29),(1086,'Bikaner',29),(1087,'Fatehpur',29),(1088,'Jaipur',29),(1089,'Jaisalmer',29),(1090,'Jodhpur',29),(1091,'Kota',29),(1092,'Lachhmangarh',29),(1093,'Ladnu',29),(1094,'Lakheri',29),(1095,'Lalsot',29),(1096,'Losal',29),(1097,'Makrana',29),(1098,'Malpura',29),(1099,'Mandalgarh',29),(1100,'Mandawa',29),(1101,'Mangrol',29),(1102,'Merta City',29),(1103,'Mount Abu',29),(1104,'Nadbai',29),(1105,'Nagar',29),(1106,'Nagaur',29),(1107,'Nargund',29),(1108,'Nasirabad',29),(1109,'Nathdwara',29),(1110,'Navalgund',29),(1111,'Nawalgarh',29),(1112,'Neem-Ka-Thana',29),(1113,'Nelamangala',29),(1114,'Nimbahera',29),(1115,'Nipani',29),(1116,'Niwai',29),(1117,'Nohar',29),(1118,'Nokha',29),(1119,'Pali',29),(1120,'Phalodi',29),(1121,'Phulera',29),(1122,'Pilani',29),(1123,'Pilibanga',29),(1124,'Pindwara',29),(1125,'Pipar City',29),(1126,'Prantij',29),(1127,'Pratapgarh',29),(1128,'Raisinghnagar',29),(1129,'Rajakhera',29),(1130,'Rajaldesar',29),(1131,'Rajgarh (Alwar)',29),(1132,'Rajgarh (Churu',29),(1133,'Rajsamand',29),(1134,'Ramganj Mandi',29),(1135,'Ramngarh',29),(1136,'Ratangarh',29),(1137,'Rawatbhata',29),(1138,'Rawatsar',29),(1139,'Reengus',29),(1140,'Sadri',29),(1141,'Sadulshahar',29),(1142,'Sagwara',29),(1143,'Sambhar',29),(1144,'Sanchore',29),(1145,'Sangaria',29),(1146,'Sardarshahar',29),(1147,'Sawai Madhopur',29),(1148,'Shahpura',29),(1149,'Shahpura',29),(1150,'Sheoganj',29),(1151,'Sikar',29),(1152,'Sirohi',29),(1153,'Sojat',29),(1154,'Sri Madhopur',29),(1155,'Sujangarh',29),(1156,'Sumerpur',29),(1157,'Suratgarh',29),(1158,'Taranagar',29),(1159,'Todabhim',29),(1160,'Todaraisingh',29),(1161,'Tonk',29),(1162,'Udaipur',29),(1163,'Udaipurwati',29),(1164,'Vijainagar',29),(1165,'Gangtok',30),(1166,'Calcutta',36),(1167,'Arakkonam',31),(1168,'Arcot',31),(1169,'Aruppukkottai',31),(1170,'Bhavani',31),(1171,'Chengalpattu',31),(1172,'Chennai',31),(1173,'Chinna salem',31),(1174,'Coimbatore',31),(1175,'Coonoor',31),(1176,'Cuddalore',31),(1177,'Dharmapuri',31),(1178,'Dindigul',31),(1179,'Erode',31),(1180,'Gudalur',31),(1181,'Gudalur',31),(1182,'Gudalur',31),(1183,'Kanchipuram',31),(1184,'Karaikudi',31),(1185,'Karungal',31),(1186,'Karur',31),(1187,'Kollankodu',31),(1188,'Lalgudi',31),(1189,'Madurai',31),(1190,'Nagapattinam',31),(1191,'Nagercoil',31),(1192,'Namagiripettai',31),(1193,'Namakkal',31),(1194,'Nandivaram-Guduvancheri',31),(1195,'Nanjikottai',31),(1196,'Natham',31),(1197,'Nellikuppam',31),(1198,'Neyveli',31),(1199,'O\' Valley',31),(1200,'Oddanchatram',31),(1201,'P.N.Patti',31),(1202,'Pacode',31),(1203,'Padmanabhapuram',31),(1204,'Palani',31),(1205,'Palladam',31),(1206,'Pallapatti',31),(1207,'Pallikonda',31),(1208,'Panagudi',31),(1209,'Panruti',31),(1210,'Paramakudi',31),(1211,'Parangipettai',31),(1212,'Pattukkottai',31),(1213,'Perambalur',31),(1214,'Peravurani',31),(1215,'Periyakulam',31),(1216,'Periyasemur',31),(1217,'Pernampattu',31),(1218,'Pollachi',31),(1219,'Polur',31),(1220,'Ponneri',31),(1221,'Pudukkottai',31),(1222,'Pudupattinam',31),(1223,'Puliyankudi',31),(1224,'Punjaipugalur',31),(1225,'Rajapalayam',31),(1226,'Ramanathapuram',31),(1227,'Rameshwaram',31),(1228,'Rasipuram',31),(1229,'Salem',31),(1230,'Sankarankoil',31),(1231,'Sankari',31),(1232,'Sathyamangalam',31),(1233,'Sattur',31),(1234,'Shenkottai',31),(1235,'Sholavandan',31),(1236,'Sholingur',31),(1237,'Sirkali',31),(1238,'Sivaganga',31),(1239,'Sivagiri',31),(1240,'Sivakasi',31),(1241,'Srivilliputhur',31),(1242,'Surandai',31),(1243,'Suriyampalayam',31),(1244,'Tenkasi',31),(1245,'Thammampatti',31),(1246,'Thanjavur',31),(1247,'Tharamangalam',31),(1248,'Tharangambadi',31),(1249,'Theni Allinagaram',31),(1250,'Thirumangalam',31),(1251,'Thirunindravur',31),(1252,'Thiruparappu',31),(1253,'Thirupuvanam',31),(1254,'Thiruthuraipoondi',31),(1255,'Thiruvallur',31),(1256,'Thiruvarur',31),(1257,'Thoothukudi',31),(1258,'Thuraiyur',31),(1259,'Tindivanam',31),(1260,'Tiruchendur',31),(1261,'Tiruchengode',31),(1262,'Tiruchirappalli',31),(1263,'Tirukalukundram',31),(1264,'Tirukkoyilur',31),(1265,'Tirunelveli',31),(1266,'Tirupathur',31),(1267,'Tirupathur',31),(1268,'Tiruppur',31),(1269,'Tiruttani',31),(1270,'Tiruvannamalai',31),(1271,'Tiruvethipuram',31),(1272,'Tittakudi',31),(1273,'Udhagamandalam',31),(1274,'Udumalaipettai',31),(1275,'Unnamalaikadai',31),(1276,'Usilampatti',31),(1277,'Uthamapalayam',31),(1278,'Uthiramerur',31),(1279,'Vadakkuvalliyur',31),(1280,'Vadalur',31),(1281,'Vadipatti',31),(1282,'Valparai',31),(1283,'Vandavasi',31),(1284,'Vaniyambadi',31),(1285,'Vedaranyam',31),(1286,'Vellakoil',31),(1287,'Vellore',31),(1288,'Vikramasingapuram',31),(1289,'Viluppuram',31),(1290,'Virudhachalam',31),(1291,'Virudhunagar',31),(1292,'Viswanatham',31),(1293,'Agartala',33),(1294,'Badharghat',33),(1295,'Dharmanagar',33),(1296,'Indranagar',33),(1297,'Jogendranagar',33),(1298,'Kailasahar',33),(1299,'Khowai',33),(1300,'Pratapgarh',33),(1301,'Udaipur',33),(1302,'Achhnera',34),(1303,'Adari',34),(1304,'Agra',34),(1305,'Aligarh',34),(1306,'Allahabad',34),(1307,'Amroha',34),(1308,'Azamgarh',34),(1309,'Bahraich',34),(1310,'Ballia',34),(1311,'Balrampur',34),(1312,'Banda',34),(1313,'Bareilly',34),(1314,'Chandausi',34),(1315,'Dadri',34),(1316,'Deoria',34),(1317,'Etawah',34),(1318,'Fatehabad',34),(1319,'Fatehpur',34),(1320,'Fatehpur',34),(1321,'Greater Noida',34),(1322,'Hamirpur',34),(1323,'Hardoi',34),(1324,'Jajmau',34),(1325,'Jaunpur',34),(1326,'Jhansi',34),(1327,'Kalpi',34),(1328,'Kanpur',34),(1329,'Kota',34),(1330,'Laharpur',34),(1331,'Lakhimpur',34),(1332,'Lal Gopalganj Nindaura',34),(1333,'Lalganj',34),(1334,'Lalitpur',34),(1335,'Lar',34),(1336,'Loni',34),(1337,'Lucknow',34),(1338,'Mathura',34),(1339,'Meerut',34),(1340,'Modinagar',34),(1341,'Muradnagar',34),(1342,'Nagina',34),(1343,'Najibabad',34),(1344,'Nakur',34),(1345,'Nanpara',34),(1346,'Naraura',34),(1347,'Naugawan Sadat',34),(1348,'Nautanwa',34),(1349,'Nawabganj',34),(1350,'Nehtaur',34),(1351,'NOIDA',34),(1352,'Noorpur',34),(1353,'Obra',34),(1354,'Orai',34),(1355,'Padrauna',34),(1356,'Palia Kalan',34),(1357,'Parasi',34),(1358,'Phulpur',34),(1359,'Pihani',34),(1360,'Pilibhit',34),(1361,'Pilkhuwa',34),(1362,'Powayan',34),(1363,'Pukhrayan',34),(1364,'Puranpur',34),(1365,'Purquazi',34),(1366,'Purwa',34),(1367,'Rae Bareli',34),(1368,'Rampur',34),(1369,'Rampur Maniharan',34),(1370,'Rasra',34),(1371,'Rath',34),(1372,'Renukoot',34),(1373,'Reoti',34),(1374,'Robertsganj',34),(1375,'Rudauli',34),(1376,'Rudrapur',34),(1377,'Sadabad',34),(1378,'Safipur',34),(1379,'Saharanpur',34),(1380,'Sahaspur',34),(1381,'Sahaswan',34),(1382,'Sahawar',34),(1383,'Sahjanwa',34),(1385,'Sambhal',34),(1386,'Samdhan',34),(1387,'Samthar',34),(1388,'Sandi',34),(1389,'Sandila',34),(1390,'Sardhana',34),(1391,'Seohara',34),(1394,'Shahganj',34),(1395,'Shahjahanpur',34),(1396,'Shamli',34),(1399,'Sherkot',34),(1401,'Shikohabad',34),(1402,'Shishgarh',34),(1403,'Siana',34),(1404,'Sikanderpur',34),(1405,'Sikandra Rao',34),(1406,'Sikandrabad',34),(1407,'Sirsaganj',34),(1408,'Sirsi',34),(1409,'Sitapur',34),(1410,'Soron',34),(1411,'Suar',34),(1412,'Sultanpur',34),(1413,'Sumerpur',34),(1414,'Tanda',34),(1415,'Tanda',34),(1416,'Tetri Bazar',34),(1417,'Thakurdwara',34),(1418,'Thana Bhawan',34),(1419,'Tilhar',34),(1420,'Tirwaganj',34),(1421,'Tulsipur',34),(1422,'Tundla',34),(1423,'Unnao',34),(1424,'Utraula',34),(1425,'Varanasi',34),(1426,'Vrindavan',34),(1427,'Warhapur',34),(1428,'Zaidpur',34),(1429,'Zamania',34),(1430,'Almora',35),(1431,'Bazpur',35),(1432,'Chamba',35),(1433,'Dehradun',35),(1434,'Haldwani',35),(1435,'Haridwar',35),(1436,'Jaspur',35),(1437,'Kashipur',35),(1438,'kichha',35),(1439,'Kotdwara',35),(1440,'Manglaur',35),(1441,'Mussoorie',35),(1442,'Nagla',35),(1443,'Nainital',35),(1444,'Pauri',35),(1445,'Pithoragarh',35),(1446,'Ramnagar',35),(1447,'Rishikesh',35),(1448,'Roorkee',35),(1449,'Rudrapur',35),(1450,'Sitarganj',35),(1451,'Tehri',35),(1452,'Muzaffarnagar',34),(1454,'Alipurduar',36),(1455,'Arambagh',36),(1456,'Asansol',36),(1457,'Baharampur',36),(1458,'Bally',36),(1459,'Balurghat',36),(1460,'Bankura',36),(1461,'Barakar',36),(1462,'Barasat',36),(1463,'Bardhaman',36),(1464,'Bidhan Nagar',36),(1465,'Chinsura',36),(1466,'Contai',36),(1467,'Cooch Behar',36),(1468,'Darjeeling',36),(1469,'Durgapur',36),(1470,'Haldia',36),(1471,'Howrah',36),(1472,'Islampur',36),(1473,'Jhargram',36),(1474,'Kharagpur',36),(1475,'Kolkata',36),(1476,'Mainaguri',36),(1477,'Mal',36),(1478,'Mathabhanga',36),(1479,'Medinipur',36),(1480,'Memari',36),(1481,'Monoharpur',36),(1482,'Murshidabad',36),(1483,'Nabadwip',36),(1484,'Naihati',36),(1485,'Panchla',36),(1486,'Pandua',36),(1487,'Paschim Punropara',36),(1488,'Purulia',36),(1489,'Raghunathpur',36),(1490,'Raiganj',36),(1491,'Rampurhat',36),(1492,'Ranaghat',36),(1493,'Sainthia',36),(1494,'Santipur',36),(1495,'Siliguri',36),(1496,'Sonamukhi',36),(1497,'Srirampore',36),(1498,'Suri',36),(1499,'Taki',36),(1500,'Tamluk',36),(1501,'Tarakeswar',36),(1502,'Chikmagalur',17),(1503,'Davanagere',17),(1504,'Dharwad',17),(1505,'Gadag',17),(1506,'Chennai',31),(1507,'Coimbatore',31);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educationMaster`
--

DROP TABLE IF EXISTS `educationMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educationMaster` (
  `eduId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `BoardOrUni` varchar(54) DEFAULT NULL,
  `course` varchar(32) DEFAULT NULL,
  `passingYear` year DEFAULT NULL,
  `percentage` decimal(10,3) DEFAULT NULL,
  PRIMARY KEY (`eduId`),
  KEY `fk_educationMaster_1_idx` (`AplicantId`),
  CONSTRAINT `fk_educationMaster_1` FOREIGN KEY (`AplicantId`) REFERENCES `basicDetails` (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=529 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educationMaster`
--

LOCK TABLES `educationMaster` WRITE;
/*!40000 ALTER TABLE `educationMaster` DISABLE KEYS */;
INSERT INTO `educationMaster` VALUES (493,5,'GSEB','SSC',2017,76.160),(494,5,'GHSEB','HSC',2019,67.130),(495,5,'VNSGU','BCA',2022,87.880),(496,5,'DDU','MCA',2024,70.400),(525,37,'Gseb','SSC',2017,76.160),(526,37,'GHSEB','HSC',2019,67.130),(527,37,'VNSGU','BCA',2022,87.880),(528,37,'ddu','MCA',2024,70.000);
/*!40000 ALTER TABLE `educationMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `langId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `isRead` tinyint(1) DEFAULT NULL,
  `isWrite` tinyint(1) DEFAULT NULL,
  `isSpeak` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`langId`),
  KEY `AplicantId` (`AplicantId`),
  CONSTRAINT `languages_ibfk_1` FOREIGN KEY (`AplicantId`) REFERENCES `basicDetails` (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=247 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (222,5,'Hindi',1,0,1),(223,5,'english',1,1,0),(245,37,'Hindi',0,1,0),(246,37,'Gujarati',0,1,0);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optionMaster`
--

DROP TABLE IF EXISTS `optionMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `optionMaster` (
  `optionId` int NOT NULL AUTO_INCREMENT,
  `selectId` int DEFAULT NULL,
  `optionKey` varchar(59) DEFAULT NULL,
  `optionValue` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`optionId`),
  KEY `selectId` (`selectId`),
  CONSTRAINT `optionMaster_ibfk_1` FOREIGN KEY (`selectId`) REFERENCES `selectMaster` (`selectId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optionMaster`
--

LOCK TABLES `optionMaster` WRITE;
/*!40000 ALTER TABLE `optionMaster` DISABLE KEYS */;
INSERT INTO `optionMaster` VALUES (1,1,'male','Male'),(2,1,'female','Female'),(3,2,'hindi','Hindi'),(4,2,'gujarati','Gujarati'),(5,2,'english','English'),(6,3,'single','Single'),(7,3,'married','Married'),(8,3,'divorce','Divorce'),(9,4,'surat','Surat'),(10,4,'vadodra','Vadodra'),(11,4,'ahmedabad','Ahmedabad'),(12,5,'php','PHP'),(13,5,'mysql','Mysql'),(14,5,'laravel','Laravel'),(15,5,'Oracle','Oracle'),(16,6,'design','Design'),(17,6,'marketing','Marketing'),(18,6,'development','Development');
/*!40000 ALTER TABLE `optionMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferances`
--

DROP TABLE IF EXISTS `preferances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferances` (
  `prefrenceId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `prefere_location` varchar(30) DEFAULT NULL,
  `noticePeriod` varchar(30) DEFAULT NULL,
  `expactedCTC` decimal(15,2) DEFAULT NULL,
  `currentCTC` decimal(15,2) DEFAULT NULL,
  `department` varchar(19) DEFAULT NULL,
  PRIMARY KEY (`prefrenceId`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferances`
--

LOCK TABLES `preferances` WRITE;
/*!40000 ALTER TABLE `preferances` DISABLE KEYS */;
INSERT INTO `preferances` VALUES (3,5,'vadodra,ahmedabad','20 days',234423.00,743463.00,'marketing'),(27,37,'vadodra,ahmedabad','40 days',231312.00,3432.00,'marketing');
/*!40000 ALTER TABLE `preferances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference` (
  `referencesId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `contactNumber` varchar(50) DEFAULT NULL,
  `relation` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`referencesId`),
  KEY `fk_reference_1_idx` (`AplicantId`),
  CONSTRAINT `fk_reference_1` FOREIGN KEY (`AplicantId`) REFERENCES `basicDetails` (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
INSERT INTO `reference` VALUES (115,5,'Vivek','9382932323','classmate'),(116,5,'Ayush','3094809384','Brother'),(125,37,'Rajni','9879879','Brother');
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selectMaster`
--

DROP TABLE IF EXISTS `selectMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selectMaster` (
  `selectId` int NOT NULL AUTO_INCREMENT,
  `selectType` varchar(50) DEFAULT NULL,
  `selectName` varchar(40) DEFAULT NULL,
  `multivalue` tinyint(1) DEFAULT NULL,
  `selectKey` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`selectId`),
  UNIQUE KEY `selectName` (`selectName`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selectMaster`
--

LOCK TABLES `selectMaster` WRITE;
/*!40000 ALTER TABLE `selectMaster` DISABLE KEYS */;
INSERT INTO `selectMaster` VALUES (1,'radio','gender',0,'gender_radio'),(2,'checkbox','language',1,'language_checkbox'),(3,'select','relation',0,'relation_combo'),(4,'select','preference_location',1,'preference_location_combo'),(5,'checkbox','technologies',1,'technologies_checkbox'),(6,'select','department',0,'department_combo');
/*!40000 ALTER TABLE `selectMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Andaman & Nicobar Islands'),(2,'Andhra Pradesh'),(3,'Arunachal Pradesh'),(4,'Assam'),(5,'Bihar'),(6,'Chandigarh'),(7,'Chhattisgarh'),(8,'Dadra & Nagar Haveli'),(9,'Daman & Diu'),(10,'Delhi'),(11,'Goa'),(12,'Gujarat'),(13,'Haryana'),(14,'Himachal Pradesh'),(15,'Jammu & Kashmir'),(16,'Jharkhand'),(17,'Karnataka'),(18,'Kerala'),(19,'Lakshadweep'),(20,'Madhya Pradesh'),(21,'Maharashtra'),(22,'Manipur'),(23,'Meghalaya'),(24,'Mizoram'),(25,'Nagaland'),(26,'Odisha'),(27,'Puducherry'),(28,'Punjab'),(29,'Rajasthan'),(30,'Sikkim'),(31,'Tamil Nadu'),(32,'Telangana'),(33,'Tripura'),(34,'Uttar Pradesh'),(35,'Uttarakhand'),(36,'West Bengal');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technologies`
--

DROP TABLE IF EXISTS `technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technologies` (
  `techId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `technology` varchar(50) DEFAULT NULL,
  `isBeginner` tinyint(1) DEFAULT NULL,
  `isMidiater` tinyint(1) DEFAULT NULL,
  `isExpert` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`techId`),
  KEY `AplicantId` (`AplicantId`),
  CONSTRAINT `technologies_ibfk_1` FOREIGN KEY (`AplicantId`) REFERENCES `basicDetails` (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technologies`
--

LOCK TABLES `technologies` WRITE;
/*!40000 ALTER TABLE `technologies` DISABLE KEYS */;
INSERT INTO `technologies` VALUES (212,5,'php',0,0,1),(213,5,'MYsql',0,1,0),(214,5,'Laravel',0,1,0),(215,5,'Oracle',1,0,0),(235,37,'php',0,1,0),(236,37,'Oracle',0,0,1);
/*!40000 ALTER TABLE `technologies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workExperience`
--

DROP TABLE IF EXISTS `workExperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workExperience` (
  `wXId` int NOT NULL AUTO_INCREMENT,
  `AplicantId` int DEFAULT NULL,
  `companyName` varchar(50) DEFAULT NULL,
  `Designation` varchar(30) DEFAULT NULL,
  `fromDate` date DEFAULT NULL,
  `toDate` date DEFAULT NULL,
  PRIMARY KEY (`wXId`),
  KEY `fk_workExperience_1_idx` (`AplicantId`),
  CONSTRAINT `fk_workExperience_1` FOREIGN KEY (`AplicantId`) REFERENCES `basicDetails` (`AplicantId`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workExperience`
--

LOCK TABLES `workExperience` WRITE;
/*!40000 ALTER TABLE `workExperience` DISABLE KEYS */;
INSERT INTO `workExperience` VALUES (137,5,'techHolding','developer','2012-02-22','2019-03-31'),(138,5,'CIMCON','Manger','2021-01-22','2024-02-22'),(147,37,'radha','Salesperson','2012-02-23','2023-04-23');
/*!40000 ALTER TABLE `workExperience` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `studentDetails`
--

DROP TABLE IF EXISTS `studentDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentDetails` (
  `studId` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `gender` varchar(12) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `address1` varchar(350) DEFAULT NULL,
  `address2` varchar(350) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `emailId` varchar(60) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `state` varchar(15) DEFAULT NULL,
  `zipCode` varchar(10) DEFAULT NULL,
  `createdAt` timestamp(5) NULL DEFAULT CURRENT_TIMESTAMP(5),
  PRIMARY KEY (`studId`)
) ENGINE=InnoDB AUTO_INCREMENT=100001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentDetails`
--

LOCK TABLES `studentDetails` WRITE;
/*!40000 ALTER TABLE `studentDetails` DISABLE KEYS */;
INSERT INTO `studentDetails` VALUES (1,'Rajni','Tank','M','2012-08-21','Amroli','Varachha','Surat','rajni@gmail.com','9008989789','Gujarat','9879098','2024-02-15 18:30:05.00000'),(2,'Ram','Chnadra','M','2024-01-24','Ayodhya','Janakpuri','Avadh','ram@gmail.com','0997864532','UP','879878','2024-02-15 18:30:05.00000'),(3,'Shailesh','Chaudhary','M','2012-08-21','Amroli','Varachha','Surat','ram@gmail.com','9008989789','Gujarat','9879098','2024-02-15 18:30:05.00000'),(4,'Ramesh','Tank','M','2001-12-22','katargam','Varachha','Ahmedabad','dndsdn@gmail.com','45435353445','Gujarat','5645485','2024-02-15 18:30:05.00000');
/*!40000 ALTER TABLE `studentDetails` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `user_registrations`
--

DROP TABLE IF EXISTS `user_registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_registrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email_id` varchar(45) DEFAULT NULL,
  `created_at` timestamp(5) NULL DEFAULT CURRENT_TIMESTAMP(5),
  `status` tinyint(1) DEFAULT '0',
  `salt` varchar(45) DEFAULT NULL,
  `activation_token` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_registrations`
--

LOCK TABLES `user_registrations` WRITE;
/*!40000 ALTER TABLE `user_registrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_registrations` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `attendence`
--

DROP TABLE IF EXISTS `attendence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendence` (
  `attendId` int NOT NULL AUTO_INCREMENT,
  `studId` int DEFAULT NULL,
  `dateOfAttend` date DEFAULT NULL,
  `isAttend` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`attendId`),
  UNIQUE KEY `compositeKey` (`studId`,`dateOfAttend`)
) ENGINE=InnoDB AUTO_INCREMENT=23181 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendence`
--

LOCK TABLES `attendence` WRITE;
/*!40000 ALTER TABLE `attendence` DISABLE KEYS */;
INSERT INTO `attendence` VALUES (1,1,'2023-12-01','p'),(2,2,'2023-12-01','p'),(3,3,'2023-12-01','p'),(4,4,'2023-12-01','p'),(5,5,'2023-12-01','p'),(6,6,'2023-12-01','p'),(7,7,'2023-12-01','p'),(8,8,'2023-12-01','p'),(9,9,'2023-12-01','ab'),(10,10,'2023-12-01','p'),(11,11,'2023-12-01','p'),(12,12,'2023-12-01','p'),(13,13,'2023-12-01','p'),(14,14,'2023-12-01','p'),(15,15,'2023-12-01','p'),(16,16,'2023-12-01','p'),(17,17,'2023-12-01','p'),(18,18,'2023-12-01','ab'),(19,19,'2023-12-01','p'),(20,20,'2023-12-01','p'),(21,21,'2023-12-01','p'),(22,22,'2023-12-01','p'),(23,23,'2023-12-01','p'),(24,24,'2023-12-01','p'),(25,25,'2023-12-01','p'),(26,26,'2023-12-01','p'),(27,27,'2023-12-01','ab'),(28,28,'2023-12-01','p'),(29,29,'2023-12-01','p'),(30,30,'2023-12-01','p');
/*!40000 ALTER TABLE `attendence` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `examMaster`
--

DROP TABLE IF EXISTS `examMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examMaster` (
  `examId` int NOT NULL,
  `examType` varchar(50) NOT NULL,
  PRIMARY KEY (`examId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examMaster`
--

LOCK TABLES `examMaster` WRITE;
/*!40000 ALTER TABLE `examMaster` DISABLE KEYS */;
INSERT INTO `examMaster` VALUES (1,'Terminal'),(2,'Prelims'),(3,'Final');
/*!40000 ALTER TABLE `examMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `examResultId` int NOT NULL AUTO_INCREMENT,
  `studId` int DEFAULT NULL,
  `subId` int DEFAULT NULL,
  `examId` int DEFAULT NULL,
  `totalPrecticalMarks` int NOT NULL DEFAULT '20',
  `obtainPrecticalMarks` int DEFAULT NULL,
  `totalTheoryMarks` int NOT NULL DEFAULT '80',
  `obtainTheoryMarks` int DEFAULT NULL,
  `grandTotal` int DEFAULT NULL,
  PRIMARY KEY (`examResultId`),
  KEY `subId` (`subId`),
  KEY `examId` (`examId`),
  KEY `studId` (`studId`)
) ENGINE=InnoDB AUTO_INCREMENT=4141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (1,1,6,1,20,6,30,7,13),(2,1,6,2,20,17,30,24,41),(3,1,6,3,30,1,70,55,56),(4,1,5,1,20,6,30,27,33),(5,1,5,2,20,10,30,21,31),(6,1,5,3,30,23,70,33,56),(7,1,4,1,20,12,30,9,21),(8,1,4,2,20,18,30,11,29),(9,1,4,3,30,14,70,25,39),(10,1,3,1,20,13,30,15,28),(11,1,3,2,20,15,30,22,37),(12,1,3,3,30,22,70,54,76),(13,1,2,1,20,11,30,7,18),(14,1,2,2,20,18,30,25,43),(15,1,2,3,30,18,70,51,69),(16,1,1,1,20,11,30,1,12),(17,1,1,2,20,18,30,25,43),(18,1,1,3,30,25,70,31,56);
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentMaster`
--

DROP TABLE IF EXISTS `studentMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentMaster` (
  `studId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `gender` varchar(34) NOT NULL,
  PRIMARY KEY (`studId`)
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentMaster`
--

LOCK TABLES `studentMaster` WRITE;
/*!40000 ALTER TABLE `studentMaster` DISABLE KEYS */;
INSERT INTO `studentMaster` VALUES (1,'radha','F'),(2,'RAjesj','m'),(3,'RAj','m'),(4,'Rani','F'),(5,'Honey','F'),(6,'Shaili','F'),(7,'Krishna','F'),(8,'Shyama','F'),(9,'Hetvi','F'),(10,'Krishna','F'),(11,'Shanti','F'),(12,'Swati','F'),(13,'Surekha','F'),(14,'Kailsh','F'),(15,'Bhoomi','F'),(16,'Ranjan','F'),(17,'Spna','F'),(18,'Asmita','F'),(19,'Sona','F'),(20,'Shulekha','F'),(21,'Prachi','F'),(22,'Princy','F'),(23,'Basnti','F'),(24,'Jaya','F'),(25,'Daya','F'),(26,'Kaya','F'),(27,'Rupa','F'),(28,'Rama','F'),(29,'Rohini','F'),(30,'Ragini','F');
/*!40000 ALTER TABLE `studentMaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjectMaster`
--

DROP TABLE IF EXISTS `subjectMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectMaster` (
  `subId` int NOT NULL AUTO_INCREMENT,
  `sem` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `course` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`subId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjectMaster`
--

LOCK TABLES `subjectMaster` WRITE;
/*!40000 ALTER TABLE `subjectMaster` DISABLE KEYS */;
INSERT INTO `subjectMaster` VALUES (1,1,'OOP','MCA'),(2,1,'DSA','MCA'),(3,1,'DBMS','MCA'),(4,1,'NETWORKING','MCA'),(5,1,'OS','MCA'),(6,1,'SE','MCA');
/*!40000 ALTER TABLE `subjectMaster` ENABLE KEYS */;
UNLOCK TABLES;

--



--
-- Table structure for table `usersDetails`
--

DROP TABLE IF EXISTS `usersDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersDetails` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(34) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `emailId` varchar(80) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `hobbies` varchar(50) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersDetails`
--

LOCK TABLES `usersDetails` WRITE;
/*!40000 ALTER TABLE `usersDetails` DISABLE KEYS */;
INSERT INTO `usersDetails` VALUES (4,'Maha','shankar',1000,'23430928','ram@gmail.com','Male','read,traveling,singing,codding','Kaila\r\nsh'),(5,'Shiv','Shambhu',100000,'3847238321','shiv@gmail.com','Male','read,traveling','Himalya');
/*!40000 ALTER TABLE `usersDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsMaster`
--

DROP TABLE IF EXISTS `studentsMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentsMasters` (
  `studId` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `mobileno` int DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`studId`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsMaster`
--

LOCK TABLES `studentsMaster` WRITE;
/*!40000 ALTER TABLE `studentsMaster` DISABLE KEYS */;
INSERT INTO `studentsMaster` VALUES (1,'Minda','Michella','Minda.Michella@gmail.com',70,965609746,'Singapore'),(2,'Helena','Marcellus','Helena.Marcellus@gmail.com',10,163227234,'Brussels'),(3,'Mireielle','Shaddock','Mireielle.Shaddock@gmail.com',35,1499653887,'Raleigh'),(4,'Marnia','Sharl','Marnia.Sharl@gmail.com',13,522446849,'Vitória'),(5,'Julieta','Rocray','Julieta.Rocray@gmail.com',13,498175533,'Bergen'),(6,'Marti','Catie','Marti.Catie@gmail.com',85,368495810,'Buffalo'),(7,'Kial','Han','Kial.Han@gmail.com',83,2130286622,'London'),(8,'Berta','Hylan','Berta.Hylan@gmail.com',55,358509515,'Malmö'),(9,'Coral','Brieta','Coral.Brieta@gmail.com',36,943176605,'Namangan'),(10,'Elise','Fosque','Elise.Fosque@gmail.com',74,1788067030,'Dublin'),(11,'Madalyn','Dalli','Madalyn.Dalli@gmail.com',93,1810942746,'Adelaide'),(12,'Constance','Grayce','Constance.Grayce@gmail.com',88,2063876879,'Christchurch'),(13,'Ofilia','Horan','Ofilia.Horan@gmail.com',18,1218425950,'Munich'),(14,'Rosabelle','Stilwell','Rosabelle.Stilwell@gmail.com',95,830295664,'Brisbane'),(15,'Ira','Ardra','Ira.Ardra@gmail.com',33,442260167,'Concepción'),(16,'Elmira','Berard','Elmira.Berard@gmail.com',82,561131704,'Montreal'),(17,'Aimil','Ehrman','Aimil.Ehrman@gmail.com',54,723494249,'Siem Reap'),(18,'Genovera','Bevin','Genovera.Bevin@gmail.com',51,954273615,'Perm'),(19,'Eolanda','Gladstone','Eolanda.Gladstone@gmail.com',66,414849832,'Quetzaltenango'),(20,'Riannon','Milson','Riannon.Milson@gmail.com',15,1987689935,'Kota Bharu'),(21,'Harmonia','Prouty','Harmonia.Prouty@gmail.com',36,867325097,'Bishkek'),(22,'Amii','Orlene','Amii.Orlene@gmail.com',61,2025734862,'Edmonton'),(23,'Amelia','Janith','Amelia.Janith@gmail.com',22,1910805740,'Mendoza'),(24,'Rhoda','Maroney','Rhoda.Maroney@gmail.com',100,198706905,'Yellowknife'),(25,'Ardys','Fiann','Ardys.Fiann@gmail.com',89,1529318554,'Rochester'),(26,'Jany','Olnee','Jany.Olnee@gmail.com',88,609111830,'Johor Bahru'),(27,'Jere','Erminia','Jere.Erminia@gmail.com',31,1679719563,'Oklahoma City'),(28,'Benita','O\'Rourke','Benita.O\'Rourke@gmail.com',11,443014966,'Petropavlovsk-Kamchatsky'),(29,'Concettina','Pitt','Concettina.Pitt@gmail.com',32,485543077,'Split (city)'),(30,'Kenna','Donell','Kenna.Donell@gmail.com',52,453746027,'Ndola');
/*!40000 ALTER TABLE `studentMaster` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 18:28:13
