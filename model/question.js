const mongoose = require('mongoose');
const { objectId } = require('mongoose');
const questionSchema = new mongoose.Schema({
    question: {
        type: String
    },
option:[{
    text:Array,
  
}]

})
module.exports = mongoose.model('question', questionSchema)