const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sisi_id: String,
    password: String,
    first_name: String,
    last_name: String,
    role: {
        type: String,
        enum: ['admin', 'student', 'laborant'],
        required: true,
    },
    email: String,
    picture: String,
})

const User = mongoose.model('User', schema);
module.exports = User;