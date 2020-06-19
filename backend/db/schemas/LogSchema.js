const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    userName:{
        type: String,
        index: true
    },
    text:{
        type: String,
        index: true
    },
    hour:{
        type: String,
    },
    logDay:{
        type: String,
    },
    date:{
        type: Date,
        index: true
    }
});
LogSchema.index()
module.exports = mongoose.model('logSchema', LogSchema)