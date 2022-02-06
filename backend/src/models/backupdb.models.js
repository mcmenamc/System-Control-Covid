const fs = require('fs');
const path = require('path');

// const exec = require('child_process').exec;

const createdBackup = async (result) => {
    try {
            if (!fs.existsSync(path.join(__dirname,'../../backupdb/'))){
            await fs.mkdirSync(path.join(__dirname,'../../backupdb/'), { recursive: true });
            }
            // else{
            //     result(null, 'La carpeta ya existe');
            // }
            // const child = exec('mysqldump -u root -p sistemacontrolcovid >  '+ path.join(__dirname,'../../backupdb/dwdwdw.sql'), (error, stdout, stderr) => {
            //     if (error) {
            //         result(error, null);
            //     }
            //     else{
            //         result(null, child);
            //     }

            // });
            result(null, "Carpeta file creada");
        }
         catch (error) {
        result(error, null);
      }
    


};


module.exports = {
    createdBackup
};