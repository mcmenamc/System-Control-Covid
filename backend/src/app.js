const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('./libs/initialsetup');
// inicializar express
const app = express();

const pkg = require('../package.json');
// setting environment variables    
require('dotenv').config();
app.set('port', process.env.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        name: pkg.name,
        author: pkg.author,
        description: pkg.description,
        version: pkg.version
    });
});

// Routes
app.use('/api', require('./routes/index'))

module.exports = app;