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
-- Table structure for table `accesos`
--

DROP TABLE IF EXISTS `accesos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accesos` (
  `_idAcceso` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `entradas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`entradas`)),
  `salidas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`salidas`)),
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idAcceso`),
  KEY `fk_acceso_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_acceso_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accesos`
--

LOCK TABLES `accesos` WRITE;
/*!40000 ALTER TABLE `accesos` DISABLE KEYS */;
INSERT INTO `accesos` VALUES (1,'2022-02-10','[\r\n    {\r\n        \"hora\": \"07:53:05\",\r\n        \"entrada\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:20:03\",\r\n        \"entrada\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:20:03\",\r\n        \"entrada\": \"Tercera\"\r\n    }\r\n]','[\r\n    {\r\n        \"hora\": \"10:00\",\r\n        \"salida\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:05\",\r\n        \"salida\": \"Segunda\"\r\n    },\r\n    {\r\n        \"hora\": \"12:59\",\r\n        \"salida\": \"Tercera\"\r\n    }\r\n]',1),(2,'2022-02-10','[\r\n    {\r\n        \"hora\": \"07:53:05\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n','[\r\n    {\r\n        \"hora\": \"09:15:05\",\r\n        \"salida\": \"Principal\"\r\n    }\r\n]\r\n',2),(3,'2022-02-10','[\r\n    {\r\n        \"hora\": \"09:20:03\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n','[\r\n    {\r\n        \"hora\": \"09:20:03\",\r\n        \"salida\": \"Principal\"\r\n    }\r\n]\r\n',5),(4,'2022-02-10','[\r\n    {\r\n        \"hora\": \"07:05:03\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n\r\n',NULL,9);
/*!40000 ALTER TABLE `accesos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `matricula` varchar(45) NOT NULL,
  `fotoUrl` text NOT NULL,
  `email` varchar(55) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `fkPersona` int(11) NOT NULL,
  `fkTipoEmpleado` int(11) NOT NULL,
  PRIMARY KEY (`matricula`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_empleados_tipoEmpleado1_idx` (`fkTipoEmpleado`),
  KEY `fk_empleados_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_empleados_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_empleados_tipoEmpleado1` FOREIGN KEY (`fkTipoEmpleado`) REFERENCES `tipoempleado` (`_idTipos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES ('UTP1','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FEmpleados%2F1.webp?alt=media&token=0d6ea3f7-145b-4e5c-9233-297cd4c10c0e','arturo.romero@utpuebla.edu.mx','8a67b9a136520edf23e38d1883352892d7fb9fc78d18e46e5c57c51d62086a08',2,2),('UTP30','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FEmpleados%2F30.jpg?alt=media&token=1520b29b-d39b-4075-85b4-6730a2c376ae','fabiano.rivera@utpuebla.edu.mx','ced34a01165563b096d2644ebaeddecafe0e1d49f3b71ce49e4cc608d1723a0c',3,1);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudiantes` (
  `matricula` varchar(20) NOT NULL,
  `fotoUrl` text NOT NULL,
  `academia` varchar(45) NOT NULL,
  `area` varchar(45) NOT NULL,
  `cuatrimestre` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `email` varchar(55) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`matricula`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_estudiantes_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_estudiantes_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estudiantes`
--

LOCK TABLES `estudiantes` WRITE;
/*!40000 ALTER TABLE `estudiantes` DISABLE KEYS */;
INSERT INTO `estudiantes` VALUES ('UTP001350','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F1350.webp?alt=media&token=07657be7-1aa1-4e3e-801a-1735f013cb4a','Negocios','Capital Humano',3,1,'utp01350@alumno.utpuebla.edu.mx','81a18f70d07e5fbf38e4aef1b4982806f2b8b32eb06b623b89aea3dfe060a616',7),('UTP0140516','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F140516.jpg?alt=media&token=567ae47b-5692-4a9a-a8e9-663caf2888ff','Tecnologías de la información','Desarrollo de Software Multiplataforma',8,1,'utp0140516@alumno.utpuebla.edu.mx','eb56f6a061ff2fb9041c99e02390969c9212a3b329f975a53f5d9cf58c238b93',1),('UTP024024','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F24024.jfif?alt=media&token=e3945321-dce6-4b33-94fa-14a602858e0a','Tecnologías de la información','Desarrollo de Software Multiplataforma',3,1,'utp0024024@alumno.utpuebla.edu.mx','ac9c2c34c9f7ad52528c3422af40a66e2e24aaf2a727831255413c9470158984',9),('UTP025354','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F25354.jfif?alt=media&token=4302ba2e-9309-45c9-8cfa-15fb265de64b','Negocios','Capital Humano',6,1,'utp025354@alumno.utpuebla.edu.mx','55f129ee073e770516f3301d2e413b97fcb49c5f40bc21faeed58a5febfb662c',10),('UTP0257637','https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F257637.jfif?alt=media&token=3241ca7e-2717-4c1f-8107-6a58afe2406b','Mecatrónica','Sistema de Manufactura',6,1,'utp0257637@alumno.utpuebla.edu.mx','6b500f0e9bc28ea48b8f85c115f84d233c329f46d46b84b9dcf32fc4ea01d981',8);
/*!40000 ALTER TABLE `estudiantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personas` (
  `_idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidoP` varchar(45) NOT NULL,
  `apellidoM` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  PRIMARY KEY (`_idPersona`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES (1,'Jesus Antonio','Mena','De la rosa','Hombre','2000-10-01'),(2,'Arturo','Romero','Avendaño','Hombre','2000-02-08'),(3,'Fabiano','Rivera','Rosas','Hombre','2001-02-08'),(4,'María','Amaya ','Padrón','Mujer','1999-07-07'),(5,'Guadalupe','Lopez','Jose','Mujer','1998-12-20'),(6,'Lucero','Cruz','Garcia','Mujer','2002-10-05'),(7,'Bibiana','valdés','viviros','Mujer','2002-12-25'),(8,'Mario','Guzmán','Sánches','Hombre','1999-02-21'),(9,'Carlos','Herrera','villa','Hombre','2000-03-04'),(10,'Abraham','Padilla','Vargas','Hombre','2001-05-20');
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sintomas`
--

LOCK TABLES `sintomas` WRITE;
/*!40000 ALTER TABLE `sintomas` DISABLE KEYS */;
INSERT INTO `sintomas` VALUES (1,'[\"Pérdida del olfato\", \"Pérdida del gusto\", \"Contacto con una persona contagiada por COVID\", \"Dolor de articulaciones\"]'),(2,'[\"Ninguna de las anteriores\"]'),(3,'[\"Fiebre\", \"Tos\"]');
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
  `fkSintomas` int(11) NOT NULL,
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idStatusCovid`),
  KEY `fk_statusCovid_sintomas1_idx` (`fkSintomas`),
  KEY `fk_statusCovid_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_statusCovid_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_statusCovid_sintomas1` FOREIGN KEY (`fkSintomas`) REFERENCES `sintomas` (`_idSintoma`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuscovid`
--

LOCK TABLES `statuscovid` WRITE;
/*!40000 ALTER TABLE `statuscovid` DISABLE KEYS */;
INSERT INTO `statuscovid` VALUES (1,46.5,'2022-02-10','07:13:00',3,1),(2,47.5,'2022-02-10','09:15:05',1,9),(3,46.2,'2022-02-11','09:15:05',2,10);
/*!40000 ALTER TABLE `statuscovid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoempleado`
--

DROP TABLE IF EXISTS `tipoempleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipoempleado` (
  `_idTipos` int(11) NOT NULL AUTO_INCREMENT,
  `tipoEmpleado` varchar(45) NOT NULL,
  PRIMARY KEY (`_idTipos`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoempleado`
--

LOCK TABLES `tipoempleado` WRITE;
/*!40000 ALTER TABLE `tipoempleado` DISABLE KEYS */;
INSERT INTO `tipoempleado` VALUES (1,'Administrador'),(2,'Docente');
/*!40000 ALTER TABLE `tipoempleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitantes`
--

DROP TABLE IF EXISTS `visitantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visitantes` (
  `_idVisitante` int(11) NOT NULL AUTO_INCREMENT,
  `destino` varchar(45) NOT NULL,
  `observaciones` varchar(45) DEFAULT NULL,
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idVisitante`),
  KEY `fk_visitantes_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_visitantes_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitantes`
--

LOCK TABLES `visitantes` WRITE;
/*!40000 ALTER TABLE `visitantes` DISABLE KEYS */;
INSERT INTO `visitantes` VALUES (1,'SICE','Información de inscripciones ',4),(2,'Biblioteca',NULL,5),(3,'SICE',NULL,6);
/*!40000 ALTER TABLE `visitantes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-10  2:07:47
