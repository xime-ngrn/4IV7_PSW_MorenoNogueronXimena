-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: alumnos
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumnobatiz`
--
create database alumnos;
use alumnos;

DROP TABLE IF EXISTS `alumnobatiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnobatiz` (
  `boleta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `appat` varchar(30) NOT NULL,
  `apmat` varchar(30) NOT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`boleta`),
  KEY `nombre` (`nombre`),
  KEY `appat` (`appat`)
) ENGINE=InnoDB AUTO_INCREMENT=2021090546 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnobatiz`
--

LOCK TABLES `alumnobatiz` WRITE;
/*!40000 ALTER TABLE `alumnobatiz` DISABLE KEYS */;
INSERT INTO `alumnobatiz` VALUES (3,'Ximena','Gonzalez','Garcia','5571515837'),(6,'Jaqueline','Marcelo','Perez','5582015'),(25,'Bruno','Nogueron','Perez','88205040'),(2021,'Carmelo','Marcelo','Wuka','5582015'),(202109,'Ximena','Moreno','Nogueron','5571515837');
/*!40000 ALTER TABLE `alumnobatiz` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-03 20:50:46
