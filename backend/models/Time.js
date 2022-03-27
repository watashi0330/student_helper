const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    lab: Number,
    time_number: Number,
    day_number: Number,
    order_limit: Number,
})

const Time = mongoose.model('Time', schema);
module.exports = Time;