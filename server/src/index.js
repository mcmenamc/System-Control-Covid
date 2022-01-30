const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use(require('./routes/index.router'));

app.listen(port,()=>{
    console.log("Server on port " + port);
})


