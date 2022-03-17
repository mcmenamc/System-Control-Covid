const mongose = require('mongoose');

mongose.connect('mongodb://localhost/sistemacontrolcovid',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.error(error));
