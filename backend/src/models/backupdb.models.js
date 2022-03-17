const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const mysqldump = require('mysqldump');
//Importamos los módulos  a utilizar

cron.schedule("* * * January,March Sunday", async () => { // Ejecuta cada semana en el domingo de enero y marzo a las 12:00 
    await createdBackup(); // Ejecutar la funcion createdBackup
});

const createdBackup = async () => { 
    const dirpath = path.join(__dirname, '../../backupdb/'); // Almacenar en la carpeta backupdb
    if (!fs.existsSync(dirpath)) { // Si no existe la carpeta
        await fs.mkdirSync(dirpath, { recursive: true }); // Creala
    }
    await getBackup(dirpath); // Ejecutar la funcion getBackup
};

const getBackup = async (file) => {
    const fileName = `${Date.now()}.sql`;
    const filePath = file + fileName; // Ruta del archivo con la fecha actual en milisegundos y .sql

    await mysqldump({ // Ocupar la libreria mysqldump para crear la copia de seguridad
        connection: { // conexion a la base de datos
            host: process.env.DB_HOST, // Host
            user: process.env.DB_USER, // Usuario
            password: process.env.DB_PASS, // Contraseña
            port: process.env.DB_PORT, // Puerto
            database: process.env.DB_NAME, // Nombre de la base de datos
        },
        dumpToFile: filePath, // Ruta de salida del archivo
    });
};
