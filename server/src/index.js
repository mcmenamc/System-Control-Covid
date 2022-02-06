const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express(); // inicializar express
const colors = require('colors');
// setting environment variables
require('dotenv').config({
    path: `${process.env.NODE_ENV === 'development' ? path.join(__dirname, '../../.env.development') : path.join(__dirname, '../../.env.production')}`,
});
app.set('port', process.env.PORT);

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Client render
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Routes
app.use(require('./routes/index.router'));

// Server start
app.listen(app.get('port'),()=>{
    console.log('\n\n \tClick aquí -> ',colors.blue.underline(`http://localhost:${app.get('port')}/\n\n`));
})

