/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: accesos
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `accesos` (
  `_idAcceso` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `entradas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`entradas`)),
  `salidas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`salidas`)),
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idAcceso`),
  KEY `fk_acceso_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_acceso_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: empleados
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `empleados` (
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: estudiantes
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `estudiantes` (
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
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: personas
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `personas` (
  `_idPersona` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidoP` varchar(45) NOT NULL,
  `apellidoM` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  PRIMARY KEY (`_idPersona`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: sintomas
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `sintomas` (
  `_idSintoma` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSintomas` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`nombreSintomas`)),
  PRIMARY KEY (`_idSintoma`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: statuscovid
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `statuscovid` (
  `_idStatusCovid` int(11) NOT NULL AUTO_INCREMENT,
  `temperatura` decimal(5, 1) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `fkSintomas` int(11) NOT NULL,
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idStatusCovid`),
  KEY `fk_statusCovid_sintomas1_idx` (`fkSintomas`),
  KEY `fk_statusCovid_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_statusCovid_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_statusCovid_sintomas1` FOREIGN KEY (`fkSintomas`) REFERENCES `sintomas` (`_idSintoma`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: tabla1
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tabla1` (`Id` int(11) DEFAULT NULL) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: tipoempleado
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tipoempleado` (
  `_idTipos` int(11) NOT NULL AUTO_INCREMENT,
  `tipoEmpleado` varchar(45) NOT NULL,
  PRIMARY KEY (`_idTipos`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: visitantes
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `visitantes` (
  `_idVisitante` int(11) NOT NULL AUTO_INCREMENT,
  `destino` varchar(45) NOT NULL,
  `observaciones` varchar(45) DEFAULT NULL,
  `fkPersona` int(11) NOT NULL,
  PRIMARY KEY (`_idVisitante`),
  KEY `fk_visitantes_persona1_idx` (`fkPersona`),
  CONSTRAINT `fk_visitantes_persona1` FOREIGN KEY (`fkPersona`) REFERENCES `personas` (`_idPersona`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: accesos
# ------------------------------------------------------------

INSERT INTO
  `accesos` (
    `_idAcceso`,
    `fecha`,
    `entradas`,
    `salidas`,
    `fkPersona`
  )
VALUES
  (
    1,
    '2022-02-10',
    '[\r\n    {\r\n        \"hora\": \"07:53:05\",\r\n        \"entrada\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:20:03\",\r\n        \"entrada\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:20:03\",\r\n        \"entrada\": \"Tercera\"\r\n    }\r\n]',
    '[\r\n    {\r\n        \"hora\": \"10:00\",\r\n        \"salida\": \"Principal\"\r\n    },\r\n    {\r\n        \"hora\": \"10:05\",\r\n        \"salida\": \"Segunda\"\r\n    },\r\n    {\r\n        \"hora\": \"12:59\",\r\n        \"salida\": \"Tercera\"\r\n    }\r\n]',
    1
  );
INSERT INTO
  `accesos` (
    `_idAcceso`,
    `fecha`,
    `entradas`,
    `salidas`,
    `fkPersona`
  )
VALUES
  (
    2,
    '2022-02-10',
    '[\r\n    {\r\n        \"hora\": \"07:53:05\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n',
    '[\r\n    {\r\n        \"hora\": \"09:15:05\",\r\n        \"salida\": \"Principal\"\r\n    }\r\n]\r\n',
    2
  );
INSERT INTO
  `accesos` (
    `_idAcceso`,
    `fecha`,
    `entradas`,
    `salidas`,
    `fkPersona`
  )
VALUES
  (
    3,
    '2022-02-10',
    '[\r\n    {\r\n        \"hora\": \"09:20:03\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n',
    '[\r\n    {\r\n        \"hora\": \"09:20:03\",\r\n        \"salida\": \"Principal\"\r\n    }\r\n]\r\n',
    5
  );
INSERT INTO
  `accesos` (
    `_idAcceso`,
    `fecha`,
    `entradas`,
    `salidas`,
    `fkPersona`
  )
VALUES
  (
    4,
    '2022-02-10',
    '[\r\n    {\r\n        \"hora\": \"07:05:03\",\r\n        \"entrada\": \"Principal\"\r\n    }\r\n]\r\n\r\n',
    NULL,
    9
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: empleados
# ------------------------------------------------------------

INSERT INTO
  `empleados` (
    `matricula`,
    `fotoUrl`,
    `email`,
    `contrasena`,
    `fkPersona`,
    `fkTipoEmpleado`
  )
VALUES
  (
    'UTP1',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FEmpleados%2F1.webp?alt=media&token=0d6ea3f7-145b-4e5c-9233-297cd4c10c0e',
    'arturo.romero@utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    2,
    2
  );
INSERT INTO
  `empleados` (
    `matricula`,
    `fotoUrl`,
    `email`,
    `contrasena`,
    `fkPersona`,
    `fkTipoEmpleado`
  )
VALUES
  (
    'UTP30',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FEmpleados%2F30.jpg?alt=media&token=1520b29b-d39b-4075-85b4-6730a2c376ae',
    'fabiano.rivera@utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    3,
    1
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: estudiantes
# ------------------------------------------------------------

INSERT INTO
  `estudiantes` (
    `matricula`,
    `fotoUrl`,
    `academia`,
    `area`,
    `cuatrimestre`,
    `status`,
    `email`,
    `contrasena`,
    `fkPersona`
  )
VALUES
  (
    'UTP001350',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F1350.webp?alt=media&token=07657be7-1aa1-4e3e-801a-1735f013cb4a',
    'Negocios',
    'Capital Humano',
    3,
    1,
    'utp01350@alumno.utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    7
  );
INSERT INTO
  `estudiantes` (
    `matricula`,
    `fotoUrl`,
    `academia`,
    `area`,
    `cuatrimestre`,
    `status`,
    `email`,
    `contrasena`,
    `fkPersona`
  )
VALUES
  (
    'UTP0140516',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F140516.jpg?alt=media&token=567ae47b-5692-4a9a-a8e9-663caf2888ff',
    'Tecnologías de la información',
    'Desarrollo de Software Multiplataforma',
    8,
    1,
    'utp0140516@alumno.utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    1
  );
INSERT INTO
  `estudiantes` (
    `matricula`,
    `fotoUrl`,
    `academia`,
    `area`,
    `cuatrimestre`,
    `status`,
    `email`,
    `contrasena`,
    `fkPersona`
  )
VALUES
  (
    'UTP024024',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F24024.jfif?alt=media&token=e3945321-dce6-4b33-94fa-14a602858e0a',
    'Tecnologías de la información',
    'Desarrollo de Software Multiplataforma',
    3,
    1,
    'utp0024024@alumno.utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    9
  );
INSERT INTO
  `estudiantes` (
    `matricula`,
    `fotoUrl`,
    `academia`,
    `area`,
    `cuatrimestre`,
    `status`,
    `email`,
    `contrasena`,
    `fkPersona`
  )
VALUES
  (
    'UTP025354',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F25354.jfif?alt=media&token=4302ba2e-9309-45c9-8cfa-15fb265de64b',
    'Negocios',
    'Capital Humano',
    6,
    1,
    'utp025354@alumno.utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    10
  );
INSERT INTO
  `estudiantes` (
    `matricula`,
    `fotoUrl`,
    `academia`,
    `area`,
    `cuatrimestre`,
    `status`,
    `email`,
    `contrasena`,
    `fkPersona`
  )
VALUES
  (
    'UTP0257637',
    'https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/fotos%2FAlumnos%2F257637.jfif?alt=media&token=3241ca7e-2717-4c1f-8107-6a58afe2406b',
    'Mecatrónica',
    'Sistema de Manufactura',
    6,
    1,
    'utp0257637@alumno.utpuebla.edu.mx',
    '$2a$10$4P21XOjuwCbxbJxWxSLWZ.DyqxbjOAlCbcctpXWhoiyQN5dMnZOca',
    8
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: personas
# ------------------------------------------------------------

INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    1,
    'Jesús Antonio',
    'Mena',
    'De la rosa',
    'Hombre',
    '2000-10-01'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    2,
    'Arturo',
    'Romero',
    'Avendaño',
    'Hombre',
    '2000-02-08'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    3,
    'Fabiano',
    'Rivera',
    'Rosas',
    'Hombre',
    '2001-02-08'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (4, 'María', 'Amaya ', 'Padrón', 'Mujer', '1999-07-07');
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    5,
    'Guadalupe',
    'Lopez',
    'Jose',
    'Mujer',
    '1998-12-20'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (6, 'Lucero', 'Cruz', 'Garcia', 'Mujer', '2002-10-05');
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    7,
    'Bibiana',
    'valdés',
    'viviros',
    'Mujer',
    '2002-12-25'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    8,
    'Mario',
    'Guzmán',
    'Sánches',
    'Hombre',
    '1999-02-21'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    9,
    'Carlos',
    'Herrera',
    'villa',
    'Hombre',
    '2000-03-04'
  );
INSERT INTO
  `personas` (
    `_idPersona`,
    `nombre`,
    `apellidoP`,
    `apellidoM`,
    `sexo`,
    `fechaNacimiento`
  )
VALUES
  (
    10,
    'Abraham',
    'Padilla',
    'Vargas',
    'Hombre',
    '2001-05-20'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: sintomas
# ------------------------------------------------------------

INSERT INTO
  `sintomas` (`_idSintoma`, `nombreSintomas`)
VALUES
  (
    1,
    '[\"Pérdida del olfato\", \"Pérdida del gusto\", \"Contacto con una persona contagiada por COVID\", \"Dolor de articulaciones\"]'
  );
INSERT INTO
  `sintomas` (`_idSintoma`, `nombreSintomas`)
VALUES
  (2, '[\"Ninguna de las anteriores\"]');
INSERT INTO
  `sintomas` (`_idSintoma`, `nombreSintomas`)
VALUES
  (3, '[\"Fiebre\", \"Tos\"]');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: statuscovid
# ------------------------------------------------------------

INSERT INTO
  `statuscovid` (
    `_idStatusCovid`,
    `temperatura`,
    `fecha`,
    `hora`,
    `fkSintomas`,
    `fkPersona`
  )
VALUES
  (1, 46.5, '2022-02-10', '07:13:00', 3, 1);
INSERT INTO
  `statuscovid` (
    `_idStatusCovid`,
    `temperatura`,
    `fecha`,
    `hora`,
    `fkSintomas`,
    `fkPersona`
  )
VALUES
  (2, 47.5, '2022-02-10', '09:15:05', 1, 9);
INSERT INTO
  `statuscovid` (
    `_idStatusCovid`,
    `temperatura`,
    `fecha`,
    `hora`,
    `fkSintomas`,
    `fkPersona`
  )
VALUES
  (3, 46.2, '2022-02-11', '09:15:05', 2, 10);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: tabla1
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: tipoempleado
# ------------------------------------------------------------

INSERT INTO
  `tipoempleado` (`_idTipos`, `tipoEmpleado`)
VALUES
  (1, 'Administrador');
INSERT INTO
  `tipoempleado` (`_idTipos`, `tipoEmpleado`)
VALUES
  (2, 'Docente');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: visitantes
# ------------------------------------------------------------

INSERT INTO
  `visitantes` (
    `_idVisitante`,
    `destino`,
    `observaciones`,
    `fkPersona`
  )
VALUES
  (1, 'SICE', 'Información de inscripciones ', 4);
INSERT INTO
  `visitantes` (
    `_idVisitante`,
    `destino`,
    `observaciones`,
    `fkPersona`
  )
VALUES
  (2, 'Biblioteca', NULL, 5);
INSERT INTO
  `visitantes` (
    `_idVisitante`,
    `destino`,
    `observaciones`,
    `fkPersona`
  )
VALUES
  (3, 'SICE', NULL, 6);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
