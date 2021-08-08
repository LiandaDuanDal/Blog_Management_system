// import mongoose package
const mongoose = require('mongoose');
// connect
mongoose.connect('mongodb://localhost/blog')
    .then(() => { console.log('connected to the databaese') })
    .catch(() => { console.log('Fail to connect to the databaese') })
