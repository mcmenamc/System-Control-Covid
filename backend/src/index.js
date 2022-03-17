const app = require('./app')
const colors = require('colors');
require('./database');

// Server start
app.listen(app.get('port'),()=>{
    console.log('\n\n \tClick aquí -> ',colors.blue.underline(`http://localhost:${app.get('port')}/\n\n`));
})

