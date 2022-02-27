const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const mysqldump = require('mysqldump');

cron.schedule("* * * January,March Sunday", async () => {
    await createdBackup();
});


const createdBackup = async () => {
    const dirpath = path.join(__dirname, '../../backupdb/');
    if (!fs.existsSync(dirpath)) {
        await fs.mkdirSync(dirpath, { recursive: true });
    }
    await getBackup(dirpath);
};

const getBackup = async (file) => {
    const fileName = `${Date.now()}.sql`;
    const filePath = file + fileName;

    await mysqldump({
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
        },
        dumpToFile: filePath,
    });
};
