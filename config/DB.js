const mongoose = require('mongoose');

const DB = () => {
    try {
        mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }, () => console.log('connected to DB'))
    } catch (e) {
        console.log('error in mongodb connection');
    }
}
module.exports = DB