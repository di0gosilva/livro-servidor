const mongoose = require('mongoose');

const options = {
    dbName: 'livraria',
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect('mongodb://diogo:mongodbEstacio@127.0.0.1:27017/?authMechanism=DEFAULT&directConnection=true', options);

module.exports = mongoose;