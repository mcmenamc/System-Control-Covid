const mongose = require('mongoose');
const URI = process.env.MONGO_URI;

mongose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.error(error));
