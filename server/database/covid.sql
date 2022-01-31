

CREATE TABLE alumnos(
    matricula VARCHAR(20) NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    division VARCHAR(50) NOT NULL,
    programaEducativo VARCHAR(50) NOT NULL,
    fechaIngreso DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    edad INT(5) NOT NULL,
    activo BOOLEAN NOT NULL
);

 
CREATE TABLE torre(
    _idTorre INT(15) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    torre VARCHAR(50) NOT NULL
);

CREATE TABLE ingreso(
    _idIngreso INT(15) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fkentrada INT(15),
    fksalida INT(15),
    FOREIGN KEY (fkentrada) REFERENCES torre(_idTorre),
    FOREIGN KEY (fksalida) REFERENCES torre(_idTorre)
);


CREATE TABLE statusCovid(
    _idStatus INT(15) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    temperatura DECIMAL(5,3) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    sintomas JSON NOT NULL,
    fkMatricula VARCHAR(20) NOT NULL,
    fkingreso INT(15) NOT NULL,
    FOREIGN KEY(fkMatricula) REFERENCES alumnos(matricula),
    FOREIGN KEY(fkingreso) REFERENCES ingreso(_idIngreso)
);


INSERT INTO `alumnos` (`matricula`, `nombre`, `division`, `programaEducativo`, `fechaIngreso`, `email`, `telefono`, `sexo`, `edad`, `activo`) VALUES ('UTP0140516', 'Jesus Antonio Mena De la rosa ', 'Tecnologías de la información ', 'Desarrollo de Software Multiplataforma ', '2019-09-01', 'mcmena636@gmail.com', '2213425514', 'Hombre', '21', '1');