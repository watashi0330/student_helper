const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: Number,
    name: String,
    desc: String,
    laborant_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    picture: String
})

const Lab = mongoose.model('Lab', schema);
module.exports = Lab;