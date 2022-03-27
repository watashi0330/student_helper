const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    resource: String,
})

const Lesson = mongoose.model('Lesson', schema);
module.exports = Lesson;