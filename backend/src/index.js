const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
// const history = require('connect-history-api-fallback');
const app = express(); // inicializar express
const mysqldump = require('./models/backupdb.models');

// setting environment variables
require('dotenv').config();
app.set('port', process.env.PORT);

// Middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use(require('./routes/index.router'));
app.use('/api', require('./routes/index'))

// mysqldump backup db con cron job en el backend 
mysqldump;

// Middlewares para Vue.js router modo history

// app.use(history()); // 
// Client render
// app.use(express.static(path.join(__dirname, './views/client')));

// Server start
app.listen(app.get('port'),()=>{
    console.log('\n\n \tClick aquí -> ',colors.blue.underline(`http://localhost:${app.get('port')}/\n\n`));
})

