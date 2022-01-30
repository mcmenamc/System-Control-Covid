CREATE DATABASE covid;
USE covid;

CREATE TABLE alumnos(
    matricula VARCHAR(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    division VARCHAR(50) NOT NULL,
    programaEducativo INT NOT NULL,
    fechaIngreso DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    edad INT NOT NULL
);

CREATE TABLE sintomas(
    _idSintoma INT NOT NULL AUTO_INCREMENT PRIMARY KEY(_idSintoma),
    sintoma VARCHAR(50) NOT NULL
);
 
CREATE TABLE torre(
    _idTorre INT NOT NULL AUTO_INCREMENT PRIMARY KEY(idTorre),
    torre VARCHAR(50) NOT NULL
);

CREATE TABLE ingreso(
    _idIngreso INT NOT NULL AUTO_INCREMENT PRIMARY KEY(idIngreso),
    fkentrada INT,
    fksalida INT
);

CREATE TABLE statusCovid(
    _idStatus INT NOT NULL AUTO_INCREMENT PRIMARY KEY(idStatus),
    temperatura DECIMAL(2,1) NOT NULL,
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    hora TIME NOT NULL DEFAULT CURRENT_TIME,
    fkMatricula INT NOT NULL,
    fkingreso INT NOT NULL,
    FOREIGN KEY(fkMatricula) REFERENCES alumnos(matricula),
    FOREIGN KEY(fkingreso) REFERENCES ingreso(idIngreso)
);
