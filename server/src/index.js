const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const path = require('path');
app.set('port', process.env.PORT || 3000);

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
    console.log("Server on port " + app.get('port'));
})


