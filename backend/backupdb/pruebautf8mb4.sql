-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: sistemacontrolcovid
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingreso`
--

DROP TABLE IF EXISTS `ingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingreso` (
  `_idIngreso` int(11) NOT NULL AUTO_INCREMENT,
  `fechaIngreso` datetime NOT NULL,
  `fechaSalida` datetime DEFAULT NULL,
  `fkPersona` varchar(45) NOT NULL,
  `fkEntrada` int(11) NOT NULL,
  `fkSalida` int(11) DEFAULT NULL,
  PRIMARY KEY (`_idIngreso`),
  KEY `fk_ingreso_persona1_idx` (`fkPersona`),
  KEY `fk_ingreso_torre1_idx` (`fkEntrada`),
  KEY `fk_ingreso_torre2_idx` (`fkSalida`),
  CONSTRAINT `fk_ingreso_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `persona` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingreso_torre1` FOREIGN KEY (`fkEntrada`) REFERENCES `torre` (`_idTorre`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingreso_torre2` FOREIGN KEY (`fkSalida`) REFERENCES `torre` (`_idTorre`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingreso`
--

LOCK TABLES `ingreso` WRITE;
/*!40000 ALTER TABLE `ingreso` DISABLE KEYS */;
INSERT INTO `ingreso` VALUES (1,'2022-02-02 23:38:23','2022-02-01 17:42:13','UTP0140516',1,2),(2,'2022-02-02 06:38:23',NULL,'UTP0006096',2,NULL);
/*!40000 ALTER TABLE `ingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persona` (
  `matricula` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidoP` varchar(45) NOT NULL,
  `apellidoM` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `edad` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fotoUrl` varchar(100) NOT NULL,
  `telefonoPersona` varchar(45) NOT NULL,
  `contrasena` varchar(75) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `fechaIngreso` date NOT NULL,
  `fkTipoPersona` int(11) NOT NULL,
  PRIMARY KEY (`matricula`),
  KEY `fk_persona_tiposPersona1_idx` (`fkTipoPersona`),
  CONSTRAINT `fk_persona_tiposPersona1` FOREIGN KEY (`fkTipoPersona`) REFERENCES `tipospersona` (`_idTipos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES ('UTP0006096','Julio Andrei','Claudio','Domínguez','Hombre','22','utp0006096@alumno.utpuebla.edu.mx','https://sicea.utpuebla.edu.mx/control/fotos/aspirantes/6096.jpg','2225669899','5de6d27f6647d58bb624bd79ea4ed614099d028d4c84aec5b39d1b5b16ef719f',1,'2019-11-14',1),('UTP0140516','Jesús Antonio','Mena','De la rosa','Hombre','21','utp0140516@alumno.utpuebla.edu.mx','https://sicea.utpuebla.edu.mx/control/fotos/aspirantes/140516.jpg','2213425514','2d07d76e8d3767333d91aa48468876be948fafb7d818eb6c3e9248d4181552ea',1,'2019-11-14',2);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sintomas`
--

DROP TABLE IF EXISTS `sintomas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sintomas` (
  `_idSintoma` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSintomas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`nombreSintomas`)),
  PRIMARY KEY (`_idSintoma`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sintomas`
--

LOCK TABLES `sintomas` WRITE;
/*!40000 ALTER TABLE `sintomas` DISABLE KEYS */;
INSERT INTO `sintomas` VALUES (1,'[\"Contacto con una persona contagiada por COVID\", \"Ojos irritados\", \"Escalofríos\"]'),(2,'[\"Ninguna de las anteriores\"]');
/*!40000 ALTER TABLE `sintomas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuscovid`
--

DROP TABLE IF EXISTS `statuscovid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statuscovid` (
  `_idStatusCovid` int(11) NOT NULL AUTO_INCREMENT,
  `temperatura` decimal(5,1) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `fkPersona` varchar(45) NOT NULL,
  `fkSintomas` int(11) NOT NULL,
  PRIMARY KEY (`_idStatusCovid`),
  KEY `fk_statusCovid_persona1_idx` (`fkPersona`),
  KEY `fk_statusCovid_Sintomas1_idx` (`fkSintomas`),
  CONSTRAINT `fk_statusCovid_Sintomas1` FOREIGN KEY (`fkSintomas`) REFERENCES `sintomas` (`_idSintoma`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_statusCovid_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `persona` (`matricula`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuscovid`
--

LOCK TABLES `statuscovid` WRITE;
/*!40000 ALTER TABLE `statuscovid` DISABLE KEYS */;
INSERT INTO `statuscovid` VALUES (1,46.5,'2022-01-29','07:13:00','UTP0140516',1),(2,48.5,'2022-01-29','15:12:28','UTP0006096',2);
/*!40000 ALTER TABLE `statuscovid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipospersona`
--

DROP TABLE IF EXISTS `tipospersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipospersona` (
  `_idTipos` int(11) NOT NULL AUTO_INCREMENT,
  `tipoPersona` varchar(45) NOT NULL,
  PRIMARY KEY (`_idTipos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipospersona`
--

LOCK TABLES `tipospersona` WRITE;
/*!40000 ALTER TABLE `tipospersona` DISABLE KEYS */;
INSERT INTO `tipospersona` VALUES (1,'Alumno'),(2,'Docente'),(3,'visitante');
/*!40000 ALTER TABLE `tipospersona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torre`
--

DROP TABLE IF EXISTS `torre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `torre` (
  `_idTorre` int(11) NOT NULL AUTO_INCREMENT,
  `nombreTorre` varchar(45) NOT NULL,
  PRIMARY KEY (`_idTorre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torre`
--

LOCK TABLES `torre` WRITE;
/*!40000 ALTER TABLE `torre` DISABLE KEYS */;
INSERT INTO `torre` VALUES (1,'Principal'),(2,'Segunda'),(3,'Tercera');
/*!40000 ALTER TABLE `torre` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06 19:20:44
